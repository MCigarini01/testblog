// CategoryView.js

export default class CategoryView {

    constructor(
        containerId
    ) {

        this.container =
            document.getElementById(
                containerId
            );
    }

    render(
        categories
    ) {

        if (
            !this.container
        ) {

            return;
        }

        this.container.innerHTML =
            "";

        categories.forEach(
            category => {

                const button =
                    document.createElement(
                        "button"
                    );

                button.className =
                    "category-item";

                button.textContent =
                    category.name;

                button.dataset.id =
                    category.id;

                this.container.appendChild(
                    button
                );
            }
        );
    }

    bindSelectCategory(
        handler
    ) {

        if (
            !this.container
        ) {

            return;
        }

        this.container.addEventListener(
            "click",
            event => {

                if (
                    event.target.classList.contains(
                        "category-item"
                    )
                ) {

                    handler(
                        event.target.dataset.id
                    );
                }
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
                Nessuna categoria disponibile.
            </p>
        `;
    }
}