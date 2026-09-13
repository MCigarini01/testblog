// CategoryManagementView.js

export default class CategoryManagementView {
    constructor(
        containerId =
            "categories-container"
    ) {
        this.container =
            document.getElementById(
                containerId
            );

        this.form =
            document.getElementById(
                "categoryForm"
            );

        this.nameInput =
            document.getElementById(
                "categoryName"
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

        if (!this.form) {
            throw new Error(
                'Elemento con id "categoryForm" non trovato'
            );
        }

        if (!this.nameInput) {
            throw new Error(
                'Elemento con id "categoryName" non trovato'
            );
        }
    }

    /*
     * VISUALIZZAZIONE CATEGORIE
     */
    render(categories) {
        this.container.innerHTML =
            "";

        categories.forEach(
            category => {
                this.container.innerHTML += `
                    <article
                        class="category-card">

                        <h3>
                            ${category.name}
                        </h3>

                        <div
                            class="category-actions">

                            <button
                                type="button"
                                class="delete-btn"
                                data-id="${category.id}">
                                Elimina
                            </button>
                        </div>
                    </article>
                `;
            }
        );
    }

    /*
     * CREAZIONE CATEGORIA
     */
    bindCreateCategory(handler) {
        this.form.addEventListener(
            "submit",
            async event => {
                event.preventDefault();

                const categoryData = {
                    name:
                        this.nameInput
                            .value
                            .trim()
                };

                await handler(
                    categoryData
                );
            }
        );
    }

    /*
     * ELIMINAZIONE CATEGORIA
     */
    bindDeleteCategory(handler) {
        this.container.addEventListener(
            "click",
            async event => {
                const deleteButton =
                    event.target.closest(
                        ".delete-btn"
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
     * PULIZIA FORM
     */
    clearForm() {
        this.form.reset();
    }

    /*
     * MESSAGGI
     */
    showSuccess(message) {
        if (!this.messageBox) {
            console.info(message);
            return;
        }

        this.messageBox.textContent =
            message;

        this.messageBox.className =
            "success-message";
    }

    showError(message) {
        if (!this.messageBox) {
            console.error(message);
            return;
        }

        this.messageBox.textContent =
            message;

        this.messageBox.className =
            "error-message";
    }
}