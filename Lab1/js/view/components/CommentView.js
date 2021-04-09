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
                            By: <a href="#">${this.comment.userPrincipal.name}</a> on ${this.comment.date}
                        </div>
                    </div>
                    <div class="comment-text">
                        ${this.comment.text}
                    </div>
                    <hr/>
                </div>
            </div>
        `;
    }
}