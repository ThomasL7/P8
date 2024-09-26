<?php
// ===== CORS =====
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// ===== Session =====
ini_set('session.cookie_lifetime', 3600 * 24);
session_start();

// ===== Dependencies =====
require 'vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__)->load();

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// ===== Variables =====
$limitOfRequests = 3;
$userCountRequest = 0;
