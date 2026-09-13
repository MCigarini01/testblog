    export default class NavbarView {
    
    showCreatePostButton() {

        const actions =
            document.getElementById(
                "home-actions"
            );

        if (!actions) return;

        actions.innerHTML = `
            <a href="./postCreation.html" class="create-post">Crea Post</a>
        `;
    }
    showDashboardButton() {
        const navbar =
            document.querySelector(
                ".navbar-nav"
            );

        if (!navbar) {
            console.error(
                "Navbar non trovata"
            );

            return;
        }

        const existingButton =
            document.getElementById(
                "dashboard-menu-item"
            );

        if (existingButton) {
            existingButton.style.display =
                "block";

            return;
        }

        const menuItems =
            navbar.querySelectorAll(
                ".nav-item"
            );

        const aboutUsItem =
            Array.from(menuItems).find(
                item =>
                    item.textContent
                        .trim() === "Chi Siamo"
            );

        if (!aboutUsItem) {
            console.error(
                'Voce "Chi Siamo" non trovata'
            );

            return;
        }

        const dashboardItem =
            document.createElement(
                "li"
            );

        dashboardItem.id =
            "dashboard-menu-item";

        dashboardItem.className =
            "nav-item";

        const dashboardLink =
            document.createElement(
                "a"
            );

        dashboardLink.className =
            "nav-link dashboard-link";

        dashboardLink.href =
            "dashboard.html";

        dashboardLink.textContent =
            "Dashboard";

        dashboardItem.appendChild(
            dashboardLink
        );

        aboutUsItem.insertAdjacentElement(
            "afterend",
            dashboardItem
        );
    }

    showGuestNavbar() {

    document
        .querySelector("#guest-menu")
        .style.display = "flex";

    document
        .querySelector("#user-menu")
        .style.display = "none";
    }

    showAuthenticatedNavbar(username) {
    document
        .querySelector("#guest-menu")
        .style.display = "none";

    document
        .querySelector("#user-menu")
        .style.display = "flex";

    document
        .querySelector("#username")
        .textContent = username;

    this.initializeDropdown();
    }


    initializeDropdown() {

        const toggle =
            document.querySelector(
                ".dropdown-toggle"
            );

        const menu =
            document.querySelector(
                ".dropdown-menu"
            );

        if (!toggle || !menu) {
            return;
        }

        toggle.addEventListener(
            "click",
            () => {

                menu.classList.toggle(
                    "show"
                );

            }
        );

    }

    bindMyPosts(handler) {

        const button =
            document.getElementById(
                "my-posts-link"
            );

        if (!button) {
            return;
        }

        button.addEventListener(
            "click",
            event => {

                event.preventDefault();

                handler();

            }
        );

    }
}