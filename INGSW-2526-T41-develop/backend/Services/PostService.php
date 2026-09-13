<?php
declare(strict_types=1);

namespace App\Services;

use App\Repositories\PostRepository;
use App\Repositories\CategoryRepository;
use App\Repositories\TagRepository;
use App\Models\Post;
use App\Models\RegisteredUser;


class PostService
{
    public function __construct(
        private PostRepository $postRepository,
        private CategoryRepository $categoryRepository,
        private TagRepository $tagRepository
    ) {
    }

    public function getAll(): array
    {
        return $this->postRepository->findAll();
    }

    public function getById(int $id): ?Post
    {
        return $this->postRepository->findById($id);
    }

    public function getByCategory(int $categoryId): array
    {
        return $this->postRepository->findByCategory($categoryId);
    }

    public function getByTag(int $tagId): array
    {
        return $this->postRepository->findByTag($tagId);
    }

    public function search(string $keyword): array
    {
        return $this->postRepository->search($keyword);
    }

    public function create(RegistredUser $author, array $data): Post
    {
        $post = new Post(
            postId: null,
            title: $data['title'],
            content: $data['content'],
            authorId: $author->userId,
            categoryId: $data['category'] ?? null
        );

        $saved = $this->postRepository->save($post);

        if (!empty($data['tags']) && is_array($data['tags'])) {
            foreach ($data['tags'] as $tagId) {
                $this->postRepository->attachTag($saved->postId, (int) $tagId);
            }
        }

        return $this->postRepository->findById($saved->postId);
    }

    public function update(Post $post, array $data): Post
    {
        $post->title = $data['title'] ?? $post->title;
        $post->content = $data['content'] ?? $post->content;
        $post->categoryId = $data['category'] ?? $post->categoryId;

        return $this->postRepository->save($post);
    }

    public function delete(int $id): void
    {
        $this->postRepository->delete($id);
    }

    public function canModify(RegistredUser $user, Post $post): bool
    {
        return $user->canModifyPost($post);
    }

    public function canDelete(RegistredUser $user, Post $post): bool
    {
        return $user->canDeletePost($post);
    }
}
