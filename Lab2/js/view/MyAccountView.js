import UserPrincipalView from "./components/UserPrincipalView.js";

export default class MyAccountView {
    constructor(modelFacade) {
        this.userPrincipalView = new UserPrincipalView(modelFacade);
    }

    registerListeners() {

    }

    toHtml() {
        return this.userPrincipalView.toHtml();
    }
}