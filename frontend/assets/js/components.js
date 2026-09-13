// components.js


import HomePresenter from "../../presenters/HomePresenter.js";
import HomeView from "../../views/HomeView.js";
import CategoryPresenter from "../../presenters/CategoryPresenter.js";
import TagPresenter from "../../presenters/TagPresenter.js";
import AuthModel from "../../models/AuthModel.js";

async function loadComponent(containerId, filePath) {

    const container =
        document.getElementById(containerId);

    if (!container) {
        return;
    }

    const response = await fetch(filePath);
    const html = await response.text();

    container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", async () => {

    await loadComponent(
        "navbar-container",
        "../pages/components/navbar.html"
    );
const sidebarContainer =
    document.getElementById(
        "sidebar-container"
    );

if (sidebarContainer) {

    await loadComponent(
        "sidebar-container",
        "../pages/components/sidebar.html"
    );

    const categoryPresenter =
        new CategoryPresenter();

    const tagPresenter =
        new TagPresenter();

    const categories =
        await categoryPresenter.getAll();

    const tags =
        await tagPresenter.getAll();

    document.getElementById("categories-container").innerHTML =
        categories.map(c => `
            <a href="index.html?category=${encodeURIComponent(c.name)}""
            class="badge bg-sage text-decoration-none">
            ${c.name}
            </a>
        `).join("");

    document.getElementById("tags-container").innerHTML =
        tags.map(t => `
            <a href="index.html?tag=${encodeURIComponent(t.name)}""
            class="badge bg-primary text-decoration-none">
            ${t.name}
            </a>
        `).join("");
   
}

    
});