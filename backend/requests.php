<?php
// ===== Dependencies =====
require_once 'config.php';
require_once 'functions.php';

// ===== Requests =====
$requestLimitResult = isOverLimitOfRequests($userCountRequest, $limitOfRequests);
if ($requestLimitResult) {
    http_response_code($requestLimitResult['status']);
    echo json_encode([
        "message" => $requestLimitResult['message'],
    ]);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents('php://input'), true);

    $errorsValidation = validateData($data);
    if ($errorsValidation) {
        http_response_code($errorsValidation['status']);
        echo json_encode([
            "message" => $errorsValidation['message'],
        ]);
        exit;
    }

    $sanitizedData = sanitizeData($data);

    $emailResult = sendEmail($sanitizedData);
    http_response_code($emailResult['status']);
    echo json_encode([
        "message" => $emailResult['message'],
    ]);
}
