// CommentService.js

import ApprovedState
from "../models/states/ApprovedState.js";

import RejectedState
from "../models/states/RejectedState.js";

export default class CommentService {

    constructor(
        apiService
    ) {

        this.apiService =
            apiService;
    }

    getAllComments() {

        return this.apiService.get(
            "/comments"
        );
    }

    getCommentById(
        commentId
    ) {

        return this.apiService.get(
            `/comments/${commentId}`
        );
    }

    createComment(
        comment
    ) {

        return this.apiService.post(
            "/comments",
            comment
        );
    }

    approveComment(
        comment
    ) {

        comment.setState(
            new ApprovedState()
        );

        return comment;
    }

    rejectComment(
        comment
    ) {
        comment.setState(
            new RejectedState()
        );
        return comment;
    }

    deleteComment(
        commentId
    ) {

        return this.apiService.delete(
            `/comments/${commentId}`
        );
    }
}