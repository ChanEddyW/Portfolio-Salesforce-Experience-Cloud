import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { loadStyle } from 'lightning/platformResourceLoader';
import ICONS from '@salesforce/resourceUrl/Icons';
import IMAGES from '@salesforce/resourceUrl/Images';

const STYLE_NAV_MENU_LINK_UNHIGHLIGHT = `
    border-bottom: none;
    font-weight: none;
    `;

const STYLE_NAV_MENU_LINK_HIGHLIGHT = `
    border-bottom: 5px solid rgba(13, 157, 218, 0.5);
    font-weight: bold;
    `;

export default class NavMenu extends LightningElement {
	imageURL_photo = IMAGES + '/pfpmaker2022101gRangerStarDouble.png';

    // Declare the currentPageReference variable in order to track it
    currentPageReference;
    pageName;

    navMenuLink1;
    navMenuLink2;
    navMenuLink3;
    navMenuLinkProject;
    navMenuLinkProject1;
    navMenuLinkProject2;
    navMenuLinkProject3;
    navMenuLinkProject4;
    navMenuLinkProject5;

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

    // portfolio || student-tracking || sprint-flow || superhero-villain-tracking
    // parent3Prev3Child1;
    // parent3Prev2Child1;
    // parent3Prev1Child1;

    // parent2Prev1;

    // constructor() {
    //     console.log('constructor()');

    //     super();
    // }

    // connectedCallback() {
    //     console.log('connectedCallback()');
    // }

    renderedCallback() {
        // console.log('renderedCallback()');

		loadStyle(this, ICONS + '/style.css');

        // console.log('location.pathname => ' + location.pathname);

        // this.navMenuLinkHighlight();
        setInterval(() => this.navMenuLinkHighlight(), 2000);
        // setTimeout(() => this.clearIntervalAll(), 10000);

        this.navMenuLink1 = this.template.querySelector('.navMenu li:nth-child(1) a');
        this.navMenuLink2 = this.template.querySelector('.navMenu li:nth-child(2) a');
        this.navMenuLink3 = this.template.querySelector('.navMenu li:nth-child(3) a');
        this.navMenuLinkProject = this.template.querySelector('.navMenu li:nth-child(4) a');
        this.navMenuLinkProject1 = this.template.querySelector('.navMenu li:nth-child(4) ul li:nth-child(1) a');
        this.navMenuLinkProject2 = this.template.querySelector('.navMenu li:nth-child(4) ul li:nth-child(2) a');
        this.navMenuLinkProject3 = this.template.querySelector('.navMenu li:nth-child(4) ul li:nth-child(3) a');
        this.navMenuLinkProject4 = this.template.querySelector('.navMenu li:nth-child(4) ul li:nth-child(4) a');
        this.navMenuLinkProject5 = this.template.querySelector('.navMenu li:nth-child(4) ul li:nth-child(5) a');

        this.navMenuLinkListener();
    }

    // disconnectedCallback() {
    //     console.log('disconnectedCallback()');
    // }

    // Injects the page reference that describes the current page
    @wire(CurrentPageReference)
    setCurrentPageReference(currentPageReference) {
        // console.log('setCurrentPageReference(currentPageReference)');
        // console.log('currentPageReference => ' + currentPageReference);
        // console.log('currentPageReference.attributes.name => ' + currentPageReference.attributes.name);

        this.currentPageReference = currentPageReference;
        this.pageName = this.currentPageReference.attributes.name;
    }

	// Toggle between adding and removing the "responsive" class to navMenu when the user clicks on the icon
	handleHamburgerClicked() {
		const NAV_MENU = this.template.querySelector('.navMenu');

		NAV_MENU.classList.toggle('responsive');
	}

    navMenuLinkHighlight() {
        // console.log('navMenuLinkHighlight()');

        if (this.pageName.includes('Home')) {
            this.navMenuLink = this.template.querySelector('.navMenu li:nth-child(1) a');

            // To unhighlight link
            // about-me
            this.parent1Next1Child1 = this.navMenuLink.parentElement.nextElementSibling.firstElementChild;
            this.parent1Next1Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
            // education
            this.parent1Next2Child1 = this.navMenuLink.parentElement.nextElementSibling.nextElementSibling.firstElementChild;
            this.parent1Next2Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
            // project-salesforce
            this.parent1Next3Child1 = this.navMenuLink.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
            this.parent1Next3Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;

            // To highlight link
            this.navMenuLink.style.cssText = STYLE_NAV_MENU_LINK_HIGHLIGHT;
        } else if (this.pageName.includes('about_me__c')) {
            this.navMenuLink = this.template.querySelector('.navMenu li:nth-child(2) a');

            // To unhighlight link
            // Home
            this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
            this.parent1Prev1Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
            // education
            this.parent1Next1Child1 = this.navMenuLink.parentElement.nextElementSibling.firstElementChild;
            this.parent1Next1Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
            // project-salesforce
            this.parent1Next2Child1 = this.navMenuLink.parentElement.nextElementSibling.nextElementSibling.firstElementChild;
            this.parent1Next2Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;

            // To highlight link
            this.navMenuLink.style.cssText = STYLE_NAV_MENU_LINK_HIGHLIGHT;
        } else if (this.pageName.includes('education__c')) {
            this.navMenuLink = this.template.querySelector('.navMenu li:nth-child(3) a');

            // To unhighlight link
            // Home
            this.parent1Prev2Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
            this.parent1Prev2Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
            // about-me
            this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
            this.parent1Prev1Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
            // project-salesforce
            this.parent1Next1Child1 = this.navMenuLink.parentElement.nextElementSibling.firstElementChild;
            this.parent1Next1Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;

            // To highlight link
            this.navMenuLink.style.cssText = STYLE_NAV_MENU_LINK_HIGHLIGHT;
        } else if (this.pageName.includes('project_salesforce__c') || this.pageName.includes('portfolio__c') || this.pageName.includes('student_tracking__c') || this.pageName.includes('sprint_flow__c') || this.pageName.includes('superhero_villain_tracking__c') || this.pageName.includes('customer_tracking__c')) {
            this.navMenuLink = this.template.querySelector('.navMenu li:nth-child(4) a');

            // To unhighlight link
            // Home
            this.parent1Prev3Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild;
            this.parent1Prev3Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
            // about-me
            this.parent1Prev2Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
            this.parent1Prev2Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
            // education
            this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
            this.parent1Prev1Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;

            // To highlight link
            this.navMenuLink.style.cssText = STYLE_NAV_MENU_LINK_HIGHLIGHT;
        } else {
            console.log('if else');
        }

        // console.log('navMenuLink => ' + this.navMenuLink);

        // switch (this.pageName) {
        //     case 'Home':
        //         this.navMenuLink = this.template.querySelector('.navMenu li:nth-child(1) a');

        //         // To unhighlight link
        //         // about-me
        //         this.parent1Next1Child1 = this.navMenuLink.parentElement.nextElementSibling.firstElementChild;
        //         this.parent1Next1Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
        //         // education
        //         this.parent1Next2Child1 = this.navMenuLink.parentElement.nextElementSibling.nextElementSibling.firstElementChild;
        //         this.parent1Next2Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
        //         // project-salesforce
        //         this.parent1Next3Child1 = this.navMenuLink.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
        //         this.parent1Next3Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;

        //         // To highlight link
        //         this.navMenuLink.style.cssText = STYLE_NAV_MENU_LINK_HIGHLIGHT;
        //         break;
        //     case 'about_me__c':
        //         this.navMenuLink = this.template.querySelector('.navMenu li:nth-child(2) a');

        //         // To unhighlight link
        //         // Home
        //         this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
        //         this.parent1Prev1Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
        //         // education
        //         this.parent1Next1Child1 = this.navMenuLink.parentElement.nextElementSibling.firstElementChild;
        //         this.parent1Next1Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
        //         // project-salesforce
        //         this.parent1Next2Child1 = this.navMenuLink.parentElement.nextElementSibling.nextElementSibling.firstElementChild;
        //         this.parent1Next2Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;

        //         // To highlight link
        //         this.navMenuLink.style.cssText = STYLE_NAV_MENU_LINK_HIGHLIGHT;
        //         break;
        //     case 'education__c':
        //         this.navMenuLink = this.template.querySelector('.navMenu li:nth-child(3) a');

        //         // To unhighlight link
        //         // Home
        //         this.parent1Prev2Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev2Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
        //         // about-me
        //         this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
        //         this.parent1Prev1Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
        //         // project-salesforce
        //         this.parent1Next1Child1 = this.navMenuLink.parentElement.nextElementSibling.firstElementChild;
        //         this.parent1Next1Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;

        //         // To highlight link
        //         this.navMenuLink.style.cssText = STYLE_NAV_MENU_LINK_HIGHLIGHT;
        //         break;
        //     case 'project_salesforce__c':
        //         this.navMenuLink = this.template.querySelector('.navMenu li:nth-child(4) a');

        //         // To unhighlight link
        //         // Home
        //         this.parent1Prev3Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev3Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
        //         // about-me
        //         this.parent1Prev2Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev2Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
        //         // education
        //         this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
        //         this.parent1Prev1Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;

        //         // To highlight link
        //         this.navMenuLink.style.cssText = STYLE_NAV_MENU_LINK_HIGHLIGHT;
        //         break;
        //     case 'portfolio__c':
        //         this.navMenuLink = this.template.querySelector('.navMenu li:nth-child(4) a');

        //         // To unhighlight link
        //         // Home
        //         this.parent1Prev3Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev3Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
        //         // about-me
        //         this.parent1Prev2Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev2Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
        //         // education
        //         this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
        //         this.parent1Prev1Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;

        //         // To highlight link
        //         this.navMenuLink.style.cssText = STYLE_NAV_MENU_LINK_HIGHLIGHT;
        //         break;
        //     case 'student_tracking__c':
        //         this.navMenuLink = this.template.querySelector('.navMenu li:nth-child(4) a');

        //         // To unhighlight link
        //         // Home
        //         this.parent1Prev3Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev3Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
        //         // about-me
        //         this.parent1Prev2Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev2Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
        //         // education
        //         this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
        //         this.parent1Prev1Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;

        //         // To highlight link
        //         this.navMenuLink.style.cssText = STYLE_NAV_MENU_LINK_HIGHLIGHT;
        //         break;
        //     case 'sprint_flow__c':
        //         this.navMenuLink = this.template.querySelector('.navMenu li:nth-child(4) a');

        //         // To unhighlight link
        //         // Home
        //         this.parent1Prev3Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev3Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
        //         // about-me
        //         this.parent1Prev2Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev2Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
        //         // education
        //         this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
        //         this.parent1Prev1Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;

        //         // To highlight link
        //         this.navMenuLink.style.cssText = STYLE_NAV_MENU_LINK_HIGHLIGHT;
        //         break;
        //     case 'superhero_villain_tracking__c':
        //         this.navMenuLink = this.template.querySelector('.navMenu li:nth-child(4) a');

        //         // To unhighlight link
        //         // Home
        //         this.parent1Prev3Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev3Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
        //         // about-me
        //         this.parent1Prev2Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev2Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
        //         // education
        //         this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
        //         this.parent1Prev1Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;

        //         // To highlight link
        //         this.navMenuLink.style.cssText = STYLE_NAV_MENU_LINK_HIGHLIGHT;
        //         break;
        //     case 'customer_tracking__c':
        //         this.navMenuLink = this.template.querySelector('.navMenu li:nth-child(4) a');

        //         // To unhighlight link
        //         // Home
        //         this.parent1Prev3Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev3Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
        //         // about-me
        //         this.parent1Prev2Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev2Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
        //         // education
        //         this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
        //         this.parent1Prev1Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;

        //         // To highlight link
        //         this.navMenuLink.style.cssText = STYLE_NAV_MENU_LINK_HIGHLIGHT;
        //         break;
        //     default:
        //         console.log('switch default');
        //         break;
        // }

        // console.log('navMenuLink => ' + this.navMenuLink);
    }

    // clearIntervalAll() {
    //     console.log('clearIntervalAll()');

    //     for (let i = 1; i < 99999; i++) {
    //         clearInterval(i);
    //     }
    // }

    navMenuLinkListener() {
        // console.log('navMenuLinkListener()');

        // window.addEventListener('popstate', () => {
        //     console.log('popstate');

        //     this.navMenuLinkHighlight();
        // });

        this.navMenuLink1.addEventListener('click', this.handleNavMenuLinkListener);
        this.navMenuLink2.addEventListener('click', this.handleNavMenuLinkListener);
        this.navMenuLink3.addEventListener('click', this.handleNavMenuLinkListener);
        this.navMenuLinkProject.addEventListener('click', this.handleNavMenuLinkListener);
        this.navMenuLinkProject1.addEventListener('click', this.handleNavMenuLinkListener);
        this.navMenuLinkProject2.addEventListener('click', this.handleNavMenuLinkListener);
        this.navMenuLinkProject3.addEventListener('click', this.handleNavMenuLinkListener);
        this.navMenuLinkProject4.addEventListener('click', this.handleNavMenuLinkListener);
        this.navMenuLinkProject5.addEventListener('click', this.handleNavMenuLinkListener);
    }

    handleNavMenuLinkListener() {
        // console.log('handleNavMenuLinkListener()');
        // console.log('this => ' + this);
        // console.log('JSON.stringify(this) => ' + JSON.stringify(this));
        // console.log('String(this) => ' + String(this));

        switch (true) {
            case !(String(this).includes('/about-me') || String(this).includes('/education') || String(this).includes('/project-salesforce') || String(this).includes('/portfolio') || String(this).includes('/student-tracking') || String(this).includes('/sprint-flow') || String(this).includes('/superhero-villain-tracking') || String(this).includes('/customer-tracking')):
                // To remove responsive
                this.parent3 = this.parentElement.parentElement.parentElement;
                if (this.parent3.classList.contains('responsive')) {
                    this.parent3.classList.remove('responsive');
                }

                // To highlight link
                // this.style.cssText = STYLE_NAV_MENU_LINK_HIGHLIGHT;

                // To unhighlight link
                // about-me
                // this.parent1Next1Child1 = this.parentElement.nextElementSibling.firstElementChild;
                // this.parent1Next1Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
                // education
                // this.parent1Next2Child1 = this.parentElement.nextElementSibling.nextElementSibling.firstElementChild;
                // this.parent1Next2Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
                // project-salesforce
                // this.parent1Next3Child1 = this.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
                // this.parent1Next3Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
                break;
            case String(this).includes('/about-me'):
                // To remove responsive
                this.parent3 = this.parentElement.parentElement.parentElement;
                if (this.parent3.classList.contains('responsive')) {
                    this.parent3.classList.remove('responsive');
                }

                // To highlight link
                // this.style.cssText = STYLE_NAV_MENU_LINK_HIGHLIGHT;

                // To unhighlight link
                // Home
                // this.parent1Prev1Child1 = this.parentElement.previousElementSibling.firstElementChild;
                // this.parent1Prev1Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
                // education
                // this.parent1Next1Child1 = this.parentElement.nextElementSibling.firstElementChild;
                // this.parent1Next1Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
                // project-salesforce
                // this.parent1Next2Child1 = this.parentElement.nextElementSibling.nextElementSibling.firstElementChild;
                // this.parent1Next2Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
                break;
            case String(this).includes('/education'):
                // To remove responsive
                this.parent3 = this.parentElement.parentElement.parentElement;
                if (this.parent3.classList.contains('responsive')) {
                    this.parent3.classList.remove('responsive');
                }

                // To highlight link
                // this.style.cssText = STYLE_NAV_MENU_LINK_HIGHLIGHT;

                // To unhighlight link
                // Home
                // this.parent1Prev2Child1 = this.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
                // this.parent1Prev2Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
                // about-me
                // this.parent1Prev1Child1 = this.parentElement.previousElementSibling.firstElementChild;
                // this.parent1Prev1Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
                // project-salesforce
                // this.parent1Next1Child1 = this.parentElement.nextElementSibling.firstElementChild;
                // this.parent1Next1Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
                break;
            case String(this).includes('/project-salesforce') && !(String(this).includes('/portfolio') || String(this).includes('/student-tracking') || String(this).includes('/sprint-flow') || String(this).includes('/superhero-villain-tracking') || String(this).includes('/customer-tracking')):
                // To remove responsive
                this.parent3 = this.parentElement.parentElement.parentElement;
                if (this.parent3.classList.contains('responsive')) {
                    this.parent3.classList.remove('responsive');
                }

                // To highlight link
                // this.style.cssText = STYLE_NAV_MENU_LINK_HIGHLIGHT;

                // To unhighlight link
                // Home
                // this.parent1Prev3Child1 = this.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild;
                // this.parent1Prev3Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
                // about-me
                // this.parent1Prev2Child1 = this.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
                // this.parent1Prev2Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
                // education
                // this.parent1Prev1Child1 = this.parentElement.previousElementSibling.firstElementChild;
                // this.parent1Prev1Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
                break;
            case String(this).includes('/portfolio') || String(this).includes('/student-tracking') || String(this).includes('/sprint-flow') || String(this).includes('/superhero-villain-tracking') || String(this).includes('/customer-tracking'):
                // To unhighlight link
                // Home
                // this.parent3Prev3Child1 = this.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild;
                // this.parent3Prev3Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
                // about-me
                // this.parent3Prev2Child1 = this.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
                // this.parent3Prev2Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;
                // education
                // this.parent3Prev1Child1 = this.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild;
                // this.parent3Prev1Child1.style.cssText = STYLE_NAV_MENU_LINK_UNHIGHLIGHT;

                // To highlight link
                // project-salesforce
                // this.parent2Prev1 = this.parentElement.parentElement.previousElementSibling;
                // this.parent2Prev1.style.cssText = STYLE_NAV_MENU_LINK_HIGHLIGHT;
                break;
            default:
                console.log('switch default');
                break;
        }
    }
}