import ChordsModelList from "./ChordsModelList.js";
import newChords from "../default_init.js";
import UserPrincipalService from "./UserPrincipalService.js";
import Chords from "./Chords.js";

export default class ModelFacade {
    constructor () {
        this.chordsModelList = new ChordsModelList();
        this.userPrincipalService = new UserPrincipalService(this);
        this.defaultInit();
    }

    defaultInit() {
        this.chordsModelList.add(newChords());
        this.chordsModelList.add(newChords());
        this.chordsModelList.add(newChords());
        this.chordsModelList.add(newChords());
        this.chordsModelList.add(newChords());
        this.chordsModelList.add(newChords());
        this.chordsModelList.add(newChords());
        this.chordsModelList.add(newChords());
    }

    getChordModelList() {
        return this.chordsModelList;
    }

    addChords(name, musician, postDate, text) {
        this.chordsModelList.add(new Chords(name, musician, postDate, text, this.userPrincipalService.userPrincipal.id));
    }

    removeChordsById(chordsId) {
        this.chordsModelList.remove(chordsId);
    }

    signIn(email, password) {
        this.userPrincipalService.signIn(email, password);
    }

    signUp(name, email, password, gender, birthDate) {
        this.userPrincipalService.signUp(name, email, password, gender, birthDate);
    }

    signOut() {
        this.userPrincipalService.signOut();
    }

    isAuthorized() {
        return this.userPrincipalService.isAuthorized();
    }
}