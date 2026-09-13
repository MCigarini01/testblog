<?php
declare(strict_types=1);

namespace App\Models;

class Category implements \JsonSerializable
{
    public function __construct(
        public ?int $categoryId,
        public string $categoryName
    ) {
    }

 
    public function jsonSerialize(): array
    {
        return [
            'id' => $this->categoryId,
            'name' => $this->categoryName,
        ];
    }
}
