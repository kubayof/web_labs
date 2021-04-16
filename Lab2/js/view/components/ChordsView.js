import {formatDate, registerListener} from "../Utils.js";

export default class ChordsView {
    constructor(viewFacade, chords) {
        this.viewFacade = viewFacade;
        this.chords = chords;
    }

    registerListeners() {
        registerListener(this.viewLinkId(), e => this.viewFacade.chordsViewOnViewCallback(this.chords));
        if (this.viewFacade.modelFacade.isAuthorized()) {
            registerListener(this.editLinkId(), e => this.viewFacade.chordsViewOnEditCallback(this.chords));
        }
        if (this.canDelete()) {
            registerListener(this.deleteLinkId(), e => this.viewFacade.chordsViewOnDeleteCallback(this.chords));
        }
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
        if (this.viewFacade.modelFacade.userPrincipalService.isAuthorized()) {
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
        const userPrincipal = this.viewFacade.modelFacade.userPrincipalService.userPrincipal;
        if ((userPrincipal === undefined) || (userPrincipal === null)) {
            return false;
        }
        return userPrincipal.id === this.chords.userId;
    }
}