// MockCategoryService.js

import categories
    from "../../pages/TestPosts/MockCategoryDatabase.js";

export default class MockCategoryService {

    async getAllCategories() {
        return categories;
    }

    async getCategoryById(categoryId) {
        return categories.find(
            category => category.id == categoryId
        );
    }

    async createCategory(category) {
        return category;
    }

    async updateCategory(category) {
        return category;
    }

    async deleteCategory(categoryId) {
        return true;
    }
}