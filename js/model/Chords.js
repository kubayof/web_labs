
export default class Chords {
    constructor(title, musician, date, text, userId) {
        this.id = Math.round(Math.random() * 100000).toString();
        this.userId = userId;
        this.title = title;
        this.musician = musician;
        this.date = date;
        this.text = text;
        this.comments = [];
    }

    setText(text) {
        this.text = text;
    }

    addComment(comment) {
        this.comments.push(comment);
        //TODO: send comment to server && update local comments
    }
}