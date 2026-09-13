// TagManagementView.js

export default class TagManagementView {
    constructor(
        containerId =
            "tags-container"
    ) {
        this.container =
            document.getElementById(
                containerId
            );

        this.form =
            document.getElementById(
                "tagForm"
            );

        this.nameInput =
            document.getElementById(
                "tagName"
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
                'Elemento con id "tagForm" non trovato'
            );
        }

        if (!this.nameInput) {
            throw new Error(
                'Elemento con id "tagName" non trovato'
            );
        }
    }

    /*
     * VISUALIZZAZIONE TAG
     */
    render(tags) {
        this.container.innerHTML =
            "";

        tags.forEach(
            tag => {
                const tagElement =
                    document.createElement(
                        "article"
                    );

                tagElement.className =
                    "tag-card";

                tagElement.innerHTML = `
                    <h3>
                        ${tag.name}
                    </h3>

                    <div class="tag-actions">
                        <button
                            type="button"
                            class="delete-btn"
                            data-id="${tag.id}">
                            Elimina
                        </button>
                    </div>
                `;

                this.container.appendChild(
                    tagElement
                );
            }
        );
    }

    /*
     * CREAZIONE TAG
     */
    bindCreateTag(handler) {
        this.form.addEventListener(
            "submit",
            async event => {
                event.preventDefault();

                const tagData = {
                    name:
                        this.nameInput
                            .value
                            .trim()
                };

                await handler(
                    tagData
                );
            }
        );
    }

    /*
     * ELIMINAZIONE TAG
     */
    bindDeleteTag(handler) {
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