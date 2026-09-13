// MockUserApp.js

import UserManagementView
from "../../../views/UserManagementView.js";

import UserPresenter
from "../../../presenters/UserPresenter.js";

import MockUserService
from "../../../services/MockServices/MockUserService.js";
// ======================================
// IMPORT MODELS
// ======================================

import AuthModel
    from "../../../models/AuthModel.js";

import User
    from "../../../models/UserModel.js";

import RegistredUser
    from "../../../models/RegisteredUserModel.js";

import Editor
    from "../../../models/EditorModel.js";

import Admin
    from "../../../models/AdminModel.js";

const view =
    new UserManagementView(
        "users-container"
    );

const presenter =
    new UserPresenter(
        view
    );
const authModel =
    new AuthModel();

authModel.login(
    "mock-token",
    new Admin(
        1,
        "Daniele",
        "daniele@test.it",
        "hash",
        new Date()
    )
);

presenter.userService =
    new MockUserService();

presenter.loadUsers();

view.bindCreateUser(
    presenter.createUser.bind(
        presenter
    )
);

view.bindDeleteUser(
    presenter.deleteUser.bind(
        presenter
    )
);