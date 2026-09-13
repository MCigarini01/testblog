<?php
declare(strict_types=1);

namespace App\Repositories;

use App\Models\Post;


class PostRepository extends Repository
{
    public function findById(int $id): ?Post
    {
        $stmt = $this->pdo->prepare('SELECT * FROM posts WHERE post_id = :id');
        $stmt->execute(['id' => $id]);
        $row = $stmt->fetch();

        return $row ? $this->hydrate($row) : null;
    }

    public function findAll(): array
    {
        $stmt = $this->pdo->query('SELECT * FROM posts ORDER BY created_at DESC');
        return array_map([$this, 'hydrate'], $stmt->fetchAll());
    }

    public function findByAuthor(int $authorId): array
    {
        $stmt = $this->pdo->prepare('SELECT * FROM posts WHERE author_id = :authorId ORDER BY created_at DESC');
        $stmt->execute(['authorId' => $authorId]);
        return array_map([$this, 'hydrate'], $stmt->fetchAll());
    }

    public function findByCategory(int $categoryId): array
    {
        $stmt = $this->pdo->prepare('SELECT * FROM posts WHERE category_id = :categoryId ORDER BY created_at DESC');
        $stmt->execute(['categoryId' => $categoryId]);
        return array_map([$this, 'hydrate'], $stmt->fetchAll());
    }

    public function findByTag(int $tagId): array
    {
        $stmt = $this->pdo->prepare(
            'SELECT p.* FROM posts p
             INNER JOIN post_tags pt ON pt.post_id = p.post_id
             WHERE pt.tag_id = :tagId
             ORDER BY p.created_at DESC'
        );
        $stmt->execute(['tagId' => $tagId]);
        return array_map([$this, 'hydrate'], $stmt->fetchAll());
    }

    public function search(string $query): array
    {
        $stmt = $this->pdo->prepare(
            'SELECT * FROM posts WHERE title LIKE :q OR content LIKE :q ORDER BY created_at DESC'
        );
        $stmt->execute(['q' => '%' . $query . '%']);
        return array_map([$this, 'hydrate'], $stmt->fetchAll());
    }

    public function save(object $entity): Post
    {
     
        if ($entity->postId === null) {
            $stmt = $this->pdo->prepare(
                'INSERT INTO posts (title, content, author_id, category_id, image, created_at)
                 VALUES (:title, :content, :authorId, :categoryId, :image, NOW())'
            );
            $stmt->execute([
                'title' => $entity->title,
                'content' => $entity->content,
                'authorId' => $entity->authorId,
				'image' => $entity->image,
                'categoryId' => $entity->categoryId,
            ]);
            $entity->postId = (int) $this->pdo->lastInsertId();
        } else {
            $stmt = $this->pdo->prepare(
                'UPDATE posts SET title = :title, content = :content, image= :image, category_id = :categoryId WHERE post_id = :id'
            );
            $stmt->execute([
                'title' => $entity->title,
                'content' => $entity->content,
                'categoryId' => $entity->categoryId,
				'image' => $entity->image,
                'id' => $entity->postId,
            ]);
        }

        return $entity;
    }

    public function delete(int $id): void
    {
        $stmt = $this->pdo->prepare('DELETE FROM posts WHERE post_id = :id');
        $stmt->execute(['id' => $id]);
    }

  
    public function attachTag(int $postId, int $tagId): void
    {
        $stmt = $this->pdo->prepare(
            'INSERT IGNORE INTO post_tags (post_id, tag_id) VALUES (:postId, :tagId)'
        );
        $stmt->execute(['postId' => $postId, 'tagId' => $tagId]);
    }


    private function findTagIdsForPost(int $postId): array
    {
        $stmt = $this->pdo->prepare('SELECT tag_id FROM post_tags WHERE post_id = :postId');
        $stmt->execute(['postId' => $postId]);
        return array_map('intval', array_column($stmt->fetchAll(), 'tag_id'));
    }

    private function hydrate(array $row): Post
    {
        return new Post(
            postId: (int) $row['post_id'],
            title: $row['title'],
            content: $row['content'],
            authorId: (int) $row['author_id'],
            categoryId: $row['category_id'] !== null ? (int) $row['category_id'] : null,
			image: $row['image'] ?? null,
            createdAt: $row['created_at'],
            tags: $this->findTagIdsForPost((int) $row['post_id'])
        );
    }
}
