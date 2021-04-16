import ContentWrapperView from "./ContentWrapperView.js";

export default class ViewFacade {
    constructor(modelFacade) {
        this.modelFacade = modelFacade;
        this.contentWrapperView = new ContentWrapperView(this);
        this.setDefaultCallbacks();
    }

    setDefaultCallbacks() {
        this.setNavbarOnHomeCallback(e => {});
        this.setNavbarOnWorkspaceCallback(e => {});
        this.setNavbarOnMyAccountCallback(e => {});
        this.setNavbarOnAboutCallback(e => {});
        this.setNavbarOnSignInCallback(e => {});
        this.setNavbarOnSignUpCallback(e => {});
        this.setNavbarOnSignOutCallback(e => {});
        this.setWorkspaceOnAddChordsCallback((name, musician, text, postDate) => {});
        this.setOnSignInCallback((email, password) => {});
        this.setOnSignUpCallback((name, email, password, gender, birthDate) => {});
        this.setChordsViewOnViewCallback(chords => {});
        this.setChordsViewOnEditCallback(chords => {});
        this.setChordsViewOnDeleteCallback(chords => {});
        this.setOnAddCommentCallback(text => {})
    }

    repaint() {
        this.contentWrapperView.repaint();
    }

    registerListeners() {
        this.contentWrapperView.registerListeners();
    }

    /**
     * Is called when 'Home' button in clicked on Navbar
     * callback(e: MouseEvent)
     */
    setNavbarOnHomeCallback(callback) {
        this.navbarOnHomeCallback = callback;
    }

    /**
     * Is called when 'Workspace' button is clicked on Navbar
     * callback(e: MouseEvent)
     */
    setNavbarOnWorkspaceCallback(callback) {
        this.navbarOnWorkspaceCallback = callback;
    }

    /**
     * Is called when 'My account' is clicked on Navbar
     * callback(e: MouseEvent)
     */
    setNavbarOnMyAccountCallback(callback) {
        this.navbarOnMyAccountCallback = callback;
    }

    /**
     * Is called when 'About' is clicked on Navbar
     * callback(e: MouseEvent)
     */
    setNavbarOnAboutCallback(callback) {
        this.navbarOnAboutCallback = callback;
    }

    /**
     * Is called when 'Sign In' is clicked on Navbar
     * callback(e: MouseEvent)
     */
    setNavbarOnSignInCallback(callback) {
        this.navbarOnSignInCallback = callback;
    }

    /**
     * Is called when 'Sign Up' is clicked on Navbar
     * callback(e: MouseEvent)
     */
    setNavbarOnSignUpCallback(callback) {
        this.navbarOnSignUpCallback = callback;
    }

    /**
     * Is called when 'Sign Out' is clicked on Navbar
     * callback(e: MouseEvent)
     */
    setNavbarOnSignOutCallback(callback) {
        this.navbarOnSignOutCallback = callback;
    }

    /**
     * Is called when 'Publish' button is pressed in workspace view
     * callback(name: String, musician: String, text: String, postDate: Date)
     */
    setWorkspaceOnAddChordsCallback(callback) {
        this.workspaceOnAddChordsCallback = callback;
    }

    /**
     * Is called when 'Sign In' button is pressed in SignInView
     * callback(email: String, password: String)
     */
    setOnSignInCallback(callback) {
        this.onSignInCallback = callback;
    }

    /**
     * Is called when 'Sign Up' is button is pressed in SignUpView
     * callback(name: String, email: String, password: String, gender: String, birthDate: Date)
     */
    setOnSignUpCallback(callback) {
        this.onSignUpCallback = callback;
    }

    /**
     * Is called when 'View' button is pressed on home page
     * callback(chords: Chords)
     */
    setChordsViewOnViewCallback(callback) {
        this.chordsViewOnViewCallback = callback;
    }

    /**
     * Is called when 'Edit' button is pressed on home page
     * callback(chords: Chords)
     */
    setChordsViewOnEditCallback(callback) {
        this.chordsViewOnEditCallback = callback;
    }

    /**
     * Is called when 'Delete' button is pressed on home page
     * callback(chords: Chords)
     */
    setChordsViewOnDeleteCallback(callback) {
        this.chordsViewOnDeleteCallback = callback;
    }

    /**
     * Is called when 'Add comment' is called in ChordsView
     * callback(text: String)
     */
    setOnAddCommentCallback(callback) {
        this.addCommentCallback = callback;
    }

    setContentView(contentView) {
        this.contentWrapperView.setContentView(contentView);
    }

    setContentViewName(contentViewName) {
        this.contentWrapperView.setContentViewName(contentViewName);
    }

    toHtml() {
        return this.contentWrapperView.toHtml();
    }
}