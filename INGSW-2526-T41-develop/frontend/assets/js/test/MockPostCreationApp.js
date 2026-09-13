import PostPresenter
from "../../../presenters/PostPresenter.js";

import CategoryPresenter
from "../../../presenters/CategoryPresenter.js";

import TagPresenter
from "../../../presenters/TagPresenter.js";

import PostCreationView
from "../../../views/PostCreationView.js";

import MockPostService
from "../../../services/MockServices/MockPostService.js";

const view =
    new PostCreationView();

const postPresenter =
    new PostPresenter(
        null,
        null,
        view
    );

const categoryPresenter =
    new CategoryPresenter();

const tagPresenter =
    new TagPresenter();

postPresenter.postService =
    new MockPostService();

async function loadFormData() {
    try {
        const [
            categories,
            tags
        ] = await Promise.all([
            categoryPresenter.getAll(),
            tagPresenter.getAll()
        ]);

        view.renderCategories(
            categories
        );

        view.renderTags(
            tags
        );
    } catch (error) {
        console.error(
            "Errore caricamento categorie e tag:",
            error
        );

        view.showError(
            "Impossibile caricare categorie e tag"
        );
    }
}

loadFormData();

/*
 * VERSIONE PER IL BACKEND REALE
 *
 * Questo metodo sostituirà createPost()
 * quando verrà collegata l'API.
 *
async createPostWithApi(postData) {
    const formData =
        new FormData();

    formData.append(
        "title",
        postData.title
    );

    formData.append(
        "content",
        postData.content
    );

    formData.append(
        "category",
        postData.category
    );

    postData.tags.forEach(
        tag => {
            formData.append(
                "tags[]",
                tag
            );
        }
    );

    if (postData.image) {
        formData.append(
            "image",
            postData.image
        );
    }

    const response =
        await fetch(
            "http://localhost:8080/api/posts",
            {
                method: "POST",
                credentials: "include",
                body: formData
            }
        );

    if (!response.ok) {
        throw new Error(
            "Errore durante la creazione dell'articolo"
        );
    }

    return await response.json();
}
*/