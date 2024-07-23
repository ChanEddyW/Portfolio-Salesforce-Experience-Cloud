import { LightningElement } from 'lwc';

import ICONS from '@salesforce/resourceUrl/Icons';
import IMAGES from '@salesforce/resourceUrl/Images';

export default class ProjectSalesforce extends LightningElement {
    // https://icons8.com/icons/set/external-link
    iconExternalURL = ICONS + '/icons8-external-link-16.png';

    imageCloudCodeAcademyCert = IMAGES + '/CloudCodeAcademyCert.png';
    imageBYOLWREnhancedXPCloud = IMAGES + '/XPCloudBYOLWREnhanced.png';
    imageTalentStacker = IMAGES + '/TalentStacker.png';
    imageFlowSprintCert = IMAGES + '/ClickedCertSprintFlow.png';
    imageTrailvenger = IMAGES + '/TrailvengerWeek 2_Branding_Avatar.png';
    imageAstroshineCleaner = IMAGES + '/AstroshineCleanerAvatar.jpg';

    scrollBackToTopButton;

    renderedCallback() {
        this.scrollBackToTopButton = this.template.querySelector('.back-to-top');

        window.onscroll = () => {this.showOrHideButton()};
    }

    showOrHideButton() {
        if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
            this.scrollBackToTopButton.style.display = 'block';
        } else {
            this.scrollBackToTopButton.style.display = 'none';
        }
    }

    scrollBackToTop() {
        const SCROLL_OPTIONS = {
            top: 0,
            left: 0,
            behavior: 'smooth'
        }

        window.scrollTo(SCROLL_OPTIONS);
    }
}