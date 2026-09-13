<?php
declare(strict_types=1);

namespace App\Services;

use App\Models\Comment;
use App\States\PendingState;


class CommentFactory
{
    public function create(int $postId, int $userId, string $content): Comment
    {
        return new Comment(
            commentID: null,
            postId: $postId,
            userId: $userId,
            content: $content,
            state: new PendingState()
        );
    }
}
