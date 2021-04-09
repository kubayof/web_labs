import UserPrincipalView from "./components/UserPrincipalView.js";

export default class MyAccountView {
    constructor(controller) {
        this.controller = controller;
        this.userPrincipalView = new UserPrincipalView(controller);
    }

    registerListeners() {

    }

    toHtml() {
        return this.userPrincipalView.toHtml();
    }
}