export default class PostCreationView {
    constructor() {
        this.form =
            document.getElementById(
                "postForm"
            );

        this.titleInput =
            document.getElementById(
                "title"
            );

        this.contentInput =
            document.getElementById(
                "content"
            );

        this.categorySelect =
            document.getElementById(
                "category"
            );

        this.tagsSelect =
            document.getElementById(
                "tags"
            );

        this.imageInput =
            document.getElementById(
                "image"
            );

        this.cancelButton =
            document.getElementById(
                "cancel-btn"
            );

        this.submitButton =
            this.form?.querySelector(
                'button[type="submit"]'
            );

        this.messageOverlay =
            document.getElementById(
                "message-overlay"
            );

        this.messageBox =
            document.getElementById(
                "message"
            );

        this.messageText =
            document.getElementById(
                "message-text"
            );

        this.messageIcon =
            document.getElementById(
                "message-icon"
            );

        this.messageClose =
            document.getElementById(
                "message-close"
            );

        this.validateElements();
        this.bindMessageEvents();
    }

    validateElements() {
        if (!this.form) {
            throw new Error(
                'Elemento con id "postForm" non trovato'
            );
        }

        if (!this.titleInput) {
            throw new Error(
                'Elemento con id "title" non trovato'
            );
        }

        if (!this.contentInput) {
            throw new Error(
                'Elemento con id "content" non trovato'
            );
        }

        if (!this.categorySelect) {
            throw new Error(
                'Elemento con id "category" non trovato'
            );
        }

        if (!this.tagsSelect) {
            throw new Error(
                'Elemento con id "tags" non trovato'
            );
        }

        if (!this.imageInput) {
            throw new Error(
                'Elemento con id "image" non trovato'
            );
        }

        if (!this.messageOverlay) {
            throw new Error(
                'Elemento con id "message-overlay" non trovato'
            );
        }

        if (!this.messageBox) {
            throw new Error(
                'Elemento con id "message" non trovato'
            );
        }

        if (!this.messageText) {
            throw new Error(
                'Elemento con id "message-text" non trovato'
            );
        }

        if (!this.messageIcon) {
            throw new Error(
                'Elemento con id "message-icon" non trovato'
            );
        }

        if (!this.messageClose) {
            throw new Error(
                'Elemento con id "message-close" non trovato'
            );
        }
    }

    bindMessageEvents() {
        this.messageClose.addEventListener(
            "click",
            () => {
                this.hideMessage();
            }
        );

        this.messageOverlay.addEventListener(
            "click",
            event => {
                if (
                    event.target ===
                    this.messageOverlay
                ) {
                    this.hideMessage();
                }
            }
        );
    }

    getPostData() {
        return {
            title:
                this.titleInput.value.trim(),

            content:
                this.contentInput.value.trim(),

            category:
                this.categorySelect.value,

            tags:
                Array.from(
                    this.tagsSelect.querySelectorAll(
                        'input[name="tags"]:checked'
                    )
                ).map(
                    checkbox =>
                        checkbox.value
                ),

            image:
                this.imageInput.files[0] ??
                null
        };
    }
}