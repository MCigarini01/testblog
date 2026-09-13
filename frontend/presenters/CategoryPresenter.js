// CategoryPresenter.js

import CategoryService
from "../services/MockServices/MockCategoryService.js";

import ApiService
from "../services/ApiService.js";

export default class CategoryPresenter {

    constructor(
        managementView = null
    ) {

        this.categoryService =
            new CategoryService(
                ApiService
            );

        this.managementView =
            managementView;
    }
    filterPostsByCategoryName(
        categoryName,
        posts,
        categories,
        homeView
    ) {
        const category =
            categories.find(
                c =>
                    c.name.toLowerCase() ===
                    categoryName.toLowerCase()
            );

        if (!category) {
            homeView.showEmptyState();
            return;
        }

        const filteredPosts =
            posts.filter(
                post =>
                    post.categoryId ==
                    category.id
            );

        homeView.setTitle(
            `Categoria: ${category.name}`
        );

        homeView.render(
            filteredPosts
        );
    }
    /*
     * LISTA CATEGORIE
     */
    async loadCategories() {

        try {

            const categories =
                await this.categoryService
                    .getAllCategories();

            if (this.managementView) {

                this.managementView.render(
                    categories
                );
            }
            return categories;

        } catch (error) {

            console.error(error);

            if (this.managementView) {

                this.managementView.showError(
                    "Errore caricamento categorie"
                );
            }
            return [];
        }
    }

    /*
     * CREAZIONE CATEGORIA
     */
    async createCategory(categoryData) {
        try {

            const category =
                await this.categoryService
                    .createCategory(
                        categoryData
                    );

            if (this.managementView) {

                this.managementView.showSuccess(
                    "Categoria creata"
                );

                const categories =
                    await this.categoryService
                        .getAllCategories();

                this.managementView.render(
                    categories
                );
            }

            return category;

        } catch (error) {

            console.error(error);

            if (this.managementView) {

                this.managementView.showError(
                    "Errore creazione categoria"
                );
            }
        }
    }

    /*
     * MODIFICA CATEGORIA
     */
    async updateCategory(
        categoryData
    ) {

        try {

            const category =
                await this.categoryService
                    .updateCategory(
                        categoryData
                    );

            if (this.managementView) {

                this.managementView.showSuccess(
                    "Categoria aggiornata"
                );

                const categories =
                    await this.categoryService
                        .getAllCategories();

                this.managementView.render(
                    categories
                );
            }

            return category;

        } catch (error) {

            console.error(error);

            if (this.managementView) {

                this.managementView.showError(
                    "Errore aggiornamento categoria"
                );
            }
        }
    }

    /*
     * ELIMINAZIONE CATEGORIA
     */
    async deleteCategory(
        categoryId
    ) {

        try {

            await this.categoryService
                .deleteCategory(
                    categoryId
                );

            if (this.managementView) {

                this.managementView.showSuccess(
                    "Categoria eliminata"
                );

                const categories =
                    await this.categoryService
                        .getAllCategories();

                this.managementView.render(
                    categories
                );
            }

        } catch (error) {

            console.error(error);

            if (this.managementView) {

                this.managementView.showError(
                    "Errore eliminazione categoria"
                );
            }
        }
    }
    async getAll() {
    return await this.categoryService.getAllCategories();
}
}