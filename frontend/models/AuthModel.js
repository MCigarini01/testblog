// AuthModel.js

export default class AuthModel {

    constructor(
        token = null,
        loggedUser = null,
        authenticated = false
    ) {
        this.token = token;
        this.loggedUser = loggedUser;
        this.authenticated = authenticated;
    }

    login(token, user) {
        this.token = token;
        this.loggedUser = user;
        this.authenticated = true;
    }

    logout() {
        this.token = null;
        this.loggedUser = null;
        this.authenticated = false;
    }

    isAuthenticated() {
        return this.authenticated;
    }
    getLoggedUser() {
    return this.loggedUser;
    }
}