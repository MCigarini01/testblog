// SearchView.js

export default class SearchView {

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

    render(
        results
    ) {

        this.container.innerHTML =
            "";

        results.forEach(
            post => {

                const postElement =
                    document.createElement(
                        "article"
                    );

                postElement.className =
                    "search-result";

                postElement.innerHTML = `
                    <h3>
                        ${post.title}
                    </h3>

                    <p>
                        ${post.content}
                    </p>
                `;

                this.container.appendChild(
                    postElement
                );
            }
        );
    }

    bindSearch(
        handler
    ) {

        const form =
            document.getElementById(
                "searchForm"
            );

        if (!form) {
            return;
        }

        form.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                handler(
                    document
                        .getElementById(
                            "searchInput"
                        )
                        .value
                        .trim()
                );
            }
        );
    }
    bindCategorySearch(handler) {

    const button =
        document.getElementById(
            "categorySearchBtn"
        );

    if (!button) {
        return;
    }

    button.addEventListener(
        "click",
        () => {

            handler(
                document
                    .getElementById(
                        "categorySelect"
                    )
                    .value
            );
         }
        );
    }

    showEmptyResult() {

        this.container.innerHTML = `
            <p>
                Nessun risultato trovato.
            </p>
        `;
    }
    bindTagSearch(handler) {

        const button =
            document.getElementById(
                "tagSearchBtn"
            );

        if (!button) {
            return;
        }

        button.addEventListener(
            "click",
            () => {

                handler(
                    document
                        .getElementById(
                            "tagSelect"
                        )
                        .value
                );
            }
        );
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
}