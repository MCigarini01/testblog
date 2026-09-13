export default class Post {
    constructor(
        id,
        title,
        content,
        category,
        tags = [],
        author,
        createdAt,
        image = null
    ) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.category = category;
        this.tags = tags;
        this.author = author;
        this.createdAt = createdAt;
        this.image = image;
    }
}