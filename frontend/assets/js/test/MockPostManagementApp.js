import PostPresenter
from "../../../presenters/PostPresenter.js";

import PostManagementView
from "../../../views/PostManagementView.js";

import MockPostService
from "../../../services/MockServices/MockPostService.js";



const view =
    new PostManagementView(
        "posts-container"
    );

const presenter =
    new PostPresenter(
        null,
        null,
        null,
        view
    );

presenter.postService =
    new MockPostService();

view.bindDeletePost(
    presenter.deletePost.bind(
        presenter
    )
);

presenter.loadPosts();
