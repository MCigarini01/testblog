// SearchService.js

import ApiService
from "./ApiService.js";

export default class SearchService {

    async search(
        keyword
    ) {

        return ApiService.get(
            `/posts/search?keyword=${encodeURIComponent(
                keyword
            )}`
        );
    }

    async searchByCategory(
        categoryId
    ) {

        return ApiService.get(
            `/posts?category=${categoryId}`
        );
    }

    async searchByTag(
        tagId
    ) {

        return ApiService.get(
            `/posts?tag=${tagId}`
        );
    }
}