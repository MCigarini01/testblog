// =====================================
// MODELS
// =====================================

import AuthModel from "../../../models/AuthModel.js";
import User from "../../../models/UserModel.js";
import RegistredUser from "../../../models/RegisteredUserModel.js";
import Editor from "../../../models/EditorModel.js";
import Admin from "../../../models/AdminModel.js";

import NavbarPresenter from "../../../presenters/NavbarPresenter.js";
import NavbarView from "../../../views/NavbarView.js";
import ProfileView from "../../../views/ProfileView.js";

import UserPresenter from "../../../presenters/UserPresenter.js";

document.addEventListener(
    "DOMContentLoaded",
    () => {
     
        const authModel =
            new AuthModel();
        
        authModel.login(
            "mock-token",
            new Editor(
                1,
                "Daniele",
                "daniele@test.it",
                "hash",
                new Date()
            )
        );

        const currentUser = {
            id: 1,
            username: "Daniele",
            email: "daniele@test.it",
        };

        const view =
            new ProfileView();

        const navbarView =
            new NavbarView();
            
        const presenter =
        new UserPresenter(
            view
        );

        const navbarPresenter =
            new NavbarPresenter(
                navbarView,
                authModel
            );
        

        view.populateForm(
            currentUser
        );

        // --------------------
        // NAVBAR
        // --------------------

        setTimeout(() => {

            navbarPresenter
                .configurePermissions();

        }, 100);

        view.bindSaveProfile(
            async (formData) => {


                const userData = {
                    id: currentUser.id,
                    username: formData.username,
                    email: formData.email,
                    passwordHash: formData.password
                };

                try {


                    view.showSuccess(
                        "Profilo aggiornato correttamente (Mock)"
                    );

                } catch(error) {

                    view.showError(
                        error.message
                    );
                }
            }
        );
    }
);