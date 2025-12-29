<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// PHPMailer load
require __DIR__ . '/phpmailer/src/Exception.php';
require __DIR__ . '/phpmailer/src/PHPMailer.php';
require __DIR__ . '/phpmailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $name = $_POST["name"] ?? '';
    $email = $_POST["email"] ?? '';
    $phone = $_POST["phone"] ?? '';
    $message = $_POST["message"] ?? '';

    $mail = new PHPMailer(true);

    try {
        // SMTP SETTINGS
        $mail->isSMTP();
        $mail->Host = 'mail.brm.si';
        $mail->SMTPAuth = true;
        $mail->Username = 'username/email';
        $mail->Password = 'user_password';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // FROM + TO
        $mail->setFrom('info@brm.si', 'BRM Website');
        $mail->addAddress('info@brm.si', 'BRM');

        // Reply-To
        if (!empty($email)) {
            $mail->addReplyTo($email, $name);
        }

        // CONTENT
        $mail->isHTML(true);
        $mail->Subject = "Novo naročilo storitve (BRM)";
        $mail->Body = nl2br("
            Ime in priimek: $name<br>
            Email: $email<br>
            Telefon: $phone<br><br>
            Opis:<br>$message
        ");

        $mail->send();
        echo "OK";

    } catch (Exception $e) {
        echo "Mailer Error: " . $mail->ErrorInfo;
    }
}

