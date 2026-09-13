export default class PostEditView {
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

        this.tagsContainer =
            document.getElementById(
                "tags"
            );

        this.imageInput =
            document.getElementById(
                "image"
            );

        this.currentImageContainer =
            document.getElementById(
                "current-image-container"
            );

        this.currentImage =
            document.getElementById(
                "current-image"
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

        if (!this.tagsContainer) {
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

    renderCategories(
        categories
    ) {
        this.categorySelect.innerHTML = `
            <option value="">
                Seleziona una categoria
            </option>
        `;

        this.categorySelect.innerHTML +=
            categories.map(
                category => `
                    <option
                        value="${category.name}"
                        data-category-id="${category.id}"
                    >
                        ${category.name}
                    </option>
                `
            ).join("");
    }

    renderTags(
        tags
    ) {
        this.tagsContainer.innerHTML =
            tags.map(
                tag => `
                    <div class="tag-option">
                        <input
                            type="checkbox"
                            id="tag-${tag.id}"
                            name="tags"
                            value="${tag.name}"
                            data-tag-id="${tag.id}"
                            class="tag-checkbox"
                        >

                        <label
                            for="tag-${tag.id}"
                            class="tag-badge"
                        >
                            ${tag.name}
                        </label>
                    </div>
                `
            ).join("");
    }

    fillForm(
        post
    ) {
        if (!post) {
            throw new Error(
                "Dati dell'articolo mancanti"
            );
        }

        this.titleInput.value =
            post.title ?? "";

        this.contentInput.value =
            post.content ?? "";

        this.selectCategory(
            post.category ??
            post.categoryId ??
            null
        );

        this.selectTags(
            post.tags ?? []
        );

        const imageUrl =
            post.imageUrl ??
            post.image ??
            null;

        this.showCurrentImage(
            imageUrl
        );
    }

    selectCategory(
        category
    ) {
        if (
            category === null ||
            category === undefined
        ) {
            this.categorySelect.value =
                "";

            return;
        }

        const categoryId =
            typeof category === "object"
                ? category.id
                : category;

        const categoryName =
            typeof category === "object"
                ? category.name
                : category;

        const options =
            Array.from(
                this.categorySelect.options
            );

        const selectedOption =
            options.find(
                option => {
                    const sameId =
                        option.dataset.categoryId &&
                        String(
                            option.dataset.categoryId
                        ) ===
                        String(categoryId);

                    const sameName =
                        String(option.value) ===
                        String(categoryName);

                    return (
                        sameId ||
                        sameName
                    );
                }
            );

        if (!selectedOption) {
            this.categorySelect.value =
                "";

            return;
        }

        selectedOption.selected =
            true;
    }

    selectTags(
        tags
    ) {
        const selectedTags =
            Array.isArray(tags)
                ? tags
                : [];

        const checkboxes =
            this.tagsContainer.querySelectorAll(
                'input[name="tags"]'
            );

        checkboxes.forEach(
            checkbox => {
                checkbox.checked =
                    selectedTags.some(
                        tag => {
                            const tagId =
                                typeof tag === "object"
                                    ? tag.id
                                    : tag;

                            const tagName =
                                typeof tag === "object"
                                    ? tag.name
                                    : tag;

                            const sameId =
                                checkbox.dataset.tagId &&
                                String(
                                    checkbox.dataset.tagId
                                ) ===
                                String(tagId);

                            const sameName =
                                String(
                                    checkbox.value
                                ) ===
                                String(tagName);

                            return (
                                sameId ||
                                sameName
                            );
                        }
                    );
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
                    this.tagsContainer.querySelectorAll(
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

    bindUpdatePost(
        handler
    ) {
        this.form.addEventListener(
            "submit",
            async event => {
                event.preventDefault();

                this.setSubmitting(
                    true
                );

                try {
                    await handler(
                        this.getPostData()
                    );
                } finally {
                    this.setSubmitting(
                        false
                    );
                }
            }
        );
    }

    bindCancel(
        handler
    ) {
        if (!this.cancelButton) {
            return;
        }

        this.cancelButton.addEventListener(
            "click",
            handler
        );
    }

    showCurrentImage(
        imageUrl
    ) {
        if (
            !this.currentImageContainer ||
            !this.currentImage
        ) {
            return;
        }

        if (!imageUrl) {
            this.currentImageContainer.hidden =
                true;

            this.currentImage.removeAttribute(
                "src"
            );

            return;
        }

        this.currentImage.src =
            imageUrl;

        this.currentImageContainer.hidden =
            false;
    }

    setSubmitting(
        submitting
    ) {
        if (!this.submitButton) {
            return;
        }

        this.submitButton.disabled =
            submitting;

        if (submitting) {
            if (
                !this.submitButton.dataset
                    .originalText
            ) {
                this.submitButton.dataset
                    .originalText =
                    this.submitButton.textContent
                        .trim();
            }

            this.submitButton.textContent =
                "Salvataggio...";
        } else {
            this.submitButton.textContent =
                this.submitButton.dataset
                    .originalText ??
                "Salva modifiche";
        }
    }

    showMessage() {
        this.messageOverlay.classList.add(
            "visible"
        );

        this.messageOverlay.setAttribute(
            "aria-hidden",
            "false"
        );
    }

    hideMessage() {
        this.messageOverlay.classList.remove(
            "visible"
        );

        this.messageOverlay.setAttribute(
            "aria-hidden",
            "true"
        );
    }

    showSuccess(
        message
    ) {
        this.messageText.textContent =
            message;

        this.messageIcon.textContent =
            "✓";

        this.messageBox.className =
            "message-popup success-message";

        this.showMessage();

        setTimeout(
            () => {
                this.hideMessage();
            },
            3000
        );
    }

    showError(
        message
    ) {
        this.messageText.textContent =
            message;

        this.messageIcon.textContent =
            "!";

        this.messageBox.className =
            "message-popup error-message";

        this.showMessage();
    }
}