import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { loadStyle } from 'lightning/platformResourceLoader';

import ICONS from '@salesforce/resourceUrl/Icons';
import IMAGES from '@salesforce/resourceUrl/Images';

const UNHIGHLIGHT_NAV_MENU_LINK_STYLE = `
        border-bottom: none;
        font-weight: none;
    `;

const HIGHLIGHT_NAV_MENU_LINK_STYLE = `
        border-bottom: 5px solid rgba(13, 157, 218, 0.5);
        font-weight: bold;
    `;

export default class NavMenu extends LightningElement {
    imagePhoto = IMAGES + '/PFPMaker202404Square.png';

    currentPageReference;
    pageName;

    navMenuLink01;
    navMenuLink02;
    navMenuLink03;
    navMenuLinkProject;
    navMenuLinkProject01;
    navMenuLinkProject02;
    navMenuLinkProject03;
    navMenuLinkProject04;
    navMenuLinkProject05;
    navMenuLinkProject06;

    navMenuLink;

    // Home
    parent1Next1Child1;
    parent1Next2Child1;
    parent1Next3Child1;

    // about-me
    parent1Prev1Child1;

    // education
    parent1Prev2Child1;

    // project-salesforce
    parent1Prev3Child1;

    parent3;

    // parent3Prev3Child1;
    // parent3Prev2Child1;
    // parent3Prev1Child1;

    // parent2Prev1;

    @wire(CurrentPageReference)
    setCurrentPageReference(currentPageReference) {
        // console.log('setCurrentPageReference');

        this.currentPageReference = currentPageReference;
        this.pageName = this.currentPageReference.attributes.name;
    }

    // constructor() {
    //     console.log('constructor');

    //     super();
    // }

    // connectedCallback() {
    //     console.log('connectedCallback');
    // }

    renderedCallback() {
        // console.log('renderedCallback');
        // console.log('location.pathname = ' + location.pathname);

        loadStyle(this, ICONS + '/style.css');

        this.navMenuLink01 = this.template.querySelector('.nav-menu li:nth-child(1) a');
        this.navMenuLink02 = this.template.querySelector('.nav-menu li:nth-child(2) a');
        this.navMenuLink03 = this.template.querySelector('.nav-menu li:nth-child(3) a');
        this.navMenuLinkProject = this.template.querySelector('.nav-menu li:nth-child(4) a');
        this.navMenuLinkProject01 = this.template.querySelector('.nav-menu li:nth-child(4) ul li:nth-child(1) a');
        this.navMenuLinkProject02 = this.template.querySelector('.nav-menu li:nth-child(4) ul li:nth-child(2) a');
        this.navMenuLinkProject03 = this.template.querySelector('.nav-menu li:nth-child(4) ul li:nth-child(3) a');
        this.navMenuLinkProject04 = this.template.querySelector('.nav-menu li:nth-child(4) ul li:nth-child(4) a');
        this.navMenuLinkProject05 = this.template.querySelector('.nav-menu li:nth-child(4) ul li:nth-child(5) a');
        this.navMenuLinkProject06 = this.template.querySelector('.nav-menu li:nth-child(4) ul li:nth-child(6) a');

        setInterval(() => this.navMenuLinkHighlight(), 2000);

        // setTimeout(() => this.clearIntervalAll(), 10000);

        this.navMenuLinkListener();
    }

    // disconnectedCallback() {
    //     console.log('disconnectedCallback');
    // }

    navMenuLinkHighlight() {
        // console.log('navMenuLinkHighlight');

        if (this.pageName.includes('Home')) {
            this.navMenuLink = this.template.querySelector('.nav-menu li:nth-child(1) a');

            // about-me
            this.parent1Next1Child1 = this.navMenuLink.parentElement.nextElementSibling.firstElementChild;
            this.parent1Next1Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

            // education
            this.parent1Next2Child1 = this.navMenuLink.parentElement.nextElementSibling.nextElementSibling.firstElementChild;
            this.parent1Next2Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

            // project-salesforce
            this.parent1Next3Child1 = this.navMenuLink.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
            this.parent1Next3Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

            this.navMenuLink.style.cssText = HIGHLIGHT_NAV_MENU_LINK_STYLE;
        } else if (this.pageName.includes('about_me__c')) {
            this.navMenuLink = this.template.querySelector('.nav-menu li:nth-child(2) a');

            // Home
            this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
            this.parent1Prev1Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

            // education
            this.parent1Next1Child1 = this.navMenuLink.parentElement.nextElementSibling.firstElementChild;
            this.parent1Next1Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

            // project-salesforce
            this.parent1Next2Child1 = this.navMenuLink.parentElement.nextElementSibling.nextElementSibling.firstElementChild;
            this.parent1Next2Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

            this.navMenuLink.style.cssText = HIGHLIGHT_NAV_MENU_LINK_STYLE;
        } else if (this.pageName.includes('education__c')) {
            this.navMenuLink = this.template.querySelector('.nav-menu li:nth-child(3) a');

            // Home
            this.parent1Prev2Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
            this.parent1Prev2Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

            // about-me
            this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
            this.parent1Prev1Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

            // project-salesforce
            this.parent1Next1Child1 = this.navMenuLink.parentElement.nextElementSibling.firstElementChild;
            this.parent1Next1Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

            this.navMenuLink.style.cssText = HIGHLIGHT_NAV_MENU_LINK_STYLE;
        } else if (this.pageName.includes('project_salesforce__c') || this.pageName.includes('job_app_tracker__c') || this.pageName.includes('portfolio__c') || this.pageName.includes('student_tracking__c') || this.pageName.includes('sprint_flow__c') || this.pageName.includes('superhero_villain_tracking__c') || this.pageName.includes('customer_tracking__c')) {
            this.navMenuLink = this.template.querySelector('.nav-menu li:nth-child(4) a');

            // Home
            this.parent1Prev3Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild;
            this.parent1Prev3Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

            // about-me
            this.parent1Prev2Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
            this.parent1Prev2Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

            // education
            this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
            this.parent1Prev1Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

            this.navMenuLink.style.cssText = HIGHLIGHT_NAV_MENU_LINK_STYLE;
        } else {
            console.log('if else');
        }

        // switch (this.pageName) {
        //     case 'Home':
        //         this.navMenuLink = this.template.querySelector('.nav-menu li:nth-child(1) a');

        //         // about-me
        //         this.parent1Next1Child1 = this.navMenuLink.parentElement.nextElementSibling.firstElementChild;
        //         this.parent1Next1Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         // education
        //         this.parent1Next2Child1 = this.navMenuLink.parentElement.nextElementSibling.nextElementSibling.firstElementChild;
        //         this.parent1Next2Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         // project-salesforce
        //         this.parent1Next3Child1 = this.navMenuLink.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
        //         this.parent1Next3Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         this.navMenuLink.style.cssText = HIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         break;

        //     case 'about_me__c':
        //         this.navMenuLink = this.template.querySelector('.nav-menu li:nth-child(2) a');

        //         // Home
        //         this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
        //         this.parent1Prev1Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         // education
        //         this.parent1Next1Child1 = this.navMenuLink.parentElement.nextElementSibling.firstElementChild;
        //         this.parent1Next1Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         // project-salesforce
        //         this.parent1Next2Child1 = this.navMenuLink.parentElement.nextElementSibling.nextElementSibling.firstElementChild;
        //         this.parent1Next2Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         this.navMenuLink.style.cssText = HIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         break;

        //     case 'education__c':
        //         this.navMenuLink = this.template.querySelector('.nav-menu li:nth-child(3) a');

        //         // Home
        //         this.parent1Prev2Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev2Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         // about-me
        //         this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
        //         this.parent1Prev1Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         // project-salesforce
        //         this.parent1Next1Child1 = this.navMenuLink.parentElement.nextElementSibling.firstElementChild;
        //         this.parent1Next1Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         this.navMenuLink.style.cssText = HIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         break;

        //     case 'project_salesforce__c':
        //         this.navMenuLink = this.template.querySelector('.nav-menu li:nth-child(4) a');

        //         // Home
        //         this.parent1Prev3Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev3Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         // about-me
        //         this.parent1Prev2Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev2Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         // education
        //         this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
        //         this.parent1Prev1Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         this.navMenuLink.style.cssText = HIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         break;

        //     case 'job_app_tracker__c':
        //         this.navMenuLink = this.template.querySelector('.nav-menu li:nth-child(4) a');

        //         // Home
        //         this.parent1Prev3Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev3Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         // about-me
        //         this.parent1Prev2Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev2Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         // education
        //         this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
        //         this.parent1Prev1Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         this.navMenuLink.style.cssText = HIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         break;

        //     case 'portfolio__c':
        //         this.navMenuLink = this.template.querySelector('.nav-menu li:nth-child(4) a');

        //         // Home
        //         this.parent1Prev3Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev3Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         // about-me
        //         this.parent1Prev2Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev2Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         // education
        //         this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
        //         this.parent1Prev1Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         this.navMenuLink.style.cssText = HIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         break;

        //     case 'student_tracking__c':
        //         this.navMenuLink = this.template.querySelector('.nav-menu li:nth-child(4) a');

        //         // Home
        //         this.parent1Prev3Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev3Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         // about-me
        //         this.parent1Prev2Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev2Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         // education
        //         this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
        //         this.parent1Prev1Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         this.navMenuLink.style.cssText = HIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         break;

        //     case 'sprint_flow__c':
        //         this.navMenuLink = this.template.querySelector('.nav-menu li:nth-child(4) a');

        //         // Home
        //         this.parent1Prev3Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev3Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         // about-me
        //         this.parent1Prev2Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev2Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         // education
        //         this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
        //         this.parent1Prev1Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         this.navMenuLink.style.cssText = HIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         break;

        //     case 'superhero_villain_tracking__c':
        //         this.navMenuLink = this.template.querySelector('.nav-menu li:nth-child(4) a');

        //         // Home
        //         this.parent1Prev3Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev3Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         // about-me
        //         this.parent1Prev2Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev2Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         // education
        //         this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
        //         this.parent1Prev1Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         this.navMenuLink.style.cssText = HIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         break;

        //     case 'customer_tracking__c':
        //         this.navMenuLink = this.template.querySelector('.nav-menu li:nth-child(4) a');

        //         // Home
        //         this.parent1Prev3Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev3Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         // about-me
        //         this.parent1Prev2Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev2Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         // education
        //         this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
        //         this.parent1Prev1Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         this.navMenuLink.style.cssText = HIGHLIGHT_NAV_MENU_LINK_STYLE;

        //         break;

        //     default:
        //         console.log('switch default');

        //         break;
        // }
    }

    // clearIntervalAll() {
    //     console.log('clearIntervalAll');

    //     for (let i = 1; i < 99999; i++) {
    //         clearInterval(i);
    //     }
    // }

    navMenuLinkListener() {
        // console.log('navMenuLinkListener');

        // window.addEventListener('popstate', () => {
        //     console.log('popstate');

        //     this.navMenuLinkHighlight();
        // });

        this.navMenuLink01.addEventListener('click', this.handleNavMenuLinkListener);
        this.navMenuLink02.addEventListener('click', this.handleNavMenuLinkListener);
        this.navMenuLink03.addEventListener('click', this.handleNavMenuLinkListener);
        this.navMenuLinkProject.addEventListener('click', this.handleNavMenuLinkListener);
        this.navMenuLinkProject01.addEventListener('click', this.handleNavMenuLinkListener);
        this.navMenuLinkProject02.addEventListener('click', this.handleNavMenuLinkListener);
        this.navMenuLinkProject03.addEventListener('click', this.handleNavMenuLinkListener);
        this.navMenuLinkProject04.addEventListener('click', this.handleNavMenuLinkListener);
        this.navMenuLinkProject05.addEventListener('click', this.handleNavMenuLinkListener);
        this.navMenuLinkProject06.addEventListener('click', this.handleNavMenuLinkListener);
    }

    handleNavMenuLinkListener() {
        // console.log('handleNavMenuLinkListener');

        switch (true) {
            case !(String(this).includes('/about-me') || String(this).includes('/education') || String(this).includes('/project-salesforce') || String(this).includes('/job-application-tracker') || String(this).includes('/portfolio') || String(this).includes('/student-tracking') || String(this).includes('/sprint-flow') || String(this).includes('/superhero-villain-tracking') || String(this).includes('/customer-tracking')):
                this.parent3 = this.parentElement.parentElement.parentElement;

                if (this.parent3.classList.contains('responsive')) {
                    this.parent3.classList.remove('responsive');
                }

                // about-me
                // this.parent1Next1Child1 = this.parentElement.nextElementSibling.firstElementChild;
                // this.parent1Next1Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

                // education
                // this.parent1Next2Child1 = this.parentElement.nextElementSibling.nextElementSibling.firstElementChild;
                // this.parent1Next2Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

                // project-salesforce
                // this.parent1Next3Child1 = this.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
                // this.parent1Next3Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

                // this.style.cssText = HIGHLIGHT_NAV_MENU_LINK_STYLE;

                break;

            case String(this).includes('/about-me'):
                this.parent3 = this.parentElement.parentElement.parentElement;

                if (this.parent3.classList.contains('responsive')) {
                    this.parent3.classList.remove('responsive');
                }

                // Home
                // this.parent1Prev1Child1 = this.parentElement.previousElementSibling.firstElementChild;
                // this.parent1Prev1Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

                // education
                // this.parent1Next1Child1 = this.parentElement.nextElementSibling.firstElementChild;
                // this.parent1Next1Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

                // project-salesforce
                // this.parent1Next2Child1 = this.parentElement.nextElementSibling.nextElementSibling.firstElementChild;
                // this.parent1Next2Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

                // this.style.cssText = HIGHLIGHT_NAV_MENU_LINK_STYLE;

                break;

            case String(this).includes('/education'):
                this.parent3 = this.parentElement.parentElement.parentElement;

                if (this.parent3.classList.contains('responsive')) {
                    this.parent3.classList.remove('responsive');
                }

                // Home
                // this.parent1Prev2Child1 = this.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
                // this.parent1Prev2Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

                // about-me
                // this.parent1Prev1Child1 = this.parentElement.previousElementSibling.firstElementChild;
                // this.parent1Prev1Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

                // project-salesforce
                // this.parent1Next1Child1 = this.parentElement.nextElementSibling.firstElementChild;
                // this.parent1Next1Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

                // this.style.cssText = HIGHLIGHT_NAV_MENU_LINK_STYLE;

                break;

            case String(this).includes('/project-salesforce') && !(String(this).includes('/job-application-tracker') || String(this).includes('/portfolio') || String(this).includes('/student-tracking') || String(this).includes('/sprint-flow') || String(this).includes('/superhero-villain-tracking') || String(this).includes('/customer-tracking')):
                this.parent3 = this.parentElement.parentElement.parentElement;

                if (this.parent3.classList.contains('responsive')) {
                    this.parent3.classList.remove('responsive');
                }

                // Home
                // this.parent1Prev3Child1 = this.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild;
                // this.parent1Prev3Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

                // about-me
                // this.parent1Prev2Child1 = this.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
                // this.parent1Prev2Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

                // education
                // this.parent1Prev1Child1 = this.parentElement.previousElementSibling.firstElementChild;
                // this.parent1Prev1Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

                // this.style.cssText = HIGHLIGHT_NAV_MENU_LINK_STYLE;

                break;

            case String(this).includes('/job-application-tracker') || String(this).includes('/portfolio') || String(this).includes('/student-tracking') || String(this).includes('/sprint-flow') || String(this).includes('/superhero-villain-tracking') || String(this).includes('/customer-tracking'):
                // Home
                // this.parent3Prev3Child1 = this.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild;
                // this.parent3Prev3Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

                // about-me
                // this.parent3Prev2Child1 = this.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
                // this.parent3Prev2Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

                // education
                // this.parent3Prev1Child1 = this.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild;
                // this.parent3Prev1Child1.style.cssText = UNHIGHLIGHT_NAV_MENU_LINK_STYLE;

                // project-salesforce
                // this.parent2Prev1 = this.parentElement.parentElement.previousElementSibling;
                // this.parent2Prev1.style.cssText = HIGHLIGHT_NAV_MENU_LINK_STYLE;

                break;

            default:
                console.log('switch default');

                break;
        }
    }

    handleHamburgerClicked() {
        this.template.querySelector('.nav-menu').classList.toggle('responsive');
    }
}