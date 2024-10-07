import { LightningElement, api } from 'lwc';

export default class Snackbar extends LightningElement {
    snackbarMsg;

    @api
    showSnackBar(msg) {
        const SNACKBAR = this.template.querySelector('.snackbar');

        this.snackbarMsg = msg;

        SNACKBAR.classList.add('show');

        setTimeout(() => { SNACKBAR.classList.remove('show'); }, 2700);
    }
}