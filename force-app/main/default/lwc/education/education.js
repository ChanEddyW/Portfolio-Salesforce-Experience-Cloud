import { LightningElement } from 'lwc';
import ICONS from '@salesforce/resourceUrl/Icons';
import IMAGES from '@salesforce/resourceUrl/Images';

export default class Education extends LightningElement {
    // https://icons8.com/icons/set/external-link
    iconExternalURL = ICONS + '/icons8-external-link-16.png';

    imageAdminCert = IMAGES + '/certSalesforceAdmin.png';

    imageDeveloperSuperSet = IMAGES + '/badgeSuperSetDeveloper.webp';
    imageSuperbadge035 = IMAGES + '/badgeSuperbadge035.webp';

    imageSuperbadge026 = IMAGES + '/badgeSuperbadge026.webp';
    imageSuperbadge025 = IMAGES + '/badgeSuperbadge025.webp';
    imageSuperbadge024 = IMAGES + '/badgeSuperbadge024.webp';
    imageSuperbadge023 = IMAGES + '/badgeSuperbadge023.webp';
    imageSuperbadge022 = IMAGES + '/badgeSuperbadge022.webp';
    imageSuperbadge021 = IMAGES + '/badgeSuperbadge021.webp';

    imageSuperbadge020 = IMAGES + '/badgeSuperbadge020.webp';
    imageSuperbadge019 = IMAGES + '/badgeSuperbadge019.webp';
    imageSuperbadge018 = IMAGES + '/badgeSuperbadge018.webp';
    imageSuperbadge017 = IMAGES + '/badgeSuperbadge017.webp';
    imageSuperbadge016 = IMAGES + '/badgeSuperbadge016.webp';

    imageAppBuilderSuperSet = IMAGES + '/badgeSuperSetAppBuilder.webp';
    imageSuperbadge027 = IMAGES + '/badgeSuperbadge027.webp';

    imageSuperbadge012 = IMAGES + '/badgeSuperbadge012.webp';
    imageSuperbadge011 = IMAGES + '/badgeSuperbadge011.webp';
    imageSuperbadge010 = IMAGES + '/badgeSuperbadge010.webp';
    imageSuperbadge009 = IMAGES + '/badgeSuperbadge009.webp';
    imageSuperbadge008 = IMAGES + '/badgeSuperbadge008.webp';
    imageSuperbadge007 = IMAGES + '/badgeSuperbadge007.webp';

    imageSuperbadge006 = IMAGES + '/badgeSuperbadge006.webp';
    imageSuperbadge005 = IMAGES + '/badgeSuperbadge005.webp';
    imageSuperbadge004 = IMAGES + '/badgeSuperbadge004.webp';
    imageSuperbadge003 = IMAGES + '/badgeSuperbadge003.webp';
    imageSuperbadge002 = IMAGES + '/badgeSuperbadge002.webp';
    imageSuperbadge001 = IMAGES + '/badgeSuperbadge001.webp';

    imageAdminSuperSet = IMAGES + '/badgeSuperSetAdmin.webp';
    imageSuperbadge014 = IMAGES + '/badgeSuperbadge014.webp';
    imageSuperbadge013 = IMAGES + '/badgeSuperbadge013.webp';

    imageSuperbadge037 = IMAGES + '/badgeSuperbadge037.webp';
    imageSuperbadge034 = IMAGES + '/badgeSuperbadge034.webp';
    imageSuperbadge033 = IMAGES + '/badgeSuperbadge033.webp';
    imageSuperbadge032 = IMAGES + '/badgeSuperbadge032.webp';
    imageSuperbadge031 = IMAGES + '/badgeSuperbadge031.webp';
    imageSuperbadge030 = IMAGES + '/badgeSuperbadge030.webp';

    imageSuperbadge029 = IMAGES + '/badgeSuperbadge029.webp';

    imageApexSandbox = IMAGES + '/ApexSandbox.png';

    imageCampApexProjectGreenGuardian = IMAGES + '/CampApex_Project_GreenGuardian.png';
    imageCampApexApexFundamental = IMAGES + '/CampApex_ApexFundamentals.png';
    imageCampApexOOP = IMAGES + '/CampApex_OOP.png';
    imageCampApexSOQL = IMAGES + '/CampApex_SOQL.png';

    imageDiploma2016 = IMAGES + '/diploma2016.jpeg';
    imageDiploma2015 = IMAGES + '/diploma2015.jpeg';

    scrollBackToTopButton;
    collapsibleHeading;

    renderedCallback() {
        // console.log('renderedCallback');

        this.scrollBackToTopButton = this.template.querySelector('.back-to-top');

        window.onscroll = () => {this.showOrHideButton()};

        this.collapsibleHeading = this.template.querySelectorAll('.collapsible-heading');

        this.collapsibleListener();
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

    collapsibleListener() {
        // console.log('collapsibleListener');

        for (let i = 0; i < this.collapsibleHeading.length; i++) {
            this.collapsibleHeading[i].addEventListener('click', this.handleCollapsibleListener);
        }
    }

    collapsibleContent;

    handleCollapsibleListener() {
        // console.log('handleCollapsibleListener');
        // console.log('this = ' + this);

        this.classList.toggle('not-active');

        // console.log('nextElementSibling = ' + this.nextElementSibling);

        this.collapsibleContent = this.nextElementSibling;

        if (this.collapsibleContent.style.maxHeight === '0px') {
            this.collapsibleContent.style.maxHeight = this.collapsibleContent.scrollHeight + 'px';
        } else {
            this.collapsibleContent.style.maxHeight = '0px';
        }
    }

    collapseAll() {
        // console.log('collapseAll');

        for (let i = 0; i < this.collapsibleHeading.length; i++) {
            this.collapsibleHeading[i].classList.add('not-active');

            // console.log('collapsibleHeading[i].nextElementSibling = ' + this.collapsibleHeading[i].nextElementSibling);

            this.collapsibleContent = this.collapsibleHeading[i].nextElementSibling;

            this.collapsibleContent.style.maxHeight = '0px';
        }
    }

    expandAll() {
        // console.log('expandAll');

        for (let i = 0; i < this.collapsibleHeading.length; i++) {
            this.collapsibleHeading[i].classList.remove('not-active');

            // console.log('collapsibleHeading[i].nextElementSibling = ' + this.collapsibleHeading[i].nextElementSibling);

            this.collapsibleContent = this.collapsibleHeading[i].nextElementSibling;

            this.collapsibleContent.style.maxHeight = this.collapsibleContent.scrollHeight + 'px';
        }
    }
}