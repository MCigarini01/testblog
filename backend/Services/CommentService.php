<?php
declare(strict_types=1);

namespace App\Services;

use App\Repositories\CommentRepository;
use App\Models\Comment;
use App\Models\RegisteredUser;


class CommentService
{
    public function __construct(
        private CommentRepository $commentRepository,
        private CommentFactory $commentFactory
    ) {
    }


    public function getAll(): array
    {
        return $this->commentRepository->findAll();
    }

    public function getById(int $id): ?Comment
    {
        return $this->commentRepository->findById($id);
    }

    public function getPending(): array
    {
        return $this->commentRepository->findPendingComments();
    }

    public function getApprovedByPost(int $postId): array
    {
        return $this->commentRepository->findApprovedByPost($postId);
    }

    public function create(int $postId, RegistredUser $author, string $content): Comment
    {
        $comment = $this->commentFactory->create($postId, $author->userId, $content);
        return $this->commentRepository->save($comment);
    }

    public function approve(int $id): ?Comment
    {
        $comment = $this->commentRepository->findById($id);
        if ($comment === null) {
            return null;
        }

        $comment->approve();
        return $this->commentRepository->save($comment);
    }

    public function reject(int $id): ?Comment
    {
        $comment = $this->commentRepository->findById($id);
        if ($comment === null) {
            return null;
        }

        $comment->reject();
        return $this->commentRepository->save($comment);
    }

    public function delete(int $id): void
    {
        $this->commentRepository->delete($id);
    }
}
