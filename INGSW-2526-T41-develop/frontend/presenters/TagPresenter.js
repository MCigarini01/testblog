// TagPresenter.js

import TagService
from "../services/MockServices/MockTagService.js";

import ApiService
from "../services/ApiService.js";

export default class TagPresenter {

    constructor(
        managementView = null
    ) {

        this.tagService =
            new TagService(
                ApiService
            );

        this.managementView =
            managementView;
    }

        filterPostsByTagName(
        tagName,
        posts,
        tags,
        homeView
    ) {

        const tag =
            tags.find(
                t =>
                    t.name.toLowerCase() ===
                    tagName.toLowerCase()
            );

        if (!tag) {
            homeView.showEmptyState();
            return;
        }

        const filteredPosts =
            posts.filter(
                post =>
                    post.tags &&
                    post.tags.includes(tag.id)
            );

        homeView.setTitle(
            `Tag: ${tag.name}`
        );

        homeView.render(
            filteredPosts
        );
    }

    /*
     * LISTA TAG
     */
    async loadTags() {

        try {

            const tags =
                await this.tagService
                    .getAllTags();

            if (this.managementView) {

                this.managementView.render(
                    tags
                );
            }
            return tags;

        } catch (error) {

            console.error(error);

            if (this.managementView) {

                this.managementView.showError(
                    "Errore caricamento tag"
                );
            }
            return [];
        }
    }

    /*
     * CREAZIONE TAG
     */
    async createTag(
        tagData
    ) {

        try {

            const tag =
                await this.tagService
                    .createTag(
                        tagData
                    );

            if (this.managementView) {

                this.managementView.showSuccess(
                    "Tag creato"
                );

                const tags =
                    await this.tagService
                        .getAllTags();

                this.managementView.render(
                    tags
                );

                this.managementView.clearForm();
            }

            return tag;

        } catch (error) {

            console.error(error);

            if (this.managementView) {

                this.managementView.showError(
                    "Errore creazione tag"
                );
            }
        }
    }

    /*
     * ELIMINAZIONE TAG
     */
    async deleteTag(
        tagId
    ) {

        try {

            await this.tagService
                .deleteTag(
                    tagId
                );

            if (this.managementView) {

                this.managementView.showSuccess(
                    "Tag eliminato"
                );

                const tags =
                    await this.tagService
                        .getAllTags();

                this.managementView.render(
                    tags
                );
            }

        } catch (error) {

            console.error(error);

            if (this.managementView) {

                this.managementView.showError(
                    "Errore eliminazione tag"
                );
            }
        }
    }
    async getAll() {
    return await this.tagService.getAllTags();
}
}