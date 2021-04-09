export default class View {
    constructor(controller) {
        this.controller = controller;
    }

    authorizedDisplayStyle() {
        return this.controller.userPrincipalService.isAuthorized() ? '' : 'style="display:none"';
    }

    notAuthorizedDisplayStyle() {
        return this.controller.userPrincipalService.isAuthorized() ? 'style="display:none"' : '';
    }
}