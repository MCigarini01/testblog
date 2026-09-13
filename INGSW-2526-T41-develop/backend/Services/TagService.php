<?php
declare(strict_types=1);

namespace App\Services;

use App\Repositories\TagRepository;
use App\Models\Tag;


class TagService
{
    public function __construct(private TagRepository $tagRepository)
    {
    }

    public function getById(int $id): ?Tag
    {
        return $this->tagRepository->findById($id);
    }

    public function getAll(): array
    {
        return $this->tagRepository->findAll();
    }

    public function create(string $name): Tag
    {
        $tag = new Tag(tagId: null, tagName: $name);
        return $this->tagRepository->save($tag);
    }

    public function update(int $id, string $name): ?Tag
    {
        $tag = $this->tagRepository->findById($id);
        if ($tag === null) {
            return null;
        }

        $tag->tagName = $name;
        return $this->tagRepository->save($tag);
    }

    public function delete(int $id): void
    {
        $this->tagRepository->delete($id);
    }
}
