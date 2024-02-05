import { LightningElement } from 'lwc';
import ICONS from '@salesforce/resourceUrl/Icons';

export default class Footer extends LightningElement {
    iconURL_footerCalendly = ICONS + '/footerCalendly.png';
    iconURL_footerResume = ICONS + '/footerResume.png';
    iconURL_footerEmail = ICONS + '/footerEmail.png';
    iconURL_footerLinkedIn = ICONS + '/footerLinkedIn.png';
    iconURL_footerGitHub = ICONS + '/footerGitHub.png';
    iconURL_footerTrailhead = ICONS + '/footerTrailhead.png';
}