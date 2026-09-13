<?php
declare(strict_types=1);

namespace App\Models;


class Editor extends RegisteredUser
{
    public function getRoleName(): string
    {
        return 'editor';
    }
}
