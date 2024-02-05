import { LightningElement, api } from 'lwc';

export default class Snackbar extends LightningElement {
    snackbarMessage;

    @api
    showSnackBar(message) {
        // console.log('showSnackBar(message)');

        // Get the snackbar DIV
        const SNACKBAR = this.template.querySelector('.snackbar');

        this.snackbarMessage = message;

        // Add the "show" class to DIV
        SNACKBAR.classList.add('show');

        // After 3 seconds, remove the show class from DIV
        setTimeout(() => { SNACKBAR.classList.remove('show'); }, 2700);
    }
}