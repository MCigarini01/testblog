<?php
declare(strict_types=1);

namespace App\Controllers;

use App\Services\AuthService;
use App\Models\RegisteredUser;


abstract class Controller
{
    public function __construct(protected AuthService $authService)
    {
    }

    protected function getJsonBody(): array
    {
        $raw = file_get_contents('php://input');
        $data = json_decode($raw, true);
        return is_array($data) ? $data : [];
    }

    protected function jsonResponse(array $data, int $statusCode = 200): void
    {
        http_response_code($statusCode);
        header('Content-Type: application/json');
        echo json_encode($data);
        exit;
    }

    protected function getBearerToken(): ?string
    {
        $header = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
        if (preg_match('/Bearer\s(\S+)/', $header, $matches)) {
            return $matches[1];
        }
        return null;
    }

    protected function requireAuthenticatedUser(): ?RegisteredUser
    {
        $token = $this->getBearerToken();
        $user = $token !== null ? $this->authService->getUserFromToken($token) : null;

        if ($user === null) {
            $this->jsonResponse(['error' => 'Autenticazione richiesta'], 401);
            return null;
        }

        return $user;
    }
}
