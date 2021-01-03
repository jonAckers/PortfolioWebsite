<?php
$emailto = 'jonathon_ackers@hotmail.co.uk';
$toname = 'Jonathon Ackers';
$emailfrom = 'Portfolio Website';
$fromname = 'Contact Form';
$subject = 'Portfolio Message';
$messagebody = "<html><body>" .
			   "<h3>Name:</h3>&nbsp;&nbsp;&nbsp;&nbsp;" . $_POST['name'] . "</br></br>" .
               "<h3>Email:</h3>&nbsp;&nbsp;&nbsp;&nbsp;" . $_POST['email'] . "</br></br>" .
               "<h3>Subject:</h3>&nbsp;&nbsp;&nbsp;&nbsp;" . $_POST['subject'] . "</br></br>" .
			   "<h3>Message:</h3>&nbsp;&nbsp;&nbsp;&nbsp;" . $_POST['message'] .
			   "</body></html>";

$headers = 
	'Return-Path: ' . $emailfrom . "\r\n" . 
	'From: ' . $fromname . ' <' . $emailfrom . '>' . "\r\n" . 
	'X-Priority: 3' . "\r\n" . 
	'X-Mailer: PHP ' . phpversion() .  "\r\n" . 
	'Reply-To: ' . $fromname . ' <' . $emailfrom . '>' . "\r\n" .
	'MIME-Version: 1.0' . "\r\n" . 
	'Content-Transfer-Encoding: 8bit' . "\r\n" . 
	'Content-Type: text/html; charset=UTF-8' . "\r\n";
$params = '-f ' . $emailfrom;
$test = mail($emailto, $subject, $messagebody, $headers, $params);
?>