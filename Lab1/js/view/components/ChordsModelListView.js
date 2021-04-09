import ChordsView from "./ChordsView";

export default class ChordsModelListView {
    constructor(chordsModelList) {
        this.chordsModelList = chordsModelList;
    }

    toHtml() {
        const shortenedHtml = this.chordsModelList.items.map((item) => {
            const chordsView = new ChordsView(item);
            return "<div class=\"col\">" + chordsView.toHtml() + "</div>";
        }).join("");

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