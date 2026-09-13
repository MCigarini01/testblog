// RegisteredUserModel.js
import User from "./UserModel.js";

export default class RegisteredUser extends User {

    constructor(
        id,
        username,
        email,
        passwordHash,
        createdAt
    ) {

        super();

        if (new.target === RegisteredUser) {
            throw new Error(
                "RegisteredUser è una classe astratta"
            );
        }

        this.id = id;
        this.username = username;
        this.email = email;
        this.passwordHash = passwordHash;
        this.createdAt = createdAt;
    }

    createPost(post) {}
    editPost(post) {}
    deletePost(postId) {}
    commentPost(comment) {}
}