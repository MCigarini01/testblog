// UserManagementView.js

import User
from "../models/UserModel.js";
import RegisteredUser
from "../models/RegisteredUserModel.js";
import Editor
from "../models/EditorModel.js";
import Admin
from "../models/AdminModel.js";

export default class UserManagementView {
    constructor(
        containerId =
            "users-container"
    ) {
        this.container =
            document.getElementById(
                containerId
            );

        this.messageBox =
            document.getElementById(
                "message"
            );

        if (!this.container) {
            throw new Error(
                `Contenitore con id "${containerId}" non trovato`
            );
        }
    }

    /*
     * VISUALIZZAZIONE UTENTI
     */

    render(users) {
        this.container.innerHTML =
            "";

        users.forEach(
            user => {
                const userElement =
                    document.createElement(
                        "article"
                    );

                userElement.className =
                    "user-card";

                let userType;

                if (
                    user instanceof Admin
                ) {
                    userType =
                        "Admin";
                } else if (
                    user instanceof Editor
                ) {
                    userType =
                        "Editor";
                } else {
                    throw new Error(
                        `Tipo utente non riconosciuto per ${user.username}`
                    );
                }

                userElement.innerHTML = `
                    <div class="user-content">
                        <div class="user-heading">
                            <span
                                class="role-badge ${
                                    user instanceof Admin
                                        ? "admin-role"
                                        : "editor-role"
                                }">
                                ${userType}
                            </span>

                            <h3>
                                ${user.username}
                            </h3>
                            
                        </div>


                        <p class="user-email">
                            ${user.email}
                        </p>

                        <p class="user-created-at">
                            Registrato il:
                            <strong>
                                ${this.formatDate(
                                    user.createdAt
                                )}
                            </strong>
                        </p>
                    </div>

                    <div class="user-actions">
                        ${
                            user instanceof Editor &&
                            !(user instanceof Admin)
                                ? `
                                    <button
                                        type="button"
                                        class="promote-admin-btn"
                                        data-id="${user.id}">
                                        Promuovi ad Admin
                                    </button>
                                `
                                : ""
                        }

                        <button
                            type="button"
                            class="delete-user-btn"
                            data-id="${user.id}">
                            Elimina
                        </button>
                    </div>
                `;

                this.container.appendChild(
                    userElement
                );
            }
        );
    }

    /*
     * PROMOZIONE AD ADMIN
     */
    bindPromoteToAdmin(handler) {
        this.container.addEventListener(
            "click",
            async event => {
                const promoteButton =
                    event.target.closest(
                        ".promote-admin-btn"
                    );

                if (!promoteButton) {
                    return;
                }

                await handler(
                    promoteButton.dataset.id
                );
            }
        );
    }

    /*
     * ELIMINAZIONE UTENTE
     */
    bindDeleteUser(handler) {
        this.container.addEventListener(
            "click",
            async event => {
                const deleteButton =
                    event.target.closest(
                        ".delete-user-btn"
                    );

                if (!deleteButton) {
                    return;
                }

                await handler(
                    deleteButton.dataset.id
                );
            }
        );
    }

    /*
     * FORMATTAZIONE DATA
     */
    formatDate(createdAt) {
        if (!createdAt) {
            return "Non disponibile";
        }

        const date =
            new Date(
                createdAt
            );

        if (
            Number.isNaN(
                date.getTime()
            )
        ) {
            return createdAt;
        }

        return new Intl.DateTimeFormat(
            "it-IT",
            {
                day: "2-digit",
                month: "2-digit",
                year: "numeric"
            }
        ).format(
            date
        );
    }

    /*
     * MESSAGGI
     */
    showSuccess(message) {
        if (!this.messageBox) {
            console.info(
                message
            );

            return;
        }

        this.messageBox.textContent =
            message;

        this.messageBox.className =
            "success-message";
    }

    showError(message) {
        if (!this.messageBox) {
            console.error(
                message
            );

            return;
        }

        this.messageBox.textContent =
            message;

        this.messageBox.className =
            "error-message";
    }
}