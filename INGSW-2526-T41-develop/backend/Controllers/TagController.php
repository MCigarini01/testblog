<?php
declare(strict_types=1);

namespace App\Controllers;

use App\Services\TagService;
use App\Services\AuthService;


class TagController extends Controller
{
    public function __construct(
        AuthService $authService,
        private TagService $tagService
    ) {
        parent::__construct($authService);
    }

 
    public function index(): void
    {
        $this->jsonResponse(['tags' => $this->tagService->getAll()], 200);
    }

 
    public function show(int $id): void
    {
        $tag = $this->tagService->getById($id);

        if ($tag === null) {
            $this->jsonResponse(['error' => 'Tag non trovato'], 404);
            return;
        }

        $this->jsonResponse(['tag' => $tag], 200);
    }


    public function store(): void
    {
        $user = $this->requireAuthenticatedUser();
        if ($user === null) {
            return;
        }

        if (!$user->canManageTags()) {
            $this->jsonResponse(['error' => 'Permesso negato'], 403);
            return;
        }

        $body = $this->getJsonBody();
        if (empty($body['name'])) {
            $this->jsonResponse(['error' => 'Nome tag obbligatorio'], 400);
            return;
        }

        $tag = $this->tagService->create($body['name']);
        $this->jsonResponse(['tag' => $tag], 201);
    }

   
    public function update(int $id): void
    {
        $user = $this->requireAuthenticatedUser();
        if ($user === null) {
            return;
        }

        if (!$user->canManageTags()) {
            $this->jsonResponse(['error' => 'Permesso negato'], 403);
            return;
        }

        $body = $this->getJsonBody();
        $tag = $this->tagService->update($id, $body['name'] ?? '');

        if ($tag === null) {
            $this->jsonResponse(['error' => 'Tag non trovato'], 404);
            return;
        }

        $this->jsonResponse(['tag' => $tag], 200);
    }

  
    public function destroy(int $id): void
    {
        $user = $this->requireAuthenticatedUser();
        if ($user === null) {
            return;
        }

        if (!$user->canManageTags()) {
            $this->jsonResponse(['error' => 'Permesso negato'], 403);
            return;
        }

        $this->tagService->delete($id);
        $this->jsonResponse(['message' => 'Tag eliminato'], 200);
    }
}
