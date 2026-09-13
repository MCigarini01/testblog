// MockRegistrationApp.js

import RegistrationView from "../../../views/RegistrationView.js";
import RegistrationPresenter from "../../../presenters/RegistrationPresenter.js";


import MockAuthService
from "../../../services/MockServices/MockAuthService.js";

import AuthModel from "../../../models/AuthModel.js";



document.addEventListener("DOMContentLoaded", () => {

    const view = new RegistrationView();

    const authService = new MockAuthService();

    const authModel = new AuthModel();

    const presenter = new RegistrationPresenter(
        view,
        authService,
        authModel
    );

});