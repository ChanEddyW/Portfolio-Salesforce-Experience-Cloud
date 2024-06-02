import { LightningElement } from 'lwc';

import ICONS from '@salesforce/resourceUrl/Icons';

export default class Footer extends LightningElement {
    iconResume = ICONS + '/footerResume.png';
    iconCalendly = ICONS + '/footerCalendly.png';
    iconEmail = ICONS + '/footerEmail.png';
    iconLinkedIn = ICONS + '/footerLinkedIn.png';
    iconGitHub = ICONS + '/footerGitHub.png';
    iconTrailhead = ICONS + '/footerTrailhead.png';
}