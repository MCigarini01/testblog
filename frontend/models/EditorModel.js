//EditorModel.js
import RegisteredUser from "./RegisteredUserModel.js";

export default class Editor extends RegisteredUser {

    constructor(
        id,
        username,
        email,
        passwordHash,
        createdAt
    ) {

        super(
            id,
            username,
            email,
            passwordHash,
            createdAt
        );

    }
}