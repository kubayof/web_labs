import JumbotronView from "./components/JumbotronView.js";
import NavbarView from "./components/NavbarView.js";
import HomeView from "./HomeView.js";
import WorkspaceView from "./WorkspaceView.js";
import MyAccountView from "./MyAccountView.js";
import AboutView from "./AboutView.js";
import SignInView from "./SignInView.js";
import SignUpView from "./SignUpView.js";


export default class ContentWrapperView {
    constructor(controller) {
        this.jumbotronView = new JumbotronView();
        this.navbarView = new NavbarView(controller);
        this.viewRegistry = {
            "home": new HomeView(controller),
            "workspace": new WorkspaceView(controller),
            "my_account": new MyAccountView(controller),
            "about": new AboutView(controller),
            "sign_in": new SignInView(controller),
            "sign_up": new SignUpView(controller)
        }
        this.contentView = this.viewRegistry['home'];
    }

    registerListeners() {
        this.navbarView.registerListeners();
        this.contentView.registerListeners();
    }

    onHome() {
        this.setContentViewName('home');
    }

    onWorkspace() {
        this.setContentViewName('workspace');
    }

    onMyAccount() {
        this.setContentViewName('my_account');
    }

    onAbout() {
        this.setContentViewName('about');
    }

    onSignIn() {
        this.setContentViewName('sign_in');
    }

    onSignUp() {
        this.setContentViewName('sign_up');
    }

    setContentViewName(contentViewName) {
        this.contentView = this.viewRegistry[contentViewName];
        this.repaint();
    }

    setContentView(contentView) {
        this.contentView = contentView;
        this.repaint();
    }

    repaint() {
        document.getElementById(this.rootElementName()).innerHTML = this.innerHtml();
        this.registerListeners();
    }

    rootElementName() {
        return "content_wrapper";
    }

    toHtml() {
        return `
            <div id="${this.rootElementName()}">
                ${this.innerHtml()}
            </div>
        `;
    }

    innerHtml() {
        return `
            ${this.navbarView.toHtml()}
            ${this.jumbotronView.toHtml()}
            
            <main>
                ${this.contentView.toHtml()}
            </main>
            
            <footer class="text-muted py-5">
                <div class="container">
                    <p class="float-end mb-1">
                        <a href="#">Back to top</a>
                    </p>
                </div>
            </footer>
        `;
    }
}