// PostDetailView.js

export default class PostDetailView {

    constructor() {

        this.titleElement =
            document.getElementById(
                "post-title"
            );

        this.metaElement =
            document.getElementById(
                "post-meta"
            );

        this.contentElement =
            document.getElementById(
                "post-content"
            );
        
        this.imageElement =
        document.getElementById(
            "post-image"
        );
    }

    render(post) {

        if (!post) {

            this.showError(
                "Articolo non trovato."
            );

            return;
        }

        this.titleElement.textContent =
            post.title;

        this.metaElement.innerHTML = `
            <span>
                <i class="bi bi-calendar3"></i>
                ${post.createdAt}
            </span>

            <span>
                <i class="bi bi-person"></i>
                ${post.author}
            </span>
            <div class="tags">
            ${post.tagNames
                ?.map(
                    tag => `
                        <span
                            class="badge tag-badge bg-primary text-decoration-none"
                            data-tag="${tag.toLowerCase()}"
                        >
                            ${tag}
                        </span>
                    `
                )
                .join("")
            }

            </div>
        `;
        if (post.image) {

            this.imageElement.src =
                post.image;

            this.imageElement.style.display =
                "block";

        }
        else {

            this.imageElement.parentElement.style.display =
                "none";

        }


        this.contentElement.innerHTML =
            post.content;
        this.metaElement
        
    .querySelectorAll(
        ".tag-badge"
    )
    .forEach(
        badge => {

        badge.addEventListener(
            "click",
            () => {

                console.log(
                    badge.dataset.tag
                );

                window.location.href =
                    `index.html?tag=${badge.dataset.tag}`;
            }
        );

        }
    );

    }

    showError(message) {

        this.contentElement.innerHTML = `
            <div class="alert alert-danger">
                ${message}
            </div>
        `;

    }

    bindCreateComment(handler) {

        const form =
            document.getElementById(
                "commentForm"
            );

        if (!form) {
            return;
        }

        form.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                handler({
                    content:
                        document
                            .getElementById(
                                "commentContent"
                            )
                            .value
                            .trim()
                });

            }
        );
    }

    showCommentSuccess(message) {

        const messageBox =
            document.getElementById(
                "message"
            );

        if (!messageBox) {
            return;
        }

        messageBox.textContent =
            message;

        messageBox.style.color =
            "green";
    }

    showCommentError(message) {

        const messageBox =
            document.getElementById(
                "message"
            );

        if (!messageBox) {
            return;
        }

        messageBox.textContent =
            message;

        messageBox.style.color =
            "red";
    }

    renderComments(comments) {
        const container =
            document.getElementById(
                "comments-container"
            );

        container.innerHTML = "";

        comments.forEach(comment => {

            const div =
                document.createElement("div");

            div.className =
                "card mb-3";

            div.innerHTML = `
                <div class="card-body">

                    <h6 class="card-subtitle mb-2 text-muted">
                        <i class="bi bi-person"></i>
                        ${comment.author}

                        <span class="ms-2">
                            <i class="bi bi-calendar3"></i>
                            ${comment.createdAt}
                        </span>
                    </h6>

                    <p class="card-text mb-0">
                        ${comment.content}
                    </p>

                </div>
            `;

            container.appendChild(div);
        });
    }

}