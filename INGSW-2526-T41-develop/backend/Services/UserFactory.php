<?php
declare(strict_types=1);

namespace App\Services;

use App\Models\Editor;
use App\Models\Admin;
use App\Models\RegisteredUser;
use InvalidArgumentException;


class UserFactory
{
    public function create(string $role, array $data): RegisteredUser
    {
        $createdAt = $data['createdAt'] ?? date('Y-m-d H:i:s');

        return match ($role) {
            'admin' => new Admin(
                userId: $data['userId'] ?? null,
                username: $data['username'],
                password: $data['password'],
                email: $data['email'],
                createdAt: $createdAt,
            ),
            'editor' => new Editor(
                userId: $data['userId'] ?? null,
                username: $data['username'],
                password: $data['password'],
                email: $data['email'],
                createdAt: $createdAt,
            ),
            default => throw new InvalidArgumentException("Ruolo sconosciuto: {$role}"),
        };
    }
}
