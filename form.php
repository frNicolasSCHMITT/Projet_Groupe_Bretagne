<?php
    $errors = '';
    $myemail = 'n.schmitt@codeur.online';
    if(
        empty($_POST['name']) ||
        empty($_POST['email']) ||
        empty($_POST['message'])
    ) {
        $errors .= "\n Error: all fields are required";
    }

    $name = $_POST['name'];
    $email_address = $_POST['email'];
    $message = $_POST['message'];

    if(empty($errors)) {
        $to = $myemail;
        $email_subject = "Nouveau contact formulaire Bretagne de: $name";
        $email_body = "<p style=\"font-size: 25px\">Vous avez reçu un nouveau message.</p><p style=\"font-size: 20px;\">Voici les détails :</p><br><p><strong><u>Nom</u> :</strong>$name</p><p><strong><u>E-mail</u> : </strong>$email_address</p><br><p><strong><u>Message</u> : </strong>$message</p>"

        $header  = 'MIME-Version: 1.0' . "\r\n";
        $header .= 'Content-type: text/html; charset=utf-8' . "\r\n";
        $header .= "From: $myemail\n";
        $header .= "Reply-To: $email_address";

        mail($to, $email_subject, $email_body, $header);

        //redirect to the "thank you" page
        header('location: contact_form_thank_you.html');
    }
?>