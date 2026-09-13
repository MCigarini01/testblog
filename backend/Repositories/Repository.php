<?php
declare(strict_types=1);

namespace App\Repositories;

use PDO;

/**
 * Repository (astratta)
 */
abstract class Repository
{
    protected PDO $pdo;

    public function __construct(Database $database)
    {
        $this->pdo = $database->getConnection();
    }

    abstract public function findById(int $id): ?object;

    abstract public function findAll(): array;

    abstract public function save(object $entity): object;

    abstract public function delete(int $id): void;
}
