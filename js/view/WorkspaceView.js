export default class WorkspaceView {
    constructor(controller, chords = null) {
        this.controller = controller;
        this.chords = chords;
    }

    registerListeners() {
        document.getElementById('workspace_form').addEventListener('submit', e => this.onAddChords(e));
        this.setChords();
    }

    setChords() {
        if (this.chords != null) {
            document.getElementById('song_name').setAttribute('value', this.chords.title);
            document.getElementById('song_author').setAttribute('value', this.chords.musician);
            document.getElementById('song_text').defaultValue = this.chords.text;
        }
    }

    onAddChords(e) {
        e.preventDefault();
        const formData = new FormData(document.getElementById('workspace_form'));
        const name = formData.get('name');
        const author = formData.get('author');
        const text = formData.get('text');
        const date = new Date();
        this.controller.addChords(name, author, text, date);
    }

    toHtml() {
        return `
            <p>
                Example: <br/>
                &lt;Am&gt; Hello &lt;Cm&gt; It's me
            </p>
            <form id="workspace_form">
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" name="name" class="form-control" id="song_name" aria-describedby="emailHelp"
                           placeholder="Enter song's name">
                    <label for="exampleInputEmail1">Author</label>
                    <input type="text" name="author" class="form-control" id="song_author" aria-describedby="emailHelp"
                           placeholder="Author">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Lyrics and chords:</label>
                    <textarea name="text" class="form-control" id="song_text" rows="50"></textarea>
                </div>
                <button type="submit" id="publish_button" class="btn btn-primary">Publish</button>
            </form>
        `;
    }
}