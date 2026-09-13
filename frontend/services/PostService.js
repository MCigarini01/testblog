// PostService.js
export default class PostService {

    constructor(apiService) {
        this.apiService = apiService;
    }

    async getAllPosts() {
        return await this.apiService.get(
            "/posts"
        );
    }

    async getPostById(postId) {
        return await this.apiService.get(
            `/posts/${postId}`
        );
    }
    
    async createPost(postData) {
        const formData =
            new FormData();

        formData.append(
            "title",
            postData.title
        );

        formData.append(
            "content",
            postData.content
        );

        formData.append(
            "category",
            postData.category
        );

        postData.tags.forEach(
            tag => {
                formData.append(
                    "tags[]",
                    tag
                );
            }
        );

        if (postData.image) {
            formData.append(
                "image",
                postData.image
            );
        }

        const response =
            await fetch(
                `${this.baseUrl}/posts`,
                {
                    method: "POST",
                    headers: {
                        "Authorization":
                            `Bearer ${this.getToken()}`
                    },
                    body: formData
                }
            );

        if (!response.ok) {
            const errorData =
                await response.json()
                    .catch(
                        () => ({})
                    );

            throw new Error(
                errorData.message ||
                "Errore durante la creazione dell'articolo"
            );
        }

        return await response.json();
    }

    async updatePost(post) {
        return await this.apiService.put(
            `/posts/${post.id}`,
            post
        );
    }

    async deletePost(postId) {
        return await this.apiService.delete(
            `/posts/${postId}`
        );
    }

    async getPostsByCategory(categoryId) {
        return await this.apiService.get(
            `/posts?category=${categoryId}`
        );
    }

    async getPostsByTag(tagId) {
        return await this.apiService.get(
            `/posts?tag=${tagId}`
        );
    }

    async searchPosts(keyword) {
        return await this.apiService.get(
            `/posts/search?keyword=${encodeURIComponent(keyword)}`
        );
    }
}