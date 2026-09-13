// CommentPresenter.js

import CommentService
from "../services/CommentService.js";

import ApiService
from "../services/ApiService.js";

import PendingState
from "../models/states/PendingState.js";

import ApprovedState
from "../models/states/ApprovedState.js";

import RejectedState
from "../models/states/RejectedState.js";

import users from "../pages/TestPosts/MockUserData.js";

export default class CommentPresenter {

    constructor(
        managementView = null,
        detailView = null
    ) {

        this.commentService =
            new CommentService(
                ApiService
            );

        this.managementView =
            managementView;

        this.detailView =
            detailView;
    }

    async loadComments() {

        try {

            const comments =
                await this.commentService
                    .getAllComments();

            if (
                this.managementView
            ) {

                this.managementView
                    .render(
                        comments
                    );
            }

            if (
                this.detailView
            ) {

                this.detailView
                    .renderComments(
                        comments
                    );
            }
            return comments;

        } catch (
            error
        ) {

            console.error(
                error
            );

            if (
                this.managementView
            ) {

                this.managementView
                    .showError(
                        "Errore caricamento commenti"
                    );
            }

            if (
                this.detailView
            ) {

                this.detailView
                    .showCommentError(
                        "Errore caricamento commenti"
                    );
            }
            return [];
        }
    }

async loadCommentsByPost(postId) {

    const comments =
        await this.commentService
            .getCommentsByPost(postId);

    const approvedComments =
        comments.filter(
            comment =>
                comment.getState()
                    instanceof ApprovedState
        );

    const commentsForView =
        approvedComments.map(comment => ({

            author:
                users.find(
                    user =>
                        user.id ===
                        comment.getUserId()
                )?.name ??
                "Utente sconosciuto",

            content:
                comment.getContent(),

            createdAt:
                comment.getCreatedAt()

        }));

    this.detailView
        .renderComments(
            commentsForView
        );
}
    async createComment(
        commentData
    ) {

        try {

            const comment =
                await this.commentService
                    .createComment(
                        commentData
                    );

            if (
                this.detailView
            ) {

                const comments =
                await this.commentService
                    .getCommentsByPost(commentData.postId);

                this.detailView.renderComments(comments);
                        }

            return comment;

        } catch (
            error
        ) {

            console.error(
                error
            );

            if (
                this.detailView
            ) {

                this.detailView
                    .showCommentError(
                        "Errore creazione commento"
                    );
            }
        }
    }

    async approveComment(
        commentId
    ) {

        try {

                await this.commentService
                    .approveComment(
                        commentId
                    );

            if (
                this.managementView
            ) {

                this.managementView
                    .showSuccess(
                        "Commento approvato"
                    );

                const comments =
                    await this.commentService
                        .getAllComments();

                this.managementView
                    .render(
                        comments
                    );
            }

        } catch (
            error
        ) {

            console.error(
                error
            );

            if (
                this.managementView
            ) {

                this.managementView
                    .showError(
                        "Errore approvazione commento"
                    );
            }
        }
    }

    async rejectComment(
        commentId
    ) {

        try {

            await this.commentService
                .rejectComment(
                    commentId
                );
            if (
                this.managementView
            ) {

                this.managementView
                    .showSuccess(
                        "Commento rifiutato"
                    );

                const comments =
                    await this.commentService
                        .getAllComments();

                this.managementView
                    .render(
                        comments
                    );
            }

        } catch (
            error
        ) {

            console.error(
                error
            );

            if (
                this.managementView
            ) {

                this.managementView
                    .showError(
                        "Errore rifiuto commento"
                    );
            }
        }
    }

    async deleteComment(
        commentId
    ) {

        try {

            await this.commentService
                .deleteComment(
                    commentId
                );

            if (
                this.managementView
            ) {

                this.managementView
                    .showSuccess(
                        "Commento eliminato"
                    );

                const comments =
                    await this.commentService
                        .getAllComments();

                this.managementView
                    .render(
                        comments
                    );
            }

        } catch (
            error
        ) {

            console.error(
                error
            );

            if (
                this.managementView
            ) {

                this.managementView
                    .showError(
                        "Errore eliminazione commento"
                    );
            }
        }
    }

    getPendingComments(
        comments
    ) {

        return comments.filter(
            comment =>
                comment.getState()
                    instanceof PendingState
        );
    }

    getApprovedComments(
        comments
    ) {

        return comments.filter(
            comment =>
                comment.getState()
                    instanceof ApprovedState
        );
    }

    getRejectedComments(
        comments
    ) {

        return comments.filter(
            comment =>
                comment.getState()
                    instanceof RejectedState
        );
    }
}