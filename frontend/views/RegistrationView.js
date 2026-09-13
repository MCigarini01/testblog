export default class RegistrationView {
    constructor() {
        this.form =
            document.getElementById("registrationForm");

        this.usernameInput =
            document.getElementById("username");

        this.emailInput =
            document.getElementById("email");

        this.passwordInput =
            document.getElementById("password");

        this.confirmPasswordInput =
            document.getElementById(
                "confirmPassword"
            );

        this.messageBox =
            document.getElementById(
                "registrationMessage"
            );
    }

    bindRegister(handler) {
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();

            console.log("SUBMIT");
            
            handler({
                username: this.usernameInput.value,
                email: this.emailInput.value,
                password: this.passwordInput.value,
                confirmPassword: this.confirmPasswordInput.value
            });
        });
    }

    showError(message) {
        this.messageBox.textContent = message;
        this.messageBox.className = "error";
    }

    showSuccess(message) {
        this.messageBox.textContent = message;
        this.messageBox.className = "success";
    }

    clearForm() {
        this.form.reset();
    }


}