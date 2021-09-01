<?php
    $errors = '';
    $myemail = 'youremail@website.com';
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
        $email_subjet = "Contact form submission: $name";
        $email_body = "You have received a new message. " .
            " Here are the details:\n Name: $name \n Email: $email_address \n Message: $message";

        $header = "From: $myemail\n";
        $header .= "Reply-To: $email_address";

        mail($to, $email_subjet, $email_body, $header);

        //redirect to the "thank you" page
        header('location: contact_form_thank_you.html');
    }
?>