<?php
declare(strict_types=1);

namespace App\Services;

use App\Repositories\UserRepository;
use App\Models\RegisteredUser;


class UserService
{
    public function __construct(
        private UserRepository $userRepository,
        private UserFactory $userFactory
    ) {
    }

    public function getAll(): array
    {
        return $this->userRepository->findAll();
    }

    public function getById(int $id): ?RegisteredUser
    {
        return $this->userRepository->findById($id);
    }


    public function create(string $role, array $data): RegisteredUser
    {
        $user = $this->userFactory->create($role, [
            'userId' => null,
            'username' => $data['username'],
            'email' => $data['email'],
            'password' => password_hash($data['password'], PASSWORD_DEFAULT),
        ]);

        return $this->userRepository->save($user);
    }


    public function update(int $id, array $data): ?RegisteredUser
    {
        $existing = $this->userRepository->findById($id);
        if ($existing === null) {
            return null;
        }

        $role = $data['role'] ?? $existing->getRoleName();
        $password = !empty($data['password'])
            ? password_hash($data['password'], PASSWORD_DEFAULT)
            : $existing->password;

        $updated = $this->userFactory->create($role, [
            'userId' => $existing->userId,
            'username' => $data['username'] ?? $existing->username,
            'email' => $data['email'] ?? $existing->email,
            'password' => $password,
            'createdAt' => $existing->createdAt,
        ]);

        return $this->userRepository->save($updated);
    }


    public function changeRole(int $id, string $role): ?RegisteredUser
    {
        return $this->update($id, ['role' => $role]);
    }

    public function delete(int $id): void
    {
        $this->userRepository->delete($id);
    }
}
