import UserPrincipalService from "./UserPrincipalService.js";
import ContentWrapperView from "../view/ContentWrapperView.js";
import ChordsModelList from "../model/ChordsModelList.js";
import newChords from "../default_init.js";
import Chords from "../model/Chords.js";

export default class Controller {
    constructor() {
        this.userPrincipalService = new UserPrincipalService(this);
        console.log()
        // Model
        this.chordsModelList = new ChordsModelList();
        //TODO: remove default initialization
        this.chordsModelList.add(newChords())
        this.chordsModelList.add(newChords())
        this.chordsModelList.add(newChords())
        this.chordsModelList.add(newChords())
        this.chordsModelList.add(newChords())
        this.chordsModelList.add(newChords())
        this.chordsModelList.add(newChords())
        this.chordsModelList.add(newChords())

        // View
        this.view = new ContentWrapperView(this);
        document.body.innerHTML = this.view.toHtml();
        this.registerListeners();
    }


    loadMoreChords() {
        // TODO: get chords from server
        this.chordsModelList.add(newChords())
    }

    registerListeners() {
        this.view.registerListeners();
    }

    addChords(name, author, text, date) {
        //TODO: send also chords to the server
        this.chordsModelList.add(new Chords(name, author, date, text, this.userPrincipalService.userPrincipal.id));
        this.onHome();
    }

    onHome(e) {
        this.view.setContentViewName('home');
    }

    onWorkspace(e) {
        this.view.setContentViewName('workspace');
    }

    onMyAccount(e) {
        this.view.setContentViewName('my_account');
    }

    onAbout(e) {
        this.view.setContentViewName('about');
    }

    onSignIn(e) {
        this.view.setContentViewName('sign_in');
    }

    onSignUp(e) {
        this.view.setContentViewName('sign_up');
    }

    setContentView(contentView) {
        this.view.setContentView(contentView);
    }
}