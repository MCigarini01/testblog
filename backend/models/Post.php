<?php
declare(strict_types=1);

namespace App\Models;

class Post implements \JsonSerializable
{
    public function __construct(
        public ?int $postId,
        public string $title,
        public string $content,
        public int $authorId,
        public ?int $categoryId,
		public ?string $image = null,
        public ?string $createdAt = null,
        public array $tags = []
    ) {
    }

    public function publish(): void
    {
       
    }

    public function updateContent(string $title, string $content): void
    {
        $this->title = $title;
        $this->content = $content;
    }

    public function addTag(int $tagId): void
    {
        if (!in_array($tagId, $this->tags, true)) {
            $this->tags[] = $tagId;
        }
       
    }

    public function addCategory(int $categoryId): void
    {
        $this->categoryId = $categoryId;
    }


    public function jsonSerialize(): array
    {
        return [
            'id' => $this->postId,
            'title' => $this->title,
            'content' => $this->content,
            'category' => $this->categoryId,
            'tags' => $this->tags,
            'author' => $this->authorId,
            'createdAt' => $this->createdAt,
            'image' => $this->image,
        ];
    }
}
