import { LightningElement } from 'lwc';

import ICONS from '@salesforce/resourceUrl/Icons';
import IMAGES from '@salesforce/resourceUrl/Images';

export default class Education extends LightningElement {
    // https://icons8.com/icons/set/external-link
    iconExternalURL = ICONS + '/icons8-external-link-16.png';

    imagePlatformDeveloperICert = IMAGES + '/certSalesforcePlatformDeveloperI.png';
    imagePlatformAppBuilderCert = IMAGES + '/certSalesforcePlatformAppBuilder.png';
    imageAdminCert = IMAGES + '/certSalesforceAdmin.png';

    imageCloudCodeAcademyCert = IMAGES + '/CloudCodeAcademyCert.png';

    imageCampApexProjects = IMAGES + '/CampApex_Projects.png';
    imageCampApexProjectEventCloud = IMAGES + '/CampApex_Project_EventCloud.png';
    imageCampApexProjectGreenGuardian = IMAGES + '/CampApex_Project_GreenGuardian.png';

    imageCampApexCourseApexFundamentals = IMAGES + '/CampApex_Course_ApexFundamentals.png';
    imageCampApexCourseDeepDive = IMAGES + '/CampApex_Course_DeepDive.png';
    imageCampApexCourseOOP = IMAGES + '/CampApex_Course_OOP.png';
    imageCampApexCourseSOQL = IMAGES + '/CampApex_Course_SOQL.png';
    imageCampApexCourseDML = IMAGES + '/CampApex_Course_DML.png';

    imageApexSandbox = IMAGES + '/ApexSandbox.png';

    imageDiploma2016 = IMAGES + '/diploma2016.jpeg';
    imageDiploma2015 = IMAGES + '/diploma2015.jpeg';

    scrollBackToTopButton;

    collapsibleHeading;

    collapsibleContent;

    renderedCallback() {
        this.scrollBackToTopButton = this.template.querySelector('.back-to-top');

        this.collapsibleHeading = this.template.querySelectorAll('.collapsible-heading');

        window.onscroll = () => {this.showOrHideButton()};

        this.collapsibleListener();
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

    collapsibleListener() {
        for (let i = 0; i < this.collapsibleHeading.length; i++) {
            this.collapsibleHeading[i].addEventListener('click', this.handleCollapsibleListener);
        }
    }

    handleCollapsibleListener() {
        this.classList.toggle('not-active');

        this.collapsibleContent = this.nextElementSibling;

        if (this.collapsibleContent.style.maxHeight === '0px') {
            this.collapsibleContent.style.maxHeight = this.collapsibleContent.scrollHeight + 'px';
        } else {
            this.collapsibleContent.style.maxHeight = '0px';
        }
    }

    collapseAll() {
        for (let i = 0; i < this.collapsibleHeading.length; i++) {
            this.collapsibleHeading[i].classList.add('not-active');

            this.collapsibleContent = this.collapsibleHeading[i].nextElementSibling;

            this.collapsibleContent.style.maxHeight = '0px';
        }
    }

    expandAll() {
        for (let i = 0; i < this.collapsibleHeading.length; i++) {
            this.collapsibleHeading[i].classList.remove('not-active');

            this.collapsibleContent = this.collapsibleHeading[i].nextElementSibling;

            this.collapsibleContent.style.maxHeight = this.collapsibleContent.scrollHeight + 'px';
        }
    }
}