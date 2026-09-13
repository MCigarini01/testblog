// MockSearchApp.js

import SearchView
from "../../../views/SearchView.js";

import SearchPresenter
from "../../../presenters/SearchPresenter.js";

import MockSearchService
from "../../../services/MockServices/MockSearchService.js";

const view =
    new SearchView(
        "search-results"
    );

const presenter =
    new SearchPresenter(
        view
    );

presenter.searchService =
    new MockSearchService();

view.bindSearch(
    presenter.search.bind(
        presenter
    )
);
view.bindCategorySearch(
    presenter.searchByCategory.bind(
        presenter
    )
);

view.bindTagSearch(
    presenter.searchByTag.bind(
        presenter
    )
);

