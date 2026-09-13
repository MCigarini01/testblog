// CommentModel.js

import PendingState
from "./states/PendingState.js";

export default class CommentModel {

    constructor(
        id,
        content,
        userId,
        postId,
        createdAt = null
    ) {

        this.id =
            id;

        this.content =
            content;

        this.userId =
            userId;

        this.postId =
            postId;

        this.createdAt =
            createdAt;

        this.state =
            new PendingState();
    }

    getId() {

        return this.id;
    }

    setId(id) {

        this.id =
            id;
    }

    getContent() {

        return this.content;
    }

    setContent(content) {

        this.content =
            content;
    }

    getUserId() {

        return this.userId;
    }

    setUserId(userId) {

        this.userId =
            userId;
    }

    getPostId() {

        return this.postId;
    }

    setPostId(postId) {

        this.postId =
            postId;
    }

    getCreatedAt() {

        return this.createdAt;
    }

    setCreatedAt(createdAt) {

        this.createdAt =
            createdAt;
    }

    getState() {

        return this.state;
    }

    setState(state) {

        this.state =
            state;
    }

    getStatus() {

        return this.state
            .getName();
    }
}