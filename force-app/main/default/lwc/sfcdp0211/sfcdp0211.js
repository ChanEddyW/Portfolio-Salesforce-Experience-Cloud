import { LightningElement } from 'lwc';
import ICONS from '@salesforce/resourceUrl/Icons';
import IMAGES from '@salesforce/resourceUrl/Images';

export default class SFCDP0211 extends LightningElement {
    // https://icons8.com/icons/set/external-link
    iconExternalURL = ICONS + '/icons8-external-link-16.png';
    
    imageMemberInfoRecordDetail = IMAGES + '/SFCDP0211AdminMemberRecordDetailMemberInfo.jpeg';
    imageEntityDiagram = IMAGES + '/SFCDP0211EntityDiagram.png';
    imageSchemaBuilder = IMAGES + '/SFCDP0211SchemaBuilder.jpeg';
    imageMemberPageLayout02 = IMAGES + '/SFCDP0211PageLayoutMember02.jpeg';
    imageOtherStudyGroupValidation01 = IMAGES + '/SFCDP0211ValidationStudyGroupOther01.png';
    imageOtherStudyGroupValidation02 = IMAGES + '/SFCDP0211ValidationStudyGroupOther02.png';
    imageSlack03 = IMAGES + '/SFCDP0211Slack03.jpeg';
    imageSlack14 = IMAGES + '/SFCDP0211Slack14.png';

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

        this.classList.toggle('active');

        // console.log('nextElementSibling = ' + this.nextElementSibling);

        this.collapsibleContent = this.nextElementSibling;

        if (this.collapsibleContent.style.maxHeight) {
            this.collapsibleContent.style.maxHeight = null;
        } else {
            this.collapsibleContent.style.maxHeight = this.collapsibleContent.scrollHeight + 'px';
        }
    }

    collapseAll() {
        // console.log('collapseAll');

        for (let i = 0; i < this.collapsibleHeading.length; i++) {
            this.collapsibleHeading[i].classList.remove('active');

            // console.log('collapsibleHeading[i].nextElementSibling = ' + this.collapsibleHeading[i].nextElementSibling);

            this.collapsibleContent = this.collapsibleHeading[i].nextElementSibling;

            this.collapsibleContent.style.maxHeight = null;
        }
    }

    expandAll() {
        // console.log('expandAll');

        for (let i = 0; i < this.collapsibleHeading.length; i++) {
            this.collapsibleHeading[i].classList.add('active');

            // console.log('collapsibleHeading[i].nextElementSibling = ' + this.collapsibleHeading[i].nextElementSibling);

            this.collapsibleContent = this.collapsibleHeading[i].nextElementSibling;

            this.collapsibleContent.style.maxHeight = this.collapsibleContent.scrollHeight + 'px';
        }
    }
}