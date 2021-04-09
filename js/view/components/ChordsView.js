import FullChordsView from "../FullChordsView.js";
import WorkspaceView from "../WorkspaceView.js";
import {formatDate, registerListener} from "../Utils.js";

export default class ChordsView {
    constructor(controller, chords) {
        this.controller = controller;
        this.chords = chords;
    }

    registerListeners() {
        registerListener(this.viewLinkId(), e => this.onView(e));
        if (this.controller.userPrincipalService.isAuthorized()) {
            registerListener(this.editLinkId(), e => this.onEdit(e));
        }
        if (this.canDelete()) {
            registerListener(this.deleteLinkId(), e => this.onDelete(e));
        }
    }

    onView(e) {
        e.preventDefault();
        this.controller.setContentView(new FullChordsView(this.controller, this.chords));
    }

    onEdit(e) {
        e.preventDefault();
        this.controller.setContentView(new WorkspaceView(this.controller, this.chords));
    }

    onDelete(e) {
        e.preventDefault();
        this.controller.chordsModelList.remove(this.chords.id);
        this.controller.view.repaint();
    }

    viewLinkId() {
        return 'chords_view_' + this.chords.id;
    }

    editLinkId() {
        return 'chords_edit_' + this.chords.id;
    }

    deleteLinkId() {
        return 'chords_delete_' + this.chords.id;
    }

    toHtml() {

        return `
            <div class="col">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <p class="card-text">${this.chords.title} by ${this.chords.musician}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a class="btn btn-sm btn-outline-secondary" role="button" href="#" 
                                    id="${this.viewLinkId()}">View</a>
                                    ${this.editButton()}
                                    ${this.deleteButton()}
                                </div>
                             <small class="text-muted">${formatDate(this.chords.date)}</small> 
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    editButton() {
        if (this.controller.userPrincipalService.isAuthorized()) {
            return `
                <a class="btn btn-sm btn-outline-secondary" role="button" href="#"
                    id="${this.editLinkId()}">Edit</a>
            `;
        }

        return '';
    }

    deleteButton() {
        if (this.canDelete()) {
            return `
                <a class="btn btn-sm btn-outline-secondary" role="button" href="#"
                    id="${this.deleteLinkId()}">Delete</a>
            `;
        }

        return '';
    }

    canDelete() {
        const userPrincipal = this.controller.userPrincipalService.userPrincipal;
        if ((userPrincipal === undefined) || (userPrincipal === null)) {
            return false;
        }
        return userPrincipal.id === this.chords.userId;
    }
}