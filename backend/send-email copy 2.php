<?php
require 'vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use League\OAuth2\Client\Provider\Google;
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

// ===== CORS =====
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// ===== Request =====
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Datas treatment
    $data = json_decode(file_get_contents('php://input'), true);

    $familyName = trim($data['family-name']);
    $givenName = trim($data['given-name']);
    $email = trim($data['email']);
    $subject = trim($data['subject']);
    $message = trim($data['message']);

    if (empty($familyName) || empty($givenName) || empty($subject) || empty($message)) {
        http_response_code(400);
        echo json_encode([
            "message" => "Les champs ne doivent pas contenir que des espaces ou être vides !"
        ]);
        exit;
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode([
            "message" => "L'adresse email n'est pas valide !"
        ]);
        exit;
    }

    $familyName = htmlspecialchars($familyName, ENT_QUOTES, 'UTF-8');
    $givenName = htmlspecialchars($givenName, ENT_QUOTES, 'UTF-8');
    $email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
    $subject = htmlspecialchars($subject, ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

    // Sending email
    $mail = new PHPMailer(true);

    $provider = new Google(
        [
            'clientId' => 'VOTRE_CLIENT_ID',
            'clientSecret' => 'VOTRE_CLIENT_SECRET',
        ]
    );

    $oauth2 = new PHPMailer\PHPMailer\OAuth(
        [
            'provider' => $provider,
            'clientId' => 'VOTRE_CLIENT_ID',
            'clientSecret' => 'VOTRE_CLIENT_SECRET',
            'refreshToken' => 'VOTRE_REFRESH_TOKEN',
            'userName' => 'votre-email@gmail.com',
        ]
    );

    $mail->setOAuth($oauth2);

    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    $mail->SMTPAuth = true;

    $mail->setFrom($email, $givenName . ' ' . $familyName);
    $mail->addAddress("rthrthr@gmail.com");

    $mail->isHTML(false);
    $mail->Subject = "Portfolio ► $subject";
    $mail->Body = "Nom : $familyName Prénom : $givenName\n";
    $mail->Body .= "Email : $email\n\n";
    $mail->Body .= "Message :\n$message";

    if ($mail->send()) {
        http_response_code(200);
        echo json_encode([
            "message" => "Votre message a été envoyé avec succès."
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            "message" => "Désolé, une erreur s'est produite lors de l'envoi de votre message !"
        ]);
    }

    $mail->smtpClose();
}
?>