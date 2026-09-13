<?php
declare(strict_types=1);

namespace App\Repositories;

use App\Models\Tag;


class TagRepository extends Repository
{
    public function findById(int $id): ?Tag
    {
        $stmt = $this->pdo->prepare('SELECT * FROM tags WHERE tag_id = :id');
        $stmt->execute(['id' => $id]);
        $row = $stmt->fetch();

        return $row ? $this->hydrate($row) : null;
    }

    public function findAll(): array
    {
        $stmt = $this->pdo->query('SELECT * FROM tags ORDER BY name');
        return array_map([$this, 'hydrate'], $stmt->fetchAll());
    }

    public function findByName(string $name): ?Tag
    {
        $stmt = $this->pdo->prepare('SELECT * FROM tags WHERE name = :name');
        $stmt->execute(['name' => $name]);
        $row = $stmt->fetch();

        return $row ? $this->hydrate($row) : null;
    }

    public function save(object $entity): Tag
    {

        if ($entity->tagId === null) {
            $stmt = $this->pdo->prepare('INSERT INTO tags (name) VALUES (:name)');
            $stmt->execute(['name' => $entity->tagName]);
            $entity->tagId = (int) $this->pdo->lastInsertId();
        } else {
            $stmt = $this->pdo->prepare('UPDATE tags SET name = :name WHERE tag_id = :id');
            $stmt->execute(['name' => $entity->tagName, 'id' => $entity->tagId]);
        }

        return $entity;
    }

    public function delete(int $id): void
    {
        $stmt = $this->pdo->prepare('DELETE FROM tags WHERE tag_id = :id');
        $stmt->execute(['id' => $id]);
    }

    private function hydrate(array $row): Tag
    {
        return new Tag(
            tagId: (int) $row['tag_id'],
            tagName: $row['name']
        );
    }
}
