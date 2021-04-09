export default class ChordsView {
    constructor(chords) {
        this.chords = chords;
    }

    toHtml() {
        return `
            <div class="card shadow-sm">
                <div class="card-body">
                    <p class="card-text">${this.chords.title} by ${this.chords.musician}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a class="btn btn-sm btn-outline-secondary" role="button" href="chord_view.html">View</a>
                                <a class="btn btn-sm btn-outline-secondary" role="button" href="workspace.html">Edit</a>
                            </div>
                        <!-- <small class="text-muted">9 mins</small> -->
                    </div>
                </div>
            </div>
        `;
    }

    toFullHtml() {
        return this.convertChordsToHtml(this.chords.text);
    }

    convertChordsToHtml(text) {
        return text.split("\n").map((line) => {
            let newLineParts = [];
            let chordsLine = "";
            line.split(/(<[ 0-9a-zA-Z]+>)/g).forEach((str) => {
                if (this.isChord(str)) {
                    if (newLineParts.length > 0) {
                        chordsLine += " ".repeat(newLineParts[newLineParts.length - 1]);
                    }
                    chordsLine+= str.substr(1, str.length - 2);
                } else {
                    newLineParts.push(str);
                }
            });
            return chordsLine + "\n" + newLineParts.join("");
        }).join("\n");
    }

    isChord(line) {
        return line.startsWith("<") && line.endsWith(">");
    }
}