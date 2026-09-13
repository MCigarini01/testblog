// MockCommentService.js

import CommentModel
from "../../models/CommentModel.js";

import PendingState
from "../../models/states/PendingState.js";

import ApprovedState
from "../../models/states/ApprovedState.js";

import RejectedState
from "../../models/states/RejectedState.js";

import commentsData from "../../pages/TestPosts/MockCommentsData.js";

export default class MockCommentService {

   constructor() {
    this.comments = commentsData;
    }

    async getAllComments() {

        return this.comments;
    }

    async getCommentsByPost(postId) {
    return this.comments.filter(
        comment =>
            comment.getPostId() == postId
    );
    }
    async getCommentById(
        commentId
    ) {

        return this.comments.find(

            comment =>

                comment.getId() ==
                commentId
        );
    }

    async createComment(
        commentData
    ) {

        const comment =
            new CommentModel(

                Date.now(),

                commentData.content,

                commentData.userId,

                commentData.postId
            );

        comment.setState(
            new PendingState()
        );

        this.comments.push(
            comment
        );

        return comment;
    }

    async approveComment(
        commentId
    ) {

        const comment =
            await this.getCommentById(
                commentId
            );

        if (
            comment
        ) {

            comment.setState(
                new ApprovedState()
            );
        }

        return comment;
    }

    async rejectComment(
        commentId
    ) {

       const comment =
            await this.getCommentById(
                commentId
            );

        if (
            comment
        ) {

            comment.setState(
                new RejectedState()
            );
            console.log(comment.getStatus())
        }

        return comment;
    }

    async deleteComment(
        commentId
    ) {

        this.comments =

            this.comments.filter(

                comment =>

                    comment.getId() !=
                    commentId
            );

        return true;
    }
}