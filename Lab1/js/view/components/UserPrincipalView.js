export default class UserPrincipalView {
    constructor(userPrincipal) {
        this.userPrincipal = userPrincipal;
    }

    toHtml() {
        return `
        <div class="container">
            <div class="mb-3 row">
                <label for="name" class="col-sm-2 col-form-label">${this.userPrincipal.name}</label>
                <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext" id="name" value="Name">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="email" class="col-sm-2 col-form-label">${this.userPrincipal.email}</label>
                <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext" id="email" value="email@example.com">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="gender" class="col-sm-2 col-form-label">${this.userPrincipal.gender}</label>
                <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext" id="gender" value="male">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="birth_date" class="col-sm-2 col-form-label">${this.userPrincipal.birthDate}</label>
                <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext" id="birth_date" value="male">
                </div>
            </div>
        </div>
        `;
    }
}