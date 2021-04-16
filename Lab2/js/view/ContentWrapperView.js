import JumbotronView from "./components/JumbotronView.js";
import NavbarView from "./components/NavbarView.js";
import HomeView from "./HomeView.js";
import WorkspaceView from "./WorkspaceView.js";
import MyAccountView from "./MyAccountView.js";
import AboutView from "./AboutView.js";
import SignInView from "./SignInView.js";
import SignUpView from "./SignUpView.js";


export default class ContentWrapperView {
    constructor(viewFacade) {
        this.jumbotronView = new JumbotronView();
        this.navbarView = new NavbarView(viewFacade);
        this.viewRegistry = {
            "home": new HomeView(viewFacade),
            "workspace": new WorkspaceView(viewFacade),
            "my_account": new MyAccountView(viewFacade.modelFacade),
            "about": new AboutView(),
            "sign_in": new SignInView(viewFacade),
            "sign_up": new SignUpView(viewFacade)
        }
        this.contentView = this.viewRegistry['home'];
    }

    registerListeners() {
        this.navbarView.registerListeners();
        this.contentView.registerListeners();
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