import View from "../View.js";
import {registerListener} from "../Utils.js";

export default class NavbarView extends View{
    constructor(controller) {
        super(controller);
        this.activeTab = 'home';
    }

    registerListeners() {
        registerListener("navbar_sign_out", (e) => this.onSignOut(e));
        registerListener("navbar_sign_in", e => this.onSignIn(e))
        registerListener("navbar_sign_up", e => this.onSignUp(e))
        registerListener("navbar_home", e => this.onHome(e))
        registerListener("navbar_workspace", e => this.onWorkspace(e))
        registerListener("navbar_my_account", e => this.onMyAccount(e))
        registerListener("navbar_about", e => this.onAbout(e))
    }

    onHome(e) {
        this.controller.onHome(e);
    }

    onWorkspace(e) {
        this.controller.onWorkspace(e);
    }

    onMyAccount(e) {
        this.controller.onMyAccount(e);
    }

    onAbout(e) {
        this.controller.onAbout(e);
    }

    onSignIn(e) {
        this.controller.onSignIn(e);
    }

    onSignUp(e) {
        this.controller.onSignUp(e)
    }

    onSignOut(e) {
        this.controller.userPrincipalService.signOut();
        this.repaint();
        this.controller.onHome();
    }

    repaint() {
        const navbar = document.getElementById(this.rootElementName());
        navbar.innerHTML = this.#innerHtml();
        this.registerListeners();
    }

    rootElementName() {
        return "navbar";
    }

    /**
     * Returns navbar and it's inner HTML
     */
    toHtml() {
        return `
            <nav id="${this.rootElementName()}" class="navbar navbar-expand-lg navbar-dark bg-dark">
                ${this.#innerHtml()}
            </nav>
        `;
    }


    /**
     * Returns only inner HTML
     */
    #innerHtml() {
        return `
            <div class="container-fluid">
                <a href="#" class="navbar-brand d-flex align-items-center">
                    <img src="img/logo.png" width="30"/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        ${this.navbarEntriesHtml()}
                        ${this.#userNavbarEntriesHtml()}
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        `;
    }

    navbarEntriesHtml() {
        return `
            <li class="nav-item ${this.isActive('home')}">
                <a class="nav-link" id="navbar_home" href="#">Home</a>
            </li>
            <li class="nav-item ${this.isActive('about')}">
                <a class="nav-link" id="navbar_about" href="#">About</a>
            </li>
        `;
    }

    isActive(tabName) {
        return (this.activeTab === tabName) ? 'active' : '';
    }

    #userNavbarEntriesHtml() {
        return `
                <li class="nav-item" ${this.authorizedDisplayStyle()}>
                    <a class="nav-link" id="navbar_workspace" href="#">Workspace</a>
                </li>
                <li class="nav-item" ${this.authorizedDisplayStyle()}>
                    <a class="nav-link" id="navbar_my_account" href="#">My account</a>
                </li>
                <li class="nav-item" ${this.authorizedDisplayStyle()}>
                    <a class="nav-link" id="navbar_sign_out" href="#">Sign Out</a>
                </li>
                <li class="nav-item" ${this.notAuthorizedDisplayStyle()}>
                    <a class="nav-link" id="navbar_sign_in" href="#">Sign In</a>
                </li>
                <li class="nav-item" ${this.notAuthorizedDisplayStyle()}>
                    <a class="nav-link" id="navbar_sign_up" href="#">Sign Up</a>
                </li>
                `;
    }
}