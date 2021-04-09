import CommentsView from "./components/CommentsView.js";

export default class FullChordsView {
    constructor(controller, chords) {
        this.controller = controller;
        this.chords = chords;
        this.chordsView = new CommentsView(controller, this.chords);
    }

    registerListeners() {
        this.chordsView.registerListeners();
    }

    toHtml() {
        return `
            <div>
                ${this.innerHtml()}
                ${this.commentsHtml()}
            </div>
        `;
    }

    innerHtml() {
        return this.chords.text.split("\n").map((line) => {
            let newLineParts = [];
            let chordsLine = "";
            line.split(/(<[ 0-9a-zA-Z]+>)/g).forEach((str) => {
                if (this.isChord(str)) {
                    if (newLineParts.length > 0) {
                        chordsLine += "&nbsp;".repeat(newLineParts[newLineParts.length - 1].length);
                    }
                    chordsLine += str.substr(1, str.length - 2);
                } else {
                    newLineParts.push(str);
                }
            });
            return chordsLine + "<br/>" + newLineParts.join("") + "<br/>";
        }).join("\n");
    }

    isChord(line) {
        return line.startsWith("<") && line.endsWith(">");
    }

    commentsHtml() {
        return this.chordsView.toHtml();
    }
}