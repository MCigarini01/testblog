<?php
declare(strict_types=1);

namespace App\Models;

/**
 * RegisteredUser (astratta) extends User
 */
abstract class RegisteredUser extends User implements \JsonSerializable
{
    public function __construct(
        public ?int $userId,
        public string $username,
        public string $password,
        public string $email,
        public ?string $createdAt = null
    ) {
    }

    public function canCreateOwnPost(): bool
    {
        return true;
    }

    public function canModifyOwnPost(): bool
    {
        return true;
    }

    public function canDeleteOwnPost(): bool
    {
        return true;
    }

    public function canCommentPost(): bool
    {
        return true;
    }

    public function canManageCategories(): bool
    {
        return false;
    }

    public function canManageTags(): bool
    {
        return false;
    }

    public function canManageUsers(): bool
    {
        return false;
    }

    public function canModerateComments(): bool
    {
        return false;
    }

    public function canDeleteAnyPost(): bool
    {
        return false;
    }


    public function canModifyPost(Post $post): bool
    {
        return $this->canModifyOwnPost() && $post->authorId === $this->userId;
    }

    public function canDeletePost(Post $post): bool
    {
        return $this->canDeleteOwnPost() && $post->authorId === $this->userId;
    }

    abstract public function getRoleName(): string;

    public function jsonSerialize(): array
    {
        return [
            'id' => $this->userId,
            'username' => $this->username,
            'email' => $this->email,
            'role' => $this->getRoleName(),
            'createdAt' => $this->createdAt,
        ];
    }
}
