<?php
$to = $_POST ['email'];
$subject = 'Solicitud de contacto desde Debord Company';
$from = 'work@debordcompany.es';
 
// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
 
// Create email headers
$headers .= 'From: '.$from."\r\n".
    'Reply-To: '.$from."\r\n" .
    'X-Mailer: PHP/' . phpversion();
 
// Compose a simple HTML email message
$message = '<html><body>';
$message .= ' <style>
body{
    max-width: 600px;
    margin: 0 auto;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #404040;
    
}
</style>
<div style="background-color: rgb(213, 213, 213); margin: 0 auto; padding: 3rem 0;  color: #404040">
<div style="width: 85%; margin: 0 auto;">
    <div style="display:flex ;  padding-bottom: 1rem;">
    <img style="margin-top: 0.7rem;" src="https://debordcompany.es/media/cabeza%20negro.png" width="20px" height="20px" alt="cabeza buho">
    <h1 style="font-size:1rem ;  margin-left: 0.5rem;">Debord Company</h1>
</div>
<div style="background-color: white; border-radius:5px; padding: 3rem; box-shadow: 2px 2px 5px -4px #404040; ">
    <h2>Estimado visitante</h2>
    <div style="margin-bottom: 3rem;"> <p>Gracias por contactar con Debord Company.</p>
        <p>Hemos procesado y almacenado su solicitud correctamente, en breve nos pondremos en comunicación con usted para resolver su consulta.</p>
        
        <p>Atentamente Debord Company.</p>
         
    </div>
    <a style="text-decoration: none; padding: 1rem; background-color: #FFB900; border-radius: 5px; color: #404040; " href="https://debordcompany.es/">Visitar web</a>
     
    
</div>
</div>

</div>';

 
// Sending email
if(mail($to, $subject, $message, $headers)){
    header('location:/pages/form/');
} else{
    echo 'Unable to send email. Please try again.';
}

$name = $_POST ['name'];
$email = $_POST ['email'];
$textArea = $_POST ['textArea'];

$mensaje1 = "Este mensaje ha sido enviado por: " . $name . ",\r\n";
$mensaje2 = "con el email: " . $email . ",\r\n";
$mensaje3 = "solicitando: " . $textArea . ",\r\n";
$mensaje4 = "Enviado el dia: " . date("d/m/y", time());



$destinatario = "mario.sanz.gutierrez@gmail.com";
$asunto = "Solicitud de contacto desde Debord Company";

$header = 'From: debord.info@gmail.com' . "\r\n" .
    'Reply-To: debord.info@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($destinatario, $asunto, $mensaje1.$mensaje2.$mensaje3.$mensaje4, $header);
?>