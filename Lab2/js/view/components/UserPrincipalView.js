import {formatDate} from "../Utils.js";

export default class UserPrincipalView {
    constructor(controller) {
        this.controller = controller;
        this.userPrincipalService = controller.userPrincipalService;
    }

    toHtml() {
        return `
        <div class="container">
            <div class="mb-3 row">
                <label for="name" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext" id="name" 
                    value="${this.userPrincipalService.userPrincipal.name}">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="email" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext" id="email"
                    value="${this.userPrincipalService.userPrincipal.email}">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="gender" class="col-sm-2 col-form-label">Gender</label>
                <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext" id="gender"
                    value="${this.userPrincipalService.userPrincipal.gender}">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="birth_date" class="col-sm-2 col-form-label">Birth date</label>
                <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext" id="birth_date"
                    value="${formatDate(this.userPrincipalService.userPrincipal.birthDate)}">
                </div>
            </div>
        </div>
        `;
    }
}