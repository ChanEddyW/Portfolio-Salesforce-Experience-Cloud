import { LightningElement } from 'lwc';
import ICONS from '@salesforce/resourceUrl/Icons';
import IMAGES from '@salesforce/resourceUrl/Images';

export default class Education extends LightningElement {
    // https://icons8.com/icons/set/external-link
	iconURL_URLExternal = ICONS + '/icons8-external-link-16.png';

    imageURL_diploma2015 = IMAGES + '/diploma2015.jpeg';
    imageURL_diploma2016 = IMAGES + '/diploma2016.jpeg';
    imageURL_badgeTrailheadSuperbadge001 = IMAGES + '/badgeTrailheadSuperbadge001.webp';
    imageURL_badgeTrailheadSuperbadge002 = IMAGES + '/badgeTrailheadSuperbadge002.webp';
    imageURL_badgeTrailheadSuperbadge003 = IMAGES + '/badgeTrailheadSuperbadge003.webp';
    imageURL_badgeTrailheadSuperbadge004 = IMAGES + '/badgeTrailheadSuperbadge004.webp';
    imageURL_badgeTrailheadSuperbadge005 = IMAGES + '/badgeTrailheadSuperbadge005.webp';
    imageURL_badgeTrailheadSuperbadge006 = IMAGES + '/badgeTrailheadSuperbadge006.webp';
    imageURL_badgeTrailheadSuperbadge007 = IMAGES + '/badgeTrailheadSuperbadge007.webp';
    imageURL_badgeTrailheadSuperbadge008 = IMAGES + '/badgeTrailheadSuperbadge008.webp';
    imageURL_badgeTrailheadSuperbadge009 = IMAGES + '/badgeTrailheadSuperbadge009.webp';
    imageURL_badgeTrailheadSuperbadge010 = IMAGES + '/badgeTrailheadSuperbadge010.webp';
    imageURL_badgeTrailheadSuperbadge011 = IMAGES + '/badgeTrailheadSuperbadge011.webp';
    imageURL_badgeTrailheadSuperbadge012 = IMAGES + '/badgeTrailheadSuperbadge012.webp';
    imageURL_badgeTrailheadSuperbadge013 = IMAGES + '/badgeTrailheadSuperbadge013.webp';
    imageURL_badgeTrailheadSuperbadge014 = IMAGES + '/badgeTrailheadSuperbadge014.webp';
    imageURL_badgeTrailheadSuperSetAdmin = IMAGES + '/badgeTrailheadSuperSetAdmin.webp';
    imageURL_badgeTrailheadSuperbadge016 = IMAGES + '/badgeTrailheadSuperbadge016.webp';
    imageURL_badgeTrailheadSuperbadge017 = IMAGES + '/badgeTrailheadSuperbadge017.webp';
    imageURL_badgeTrailheadSuperbadge018 = IMAGES + '/badgeTrailheadSuperbadge018.webp';
    imageURL_badgeTrailheadSuperbadge019 = IMAGES + '/badgeTrailheadSuperbadge019.webp';
    imageURL_badgeTrailheadSuperbadge020 = IMAGES + '/badgeTrailheadSuperbadge020.webp';
    imageURL_badgeTrailheadSuperbadge021 = IMAGES + '/badgeTrailheadSuperbadge021.webp';
    imageURL_badgeTrailheadSuperbadge022 = IMAGES + '/badgeTrailheadSuperbadge022.webp';
    imageURL_badgeTrailheadSuperbadge023 = IMAGES + '/badgeTrailheadSuperbadge023.webp';
    imageURL_badgeTrailheadSuperbadge024 = IMAGES + '/badgeTrailheadSuperbadge024.webp';
    imageURL_badgeTrailheadSuperbadge025 = IMAGES + '/badgeTrailheadSuperbadge025.webp';
    imageURL_badgeTrailheadSuperbadge026 = IMAGES + '/badgeTrailheadSuperbadge026.webp';
    imageURL_badgeTrailheadSuperbadge027 = IMAGES + '/badgeTrailheadSuperbadge027.webp';
    imageURL_badgeTrailheadSuperSetAppBuilder = IMAGES + '/badgeTrailheadSuperSetAppBuilder.webp';
    imageURL_SalesforceAdministratorCert = IMAGES + '/SalesforceAdministrator_Cert.png';

    buttonBackToTop;
    collapsibleHeading;

    renderedCallback() {
        // Get the button:
        this.buttonBackToTop = this.template.querySelector('.back-to-top');

        // When the user scrolls down 600px from the top of the page, show the button
        window.onscroll = () => {this.scrollDownToShowButton()};

        this.collapsibleHeading = this.template.querySelectorAll('.collapsibleHeading');

        this.collapsibleListener();
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

    collapsibleListener() {
        for (let i = 0; i < this.collapsibleHeading.length; i++) {
            this.collapsibleHeading[i].addEventListener('click', this.collapsibleListenerHandler);
        }
    }

    collapsibleContent;

    collapsibleListenerHandler() {
        // console.log(this);

        this.classList.toggle('not-active');

        // console.log(this.nextElementSibling);
        this.collapsibleContent = this.nextElementSibling;

        if (this.collapsibleContent.style.maxHeight === '0px') {
            this.collapsibleContent.style.maxHeight = this.collapsibleContent.scrollHeight + 'px';
        } else {
            this.collapsibleContent.style.maxHeight = '0px';
        }
    }

    collapsibleAllCollapse() {
        for (let i = 0; i < this.collapsibleHeading.length; i++) {
            this.collapsibleHeading[i].classList.add('not-active');
            // console.log(this.collapsibleHeading[i].nextElementSibling);
            this.collapsibleContent = this.collapsibleHeading[i].nextElementSibling;
            this.collapsibleContent.style.maxHeight = '0px';
        }
    }

    collapsibleAllExpand() {
        for (let i = 0; i < this.collapsibleHeading.length; i++) {
            this.collapsibleHeading[i].classList.remove('not-active');
            // console.log(this.collapsibleHeading[i].nextElementSibling);
            this.collapsibleContent = this.collapsibleHeading[i].nextElementSibling;
            this.collapsibleContent.style.maxHeight = this.collapsibleContent.scrollHeight + 'px';
        }
    }
}