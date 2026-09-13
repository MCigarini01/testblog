<?php
declare(strict_types=1);

namespace App\States;

use App\Models\Comment;

class PendingState implements CommentState
{
    public function approve(Comment $comment): void
    {
        $comment->setState(new ApprovedState());
    }

    public function reject(Comment $comment): void
    {
        $comment->setState(new RejectedState());
    }

    public function getName(): string
    {
        return 'pending';
    }
}
