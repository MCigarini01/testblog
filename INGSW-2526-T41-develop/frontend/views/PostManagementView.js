// PostManagementView.js

export default class PostManagementView {
    constructor(
        containerId =
            "posts-container"
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
     * VISUALIZZAZIONE POST
     */
    render(posts) {
        this.container.innerHTML =
            "";

        posts.forEach(
            post => {
                this.container.innerHTML += `
                    <article class="post-card">
                        <h3>
                            ${post.title}
                        </h3>

                        <div class="post-actions">
                            <button
                                type="button"
                                class="view-btn"
                                data-id="${post.id}">
                                Visualizza
                            </button>

                            <button
                                type="button"
                                class="delete-btn"
                                data-id="${post.id}">
                                Elimina
                            </button>
                        </div>
                    </article>
                `;
            }
        );
    }

    bindViewPost() {
    this.container.addEventListener(
        "click",
        event => {
            const viewButton =
                event.target.closest(
                    ".view-btn"
                );

            if (!viewButton) {
                return;
            }

            const postId =
                viewButton.dataset.id;

            window.location.href =
                `post.html?id=${
                    encodeURIComponent(
                        postId
                    )
                }`;
            }
        );
    }

    /*
     * MODIFICA POST
     */
    bindEditPost(handler) {
        this.container.addEventListener(
            "click",
            async event => {
                const editButton =
                    event.target.closest(
                        ".edit-btn"
                    );

                if (!editButton) {
                    return;
                }

                await handler(
                    editButton.dataset.id
                );
            }
        );
    }

    /*
     * ELIMINAZIONE POST
     */
    bindDeletePost(handler) {
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