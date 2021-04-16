export default class SignUpView {
    constructor(viewFacade) {
        this.viewFacade = viewFacade;
    }

    registerListeners() {
        document.getElementById('sign_up_form').addEventListener('submit', e => this.onSignUp(e));
    }

    onSignUp(e) {
        e.preventDefault();
        const formData = new FormData(document.getElementById('sign_up_form'));
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');
        const gender = (formData.get('gender') === '1') ? 'male' : 'female';
        const birthDate = document.getElementById('birth_date');
        this.viewFacade.onSignUpCallback(name, email, password, gender, new Date(birthDate.valueAsNumber));
    }

    toHtml() {
        return `
            <div id="sign_up_body" class="text-center">
                <div id="sign_up_main" class="form-signup">
                    <form id="sign_up_form">
                        <img class="mb-4" src="img/logo.png" alt="" width="100">
                        <h1 class="h3 mb-3 fw-normal">Sign up</h1>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="name-hint">Name &nbsp;&nbsp;</span>
                            <input type="text" name="name" class="form-control" id="name" aria-describedby="basic-addon3">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="email-hint">Email &nbsp;&nbsp;</span>
                            <input type="text" name="email" class="form-control" id="email" aria-describedby="basic-addon3">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="email-hint">Password</span>
                            <input type="password" name="password" class="form-control" id="password" aria-describedby="basic-addon3">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="gender-hint">Gender</span>
                            <select class="form-select" name="gender" aria-label="Default select example">
                                <option selected>Female</option>
                                <option value="1">Male</option>
                            </select>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="birth_date-hint">Birth date</span>
                            <input type="date" name="birth_date" class="form-control" id="birth_date" aria-describedby="basic-addon3">
                        </div>
                        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                    </form>
                </div>
            </div>
        `;
    }
}