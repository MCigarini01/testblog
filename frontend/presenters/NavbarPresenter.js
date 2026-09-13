import User from "../models/UserModel.js";
import RegistredUser from "../models/RegisteredUserModel.js";
import Editor from "../models/EditorModel.js";
import Admin from "../models/AdminModel.js";
import AuthModel from "../models/AuthModel.js";


export default class NavbarPresenter {

    constructor(view, authModel) {
        this.view = view;
        this.authModel = authModel;
    }

    initialize() {

        this.configurePermissions();

        this.view.bindMyPosts(
            () => {

                const user =
                    this.authModel
                        .getLoggedUser();

                document.dispatchEvent(
                    new CustomEvent(
                        "showMyPosts",
                        {
                            detail: {
                                userId: user.id
                            }
                        }
                    )
                );

            }
        );

    }

    configurePermissions() {

        const user =
            this.authModel.getLoggedUser();

        if (!user) {

            this.view.showGuestNavbar();

            return;
        }

        this.view.showAuthenticatedNavbar(
            user.username
        );

        if (
            user instanceof Editor ||
            user instanceof Admin
        ) {

            this.view.showCreatePostButton();
        }

        if (
            user instanceof Admin
        ) {

            this.view
                .showDashboardButton();
        }
    }

    
}