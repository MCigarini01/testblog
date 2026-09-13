import CommentPresenter
from "../../../presenters/CommentPresenter.js";

import CommentManagementView
from "../../../views/CommentManagementView.js";

import MockCommentService
from "../../../services/MockServices/MockCommentService.js";

const view =
    new CommentManagementView(
        "comments-container"
    );

const presenter =
    new CommentPresenter(
        view
    );

presenter.commentService =
    new MockCommentService();

view.bindApproveComment(
    presenter.approveComment.bind(
        presenter
    )
);

view.bindRejectComment(
    presenter.rejectComment.bind(
        presenter
    )
);

view.bindDeleteComment(
    presenter.deleteComment.bind(
        presenter
    )
);

document
    .getElementById(
        "showPendingBtn"
    )
    .addEventListener(
        "click",
        async () => {

            const comments =
                await presenter
                    .commentService
                    .getAllComments();

            view.render(
                presenter
                    .getPendingComments(
                        comments
                    )
            );
        }
    );

document
    .getElementById(
        "showApprovedBtn"
    )
    .addEventListener(
        "click",
        async () => {

            const comments =
                await presenter
                    .commentService
                    .getAllComments();

            view.render(
                presenter
                    .getApprovedComments(
                        comments
                    )
            );
        }
    );

document
    .getElementById(
        "showRejectedBtn"
    )
    .addEventListener(
        "click",
        async () => {

            const comments =
                await presenter
                    .commentService
                    .getAllComments();

            view.render(
                presenter
                    .getRejectedComments(
                        comments
                    )
            );
        }
    );

document
    .getElementById(
        "showAllBtn"
    )
    .addEventListener(
        "click",
        async () => {

            const comments =
                await presenter
                    .commentService
                    .getAllComments();

            view.render(
                comments
            );
        }
    );

presenter.loadComments();