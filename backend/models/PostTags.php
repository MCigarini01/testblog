<?php
declare(strict_types=1);

namespace App\Models;


class PostTags
{
    public function __construct(
        public int $postId,
        public int $tagId
    ) {
    }
}
