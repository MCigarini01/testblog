<?php
declare(strict_types=1);

namespace App\Models;

class Tag implements \JsonSerializable
{
    public function __construct(
        public ?int $tagId,
        public string $tagName
    ) {
    }

    public function jsonSerialize(): array
    {
        return [
            'id' => $this->tagId,
            'name' => $this->tagName,
        ];
    }
}
