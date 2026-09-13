// MockSearchService.js

export default class MockSearchService {

    constructor() {

        this.posts = [
            {
                id: 1,
                title: "Guida JavaScript",
                content: "Introduzione a JavaScript",
                categoryId: 1,
                tagId: 1
            },
            {
                id: 2,
                title: "Corso PHP",
                content: "Introduzione a PHP",
                categoryId: 2,
                tagId: 2
            },
            {
                id: 3,
                title: "JavaScript Avanzato",
                content: "Funzioni e Callback",
                categoryId: 1,
                tagId: 3
            }
        ];
    }

    async search(
        keyword
    ) {

        return this.posts.filter(
            post =>
                post.title
                    .toLowerCase()
                    .includes(
                        keyword.toLowerCase()
                    )
                ||
                post.content
                    .toLowerCase()
                    .includes(
                        keyword.toLowerCase()
                    )
        );
    }

    async searchByCategory(
        categoryId
    ) {

        return this.posts.filter(
            post =>
                post.categoryId ==
                categoryId
        );
    }

    async searchByTag(
        tagId
    ) {

        return this.posts.filter(
            post =>
                post.tagId ==
                tagId
        );
    }
}