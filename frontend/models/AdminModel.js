//AdminModel.js
import RegisteredUser from "./RegisteredUserModel.js";

export default class Admin extends RegisteredUser {

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

    manageUsers() {}

    manageCategories() {}

    manageTags() {}

    moderateComments() {}
}