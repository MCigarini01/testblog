<?php
declare(strict_types=1);

namespace App\Repositories;

use App\Models\RegisteredUser;
use App\Services\UserFactory;


class UserRepository extends Repository
{
    public function __construct(Database $database, private UserFactory $userFactory)
    {
        parent::__construct($database);
    }

    public function findById(int $id): ?RegisteredUser
    {
        $stmt = $this->pdo->prepare('SELECT * FROM users WHERE user_id = :id');
        $stmt->execute(['id' => $id]);
        $row = $stmt->fetch();

        return $row ? $this->hydrate($row) : null;
    }

    public function findByEmail(string $email): ?RegisteredUser
    {
        $stmt = $this->pdo->prepare('SELECT * FROM users WHERE email = :email');
        $stmt->execute(['email' => $email]);
        $row = $stmt->fetch();

        return $row ? $this->hydrate($row) : null;
    }

    public function findAll(): array
    {
        $stmt = $this->pdo->query('SELECT * FROM users');
        return array_map([$this, 'hydrate'], $stmt->fetchAll());
    }

    public function save(object $entity): RegisteredUser
    {
      
        if ($entity->userId === null) {
            $stmt = $this->pdo->prepare(
                'INSERT INTO users (username, email, password, role, created_at)
                 VALUES (:username, :email, :password, :role, NOW())'
            );
            $stmt->execute([
                'username' => $entity->username,
                'email' => $entity->email,
                'password' => $entity->password,
                'role' => $entity->getRoleName(),
            ]);
            $entity->userId = (int) $this->pdo->lastInsertId();
        } else {
            $stmt = $this->pdo->prepare(
                'UPDATE users SET username = :username, email = :email, password = :password, role = :role WHERE user_id = :id'
            );
            $stmt->execute([
                'username' => $entity->username,
                'email' => $entity->email,
                'password' => $entity->password,
                'role' => $entity->getRoleName(),
                'id' => $entity->userId,
            ]);
        }

        return $entity;
    }

    public function delete(int $id): void
    {
        $stmt = $this->pdo->prepare('DELETE FROM users WHERE user_id = :id');
        $stmt->execute(['id' => $id]);
    }

    private function hydrate(array $row): RegisteredUser
    {
        return $this->userFactory->create($row['role'], [
            'userId' => (int) $row['user_id'],
            'username' => $row['username'],
            'password' => $row['password'],
            'email' => $row['email'],
            'createdAt' => $row['created_at'] ?? null,
        ]);
    }
}
