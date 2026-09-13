<?php
declare(strict_types=1);

namespace App\Models;

use App\States\CommentState;


class Comment implements \JsonSerializable
{
    public function __construct(
        public ?int $commentID,
        public int $postId,
        public int $userId,
        public string $content,
        private CommentState $state,
        public ?string $createdAt = null
    ) {
    }

    public function submit(): void
    {
        
    }

    public function approve(): void
    {
        $this->state->approve($this);
    }

    public function reject(): void
    {
        $this->state->reject($this);
    }


    public function setState(CommentState $state): void
    {
        $this->state = $state;
    }

    public function getStateName(): string
    {
        return $this->state->getName();
    }


   
    public function jsonSerialize(): array
    {
        return [
            'id' => $this->commentID,
            'content' => $this->content,
            'userId' => $this->userId,
            'postId' => $this->postId,
            'createdAt' => $this->createdAt,
            'status' => $this->getStateName(),
        ];
    }
}
