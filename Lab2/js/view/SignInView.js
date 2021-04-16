export default class SignInView {
    constructor(viewFacade) {
        this.viewFacade = viewFacade;
    }

    registerListeners() {
        document.getElementById('sign_in_form').addEventListener('submit', e => this.onSignIn(e));
    }

    onSignIn(e) {
        e.preventDefault();
        const formData = new FormData(document.getElementById('sign_in_form'));
        const email = formData.get('email');
        const password = formData.get('password');
        this.viewFacade.onSignInCallback(email, password);
    }

    toHtml() {
        return `
            <div id="sign_in_body" class="text-center">
                <div id="sign_in_main" class="form-signin">
                    <form id="sign_in_form">
                        <img class="mb-4" src="img/logo.png" alt="" width="100">
                        <h1 class="h3 mb-3 fw-normal">Sign in</h1>
                        <label for="inputEmail" class="visually-hidden">Email address</label>
                        <input type="email" name="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                        <label for="inputPassword" class="visually-hidden">Password</label>
                        <input type="password" name="password" id="inputPassword" class="form-control" placeholder="Password" required>
                        <button id="submit_sign_in" class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    </form>
                </div>
            </div>
        `;
    }
}