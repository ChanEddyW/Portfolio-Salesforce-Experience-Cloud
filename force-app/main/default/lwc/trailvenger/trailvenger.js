import { LightningElement } from 'lwc';
import ICONS from '@salesforce/resourceUrl/Icons';
import IMAGES from '@salesforce/resourceUrl/Images';

export default class Trailvenger extends LightningElement {
    // https://icons8.com/icons/set/external-link
	iconURL_URLExternal = ICONS + '/icons8-external-link-16.png';

    imageURL_EntityDiagram = IMAGES + '/TrailvengerEntityDiagram.png';
    imageURL_SchemaBuilder = IMAGES + '/TrailvengerSchemaBuilder.jpeg';
    imageURL_Profile = IMAGES + '/TrailvengerProfile.jpeg';
    imageURL_PermissionSet = IMAGES + '/TrailvengerPermissionSet.jpeg';
    imageURL_Role = IMAGES + '/TrailvengerRole.jpeg';
    imageURL_SharingSetting = IMAGES + '/TrailvengerSharingSetting.jpeg';
    imageURL_HealthCheck = IMAGES + '/TrailvengerHealthCheck.jpeg';
    imageURL_WTL = IMAGES + '/TrailvengerWTL.png';
    imageURL_SITConvert = IMAGES + '/TrailvengerSITConvert.jpeg';
    imageURL_SITConverted = IMAGES + '/TrailvengerSITConverted.jpeg';
    imageURL_Gear = IMAGES + '/TrailvengerGear.jpeg';
    imageURL_Quote = IMAGES + '/TrailvengerQuote.jpeg';
    imageURL_Event = IMAGES + '/TrailvengerEvent.jpeg';
    imageURL_Chatter = IMAGES + '/TrailvengerChatter.jpeg';
    imageURL_VillainToSlay = IMAGES + '/TrailvengerVillainToSlay.png';
    imageURL_Home = IMAGES + '/TrailvengerHome.jpeg';

    buttonBackToTop;
    collapsibleHeading;

    collapsibleContent;

    renderedCallback() {
        // console.log('renderedCallback()');

        // Get the button:
        this.buttonBackToTop = this.template.querySelector('.back-to-top');

        // When the user scrolls down 600px from the top of the page, show the button
        window.onscroll = () => {this.scrollDownToShowButton()};

        this.collapsibleHeading = this.template.querySelectorAll('.collapsibleHeading');

        this.collapsibleListener();
    }

    scrollDownToShowButton() {
        // console.log('scrollDownToShowButton()');
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
        // console.log('backToTop()');

        const SCROLL_OPTIONS = {
            top: 0,
            left: 0,
            behavior: 'smooth'
        }
        window.scrollTo(SCROLL_OPTIONS);
    }

    collapsibleListener() {
        // console.log('collapsibleListener()');

        for (let i = 0; i < this.collapsibleHeading.length; i++) {
            this.collapsibleHeading[i].addEventListener('click', this.handleCollapsibleListener);
        }
    }

    handleCollapsibleListener() {
        // console.log('handleCollapsibleListener()');
        // console.log('this => ' + this);

        this.classList.toggle('active');

        // console.log('nextElementSibling => ' + this.nextElementSibling);

        this.collapsibleContent = this.nextElementSibling;

        if (this.collapsibleContent.style.maxHeight) {
            this.collapsibleContent.style.maxHeight = null;
        } else {
            this.collapsibleContent.style.maxHeight = this.collapsibleContent.scrollHeight + 'px';
        }
    }

    collapsibleAllCollapse() {
        // console.log('collapsibleAllCollapse()');

        for (let i = 0; i < this.collapsibleHeading.length; i++) {
            this.collapsibleHeading[i].classList.remove('active');

            // console.log('collapsibleHeading[i].nextElementSibling => ' + this.collapsibleHeading[i].nextElementSibling);

            this.collapsibleContent = this.collapsibleHeading[i].nextElementSibling;
            this.collapsibleContent.style.maxHeight = null;
        }
    }

    collapsibleAllExpand() {
        // console.log('collapsibleAllExpand()');

        for (let i = 0; i < this.collapsibleHeading.length; i++) {
            this.collapsibleHeading[i].classList.add('active');

            // console.log('collapsibleHeading[i].nextElementSibling => ' + this.collapsibleHeading[i].nextElementSibling);

            this.collapsibleContent = this.collapsibleHeading[i].nextElementSibling;
            this.collapsibleContent.style.maxHeight = this.collapsibleContent.scrollHeight + 'px';
        }
    }
}