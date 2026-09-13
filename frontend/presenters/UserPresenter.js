// UserPresenter.js

import UserService
from "../services/UserService.js";

import ApiService
from "../services/ApiService.js";

export default class UserPresenter {

    constructor(
        view = null
    ) {

        this.userService =
            new UserService(
                ApiService
            );

        this.view =
            view;
    }

    async loadUsers() {

        try {

            const users =
                await this.userService
                    .getAllUsers();

            if (
                this.view
            ) {

                this.view
                    .render(
                        users
                    );
                return users;
            }

        } catch(error) {

            console.error(
                error
            );

            if (
                this.view
            ) {

                this.view
                    .showError(
                        "Errore caricamento utenti"
                    );
            }
            return [];
        }
    }

    async createUser(
        userData
    ) {

        try {

            await this.userService
                .createUser(
                    userData
                );

            const users =
                await this.userService
                    .getAllUsers();

            if (
                this.view
            ) {

                this.view
                    .render(
                        users
                    );

                this.view
                    .showSuccess(
                        "Utente creato"
                    );
            }

        } catch(error) {

            console.error(
                error
            );

            if (
                this.view
            ) {

                this.view
                    .showError(
                        "Errore creazione utente"
                    );
            }
        }
    }

    async updateUser(
        userData
    ) {

        try {

            await this.userService
                .updateUser(
                    userData
                );

            const users =
                await this.userService
                    .getAllUsers();

            if (
                this.view
            ) {

                this.view
                    .render(
                        users
                    );

                this.view
                    .showSuccess(
                        "Utente aggiornato"
                    );
            }

        } catch(error) {

            console.error(
                error
            );

            if (
                this.view
            ) {

                this.view
                    .showError(
                        "Errore aggiornamento utente"
                    );
            }
        }
    }

    async deleteUser(
        userId
    ) {

        try {

            await this.userService
                .deleteUser(
                    userId
                );

            const users =
                await this.userService
                    .getAllUsers();

            if (
                this.view
            ) {

                this.view
                    .render(
                        users
                    );

                this.view
                    .showSuccess(
                        "Utente eliminato"
                    );
            }

        } catch(error) {

            console.error(
                error
            );

            if (
                this.view
            ) {

                this.view
                    .showError(
                        "Errore eliminazione utente"
                    );
            }
        }
    }

    /*
    * PROMOZIONE UTENTE AD ADMIN
    */
    async promoteToAdmin(
        userId
    ) {
        try {
            const user =
                await this.userService
                    .promoteToAdmin(
                        userId
                    );

            const users =
                await this.userService
                    .getAllUsers();

            if (this.view) {
                this.view.render(
                    users
                );

                this.view.showSuccess(
                    "Utente promosso ad Admin"
                );
            }

            return user;
        } catch (error) {
            console.error(
                "Errore durante la promozione dell'utente:",
                error
            );

            if (this.view) {
                this.view.showError(
                    "Errore durante la promozione ad Admin"
                );
            }

            return null;
        }
    }

    async updateOwnProfile(
        currentUser,
        userData
    ) {
        try {

            await this.userService
                .updateUser(
                    userData
                );

            console.log(
                "SHOW SUCCESS"
            );

            if (this.view) {

                this.view.showSuccess(
                    "Profilo aggiornato"
                );
            }

            return true;

        } catch (error) {

            console.error(
                error
            );

            if (this.view) {

                this.view.showError(
                    error.message
                );
            }

            return false;
        }
    }
}
