import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/Images';

export default class Hero extends LightningElement {
    imageAdminCertBadge = IMAGES + '/2021-03_Badge_SF-Certified_Administrator_500x490px.png';
    imageDeveloperSuperSet = IMAGES + '/badgeSuperSetDeveloper.webp';
    imageAppBuilderSuperSet = IMAGES + '/badgeSuperSetAppBuilder.webp';
    imageAdminSuperSet = IMAGES + '/badgeSuperSetAdmin.webp';
    imageDoubleStarRanger = IMAGES + '/badgeRangerStarDouble.png';
    
    imageMyTrailmoji = IMAGES + '/myTrailmoji.png';

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