import UserManagementView
from "./UserManagementView.js";

import PostManagementView
from "./PostManagementView.js";

import CommentManagementView
from "./CommentManagementView.js";

import CategoryManagementView
from "./CategoryManagementView.js";

import TagManagementView
from "./TagManagementView.js";

export default class DashboardView {
    constructor() {
        /*
         * NAVIGAZIONE DASHBOARD
         */
        this.tabs =
            document.querySelectorAll(
                ".dashboard-tab"
            );

        this.sections =
            document.querySelectorAll(
                ".dashboard-section"
            );

        /*
         * CONTATORI
         */
        this.usersCount =
            document.getElementById(
                "users-count"
            );

        this.postsCount =
            document.getElementById(
                "posts-count"
            );

        this.commentsCount =
            document.getElementById(
                "comments-count"
            );

        this.categoriesCount =
            document.getElementById(
                "categories-count"
            );

        this.tagsCount =
            document.getElementById(
                "tags-count"
            );

        /*
         * MANAGEMENT VIEW
         */
        this.userManagementView =
            new UserManagementView(
                "users-container"
            );

        this.postManagementView =
            new PostManagementView(
                "posts-container"
            );

        this.commentManagementView =
            new CommentManagementView(
                "comments-container"
            );

        this.categoryManagementView =
            new CategoryManagementView(
                "categories-container"
            );

        this.tagManagementView =
            new TagManagementView(
                "tags-container"
            );

        /*
         * INIZIALIZZAZIONE
         */
        this.initializeTabs();
    }

    /*
     * NAVIGAZIONE TRA LE SEZIONI
     */
    initializeTabs() {
        this.tabs.forEach(
            tab => {
                tab.addEventListener(
                    "click",
                    () => {
                        const sectionId =
                            tab.dataset.section;

                        this.showSection(
                            sectionId
                        );
                    }
                );
            }
        );
    }

    showSection(sectionId) {
        this.tabs.forEach(
            tab => {
                const isActive =
                    tab.dataset.section ===
                    sectionId;

                tab.classList.toggle(
                    "active",
                    isActive
                );

                tab.setAttribute(
                    "aria-selected",
                    String(isActive)
                );
            }
        );

        this.sections.forEach(
            section => {
                const isActive =
                    section.id ===
                    sectionId;

                section.classList.toggle(
                    "active",
                    isActive
                );

                section.hidden =
                    !isActive;
            }
        );
    }

    /*
     * AGGIORNAMENTO CONTATORI
     */
    setUsersCount(count) {
        if (!this.usersCount) {
            return;
        }

        this.usersCount.textContent =
            count;
    }

    setPostsCount(count) {
        if (!this.postsCount) {
            return;
        }

        this.postsCount.textContent =
            count;
    }

    setCommentsCount(count) {
        if (!this.commentsCount) {
            return;
        }

        this.commentsCount.textContent =
            count;
    }

    setCategoriesCount(count) {
        if (!this.categoriesCount) {
            return;
        }

        this.categoriesCount.textContent =
            count;
    }

    setTagsCount(count) {
        if (!this.tagsCount) {
            return;
        }

        this.tagsCount.textContent =
            count;
    }

    /*
     * AGGIORNAMENTO COMPLETO RIEPILOGO
     */
    updateSummary({
        users = 0,
        posts = 0,
        comments = 0,
        categories = 0,
        tags = 0
    } = {}) {
        this.setUsersCount(
            users
        );

        this.setPostsCount(
            posts
        );

        this.setCommentsCount(
            comments
        );

        this.setCategoriesCount(
            categories
        );

        this.setTagsCount(
            tags
        );
    }
}
