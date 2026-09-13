<?php
declare(strict_types=1);

namespace App\Models;

/**
 * User (astratta)
 */
abstract class User
{
    public function canViewPost(): bool
    {
        return true;
    }

    public function canSearchPost(): bool
    {
        return true;
    }

    public function canNavigateForFilter(): bool
    {
        return true;
    }
}
