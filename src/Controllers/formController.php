<?php

$formData = $_POST;
//die(var_dump($formData));
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];

$subject = "Lead Weddinglink";
$message = "nombre: {$name},\nemail: {$email},\ntelefono: {$phone}";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.hostinger.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = "lead@pmdevs.com";
$mail->Password = "Lanix2la.1";

//$mail->setFrom($email, $name);
$mail->setFrom("lead@pmdevs.com", "Lead");
$mail->addAddress("ventas@pmdevs.com", "ventas");

$mail->Subject = $subject;
$mail->Body = $message;

$mail->send();
echo "email sent.";