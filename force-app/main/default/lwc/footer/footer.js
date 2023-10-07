import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/Images';

export default class Footer extends LightningElement {
    imageURL_footerResume = IMAGES + '/footerResume.png';
    imageURL_footerEmail = IMAGES + '/footerEmail.png';
    imageURL_footerLinkedIn = IMAGES + '/footerLinkedIn.png';
    imageURL_footerGitHub = IMAGES + '/footerGitHub.png';
    imageURL_footerTrailhead = IMAGES + '/footerTrailhead.png';
}