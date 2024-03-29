<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "clintonmbaso@gmail.com";
    $subject = "Quiz Results";
    $message = $_POST['result'];

    // Additional headers
    $headers = "From: webmaster@example.com" . "\r\n" .
               "Reply-To: webmaster@example.com" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Send email
    mail($to, $subject, $message, $headers);
    echo "Email sent successfully.";
} else {
    echo "Error: Invalid request.";
}
?>