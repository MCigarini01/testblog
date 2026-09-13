// ======================================
// IMPORT VIEW
// ======================================

import PostDetailView
    from "../../../views/PostDetailView.js";

import NavbarView
    from "../../../views/NavbarView.js";

// ======================================
// IMPORT PRESENTER
// ======================================

import NavbarPresenter
    from "../../../presenters/NavbarPresenter.js";

import CommentPresenter
    from "../../../presenters/CommentPresenter.js";

// ======================================
// IMPORT SERVICES
// ======================================

import MockCommentService
    from "../../../services/MockServices/MockCommentService.js";

import PostService
    from "../../../services/MockServices/MockPostService.js";

// ======================================
// IMPORT MOCK DATA
// ======================================

import tags
    from "../../../pages/TestPosts/MockTagDatabase.js";

import categories
    from "../../../pages/TestPosts/MockCategoryDatabase.js";

// ======================================
// IMPORT MODELS
// ======================================

import AuthModel
    from "../../../models/AuthModel.js";

import User
    from "../../../models/UserModel.js";

import RegistredUser
    from "../../../models/RegisteredUserModel.js";

import Editor
    from "../../../models/EditorModel.js";

import Admin
    from "../../../models/AdminModel.js";

// ======================================
// VIEW
// ======================================

const detailView =
    new PostDetailView();

const navbarView =
    new NavbarView();

// ======================================
// AUTH
// ======================================

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

// ======================================
// PRESENTERS
// ======================================

const commentPresenter =
    new CommentPresenter(
        null,
        detailView
    );

commentPresenter.commentService =
    new MockCommentService();

const navbarPresenter =
    new NavbarPresenter(
        navbarView,
        authModel
    );

// ======================================
// SERVICES
// ======================================

const postService =
    new PostService();

// ======================================
// INIT
// ======================================

async function init() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const postId =
        params.get("id") || 1;

    try {

        const post =
            await postService.getPostById(
                postId
            );

        post.tagNames =
            post.tags
                .map(
                    tagId =>
                        tags.find(
                            tag =>
                                tag.id === tagId
                        )?.name
                )
                .filter(Boolean);

        detailView.render(
            post
        );

        setTimeout(() => {

            navbarPresenter
                .configurePermissions();

        }, 100);

        await commentPresenter
            .loadCommentsByPost(
                Number(postId)
            );

        detailView.bindCreateComment(
            commentPresenter
                .createComment
                .bind(
                    commentPresenter
                )
        );

    } catch (error) {

        detailView.showError(
            "Errore caricamento articolo"
        );

        console.error(
            error
        );
    }
}

init();