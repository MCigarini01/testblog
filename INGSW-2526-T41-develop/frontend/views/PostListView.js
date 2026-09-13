// PostListView.js

export default class PostListView {

    constructor(containerId) {
        this.container =
            document.getElementById(containerId);
    }

    render(posts) {

        this.container.innerHTML = posts
            .map(post => `
                <article>
                    <h2>${post.title}</h2>
                    <p>${post.content}</p>
                </article>
            `)
            .join("");
    }

    showError(message) {

        this.container.innerHTML = `
            <p class="error">
                ${message}
            </p>
        `;
    }

}