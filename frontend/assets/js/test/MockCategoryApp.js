import CategoryPresenter
from "../../../presenters/CategoryPresenter.js";

import CategoryManagementView
from "../../../views/CategoryManagementView.js";

import MockCategoryService
from "../../../services/MockCategoryService.js";


const view =
    new CategoryManagementView(
        "categories-container"
    );

const presenter =
    new CategoryPresenter(
        view
    );

/*
 * Sostituisce il service reale
 * durante il test
 */
presenter.categoryService =
    new MockCategoryService();

/*
 * CREAZIONE
 */
view.bindCreateCategory(
    presenter.createCategory.bind(
        presenter
    )
);

/*
 * ELIMINAZIONE
 */
view.bindDeleteCategory(
    presenter.deleteCategory.bind(
        presenter
    )
);

/*
 * CARICAMENTO INIZIALE
 */
presenter.loadCategories();