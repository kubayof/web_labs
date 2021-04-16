import CommentView from "./CommentView.js";
import Comment from '../../model/Comment.js';

export default class CommentsView {
    constructor(viewFacade,chords) {
        this.viewFacade = viewFacade;
        this.chords = chords;
    }

    registerListeners() {
        if (this.viewFacade.modelFacade.isAuthorized()) {
            document.getElementById("add_comment")
                .addEventListener('submit', e => this.onAddComment(e));
        }
    }

    onAddComment(e) {
        e.preventDefault();
        const formData = new FormData(document.getElementById("add_comment"));
        this.chords.addComment(new Comment(this.viewFacade.modelFacade.userPrincipalService.userPrincipal, formData.get('text'), new Date()));
        this.viewFacade.addCommentCallback(formData.get('text'));
        this.repaint();
    }

    repaint() {
        document.getElementById("comments_view").innerHTML = this.innerHtml();
        this.registerListeners();
    }

    toHtml() {
        return `
            <div id="comments_view">
                ${this.innerHtml()}
            </div>
        `;
    }

    innerHtml() {
        const commentsHtml = this.chords.comments
            .map(comment => `<li class="list-group-item">${new CommentView(comment).toHtml()}</li>`)
            .join("");

        return `
            <div class="container comments">
                <div class="row">
                    <div class="panel panel-default widget">
                        <div class="panel-heading">
                            <span class="glyphicon glyphicon-comment"></span>
                            <h3 class="panel-title">Comments</h3>
                            <span class="label label-info">${this.chords.comments.length}</span>
                        </div>
                        <div class="panel-body">
                            <ul class="list-group">
                                ${commentsHtml}
                            </ul>
                            ${this.addCommentHtml()}
                        </div>
                    </div>
                </div>
            </div>
            `;
    }

    addCommentHtml() {
        if (this.viewFacade.modelFacade.isAuthorized()) {
            return `
            <form id="add_comment">
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">New comment</label>
                    <textarea name="text" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type='submit' class="btn btn-primary btn-sm btn-block" role="button">Add</>
            </form>
            `;
        }
        return '';
    }
}