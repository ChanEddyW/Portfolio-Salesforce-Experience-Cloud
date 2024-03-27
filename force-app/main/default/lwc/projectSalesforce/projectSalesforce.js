import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/Images';

export default class ProjectSalesforce extends LightningElement {
    imageBYOLWREnhancedXPCloud = IMAGES + '/XPCloudBYOLWREnhanced.png';
    imageTalentStacker = IMAGES + '/TalentStacker.png';
    imageFlowSprintCert = IMAGES + '/ClickedCertSprintFlow.png';
    imageTrailvenger = IMAGES + '/TrailvengerWeek 2_Branding_Avatar.png';
    imageAstroshineCleaner = IMAGES + '/AstroshineCleanerAvatar.jpg';

    scrollBackToTopButton;

    renderedCallback() {
        // console.log('renderedCallback');

        this.scrollBackToTopButton = this.template.querySelector('.back-to-top');

        window.onscroll = () => {this.showOrHideButton()};
    }

    showOrHideButton() {
        // console.log('showOrHideButton');
        // console.log('document.body.scrollTop = ' + document.body.scrollTop);
        // console.log('document.documentElement.scrollTop = ' + document.documentElement.scrollTop);

        if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
            this.scrollBackToTopButton.style.display = 'block';
        } else {
            this.scrollBackToTopButton.style.display = 'none';
        }
    }

    scrollBackToTop() {
        // console.log('scrollBackToTop');

        const SCROLL_OPTIONS = {
            top: 0,
            left: 0,
            behavior: 'smooth'
        }

        window.scrollTo(SCROLL_OPTIONS);
    }
}