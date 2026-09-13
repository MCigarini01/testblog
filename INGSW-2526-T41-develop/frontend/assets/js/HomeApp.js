// HomeApp.js

// =====================================
// MODELS
// =====================================
import AuthModel
    from "../../../models/AuthModel.js";

// =====================================
// VIEWS
// =====================================
import HomeView
    from "../../../views/HomeView.js";

import NavbarView
    from "../../../views/NavbarView.js";

import CategoryView
    from "../../../views/CategoryView.js";

import TagView
    from "../../../views/TagView.js";

// =====================================
// PRESENTERS
// =====================================
import HomePresenter
    from "../../../presenters/HomePresenter.js";

import NavbarPresenter
    from "../../../presenters/NavbarPresenter.js";

import CategoryPresenter
    from "../../../presenters/CategoryPresenter.js";

import TagPresenter
    from "../../../presenters/TagPresenter.js";

// =====================================
// SERVICES
// =====================================
import ApiService
    from "../../../services/ApiService.js";

import PostService
    from "../../../services/PostService.js";

import CategoryService
    from "../../../services/CategoryService.js";

import TagService
    from "../../../services/TagService.js";

// =====================================
// VIEWS
// =====================================
const homeView =
    new HomeView(
        "featured-posts"
    );

const categoryView =
    new CategoryView(
        "categories-container"
    );

const tagView =
    new TagView(
        "tags-container"
    );

const navbarView =
    new NavbarView();

// =====================================
// AUTH
// =====================================
const authModel =
    new AuthModel();

// =====================================
// API SERVICE
// =====================================
const apiService =
    new ApiService();

// =====================================
// SERVICES
// =====================================
const postService =
    new PostService(
        apiService
    );

const categoryService =
    new CategoryService(
        apiService
    );

const tagService =
    new TagService(
        apiService
    );

// =====================================
// PRESENTERS
// =====================================
const categoryPresenter =
    new CategoryPresenter();

const tagPresenter =
    new TagPresenter();

const navbarPresenter =
    new NavbarPresenter(
        navbarView,
        authModel
    );

const homePresenter =
    new HomePresenter(
        homeView,
        categoryView,
        tagView
    );

// =====================================
// INIT
// =====================================
async function init() {
    try {
        // --------------------
        // LOAD DATA
        // --------------------
        const [
            posts,
            categories,
            tags
        ] = await Promise.all([
            postService.getAllPosts(),
            categoryService.getAllCategories(),
            tagService.getAllTags()
        ]);

        // --------------------
        // LOAD HOME
        // --------------------
        homePresenter.loadHome(
            posts,
            categories,
            tags
        );

        // --------------------
        // NAVBAR
        // --------------------
        setTimeout(
            () => {
                navbarPresenter
                    .configurePermissions();
            },
            100
        );

        // --------------------
        // MY POSTS
        // --------------------
        document.addEventListener(
            "showMyPosts",
            () => {
                const user =
                    authModel.getLoggedUser();

                if (!user) {
                    return;
                }

                const filteredPosts =
                    homePresenter.postsForView.filter(
                        post =>
                            post.userId == user.id
                    );

                homeView.render(
                    filteredPosts
                );
            }
        );

        // --------------------
        // URL PARAMETERS
        // --------------------
        const params =
            new URLSearchParams(
                window.location.search
            );

        const categoryName =
            params.get(
                "category"
            );

        const tagName =
            params.get(
                "tag"
            );

        if (categoryName) {
            categoryPresenter
                .filterPostsByCategoryName(
                    categoryName,
                    homePresenter.postsForView,
                    categories,
                    homeView
                );
        } else if (tagName) {
            tagPresenter
                .filterPostsByTagName(
                    tagName,
                    homePresenter.postsForView,
                    tags,
                    homeView
                );
        }

        // --------------------
        // POST CARD TAGS
        // --------------------
        homeView.bindTagClick(
            tagId => {
                const selectedTag =
                    tags.find(
                        tag =>
                            tag.id == tagId
                    );

                if (!selectedTag) {
                    return;
                }

                window.location.href =
                    `index.html?tag=${encodeURIComponent(
                        selectedTag.name
                    )}`;
            }
        );

        // --------------------
        // POST CARD CATEGORIES
        // --------------------
        homeView.bindCategoryClick(
            categoryId => {
                const selectedCategory =
                    categories.find(
                        category =>
                            category.id == categoryId
                    );

                if (!selectedCategory) {
                    return;
                }

                window.location.href =
                    `index.html?category=${encodeURIComponent(
                        selectedCategory.name
                    )}`;
            }
        );

        // --------------------
        // SIDEBAR CATEGORY
        // --------------------
        categoryView.bindSelectCategory(
            categoryId => {
                const selectedCategory =
                    categories.find(
                        category =>
                            category.id == categoryId
                    );

                if (!selectedCategory) {
                    return;
                }

                categoryPresenter
                    .filterPostsByCategoryName(
                        selectedCategory.name,
                        homePresenter.postsForView,
                        categories,
                        homeView
                    );
            }
        );

        // --------------------
        // SIDEBAR TAG
        // --------------------
        tagView.bindSelectTag(
            tagId => {
                const selectedTag =
                    tags.find(
                        tag =>
                            tag.id == tagId
                    );

                if (!selectedTag) {
                    return;
                }

                tagPresenter
                    .filterPostsByTagName(
                        selectedTag.name,
                        homePresenter.postsForView,
                        tags,
                        homeView
                    );
            }
        );

        // --------------------
        // CLEAR FILTERS
        // --------------------
        const clearButton =
            document.getElementById(
                "clearFiltersBtn"
            );

        if (clearButton) {
            clearButton.addEventListener(
                "click",
                () => {
                    homePresenter
                        .clearFilters();
                }
            );
        }
    } catch (error) {
        console.error(
            "Errore caricamento home:",
            error
        );

        homeView.showError(
            "Impossibile caricare gli articoli."
        );
    }
}

init();