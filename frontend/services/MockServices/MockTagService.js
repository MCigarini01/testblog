// MockTagService.js

import tags
    from "../../pages/TestPosts/MockTagDatabase.js";

export default class MockTagService {

    async getAllTags() {
        return tags;
    }

    async createTag(tag) {
        return tag;
    }

    async updateTag(tag) {
        return tag;
    }

    async deleteTag(tagId) {
        return true;
    }
}