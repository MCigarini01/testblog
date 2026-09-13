<?php
declare(strict_types=1);

namespace App\Controllers;

use App\Services\CategoryService;
use App\Services\AuthService;

/**
 * CategoryController
 */
class CategoryController extends Controller
{
    public function __construct(
        AuthService $authService,
        private CategoryService $categoryService
    ) {
        parent::__construct($authService);
    }

    /**
     * GET /categories
     */
    public function index(): void
    {
        $this->jsonResponse(['categories' => $this->categoryService->getAll()], 200);
    }

    /**
     * GET /categories/{id}
     */
    public function show(int $id): void
    {
        $category = $this->categoryService->getById($id);

        if ($category === null) {
            $this->jsonResponse(['error' => 'Categoria non trovata'], 404);
            return;
        }

        $this->jsonResponse(['category' => $category], 200);
    }

    /**
     * POST /categories
     */
    public function store(): void
    {
        $user = $this->requireAuthenticatedUser();
        if ($user === null) {
            return;
        }

        if (!$user->canManageCategories()) {
            $this->jsonResponse(['error' => 'Permesso negato'], 403);
            return;
        }

        $body = $this->getJsonBody();
        if (empty($body['name'])) {
            $this->jsonResponse(['error' => 'Nome categoria obbligatorio'], 400);
            return;
        }

        $category = $this->categoryService->create($body['name']);
        $this->jsonResponse(['category' => $category], 201);
    }

    /**
     * PUT /categories/{id}
     */
    public function update(int $id): void
    {
        $user = $this->requireAuthenticatedUser();
        if ($user === null) {
            return;
        }

        if (!$user->canManageCategories()) {
            $this->jsonResponse(['error' => 'Permesso negato'], 403);
            return;
        }

        $body = $this->getJsonBody();
        $category = $this->categoryService->update($id, $body['name'] ?? '');

        if ($category === null) {
            $this->jsonResponse(['error' => 'Categoria non trovata'], 404);
            return;
        }

        $this->jsonResponse(['category' => $category], 200);
    }

    /**
     * DELETE /categories/{id}
     */
    public function destroy(int $id): void
    {
        $user = $this->requireAuthenticatedUser();
        if ($user === null) {
            return;
        }

        if (!$user->canManageCategories()) {
            $this->jsonResponse(['error' => 'Permesso negato'], 403);
            return;
        }

        $this->categoryService->delete($id);
        $this->jsonResponse(['message' => 'Categoria eliminata'], 200);
    }
}
