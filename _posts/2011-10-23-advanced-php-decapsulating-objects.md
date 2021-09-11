---
id: 2611
title: 'Advanced PHP: Decapsulating Objects'
date: 2011-10-23T12:48:30+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=2611
permalink: /blog/advanced-php-decapsulating-objects/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2011/10/encapsulation.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:2624;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
tags:
  - Decapsulator
  - Mehtod
  - OOP
  - PHP
  - Private
  - Property
  - Protected
  - Static
  - Test
---
In the past I had a reoccurring problems during testing.

I wanted to access protected or private methods of Objects from the outside, in order to test them in isolation. On other occasions I wanted to check if the internal state of a object was affected by my test.

I took several approaches to the problem and I finally found a nice solution.

<div id="attachment_2614" style="width: 650px" class="wp-caption alignnone">
  <img aria-describedby="caption-attachment-2614" src="/assets/2011/10/2839948784_20a29a080e_z.jpg" title="Accessing protected stuff" width="606" />

  <p id="caption-attachment-2614" class="wp-caption-text">
    Bild "Canis Lupus" von Joriel "Joz" Jimenez (CC BY-NC-ND 2.0)
  </p>
</div>

## The fools approach

The fool&#8217;s approach would be to remove the private or protected keywords from the classes. It might work well if you are the only programmer in a project and are sure that you can remember what you did last year. I can&#8217;t and I am no fan of this.

These keywords are used for a good reason: You want to avoid interference from the outside and let the Object be master over its internal state.

## The manual approach

Another aproach is to extend the class, change the method-declaration to be public and point to the parent-class.

[php]
class Subject
{
protected function fooBar($abc){}
}

class Mock_Subject
{
public function fooBar($abc)
{
return parent::fooBar($abc);
}
}
[/php]

This works fine. Its a decent solution for testing one class - though it has problems:

  * You have to duplicate every protected method declaration
  * The code is very specific to the subject in question
  * The tests get longer and longer
  * Knowledge about how the methods look like is in the `Mock_Subject` class as well and if you want to change a method you have to touch 2 classes
  * You can only test protected function but not private ones

I tried to take this road and in general it works fine. The biggest problem was really that it bloated my tests and I got very impatient, because I felt that creating these Mock-Classes was completely uninteresting work.

Since I am a lazy guy I really wanted something else.

## The Reflection approach

A Google search came up with another suggestion. Since PHP 5.3 we can reflect on Objects and Classes and access protected properties and methods.

[php]
class Subject
{
private function fooBar()
{
return "foobar";
}
}

$subject = new Subject();
$reflector = new ReflectionObject($subject);
$method = $reflector->getMethod("fooBar")
$method->setAccessible(true);
$result = $method->invoke($subject);
echo $result;
[/php]

This works just fine. Though of course its quite verbose. I didn&#8217;t want to go this road, because I thought that this might make my tests even more complicated.

## The &#8222;Decapsulator&#8220; approach

I sticked with my Mock classes. But yesterday it dawned on me that there might be a very simple general concept. I realized that it is possible to write a nice Class that can decapsulate objects and act as a proxy between the object and my tests.

The api looks a lot like accessing the real object:

[php]
class Subject
{
private $foobar = "hello";
}

$proxy = new Proxy(new Subject());
echo $proxy->foobar;
[/php]

Quite nice. And reusable.

## The implementation

How did I achieved it? Basically I combined the magic method `__get()`, `__set()`, `__call()`, `__callStatic()` with the Reflection API.

The magic methods intercept the calls to the object, and the Decapsulator tries to forwards it to the Subject, using the Reflection API.

[php]
class Decapsulator
{
private $subject;
public function __construct($subject)
{
$this->subject = $subject;
}

public function __get($name)
{
$reflector = new ReflectionObject($subject);
$property= $reflector->getProperty($name)
$property->setAccessible(true);
return $property->getValue($subject);
}
}
[/php]

The rest of the class follows the same scheme.

The end result looks like this:

[php]
<?php
class Decapsulator
{
private $subject;
private $reflector;

public function __construct($subject)
{
$this->subject = $subject;
$this->reflector = new ReflectionObject($this->subject);
}

public function __set($name, $value)
{
try{
$this->setProperty($name, $value);
}
catch(ReflectionException $e)
{
$this->subject->$name = $value;
}
}

public function __get($name)
{
try{
return $this->getProperty($name);
}
catch(ReflectionException $e)
{
return NULL;
}
}

public function __call($name, $params)
{
return $this->callMethod($name, $params);
}

public function setStatic($name, $value)
{
$this->setProperty($name, $value);
}

public function getStatic($name)
{
return $this->getProperty($name);
}

public function callStatic($name, $params=array())
{
return $this->callMethod($name, $params);
}

/**
* Calls a method on $subject
* @param String $name of the method
* @param Array $params of the method
* @return mixed
*/
private function callMethod($name, $params)
{
$method = $this->reflector->getMethod($name);
$method->setAccessible(true);
$params = array_merge(array($this->subject), $params);
return call\_user\_func_array(array($method, "invoke"), $params);
}

/**
* Returns a property from $subject
* @param String $name of property
* @return mixed
*/
private function getProperty($name)
{
$property = $this->reflector->getProperty($name);
$property->setAccessible(true);
return $property->getValue($this->subject);
}

/**
* Sets a property on $subject
* @param String $name of property
* @param mixed $val to set it to
* @return void
*/
private function setProperty($name, $val)
{
$property = $this->reflector->getProperty($name);
$property->setAccessible(true);
return $property->setValue($this->subject, $val);
}
}
[/php]

Clearly this is not made for use in production or to fight against bad design - but I think it will be very handy for testing.

You can have a look at the complete code at GitHub <https://github.com/shostakovich/Decapsulator> (Feel free to fork it and add to it if you want)

As always I would be interested in your feedback. Are there better ways to decapsulate objects?
