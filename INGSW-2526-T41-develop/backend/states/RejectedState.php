<?php
declare(strict_types=1);

namespace App\States;

use App\Models\Comment;


class RejectedState implements CommentState
{
    public function approve(Comment $comment): void
    {
        $comment->setState(new ApprovedState());
    }

    public function reject(Comment $comment): void
    {
       
    }

    public function getName(): string
    {
        return 'rejected';
    }
}
