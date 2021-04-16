import ViewFacade from "../view/ViewFacade.js";
import ModelFacade from "../model/ModelFacade.js";
import WorkspaceView from "../view/WorkspaceView.js";
import FullChordsView from "../view/FullChordsView.js";

export default class Controller {
    constructor() {
        this.modelFacade = new ModelFacade();
        this.viewFacade = new ViewFacade(this.modelFacade);
        document.body.innerHTML = this.viewFacade.toHtml();
        this.registerListeners();
        this.setCallbacks();
    }

    registerListeners() {
        this.viewFacade.registerListeners();
    }

    setCallbacks() {
        this.viewFacade.setNavbarOnHomeCallback(e => this.viewFacade.setContentViewName('home'));
        this.viewFacade.setNavbarOnAboutCallback(e => this.viewFacade.setContentViewName('about'));
        this.viewFacade.setNavbarOnWorkspaceCallback(e => this.viewFacade.setContentViewName('workspace'));
        this.viewFacade.setNavbarOnMyAccountCallback(e => this.viewFacade.setContentViewName('my_account'));
        this.viewFacade.setNavbarOnSignInCallback(e => this.viewFacade.setContentViewName('sign_in'));
        this.viewFacade.setNavbarOnSignUpCallback(e => this.viewFacade.setContentViewName('sign_up'));
        this.viewFacade.setNavbarOnSignOutCallback(e => {
            this.modelFacade.signOut();
            this.viewFacade.setContentViewName('home');
        });
        this.viewFacade.setWorkspaceOnAddChordsCallback((name, musician, postDate, text) => {
            this.modelFacade.addChords(name, musician, postDate, text);
            this.viewFacade.setContentViewName('home');
        });
        this.viewFacade.setOnSignInCallback((email, password) => {
            this.modelFacade.signIn(email, password);
            this.viewFacade.setContentViewName('home');
        });
        this.viewFacade.setOnSignUpCallback((name, email, password, gender, birthDate) => {
            this.modelFacade.signUp(name, email, password, gender, birthDate);
            this.viewFacade.setContentViewName('home');
        });
        this.viewFacade.setChordsViewOnViewCallback(chords => {
            this.viewFacade.setContentView(new FullChordsView(this.viewFacade, chords));
        });
        this.viewFacade.setChordsViewOnEditCallback(chords => {
            this.viewFacade.setContentView(new WorkspaceView(this.viewFacade, chords));
        });
        this.viewFacade.setChordsViewOnDeleteCallback(chords => {
            this.modelFacade.removeChordsById(chords.id);
            this.viewFacade.repaint();
        });
        this.viewFacade.setOnAddCommentCallback(text => {

        });
    }
}