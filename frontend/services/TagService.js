// TagService.js

export default class TagService {

    constructor(apiService) {
        this.apiService = apiService;
    }

    getAllTags() {
        return this.apiService.get(
            "/tags"
        );
    }

    getTagById(tagId) {
        return this.apiService.get(
            `/tags/${tagId}`
        );
    }

    createTag(tag) {
        return this.apiService.post(
            "/tags",
            tag
        );
    }

    updateTag(tag) {
        return this.apiService.put(
            `/tags/${tag.id}`,
            tag
        );
    }

    deleteTag(tagId) {
        return this.apiService.delete(
            `/tags/${tagId}`
        );
    }
}