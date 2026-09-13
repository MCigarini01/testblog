<?php
declare(strict_types=1);

namespace App\States;

use App\Models\Comment;


interface CommentState
{
    public function approve(Comment $comment): void;

    public function reject(Comment $comment): void;

    public function getName(): string;
}
