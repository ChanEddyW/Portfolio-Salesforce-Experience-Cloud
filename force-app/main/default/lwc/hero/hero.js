import { LightningElement } from 'lwc';

import IMAGES from '@salesforce/resourceUrl/Images';

export default class Hero extends LightningElement {
    imagePlatformDeveloperICertBadge = IMAGES + '/2021-03_Badge_SF-Certified_Platform-Developer-I_500x490px.png';
    imagePlatformAppBuilderCertBadge = IMAGES + '/2021-03_Badge_SF-Certified_Platform-App-Builder_500x490px.png';
    imageAdminCertBadge = IMAGES + '/2021-03_Badge_SF-Certified_Administrator_500x490px.png';
    imageDeveloperSuperSet = IMAGES + '/badgeSuperSetDeveloper.webp';
    imageAppBuilderSuperSet = IMAGES + '/badgeSuperSetAppBuilder.webp';
    imageAdminSuperSet = IMAGES + '/badgeSuperSetAdmin.webp';
    imageDoubleStarRanger = IMAGES + '/badgeRangerStarDouble.png';

    imageMyTrailmoji = IMAGES + '/myTrailmoji.png';

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