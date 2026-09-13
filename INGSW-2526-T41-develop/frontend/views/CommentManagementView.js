// CommentManagementView.js

export default class CommentManagementView {
    constructor(
        containerId =
            "comments-container"
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
     * VISUALIZZAZIONE COMMENTI
     */
    render(comments) {
        this.container.innerHTML =
            "";

        comments.forEach(
            comment => {
                const commentElement =
                    document.createElement(
                        "article"
                    );

                commentElement.className =
                    "comment-card";
                    
                const commentId =
                    comment.getId();

                const commentStatus =
                    comment.getStatus();

                const isPending =
                    commentStatus
                        .toLowerCase() ===
                    "pending";

                commentElement.innerHTML = `
                    <div class="comment-content">
                        <p>
                            ${comment.getContent()}
                        </p>

                        <p class="comment-status">
                            Stato:
                            <strong>
                                ${commentStatus}
                            </strong>
                        </p>
                    </div>

                    <div class="comment-actions">
                        ${
                            isPending
                                ? `
                                    <button
                                        type="button"
                                        class="approve-btn"
                                        data-id="${commentId}">
                                        Approva
                                    </button>

                                    <button
                                        type="button"
                                        class="reject-btn"
                                        data-id="${commentId}">
                                        Rifiuta
                                    </button>
                                `
                                : ""
                        }

                        <button
                            type="button"
                            class="delete-btn"
                            data-id="${commentId}">
                            Elimina
                        </button>
                    </div>
                `;

                this.container.appendChild(
                    commentElement
                );
            }
        );
    }

    /*
     * APPROVAZIONE COMMENTO
     */
    bindApproveComment(handler) {
        this.container.addEventListener(
            "click",
            async event => {
                const approveButton =
                    event.target.closest(
                        ".approve-btn"
                    );

                if (!approveButton) {
                    return;
                }

                await handler(
                    Number(
                        approveButton.dataset.id
                    )
                );
            }
        );
    }

    /*
     * RIFIUTO COMMENTO
     */
    bindRejectComment(handler) {
        this.container.addEventListener(
            "click",
            async event => {
                const rejectButton =
                    event.target.closest(
                        ".reject-btn"
                    );

                if (!rejectButton) {
                    return;
                }

                await handler(
                    Number(
                        rejectButton.dataset.id
                    )
                );
            }
        );
    }

    /*
     * ELIMINAZIONE COMMENTO
     */
    bindDeleteComment(handler) {
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
                    Number(
                        deleteButton.dataset.id
                    )
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

        this.clearMessage();
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

        this.clearMessage();
    }

    clearMessage() {
        setTimeout(
            () => {
                if (!this.messageBox) {
                    return;
                }

                this.messageBox.textContent =
                    "";

                this.messageBox.className =
                    "";
            },
            2000
        );
    }
}