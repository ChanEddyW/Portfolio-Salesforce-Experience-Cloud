import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/Images';

export default class ProjectSalesforce extends LightningElement {
    imageURL_XPCloudBYOLWREnhanced = IMAGES + '/XPCloudBYOLWREnhanced.png';
    imageURL_TalentStacker = IMAGES + '/TalentStacker.png';
    imageURL_ClickedCertificateSprintFlow = IMAGES + '/ClickedCertificateSprintFlow.png';
    imageURL_Trailvenger = IMAGES + '/TrailvengerWeek 2_Branding_Avatar.png';

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