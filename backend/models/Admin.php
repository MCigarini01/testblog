<?php
declare(strict_types=1);

namespace App\Models;


class Admin extends RegisteredUser
{
    public function getRoleName(): string
    {
        return 'admin';
    }

    public function canManageCategories(): bool
    {
        return true;
    }

    public function canManageTags(): bool
    {
        return true;
    }

    public function canManageUsers(): bool
    {
        return true;
    }

    public function canModerateComments(): bool
    {
        return true;
    }

    public function canDeleteAnyPost(): bool
    {
        return true;
    }

    public function canModifyPost(Post $post): bool
    {
        return true;
    }

    public function canDeletePost(Post $post): bool
    {
        return true;
    }
}
