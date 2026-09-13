<?php
declare(strict_types=1);

namespace App\Services;

use App\Repositories\CategoryRepository;
use App\Models\Category;


class CategoryService
{
    public function __construct(private CategoryRepository $categoryRepository)
    {
    }

    public function getAll(): array
    {
        return $this->categoryRepository->findAll();
    }

    public function getById(int $id): ?Category
    {
        return $this->categoryRepository->findById($id);
    }

    public function create(string $name): Category
    {
        $category = new Category(categoryId: null, categoryName: $name);
        return $this->categoryRepository->save($category);
    }

    public function update(int $id, string $name): ?Category
    {
        $category = $this->categoryRepository->findById($id);
        if ($category === null) {
            return null;
        }

        $category->categoryName = $name;
        return $this->categoryRepository->save($category);
    }

    public function delete(int $id): void
    {
        $this->categoryRepository->delete($id);
    }
}
