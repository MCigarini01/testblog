// MockDashboardApp.js

import DashboardView
from "../../../views/DashboardView.js";

import UserPresenter
from "../../../presenters/UserPresenter.js";

import PostPresenter
from "../../../presenters/PostPresenter.js";

import CategoryPresenter
from "../../../presenters/CategoryPresenter.js";

import TagPresenter
from "../../../presenters/TagPresenter.js";

import CommentPresenter
from "../../../presenters/CommentPresenter.js";

import MockUserService
from "../../../services/MockServices/MockUserService.js";

import MockCommentService
from "../../../services/MockServices/MockCommentService.js";

import AuthModel
from "../../../models/AuthModel.js";

import Admin
from "../../../models/AdminModel.js";

import NavbarView
from "../../../views/NavbarView.js";

import NavbarPresenter
from "../../../presenters/NavbarPresenter.js";

/*
 * INIZIALIZZAZIONE DASHBOARD
 */
const dashboardView =
    new DashboardView();

/*
 * INIZIALIZZAZIONE USER PRESENTER
 */
const userPresenter =
    new UserPresenter(
        dashboardView
            .userManagementView
    );

userPresenter.userService =
    new MockUserService();

dashboardView
    .postManagementView
    .bindViewPost();

/*
 * INIZIALIZZAZIONE NAVBAR
 */
const navbarView =
    new NavbarView();

const authModel =
    new AuthModel();

authModel.login(
    "mock-token",
    new Admin(
        1,
        "Daniele",
        "daniele@test.it",
        "hash",
        new Date()
    )
);

const navbarPresenter =
    new NavbarPresenter(
        navbarView,
        authModel
    );

/*
 * COLLEGAMENTO ELIMINAZIONE UTENTE
 */
dashboardView
    .userManagementView
    .bindDeleteUser(
        userPresenter
            .deleteUser
            .bind(
                userPresenter
            )
    );

/*
 * COLLEGAMENTO PROMOZIONE UTENTE
 */
dashboardView
    .userManagementView
    .bindPromoteToAdmin(
        userPresenter
            .promoteToAdmin
            .bind(
                userPresenter
            )
    );

/*
 * INIZIALIZZAZIONE POST PRESENTER
 */
const postPresenter =
    new PostPresenter(
        null,
        null,
        null,
        dashboardView
            .postManagementView
    );

/*
 * COLLEGAMENTO ELIMINAZIONE POST
 */
dashboardView
    .postManagementView
    .bindDeletePost(
        postPresenter
            .deletePost
            .bind(
                postPresenter
            )
    );

/*
 * INIZIALIZZAZIONE COMMENT PRESENTER
 */
const commentPresenter =
    new CommentPresenter(
        dashboardView
            .commentManagementView
    );

commentPresenter.commentService =
    new MockCommentService();
/*
 * COLLEGAMENTO APPROVAZIONE COMMENTO
 */
dashboardView
    .commentManagementView
    .bindApproveComment(
        commentPresenter
            .approveComment
            .bind(
                commentPresenter
            )
    );

/*
 * COLLEGAMENTO RIFIUTO COMMENTO
 */
dashboardView
    .commentManagementView
    .bindRejectComment(
        commentPresenter
            .rejectComment
            .bind(
                commentPresenter
            )
    );

/*
 * COLLEGAMENTO ELIMINAZIONE COMMENTO
 */
dashboardView
    .commentManagementView
    .bindDeleteComment(
        commentPresenter
            .deleteComment
            .bind(
                commentPresenter
            )
    );

/*
 * INIZIALIZZAZIONE CATEGORY PRESENTER
 */
const categoryPresenter =
    new CategoryPresenter(
        dashboardView
            .categoryManagementView
    );

/*
 * COLLEGAMENTO CREAZIONE CATEGORIA
 */
dashboardView
    .categoryManagementView
    .bindCreateCategory(
        categoryPresenter
            .createCategory
            .bind(
                categoryPresenter
            )
    );

/*
 * COLLEGAMENTO ELIMINAZIONE CATEGORIA
 */
dashboardView
    .categoryManagementView
    .bindDeleteCategory(
        categoryPresenter
            .deleteCategory
            .bind(
                categoryPresenter
            )
    );

/*
 * INIZIALIZZAZIONE TAG PRESENTER
 */
const tagPresenter =
    new TagPresenter(
        dashboardView
            .tagManagementView
    );

/*
 * COLLEGAMENTO CREAZIONE TAG
 */
dashboardView
    .tagManagementView
    .bindCreateTag(
        tagPresenter
            .createTag
            .bind(
                tagPresenter
            )
    );

/*
 * COLLEGAMENTO ELIMINAZIONE TAG
 */
dashboardView
    .tagManagementView
    .bindDeleteTag(
        tagPresenter
            .deleteTag
            .bind(
                tagPresenter
            )
    );

/*
 * CARICAMENTO INIZIALE E CONTATORI
 */
async function initializeDashboard() {
    try {
        const [
            users,
            posts,
            comments,
            categories,
            tags
        ] = await Promise.all([
            userPresenter.loadUsers(),
            postPresenter.loadPosts(),
            commentPresenter.loadComments(),
            categoryPresenter.loadCategories(),
            tagPresenter.loadTags()
        ]);

        dashboardView.updateSummary({
            users:
                users.length,
            posts:
                posts.length,
            comments:
                comments.length,
            categories:
                categories.length,
            tags:
                tags.length
        });
    } catch (error) {
        console.error(
            "Errore inizializzazione dashboard:",
            error
        );
    }
}

initializeDashboard();

/*
 * CONFIGURAZIONE NAVBAR
 */
setTimeout(
    () => {
        navbarPresenter
            .configurePermissions();
    },
    100
);