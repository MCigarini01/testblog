// MockPostService.js

import postsData
from "../../pages/TestPosts/MockPostDatabase.js";

export default class MockPostService {

    constructor() {

        this.posts =
            [...postsData];
    }

    async getAllPosts() {
        return this.posts;
    }

    async getPostById(
        postId
    ) {

        return this.posts.find(
            post =>
                post.id == postId
        );
    }

    async createPost(postData) {
        const newPost = {
            id: Date.now(),
            title: postData.title,
            content: postData.content,
            tags: postData.tags ?? [],
            imageUrl: postData.image
                ? URL.createObjectURL(postData.image)
                : null,
            createdAt: new Date().toISOString()
        };

        this.posts.push(newPost);

        return newPost;
    }

    async updatePost(
        post
    ) {

        const index =
            this.posts.findIndex(
                currentPost =>
                    currentPost.id ==
                    post.id
            );

        if (
            index === -1
        ) {

            throw new Error(
                "Post non trovato"
            );
        }

        this.posts[index] = {

            ...this.posts[index],
            ...post
        };

        return this.posts[index];
    }

    async deletePost(
        postId
    ) {

        this.posts =
            this.posts.filter(
                post =>
                    post.id != postId
            );

        return true;
    }

    async getPostsByCategory(
        categoryId
    ) {

        return this.posts.filter(
            post =>
                post.categoryId ==
                categoryId
        );
    }

    async getPostsByTag(
        tagId
    ) {

        return this.posts.filter(
            post =>
                Array.isArray(
                    post.tags
                )
                &&
                post.tags.includes(
                    tagId
                )
        );
    }

    async searchPosts(
        keyword
    ) {

        const query =
            keyword.toLowerCase();

        return this.posts.filter(
            post =>

                post.title
                    ?.toLowerCase()
                    .includes(query)

                ||

                post.content
                    ?.toLowerCase()
                    .includes(query)
        );
    }
}