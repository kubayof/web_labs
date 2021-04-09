export default class ChordsModelList {
    constructor() {
        this.items = [];
    }

    add(item) {
        //TODO: send to server
        this.items.push(item);
    }

    remove(chordId) {
        //TODO: remove from server
        this.items = this.items.filter(chord => chord.id !== chordId);
    }
}