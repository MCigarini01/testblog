// UserModel.js
export default class User {

    constructor() {
        if (new.target === User) {
            throw new Error("User è una classe astratta");
        }
    }

    viewPosts() {}

    searchPosts(keyword) {}
}