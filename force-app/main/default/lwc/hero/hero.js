import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/Images';

export default class Hero extends LightningElement {
    imageURL_myTrailmoji = IMAGES + '/myTrailmoji.png';
    imageURL_badgeTrailheadRanger = IMAGES + '/badgeTrailheadRanger.png';
    imageURL_badgeTrailheadSuperSetAdmin = IMAGES + '/badgeTrailheadSuperSetAdmin.webp';
    imageURL_badgeTrailheadSuperSetAppBuilder = IMAGES + '/badgeTrailheadSuperSetAppBuilder.webp';
    imageURL_badgeCertAdmin = IMAGES + '/2021-03_Badge_SF-Certified_Administrator_500x490px.png';

    buttonBackToTop;

    renderedCallback() {
        // Get the button:
        this.buttonBackToTop = this.template.querySelector('.back-to-top');

        // When the user scrolls down 600px from the top of the page, show the button
        window.onscroll = () => {this.scrollDownToShowButton()};
    }

    scrollDownToShowButton() {
        // console.log('document.body.scrollTop => ' + document.body.scrollTop);
        // console.log('document.documentElement.scrollTop => ' + document.documentElement.scrollTop);
        if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
            this.buttonBackToTop.style.display = 'block';
        } else {
            this.buttonBackToTop.style.display = 'none';
        }
    }

    // When the user clicks on the button, scroll to the top of the page
    backToTop() {
        const scrollOptions = {
            top: 0,
            left: 0,
            behavior: 'smooth'
        }
        window.scrollTo(scrollOptions);
    }
}