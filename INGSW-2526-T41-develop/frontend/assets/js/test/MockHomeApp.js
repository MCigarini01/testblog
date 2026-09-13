// =====================================
// MODELS
// =====================================

import AuthModel from "../../../models/AuthModel.js";
import User from "../../../models/UserModel.js";
import RegistredUser from "../../../models/RegisteredUserModel.js";
import Editor from "../../../models/EditorModel.js";
import Admin from "../../../models/AdminModel.js";


// =====================================
// VIEWS
// =====================================

import HomeView from "../../../views/HomeView.js";
import NavbarView from "../../../views/NavbarView.js";
import CategoryView from "../../../views/CategoryView.js";
import TagView from "../../../views/TagView.js";


// =====================================
// PRESENTERS
// =====================================

import HomePresenter from "../../../presenters/HomePresenter.js";
import NavbarPresenter from "../../../presenters/NavbarPresenter.js";
import CategoryPresenter from "../../../presenters/CategoryPresenter.js";
import TagPresenter from "../../../presenters/TagPresenter.js";


// =====================================
// SERVICES
// =====================================

import MockPostService
    from "../../../services/MockServices/MockPostService.js";


// =====================================
// MOCK DATABASE
// =====================================

import tags
    from "../../../pages/TestPosts/MockTagDatabase.js";

import categories
    from "../../../pages/TestPosts/MockCategoryDatabase.js";


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

authModel.login(
    "mock-token",
    new Editor(
        3,
        "Daniele",
        "daniele@test.it",
        "hash",
        new Date()
    )
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
// SERVICES
// =====================================

const postService =
    new MockPostService();


// =====================================
// INIT
// =====================================

async function init() {

    try {

        // --------------------
        // LOAD POSTS
        // --------------------

        const posts =
            await postService
                .getAllPosts();

        homePresenter.loadHome(
            posts,
            categories,
            tags
        );

        // --------------------
        // NAVBAR
        // --------------------

        setTimeout(() => {

            navbarPresenter
                .configurePermissions();

        }, 100);

        const user =
        authModel.getLoggedUser();

        document.addEventListener(
            "showMyPosts",
            async () => {

                const user =
                    authModel.getLoggedUser();

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

                if (selectedTag) {

                    window.location.href =
                        `index.html?tag=${encodeURIComponent(
                            selectedTag.name
                        )}`;
                }
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

                if (selectedCategory) {

                    window.location.href =
                        `index.html?category=${encodeURIComponent(
                            selectedCategory.name
                        )}`;
                }
            }
        );

        // --------------------
        // SIDEBAR CATEGORY
        // --------------------

        categoryView.bindSelectCategory(
            categoryId => {

                const category =
                    categories.find(
                        c =>
                            c.id == categoryId
                    );

                if (!category) {
                    return;
                }

                categoryPresenter
                    .filterPostsByCategoryName(
                        category.name,
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