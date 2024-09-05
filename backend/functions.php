<?php
// ===== Session =====
function isOverLimitOfRequests($userCountRequest, $limitOfRequests)
{
    if (!isset($_SESSION[$userCountRequest])) {
        $_SESSION[$userCountRequest] = 0;
    }
    if ($_SESSION[$userCountRequest] < $limitOfRequests) {
        $_SESSION[$userCountRequest]++;
        return null;
    } else {
        return [
            'status' => 429,
            'message' => "Limite de requêtes atteinte !",
        ];
    }
}

// ===== Email sending =====
function validateData($data)
{
    if (empty(trim($data['family-name'])) || empty(trim($data['given-name'])) || empty(trim($data['subject'])) || empty(trim($data['message']))) {
        return [
            'status' => 400,
            'message' => "Les champs ne doivent pas contenir que des espaces ou être vides !",
        ];
    }
    if (!filter_var(trim($data['email']), FILTER_VALIDATE_EMAIL)) {
        return [
            'status' => 400,
            'message' => "L'adresse email n'est pas valide !",
        ];
    }
    if (strlen($data['family-name']) > 50 || strlen($data['given-name']) > 50 || strlen($data['email']) > 254 || strlen($data['subject']) > 100 || strlen($data['message']) > 1000) {
        return [
            'status' => 400,
            'message' => "Un ou plusieurs champs dépassent la longueur maximale autorisée de caractères.",
        ];
    }
    if (!empty($data['phone-number'])) {
        return [
            'status' => 400,
            'message' => "Désolé, une erreur est survenue, veuillez revenir à la section contact.",
        ];
    }
    return null;
}

function sanitizeData($data)
{
    return [
        'family-name' => htmlspecialchars(trim($data['family-name']), ENT_QUOTES, 'UTF-8'),
        'given-name' => htmlspecialchars(trim($data['given-name']), ENT_QUOTES, 'UTF-8'),
        'email' => htmlspecialchars(trim($data['email']), ENT_QUOTES, 'UTF-8'),
        'subject' => htmlspecialchars(trim($data['subject']), ENT_QUOTES, 'UTF-8'),
        'message' => htmlspecialchars(trim($data['message']), ENT_QUOTES, 'UTF-8'),
    ];
}

function configureMailer()
{
    $mail = new PHPMailer(true);
    try {
        $mail->CharSet = "UTF-8";
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPSecure = "tls";
        $mail->Port = 587;
        $mail->SMTPAuth = true;
        $mail->Username = $_ENV['EMAIL_USERNAME'];
        $mail->Password = $_ENV['EMAIL_PASSWORD'];
        return $mail;
    } catch (Exception) {
        throw new Exception();
    }
}

function createEmailContent($data)
{
    $content = "<html><body style='font-family: Arial, sans-serif; line-height: 1.4;'>";
    $content .= "<p><u>Nom :</u> {$data['family-name']}</p>";
    $content .= "<p><u>Prénom :</u> {$data['given-name']}</p>";
    $content .= "<p><u>Email :</u> {$data['email']}</p><br>";
    $content .= "<p><u>Sujet :</u> {$data['subject']}</p><br>";
    $content .= "<p><u>Message :</u></p>";
    $content .= "<p>{$data['message']}</p>";
    $content .= "</body></html>";
    return $content;
}

function sendEmail($data)
{
    try {
        $mail = configureMailer();

        $mail->setFrom($data['email'], $data['given-name'] . ' ' . $data['family-name']);
        $mail->addAddress($_ENV['EMAIL_TO']);

        $mail->isHTML(true);
        $mail->Subject = "► Portfolio ◄";
        $mail->Body = createEmailContent($data);

        $mail->send();
        return [
            'status' => 200,
            'message' => "Merci, votre message a été envoyé avec succès.",
        ];
    } catch (Exception) {
        return [
            'status' => 500,
            'message' => "Désolé, une erreur s'est produite lors de l'envoi de votre message !",
        ];
    } finally {
        if (isset($mail)) {
            $mail->smtpClose();
        }
    }
}
