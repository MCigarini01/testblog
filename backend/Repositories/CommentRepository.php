<?php
declare(strict_types=1);

namespace App\Repositories;

use App\Models\Comment;
use App\States\CommentState;
use App\States\PendingState;
use App\States\ApprovedState;
use App\States\RejectedState;


class CommentRepository extends Repository
{
    public function findById(int $id): ?Comment
    {
        $stmt = $this->pdo->prepare('SELECT * FROM comments WHERE comment_id = :id');
        $stmt->execute(['id' => $id]);
        $row = $stmt->fetch();

        return $row ? $this->hydrate($row) : null;
    }

    public function findAll(): array
    {
        $stmt = $this->pdo->query('SELECT * FROM comments ORDER BY created_at DESC');
        return array_map([$this, 'hydrate'], $stmt->fetchAll());
    }

    public function findPendingComments(): array
    {
        $stmt = $this->pdo->prepare("SELECT * FROM comments WHERE status = 'pending' ORDER BY created_at ASC");
        $stmt->execute();
        return array_map([$this, 'hydrate'], $stmt->fetchAll());
    }

 
    public function findApprovedByPost(int $postId): array
    {
        $stmt = $this->pdo->prepare(
            "SELECT * FROM comments WHERE post_id = :postId AND status = 'approved' ORDER BY created_at ASC"
        );
        $stmt->execute(['postId' => $postId]);
        return array_map([$this, 'hydrate'], $stmt->fetchAll());
    }


    public function findByPost(int $postId): array
    {
        $stmt = $this->pdo->prepare('SELECT * FROM comments WHERE post_id = :postId ORDER BY created_at ASC');
        $stmt->execute(['postId' => $postId]);
        return array_map([$this, 'hydrate'], $stmt->fetchAll());
    }

    public function save(object $entity): Comment
    {
       
        if ($entity->commentID === null) {
            $stmt = $this->pdo->prepare(
                'INSERT INTO comments (post_id, user_id, content, status, created_at)
                 VALUES (:postId, :userId, :content, :status, NOW())'
            );
            $stmt->execute([
                'postId' => $entity->postId,
                'userId' => $entity->userId,
                'content' => $entity->content,
                'status' => $entity->getStateName(),
            ]);
            $entity->commentID = (int) $this->pdo->lastInsertId();
        } else {
            $stmt = $this->pdo->prepare('UPDATE comments SET content = :content, status = :status WHERE comment_id = :id');
            $stmt->execute([
                'content' => $entity->content,
                'status' => $entity->getStateName(),
                'id' => $entity->commentID,
            ]);
        }

        return $entity;
    }

    public function delete(int $id): void
    {
        $stmt = $this->pdo->prepare('DELETE FROM comments WHERE comment_id = :id');
        $stmt->execute(['id' => $id]);
    }

    private function hydrate(array $row): Comment
    {
        return new Comment(
            commentID: (int) $row['comment_id'],
            postId: (int) $row['post_id'],
            userId: (int) $row['user_id'],
            content: $row['content'],
            state: $this->stateFromString($row['status']),
            createdAt: $row['created_at']
        );
    }

    private function stateFromString(string $status): CommentState
    {
        return match ($status) {
            'approved' => new ApprovedState(),
            'rejected' => new RejectedState(),
            default => new PendingState(),
        };
    }
}
