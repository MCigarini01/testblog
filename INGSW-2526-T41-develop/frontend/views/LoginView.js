// LoginView.js

export default class LoginView {
    constructor() {
        this.form = document.getElementById("loginForm");
        this.emailInput = document.getElementById("email");
        this.passwordInput = document.getElementById("password");
        this.messageBox = document.getElementById("loginMessage");
    }

    bindLogin(handler) {
        this.form.addEventListener("submit", (event) => {
            event.preventDefault();

            handler(
                this.emailInput.value.trim(),
                this.passwordInput.value
            );
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