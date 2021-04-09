import UserPrincipal from "../model/UserPrincipal.js";

export default class UserPrincipalService {
    constructor(controller) {
        this.controller = controller;
        //TODO: remove default value
        this.userPrincipal = new UserPrincipal('Name', 'Email', 'male', new Date());
    }

    isAuthorized() {
        return this.userPrincipal != null;
    }

    signIn(email, password) {
        //TODO: send request to server, alert if user was not found
        this.userPrincipal = new UserPrincipal('Name', email, 'male', new Date());
        this.controller.onHome();
    }

    signUp(name, email, password, gender, birthDate) {
        //TODO: send request to server, try to register new user
        this.userPrincipal = new UserPrincipal(name, email, gender, birthDate);
        this.controller.onHome();
    }

    signOut() {
        this.userPrincipal = null;
    }
}