// CategoryService.js

export default class CategoryService {

    constructor(apiService) {
        this.apiService = apiService;
    }

    getAllCategories() {
        return this.apiService.get(
            "/categories"
        );
    }

    getCategoryById(categoryId) {
        return this.apiService.get(
            `/categories/${categoryId}`
        );
    }

    createCategory(category) {
        return this.apiService.post(
            "/categories",
            category
        );
    }

    updateCategory(category) {
        return this.apiService.put(
            `/categories/${category.id}`,
            category
        );
    }

    deleteCategory(categoryId) {
        return this.apiService.delete(
            `/categories/${categoryId}`
        );
    }
}