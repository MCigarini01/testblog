// HomePresenter.js
import User from "../models/UserModel.js";
import RegistredUser from "../models/RegisteredUserModel.js";
import Editor from "../models/EditorModel.js";
import Admin from "../models/AdminModel.js";

export default class HomePresenter {

    constructor(
        homeView,
        categoryView,
        tagView,
        authModel
    ) {
        this.homeView = homeView;
        this.categoryView = categoryView;
        this.tagView = tagView;
        this.authModel = authModel;
    }

    loadHome(
        posts,
        categories,
        tags
    ) {

        this.postsForView =
            posts.map(post => ({
                ...post,

           categoryName: categories.find( category => category.id == post.categoryId)?.name,

                tagNames:
                    post.tags.map(
                        tagId =>
                            tags.find(
                                tag =>
                                    tag.id == tagId
                            )?.name
                    )

            }));

        this.homeView.setTitle(
            "Ultimi articoli"
        );

        this.homeView.render(
            this.postsForView
        );

        this.categoryView.render(
            categories
        );

        this.tagView.render(
            tags
        );
    }

    clearFilters() {

        this.homeView.setTitle(
            "Ultimi articoli"
        );

        this.homeView.render(
            this.postsForView
        );
    }

}
