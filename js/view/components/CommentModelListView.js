import CommentView from "./CommentView.js";

export default class CommentModelListView {
    constructor(commentModelList) {
        this.commentModelList = commentModelList;
    }

    toHtml() {
        const comments = this.commentModelList.items.map((comment) => {
            let commentView = new CommentView(comment);
            return '<li class="list-group-item">' + commentView.toHtml() + '</li>';
        });
        return `
        <div class="container comments">
            <div class="row">
                <div class="panel panel-default widget">
                    <div class="panel-heading">
                        <span class="glyphicon glyphicon-comment"></span>
                        <h3 class="panel-title">Comments</h3>
                        <span class="label label-info">1</span>
                    </div>
                    <div class="panel-body">
                        <ul class="list-group">
                        ${comments}
                        </ul>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">New comment</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <a href="#" class="btn btn-primary btn-sm btn-block" role="button">Add</a>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}