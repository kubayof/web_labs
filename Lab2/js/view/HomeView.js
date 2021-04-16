import ChordsModelListView from "./components/ChordsModelListView.js";

export default class HomeView {
    constructor(viewFacade) {
        this.viewFacade = viewFacade;
    }

    registerListeners() {
        this.chordsModelListView.registerListeners();
    }

    toHtml() {
        this.chordsModelListView = new ChordsModelListView(this.viewFacade);
        return this.chordsModelListView.toHtml();
    }
}