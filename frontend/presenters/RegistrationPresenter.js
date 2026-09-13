//RegistrationPresenter.js

export default class RegistrationPresenter {

    constructor(
        view,
        authService,
        authModel
    ) {
        this.view = view;
        this.authService = authService;
        this.authModel = authModel;

        this.view.bindRegister(
            this.register.bind(this)
        );
    }

    async register(userData){
            const {
                username,
                email,
                password,
                confirmPassword
            } = userData;
        if (
            !username ||
            !email ||
            !password ||
            !confirmPassword
        ) {
            this.view.showError(
                "Compila tutti i campi"
            );
            return;
        }

        if (password !== confirmPassword) {
            this.view.showError(
                "Le password non coincidono"
            );
            return;
        }

        try {

            const response =
                await this.authService.register(
                    username,
                    email,
                    password
                );

            this.authModel.login(
                response.token,
                response.user
            );

            this.view.showSuccess(
                "Registrazione completata con successo"
            );

            this.view.clearForm();

            setTimeout(() => {
                window.location.href =
                    "login.html?";
            }, 1000);

        } catch (error) {

            console.error(error);

            this.view.showError(
                error.message ||
                "Errore durante la registrazione"
            );
        }
    }
}