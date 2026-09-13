// =====================================
// VIEWS
// =====================================

import PostCreationView
from "../../../views/PostCreationView.js";

import PostEditView
from "../../../views/PostEditView.js";


// =====================================
// PRESENTERS
// =====================================

import PostPresenter
from "../../../presenters/PostPresenter.js";


// =====================================
// SERVICES
// =====================================

import ApiService
from "../../../services/ApiService.js";

import PostService
from "../../../services/PostService.js";

import CategoryService
from "../../../services/CategoryService.js";


// =====================================
// URL PARAMETERS
// =====================================

const params =
    new URLSearchParams(
        window.location.search
    );

const postId =
    params.get(
        "id"
    );

const editMode =
    postId !== null;


// =====================================
// SERVICES
// =====================================

const postService =
    new PostService(
        ApiService
    );

const categoryService =
    new CategoryService(
        ApiService
    );


// =====================================
// VIEW
// =====================================

const view =
    editMode
        ? new PostEditView()
        : new PostCreationView();


// =====================================
// PRESENTER
// =====================================

const postPresenter =
    new PostPresenter(
        postService,
        null,
        null,
        editMode
            ? null
            : view,
        editMode
            ? view
            : null
    );


// =====================================
// RESPONSE NORMALIZATION
// =====================================

function normalizeResponse(
    response
) {
    if (
        response &&
        Array.isArray(
            response.data
        )
    ) {
        return response.data;
    }

    return response;
}


// =====================================
// LOAD FORM DATA
// =====================================

async function loadFormData() {
    const [
        categoriesResponse,
        tagsResponse
    ] = await Promise.all([
        categoryService
            .getAllCategories(),

        ApiService.get(
            "/tags"
        )
    ]);

    const categories =
        normalizeResponse(
            categoriesResponse
        );

    const tags =
        normalizeResponse(
            tagsResponse
        );

    if (
        !Array.isArray(
            categories
        )
    ) {
        throw new Error(
            "Formato categorie non valido"
        );
    }

    if (
        !Array.isArray(
            tags
        )
    ) {
        throw new Error(
            "Formato tag non valido"
        );
    }

    view.renderCategories(
        categories
    );

    view.renderTags(
        tags
    );
}


// =====================================
// CREATION MODE
// =====================================

async function initCreation() {
    await loadFormData();

    view.bindCancel(
        () => {
            window.location.href =
                "index.html";
        }
    );
}


// =====================================
// EDIT MODE
// =====================================

async function initEdit() {
    if (
        !postId ||
        Number.isNaN(
            Number(postId)
        )
    ) {
        throw new Error(
            "ID dell'articolo non valido"
        );
    }

    const [
        postResponse
    ] = await Promise.all([
        postService.getPostById(
            postId
        ),

        loadFormData()
    ]);

    const post =
        postResponse?.data ??
        postResponse;

    if (!post) {
        throw new Error(
            "Articolo non trovato"
        );
    }

    view.fillForm(
        post
    );

    view.bindUpdatePost(
        postData =>
            postPresenter.updatePost(
                postId,
                postData
            )
    );

    view.bindCancel(
        () => {
            window.location.href =
                `postDetail.html?id=${encodeURIComponent(
                    postId
                )}`;
        }
    );
}


// =====================================
// INIT
// =====================================

async function init() {
    try {
        if (editMode) {
            await initEdit();
        } else {
            await initCreation();
        }
    } catch (error) {
        console.error(
            "Errore inizializzazione form post:",
            error
        );

        view.showError(
            error.message ||
            "Impossibile caricare il form"
        );
    }
}

init();