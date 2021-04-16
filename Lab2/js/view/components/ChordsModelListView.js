import ChordsView from "./ChordsView.js";

export default class ChordsModelListView {
    constructor(viewFacade) {
        this.chordsViewList = viewFacade.modelFacade.chordsModelList.items
            .map(chords => new ChordsView(viewFacade, chords));
    }

    registerListeners() {
        this.chordsViewList.forEach(chordsView => chordsView.registerListeners());
    }

    toHtml() {
        const shortenedHtml = this.chordsViewList
            .map(chordsView => "<div class=\"col\">" + chordsView.toHtml() + "</div>")
            .join("");

        return `
            <div class="album py-5 bg-light">
                <div class="container">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        ${shortenedHtml}
                    </div>
                </div>
            </div>
        `;
    }
}