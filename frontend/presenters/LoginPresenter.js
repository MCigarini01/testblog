
// LoginPresenter.js

export default class LoginPresenter {

    constructor(view, authService, authModel) {
        this.view = view;
        this.authService = authService;
        this.authModel = authModel;
    }
    async login(email, password) {
        try {

            const response =
                await this.authService.login(
                    email,
                    password
                );

            this.authModel.login(
                response.token,
                response.user
            );

            this.view.showSuccess(
                "Login effettuato con successo"
            );

            setTimeout(() => {
                window.location.href = "./index.html";
            }, 500);

        } catch (error) {

            this.view.showError(
                "Credenziali non valide"
            );

        }
    }
    logout() {
        this.authModel.logout();
        this.view.showSuccess(
            "Logout effettuato"
        );
    }

    isAuthenticated() {
        return this.authModel.isAuthenticated();
    }
}