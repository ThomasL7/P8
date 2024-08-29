<?php
ini_set('SMTP', 'localhost');
ini_set('smtp_port', '25');

// ===== CORS =====
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// ===== Request =====
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Inputs treatment
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

    // Create and send the email
    $to = "mail@gmail.com";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $emailSubject = "Portfolio ► $subject";

    $emailContent = "Nom : $familyName Prénom : $givenName\n";
    $emailContent .= "Email : $email\n\n";
    $emailContent .= "Message :\n$message";

    if (mail($to, $subject, $emailContent, $headers)) {
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
}
?>