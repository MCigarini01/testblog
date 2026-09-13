// MockLoginApp.js

import LoginView from "../../../views/LoginView.js";
import LoginPresenter from "../../../presenters/LoginPresenter.js";

import AuthModel from "../../../models/AuthModel.js";

import MockAuthService
from "../../../services/MockServices/MockAuthService.js";

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const view =
            new LoginView();

        const authModel =
            new AuthModel();

        const authService =
            new MockAuthService();

        const presenter =
            new LoginPresenter(
                view,
                authService,
                authModel
            );

        view.bindLogin(
            presenter.login.bind(
                presenter
            )
        );
    }
);