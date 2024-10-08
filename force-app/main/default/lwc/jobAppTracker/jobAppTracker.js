import { LightningElement } from 'lwc';

import ICONS from '@salesforce/resourceUrl/Icons';
import GIFS from '@salesforce/resourceUrl/GIFs';
import IMAGES from '@salesforce/resourceUrl/Images';

export default class JobAppTracker extends LightningElement {
    // https://icons8.com/icons/set/external-link
    iconExternalURL = ICONS + '/icons8-external-link-16.png';

    gifJobSearch = GIFS + '/CloudCodeAcademyCapstoneJobSearch.gif';
    gifJobApplication = GIFS + '/CloudCodeAcademyCapstoneJobApplication.gif';
    gifCalculator = GIFS + '/CloudCodeAcademyCapstoneCalculator.gif';
    imageEntityDiagram = IMAGES + '/CloudCodeAcademyCapstoneEntityDiagram.png';
    imageCloudCodeAcademyCert = IMAGES + '/CloudCodeAcademyCert.png';

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
        this.classList.toggle('active');

        this.collapsibleContent = this.nextElementSibling;

        if (this.collapsibleContent.style.maxHeight) {
            this.collapsibleContent.style.maxHeight = null;
        } else {
            this.collapsibleContent.style.maxHeight = this.collapsibleContent.scrollHeight + 'px';
        }
    }

    collapseAll() {
        for (let i = 0; i < this.collapsibleHeading.length; i++) {
            this.collapsibleHeading[i].classList.remove('active');

            this.collapsibleContent = this.collapsibleHeading[i].nextElementSibling;

            this.collapsibleContent.style.maxHeight = null;
        }
    }

    expandAll() {
        for (let i = 0; i < this.collapsibleHeading.length; i++) {
            this.collapsibleHeading[i].classList.add('active');

            this.collapsibleContent = this.collapsibleHeading[i].nextElementSibling;

            this.collapsibleContent.style.maxHeight = this.collapsibleContent.scrollHeight + 'px';
        }
    }
}