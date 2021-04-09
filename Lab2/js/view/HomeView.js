import ChordsModelListView from "./components/ChordsModelListView.js";

export default class HomeView {
    constructor(controller) {
        this.controller = controller;
    }

    registerListeners() {
        this.chordsModelListView.registerListeners();
    }

    toHtml() {
        this.chordsModelListView = new ChordsModelListView(this.controller);
        return this.chordsModelListView.toHtml();
    }
}