// app.js

import TagPresenter
from "../../../presenters/TagPresenter.js";

import TagManagementView
from "../../../views/TagManagementView.js";

import MockTagService
from "../../../services/MockServices/MockTagService.js";


const view =
    new TagManagementView(
        "tags-container"
    );

const presenter =
    new TagPresenter(
        view
    );

/*
 * Sostituisce il service reale
 * durante il test
 */
presenter.tagService =
    new MockTagService();

/*
 * CREAZIONE TAG
 */
view.bindCreateTag(
    presenter.createTag.bind(
        presenter
    )
);

/*
 * ELIMINAZIONE TAG
 */
view.bindDeleteTag(
    presenter.deleteTag.bind(
        presenter
    )
);

/*
 * CARICAMENTO INIZIALE
 */
presenter.loadTags();