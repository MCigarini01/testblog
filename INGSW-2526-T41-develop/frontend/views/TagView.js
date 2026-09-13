// TagView.js

export default class TagView {

    constructor(
        containerId
    ) {

        this.container =
            document.getElementById(
                containerId
            );
    }

    render(
        tags
    ) {

        if (
            !this.container
        ) {

            return;
        }

        this.container.innerHTML =
            "";

        tags.forEach(
            tag => {

                const button =
                    document.createElement(
                        "button"
                    );

                button.className =
                    "tag-item";

                button.textContent =
                    tag.name;

                button.dataset.id =
                    tag.id;

                this.container.appendChild(
                    button
                );
            }
        );
    }

    bindSelectTag(
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
                        "tag-item"
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
                Nessun tag disponibile.
            </p>
        `;
    }
}