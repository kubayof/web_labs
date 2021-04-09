import {formatDateTime} from "../Utils.js";

export default class ChordsView {
    constructor(comment) {
        this.comment = comment;
    }

    toHtml() {
        return `
            <div class="row">
                <div class="col-xs-12 col-md-11">
                    <div>
                        <div class="mic-info">
                            By: <b>${this.comment.userPrincipal.name}</b> on ${formatDateTime(this.comment.date)}
                        </div>
                    </div>
                    <div class="comment-text">
                        ${this.comment.text}
                    </div>
                </div>
            </div>
        `;
    }
}