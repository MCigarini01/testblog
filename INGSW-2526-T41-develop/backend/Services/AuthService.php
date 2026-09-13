<?php
declare(strict_types=1);

namespace App\Services;

use App\Repositories\UserRepository;
use App\Models\RegisteredUser;

/**
 * AuthService
 */
class AuthService
{
    private const TOKEN_TTL_SECONDS = 3600; // 1 ora

    public function __construct(
        private UserRepository $userRepository,
        private string $secret
    ) {
    }

 
    public function authenticate(string $email, string $password): ?array
    {
        $user = $this->userRepository->findByEmail($email);

        if ($user === null || !password_verify($password, $user->password)) {
            return null;
        }

        return [
            'token' => $this->generateToken($user),
            'user' => $user,
        ];
    }

    public function generateToken(RegisteredUser $user): string
    {
        $payload = [
            'sub' => $user->userId,
            'role' => $user->getRoleName(),
            'exp' => time() + self::TOKEN_TTL_SECONDS,
        ];

        $payloadEncoded = base64_encode(json_encode($payload));
        $signature = hash_hmac('sha256', $payloadEncoded, $this->secret);

        return $payloadEncoded . '.' . $signature;
    }


    public function getUserFromToken(?string $token): ?RegisteredUser
    {
        if ($token === null || !str_contains($token, '.')) {
            return null;
        }

        [$payloadEncoded, $signature] = explode('.', $token, 2);

        $expectedSignature = hash_hmac('sha256', $payloadEncoded, $this->secret);
        if (!hash_equals($expectedSignature, $signature)) {
            return null;
        }

        $payload = json_decode(base64_decode($payloadEncoded), true);
        if (!is_array($payload) || !isset($payload['sub'], $payload['exp'])) {
            return null;
        }

        if ($payload['exp'] < time()) {
            return null;
        }

        return $this->userRepository->findById((int) $payload['sub']);
    }

   
     
    public function logout(?string $token): void
    {
        
    }
}
