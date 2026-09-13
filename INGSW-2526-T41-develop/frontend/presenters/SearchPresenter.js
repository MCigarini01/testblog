// SearchPresenter.js

import SearchService
from "../services/SearchService.js";

export default class SearchPresenter {

    constructor(
        view = null
    ) {

        this.searchService =
            new SearchService();

        this.view =
            view;
    }

    async search(
        keyword
    ) {

        try {

            const results =
                await this.searchService
                    .search(
                        keyword
                    );

            if (
                this.view
            ) {

                if (
                    results.length === 0
                ) {

                    this.view
                        .showEmptyResult();

                    return;
                }

                this.view
                    .render(
                        results
                    );
            }

        } catch(error) {

            console.error(
                error
            );

            if (
                this.view
            ) {

                this.view
                    .showError(
                        "Errore durante la ricerca"
                    );
            }
        }
    }

    async searchByCategory(
        categoryId
    ) {

        try {

            const results =
                await this.searchService
                    .searchByCategory(
                        categoryId
                    );

            if (
                this.view
            ) {

                if (
                    results.length === 0
                ) {

                    this.view
                        .showEmptyResult();

                    return;
                }

                this.view
                    .render(
                        results
                    );
            }

        } catch(error) {

            console.error(
                error
            );

            if (
                this.view
            ) {

                this.view
                    .showError(
                        "Errore ricerca categoria"
                    );
            }
        }
    }

    async searchByTag(
        tagId
    ) {

        try {

            const results =
                await this.searchService
                    .searchByTag(
                        tagId
                    );

            if (
                this.view
            ) {

                if (
                    results.length === 0
                ) {

                    this.view
                        .showEmptyResult();

                    return;
                }

                this.view
                    .render(
                        results
                    );
            }

        } catch(error) {

            console.error(
                error
            );

            if (
                this.view
            ) {

                this.view
                    .showError(
                        "Errore ricerca tag"
                    );
            }
        }
    }
}