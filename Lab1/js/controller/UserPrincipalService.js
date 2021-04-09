export default class UserPrincipalService {
    constructor() {
        //TODO: remove default value
        this.userPrincipalService = new UserPrincipalService();
    }

    isAuthorized() {
        return this.userPrincipalService != null;
    }

    signOut() {
        this.userPrincipalService = null;
    }
}