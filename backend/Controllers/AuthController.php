<?php
declare(strict_types=1);

namespace App\Controllers;

use App\Services\AuthService;

/**
 * AuthController
 */
class AuthController extends Controller
{
    public function __construct(AuthService $authService)
    {
        parent::__construct($authService);
    }


    public function login(): void
    {
        $body = $this->getJsonBody();
        $email = $body['email'] ?? null;
        $password = $body['password'] ?? null;

        if (empty($email) || empty($password)) {
            $this->jsonResponse(['error' => 'Compila tutti i campi'], 400);
            return;
        }

        $result = $this->authService->authenticate($email, $password);

        if ($result === null) {
            $this->jsonResponse(['error' => 'Credenziali non valide'], 401);
            return;
        }


        $this->jsonResponse([
            'token' => $result['token'],
            'user' => $result['user'],
        ], 200);
    }


    public function logout(): void
    {
        $user = $this->requireAuthenticatedUser();
        if ($user === null) {
            return;
        }

        $this->authService->logout($this->getBearerToken());
        $this->jsonResponse(['message' => 'Logout effettuato'], 200);
    }
}
