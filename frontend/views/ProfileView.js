// views/ProfileView.js

export default class ProfileView {

    constructor() {
        this.form = document.getElementById("profileForm");

        this.usernameInput = document.getElementById("username");
        this.emailInput = document.getElementById("email");
        this.passwordInput = document.getElementById("password");

        this.successMessage = document.getElementById("successMessage");
        this.errorMessage = document.getElementById("errorMessage");
    }

    populateForm(user) {
        this.usernameInput.value = user.username || "";
        this.emailInput.value = user.email || "";
    }

    getFormData() {
        return {
            username: this.usernameInput.value.trim(),
            email: this.emailInput.value.trim(),
            password: this.passwordInput.value
        };
    }

    clearMessages() {
        if (this.successMessage) {
            this.successMessage.textContent = "";
            this.successMessage.style.display = "none";
        }

        if (this.errorMessage) {
            this.errorMessage.textContent = "";
            this.errorMessage.style.display = "none";
        }
    }

    showSuccess(message) {
        this.clearMessages();

        if (this.successMessage) {
            this.successMessage.textContent = message;
            this.successMessage.style.display = "block";
        }
    }

    showError(message) {
        this.clearMessages();

        if (this.errorMessage) {
            this.errorMessage.textContent = message;
            this.errorMessage.style.display = "block";
        }
    }

    bindSaveProfile(handler) {
        this.form.addEventListener("submit", async (e) => {
            e.preventDefault();
            await handler(this.getFormData());
        });
    }
}