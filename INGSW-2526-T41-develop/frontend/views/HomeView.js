// HomeView.js
import { createPreview }
from "../assets/js/createPreview.js";

export default class HomeView {

    constructor(
        containerId
    ) {

        this.container =
            document.getElementById(
                containerId
            );

        this.messageBox =
            document.getElementById(
                "message"
            );
    }

    render(posts) {

        if (!this.container) {
            return;
        }

        this.container.innerHTML = "";

        posts.forEach(post => {

            const postElement =
                document.createElement("article");

            postElement.className =
                "article-card";
            postElement.innerHTML = `
                ${post.image ? `<img src="${post.image}" class="article-image" alt="${post.title}">` : ""}
                <div class="article-content">
                    <div class="post-meta">
                        <span>
                            <i class="bi bi-calendar3"></i>
                            ${post.createdAt}
                        </span>

                        <span>
                            <i class="bi bi-person"></i>
                            ${post.author}
                        </span>

                        ${post.categoryName ? `
                            <span
                                class="badge category-badge bg-sage text-decoration-none"
                                data-category="${post.categoryId}">
                                ${post.categoryName}
                            </span>
                        ` : ""}

                        ${post.tagNames
                            ?.map(
                                (tag, index) => `
                                    <span
                                        class="badge tag-badge bg-primary text-decoration-none"
                                        data-tag="${post.tags[index]}"
                                    >
                                        ${tag}
                                    </span>
                                `
                            )
                            .join("") ?? ""
                        }
                        
                    </div>

                    <h3 class="card-title">
                        ${post.title}
                    </h3>

                    <p class="card-text">
                        ${createPreview(post.content)}
                    </p>

                    <div class="read-more">
                        Continua a leggere →
                    </div>
                </div>
                `;
            
            postElement.addEventListener(
                "click",
                event => {

                    if (
                        event.target.closest(
                            ".tag-badge"
                        )
                    ) {
                        return;
                    }

                    window.location.href =
                        `post.html?id=${post.id}`;
                }
            );

            this.container.appendChild(
                postElement
            );
        });
    }



    bindTagClick(handler) {

        this.container.addEventListener(
            "click",
            event => {

                console.log(event.target);

                const badge =
                    event.target.closest(
                        ".tag-badge"
                    );

                console.log(badge);

                if (!badge) return;

                handler(
                    badge.dataset.tag
                );
            }
        );
    }

    bindCategoryClick(handler) {

        this.container.addEventListener(
            "click",
            event => {

                const badge =
                    event.target.closest(
                        ".category-badge"
                    );

                if (!badge) return;

                handler(
                    badge.dataset.category
                );
            }
        );
    }
    showEmptyState() {

        if (
            !this.container
        ) {

            return;
        }

        this.container.innerHTML = `
            <p>
                Nessun articolo disponibile.
            </p>
        `;
    }

    showSuccess(
        message
    ) {

        if (
            this.messageBox
        ) {

            this.messageBox.textContent =
                message;

            this.messageBox.style.color =
                "green";
        }
    }

    showError(
        message
    ) {

        if (
            this.messageBox
        ) {

            this.messageBox.textContent =
                message;

            this.messageBox.style.color =
                "red";
        }
    }
    setTitle(title) {

            const titleElement =
                document.getElementById(
                    "posts-title"
                );

            if (titleElement) {

                titleElement.textContent =
                    title;

            }
        }
        
}