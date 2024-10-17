<?php
header('Content-Type: application/json');
http_response_code(429);

$response = [
    'error' => true,
    'message' => "Limite de requêtes atteinte !",
];

echo json_encode($response);
exit();
