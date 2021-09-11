---
id: 2157
title: Continous Integration with Hudson, GIT and Symfony
date: 2011-01-20T19:30:13+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=2157
permalink: /blog/continous-integration-with-hudson-git-and-symfony/
thumbnail:
  - http://c1952502.cdn.cloudfiles.rackspacecloud.com/2011/01/hudson_preview.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:2169;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - PHP 5
  - Webkram
  - Weiche Ware
tags:
  - Continous Integration
  - Doctrine
  - Hudson
  - Symfony
---
This week i&#8217;ve set up a continuos integration server for work. I&#8217;m quite amazed about it and how it will improved my future work.

<img loading="lazy" src="/assets/2011/01/hudson1.jpg" alt="hudson.jpg" title="hudson.jpg" border="0"   />

In this post I want to explain how I managed to set up Hudson, with GIT and Symfony1.4. If you want to know more about certain details off the procedure you might want to check out the links at the end off this post.

### Continous Integration?

For all the non tech-savvy readers off this blog follows a short explanation what this is all about: Whenever a programmer makes a change to a piece off software, there is the risk off introducing unintended side-effects and introducing problems that you never dreamed about. Writing bug-free software is nearly impossible but there are good strategies to find quite a few off them, before they make it into the live version.

Whenever we produce a piece of software is to write some tests to ensure that its working. These tests can be executed in an automated fashion.

While the product grows more and more tests are created and you end up with a suite off tests, that you can run each and every time you change something in the source code.

Unfortunately there are certain problems that occur:

  * The more tests you have the longer they take to run
  * (Good) Programmers are lazy people and don&#8217;t want to do the same stuff over and over again

Thats where Continuos Integration comes into play.

Continuos Integration means that whenever a member off the team produces a new chunk off code a tool builds the whole program and runs the whole suite off tests. If the tests fail - it complains.

This way, after a hard working-day you can be certain, that its very unlikely that you introduced horrible new bugs affecting other parts off the system. And if you made a mistake - well, at least you know when it occurred and its quite likely that you find an easy solution.

### Hudson, Symfony and git

I found a great tutorial in the internet that showed me part off the solution. The rests I had to lean the hard way. That&#8217;s why I decided to share with you, how i installed the whole thing.

#### Basic installation

I started on an Ubuntu machine.

Hudon can be obtained via apt-get. Pretty simple 🙂

  * wget -q -O - http://pkg.hudson-labs.org/debian/hudson-labs.org.key | sudo apt-key add -
  * sudo echo &#8222;deb http://pkg.hudson-labs.org/debian binary/&#8220; > /etc/apt/sources.list.d/hudson
  * sudo aptitude update
  * sudo aptitude install hudson

Tada - Hudson runs off port 8080!!

#### Securing Hudson

This was, well, the tricky part I managed to lock myself out two(!!!!) times. Quite frustrating - but if you know what you do its actually simple.

<img loading="lazy" src="/assets/2011/01/hudson.jpg" alt="securing hudson" title="hudson.jpg" border="0"   />

If you DO manage to lock yourself out - go and edit /var/lib/hudson/config.xml and set <useSecurity>true</useSecurity> to false - good luck!

#### Installation off the GIT plugin

  * Goto http://hostname:8080/pluginManager/available
  * Search for git
  * Install the &#8222;Hudson GIT plugin&#8220;
  * Hudson will restart

#### Setting up the project

<img loading="lazy" src="/assets/2011/01/hudson_create_project.jpg" alt="hudson_create_project.jpg" title="hudson_create_project.jpg" border="0"   />

Give your project a name and select &#8222;Build a free-style software project

<img loading="lazy" src="/assets/2011/01/projects_setup_1.jpg" alt="projects_setup_1.jpg" title="projects_setup_1.jpg" border="0"   />

Now configure git. Notice that for github its NOT sufficent to just copy the clone url. You have to alter the URI a little bit. Something like **ssh://git@github.com/UserAccount/ProjectName.git** will do. Then enter the branch. In my case I use the **integration** branch.

In order for git to work you will also have to create a pair off new ssh-keys and add them into the ~/.ssh/ folder of the user hudson. After that upload your public key to github - remember you&#8217;ve done this once. So you&#8217;ll probably manage to do it without further details 😉

Then you will have to configure git. Use:

`<br />
$ sudo su hudson<br />
$ git config --global user.name "Mister Default"<br />
$ git config --global user.email "yout@email.com"<br />
`

<img loading="lazy" src="/assets/2011/01/build_triggers.jpg" alt="build_triggers.jpg" title="build_triggers.jpg" border="0"   />

Now enter **5,20,35,50 \* \* *** to Build Periodically and **0,15,35,45 \* \* *** into Poll SCM. This will pull your branch every 15 minutes and start a build 5 minutes later. Feel free to come up with something better here 😉

<img loading="lazy" src="/assets/2011/01/build_steps.jpg" alt="build_steps.jpg" title="build_steps.jpg" border="0"   />

Now we have to enter the steps necessary to create a new database, compile the model, filters and forms, load some test-data, execute the test and export the results into an xml-file. This sounds easy, but it took me a while to get this working.

  * rm $WORKSPACE/config/databases.yml
  * php $WORKSPACE/symfony configure:database -name=doctrine -class=sfDoctrineDatabase &#8222;mysql:host=localhost;dbname=myproject&#8220; dbuser dbpass
  * php $WORKSPACE/symfony doctrine:build -all -no-confirmation
  * php $WORKSPACE/symfony doctrine:data-load
  * php $WORKSPACE/symfony test:all -xml=log/build.xml

**Note:** You will a running MySQL Database and (probably) you will need to export a database with **php symfony doctrine:data-dump** to have some test data (eg) categories.

<img loading="lazy" src="/assets/2011/01/post_build_actions.jpg" alt="post_build_actions.jpg" title="post_build_actions.jpg" border="0"   />

Last but not least: Hint Hudson to the results and turn on Notifications. If you feel like it enable your Nabaztag 😉 (after downloading the plugin)

#### Finally:

Hit Build now and see what happens. If the build fails, select it in the Build History and have a look at the console output and fix the problem. If you find its a problem with this description - leave me a comment. If it works - leave me a comment.

### Lesson&#8217;s learned

This took quite long. Each and every single step is quite logical - but figuring out the combination was frustrating. It took me 3 hours to get the whole thing to work.

If Hudson will be a great help? Well lets see. After some days of using it I am quite pleased. For example it discovered some issues, that the tests on my MacBook did not uncover. Had something to do with case-sensitive vs. case-insensitive filesystems. I might actually become an even better programmer.. PLUS: Its a good feeling to have an objective, continuos indicator of ones work&#8217;s quality.

### Links

  * [Hudson](http://hudson-ci.org/)
  * [Installing Hudson on Ubuntu](http://wiki.hudson-ci.org/display/HUDSON/Installing+Hudson+on+Ubuntu)
  * [Simple Continuous Integration of a Symfony Project using Hudson](http://prendreuncafe.com/blog/post/2009/10/06/Simple-Continuous-Integration-of-a-Symfony-Project-using-Hudson)
  * [Quick and Simple Security](http://wiki.hudson-ci.org/display/HUDSON/Quick+and+Simple+Security)
  * [Help! I locked myself out!](http://wiki.hudson-ci.org/display/HUDSON/Disable+security)
