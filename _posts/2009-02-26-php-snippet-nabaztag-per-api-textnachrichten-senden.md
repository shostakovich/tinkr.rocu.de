---
id: 483
title: 'PHP-Snippet: Nabaztag per API Textnachrichten schicken'
date: 2009-02-26T15:40:01+00:00
author: SES
layout: post
guid: http://web2.0du.de/?p=366
permalink: /blog/php-snippet-nabaztag-per-api-textnachrichten-senden/
thumbnail:
  - http://farm1.static.flickr.com/62/156302523_0a8f7502f8_m.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";b:0;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Webkram
  - Weiche Ware
tags:
  - API
  - Nabaztag
  - PHP
  - Programmieren
---
Ja meine Anwendungen sind jetzt dicke Freunde mit meinem Nabaztag. Ich muss sagen, der Hase eignet sich ganz hervorragend für Statusnachrichten jeglicher Art!

Es war nicht weiter schwer ein kleines Script zu schreiben, dass dem Hasen Text To Speech Nachrichten schickt.

<img alt="" src="http://web2.0du.de/wp-content/uploads/sites/7/2009/02/nabaztag.png" title="Nabaztag in Action"   />

Da ich euch gerne an meiner Arbeit teilhaben lassen will, hier der Quellcode.

[php]class NabaztagAPI
< ?php
{
private $endpoint = "http://api.nabaztag.com/vl/FR/api.jsp?";
private $auth_params; // Associative array with Sn + Token
private $call_params; // Associative array with the params for this API-Call
private $settings;

/**
* Constructs the first part of the nabaztag url, including credentials
* @param string Serialnumber of the nabaztag ($sn)
* @param string Auth-Token of the nabaztag ($token)
* @param array settings
*/
function __construct($sn, $token, $settings = array())
{
$this->auth_params = array("sn" => $sn, "token" => $token);
$this->settings = $settings;
}

/**
* Sends a TTS (text to speech) message to the nabaztag
* @param string $message
* @return string
*/

public function sendTts($message)
{
$this->call_params = array("tts" => $message);
return $this->callNabaztag();
}

/**
* Constructs url and fires the request returns answer
*/

private function callNabaztag()
{
$params = array\_merge($this->auth\_params, $this->call_params);
$url = "";

$param_url = "";
foreach($params as $key => $val){
$param_url .= sprintf("&%s=%s", $key, urlencode($val));
}

$url = $this->endpoint.substr($param_url, 1);
return file\_get\_contents($url);
}
}[/php]

Benutz wird die Klasse einfach so:

[php]
$api = new NabaztagApi($nab\_id, $nab\_token);
$api->sendTts($message);
</pre>
[/php]
