// PostPresenter.js

import PostService from "../services/PostService.js";
import ApiService from "../services/ApiService.js";


export default class PostPresenter {

    constructor(
        postService,
        listView = null,
        detailView = null,
        creationView = null,
        editView = null,
        managementView = null,
        authModel = null
    ) {
        if (!postService) {
            throw new Error(
                "PostService mancante"
            );
        }

        this.postService =
            postService;

        this.listView =
            listView;

        this.detailView =
            detailView;

        this.creationView =
            creationView;

        this.editView =
            editView;

        this.managementView =
            managementView;

        this.authModel =
            authModel;

        if (this.creationView) {
            this.creationView.bindCreatePost(
                this.createPost.bind(this)
            );
        }
    }

    /*
     * LISTA POST
     */
    async loadPosts() {

        try {

            const posts =
                await this.postService.getAllPosts();

            if (this.listView) {

                this.listView.render(
                    posts
                );
            }

            if (this.managementView) {

                this.managementView.render(
                    posts
                );
                return posts;
            }

        } catch (error) {

            console.error(error);

            if (this.listView) {

                this.listView.showError(
                    "Errore caricamento articoli"
                );
            }

            if (this.managementView) {

                this.managementView.showError(
                    "Errore caricamento articoli"
                );
            }
            return [];
        }
    }

    /*
     * DETTAGLIO POST
     */
    async loadPost(postId) {

    try {

        const post =
            await this.postService.getPostById(
                postId
            );

        const postForView = {

            ...post,

            tagNames:
                post.tags.map(
                    tagId =>
                        tags.find(
                            tag =>
                                tag.id == tagId
                        )?.name ?? ""
                )

        };

        if (this.detailView) {

            this.detailView.render(
                postForView
            );

        }

        } catch (error) {

            console.error(error);

            if (this.detailView) {

                this.detailView.showError(
                    "Articolo non trovato"
                );

            }

        }

    }


    /*
    * CREAZIONE POST
    */
    async createPost(postData) {
        try {
            if (!postData) {
                throw new Error(
                    "Dati dell'articolo mancanti"
                );
            }

            const post =
                await this.postService.createPost(
                    postData
                );

            if (this.creationView) {
                this.creationView.showSuccess(
                    "Articolo creato correttamente"
                );

                this.creationView.clearForm();
            }

            return post;
        } catch (error) {
            console.error(
                "Errore durante la creazione dell'articolo:",
                error
            );

            if (this.creationView) {
                this.creationView.showError(
                    error.message ||
                    "Errore durante la creazione dell'articolo"
                );
            }

            throw error;
        }
    }
    /*
     * MODIFICA POST
     */
    async updatePost(
        postId,
        postData
    ) {
        try {
            if (!postId) {
                throw new Error(
                    "ID dell'articolo mancante"
                );
            }

            if (!postData) {
                throw new Error(
                    "Dati dell'articolo mancanti"
                );
            }

            const updatedPost = {
                id: postId,
                ...postData
            };

            const post =
                await this.postService.updatePost(
                    updatedPost
                );

            if (this.editView) {
                this.editView.showSuccess(
                    "Articolo aggiornato correttamente"
                );
            }

            if (this.managementView) {
                this.managementView.showSuccess(
                    "Articolo aggiornato"
                );
            }

            return post;
        } catch (error) {
            console.error(
                "Errore durante l'aggiornamento dell'articolo:",
                error
            );

            if (this.editView) {
                this.editView.showError(
                    error.message ||
                    "Errore durante l'aggiornamento dell'articolo"
                );
            }

            if (this.managementView) {
                this.managementView.showError(
                    error.message ||
                    "Errore aggiornamento articolo"
                );
            }

            throw error;
        }
    }

    /*
     * ELIMINAZIONE POST
     */
    async deletePost(postId) {

        try {

            await this.postService.deletePost(
                postId
            );

            if (this.managementView) {

                this.managementView.showSuccess(
                    "Articolo eliminato"
                );

                const posts =
                    await this.postService.getAllPosts();

                this.managementView.render(
                    posts
                );
            }

        } catch (error) {

            console.error(error);

            if (this.managementView) {

                this.managementView.showError(
                    "Errore eliminazione articolo"
                );
            }
        }
    }
        
}