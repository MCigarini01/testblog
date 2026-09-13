// MockUserService.js
import User
from "../../models/UserModel.js";
import RegisteredUser
from "../../models/RegisteredUserModel.js";
import Editor
from "../../models/EditorModel.js";
import Admin
from "../../models/AdminModel.js";
import usersData
from "../../pages/TestPosts/MockUserData.js";


export default class MockUserService {
    constructor() {
        this.users =
            usersData.map(
                user => {
                    const UserClass =
                        Math.random() < 0.5
                            ? Admin
                            : Editor;

                    return new UserClass(
                        user.id,
                        user.username,
                        user.email,
                        user.passwordHash,
                        user.createdAt
                    );
                }
            );
    }

    async getAllUsers() {
        return this.users;
    }

    async getUserById(
        userId
    ) {
        return this.users.find(
            user =>
                user.id ==
                userId
        );
    }

    async createUser(
        userData
    ) {
        const user =
            new Editor(
                Date.now(),
                userData.username,
                userData.email,
                userData.passwordHash,
                userData.createdAt ??
                    new Date().toISOString()
            );

        this.users.push(
            user
        );

        return user;
    }

    async promoteToAdmin(
        userId
    ) {
        const index =
            this.users.findIndex(
                user =>
                    user.id ==
                    userId
            );

        if (index === -1) {
            throw new Error(
                "Utente non trovato"
            );
        }

        const currentUser =
            this.users[index];

        if (
            currentUser instanceof Admin
        ) {
            throw new Error(
                "L'utente è già un amministratore"
            );
        }

        const admin =
            new Admin(
                currentUser.id,
                currentUser.username,
                currentUser.email,
                currentUser.passwordHash,
                currentUser.createdAt
            );

        this.users[index] =
            admin;

        return admin;
    }

    async updateUser(
        userData
    ) {
        const index =
            this.users.findIndex(
                user =>
                    user.id ==
                    userData.id
            );

        if (index === -1) {
            throw new Error(
                "Utente non trovato"
            );
        }

        this.users[index] =
            userData;

        return userData;
    }

    async deleteUser(
        userId
    ) {
        const userExists =
            this.users.some(
                user =>
                    user.id ==
                    userId
            );

        if (!userExists) {
            throw new Error(
                "Utente non trovato"
            );
        }

        this.users =
            this.users.filter(
                user =>
                    user.id !=
                    userId
            );

        return true;
    }
}