<?php
declare(strict_types=1);

namespace App\Controllers;

use App\Services\PostService;
use App\Services\AuthService;


class PostController extends Controller
{
    public function __construct(
        AuthService $authService,
        private PostService $postService
    ) {
        parent::__construct($authService);
    }


    public function index(): void
    {
        $categoryId = $_GET['category'] ?? null;
        $tagId = $_GET['tag'] ?? null;
        $query = $_GET['keyword'] ?? null;

        if ($query !== null) {
            $posts = $this->postService->search($query);
        } elseif ($categoryId !== null) {
            $posts = $this->postService->getByCategory((int) $categoryId);
        } elseif ($tagId !== null) {
            $posts = $this->postService->getByTag((int) $tagId);
        } else {
            $posts = $this->postService->getAll();
        }

        $this->jsonResponse(['posts' => $posts], 200);
    }


    public function show(int $id): void
    {
        $post = $this->postService->getById($id);

        if ($post === null) {
            $this->jsonResponse(['error' => 'Post non trovato'], 404);
            return;
        }

        $this->jsonResponse(['post' => $post], 200);
    }

 
    public function store(): void
    {
        $user = $this->requireAuthenticatedUser();
        if ($user === null) {
            return;
        }

        if (!$user->canCreateOwnPost()) {
            $this->jsonResponse(['error' => 'Permesso negato'], 403);
            return;
        }

        $body = $this->getJsonBody();
        if (empty($body['title']) || empty($body['content'])) {
            $this->jsonResponse(['error' => 'Dati non validi'], 400);
            return;
        }

        $post = $this->postService->create($user, $body);
        $this->jsonResponse(['post' => $post], 201);
    }


    public function update(int $id): void
    {
        $user = $this->requireAuthenticatedUser();
        if ($user === null) {
            return;
        }

        $post = $this->postService->getById($id);
        if ($post === null) {
            $this->jsonResponse(['error' => 'Post non trovato'], 404);
            return;
        }

        if (!$this->postService->canModify($user, $post)) {
            $this->jsonResponse(['error' => 'Permesso negato'], 403);
            return;
        }

        $body = $this->getJsonBody();
        $updated = $this->postService->update($post, $body);

        $this->jsonResponse(['post' => $updated], 200);
    }


    public function destroy(int $id): void
    {
        $user = $this->requireAuthenticatedUser();
        if ($user === null) {
            return;
        }

        $post = $this->postService->getById($id);
        if ($post === null) {
            $this->jsonResponse(['error' => 'Post non trovato'], 404);
            return;
        }

        if (!$this->postService->canDelete($user, $post)) {
            $this->jsonResponse(['error' => 'Permesso negato'], 403);
            return;
        }

        $this->postService->delete($id);
        $this->jsonResponse(['message' => 'Post eliminato'], 200);
    }
}
