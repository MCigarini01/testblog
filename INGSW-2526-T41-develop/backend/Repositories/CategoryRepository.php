<?php
declare(strict_types=1);

namespace App\Repositories;

use App\Models\Category;

/**
 * CategoryRepository extends Repository
 * Accesso alla tabella `categories`.
 */
class CategoryRepository extends Repository
{
    public function findById(int $id): ?Category
    {
        $stmt = $this->pdo->prepare('SELECT * FROM categories WHERE category_id = :id');
        $stmt->execute(['id' => $id]);
        $row = $stmt->fetch();

        return $row ? $this->hydrate($row) : null;
    }

    public function findAll(): array
    {
        $stmt = $this->pdo->query('SELECT * FROM categories ORDER BY name');
        return array_map([$this, 'hydrate'], $stmt->fetchAll());
    }

    public function findByName(string $name): ?Category
    {
        $stmt = $this->pdo->prepare('SELECT * FROM categories WHERE name = :name');
        $stmt->execute(['name' => $name]);
        $row = $stmt->fetch();

        return $row ? $this->hydrate($row) : null;
    }

    public function save(object $entity): Category
    {
        /** @var Category $entity */
        if ($entity->categoryId === null) {
            $stmt = $this->pdo->prepare('INSERT INTO categories (name) VALUES (:name)');
            $stmt->execute(['name' => $entity->categoryName]);
            $entity->categoryId = (int) $this->pdo->lastInsertId();
        } else {
            $stmt = $this->pdo->prepare('UPDATE categories SET name = :name WHERE category_id = :id');
            $stmt->execute(['name' => $entity->categoryName, 'id' => $entity->categoryId]);
        }

        return $entity;
    }

    public function delete(int $id): void
    {
        $stmt = $this->pdo->prepare('DELETE FROM categories WHERE category_id = :id');
        $stmt->execute(['id' => $id]);
    }

    private function hydrate(array $row): Category
    {
        return new Category(
            categoryId: (int) $row['category_id'],
            categoryName: $row['name']
        );
    }
}
