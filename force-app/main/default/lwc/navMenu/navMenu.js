import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { loadStyle } from 'lightning/platformResourceLoader';
import ICONS from '@salesforce/resourceUrl/Icons';
import IMAGES from '@salesforce/resourceUrl/Images';

export default class NavMenu extends LightningElement {
	imageURL_photo = IMAGES + '/pfpmaker2022101gRanger.jpeg';

    // Declare the currentPageReference variable in order to track it
    currentPageReference;
    pageName;

    // Injects the page reference that describes the current page
    @wire(CurrentPageReference)
    setCurrentPageReference(currentPageReference) {
        // console.log(currentPageReference);
        // console.log(currentPageReference.attributes.name);
        this.currentPageReference = currentPageReference;
        this.pageName = this.currentPageReference.attributes.name;
    }

    // constructor() {
    //     super();
    //     console.log('constructor');
    // }

    // connectedCallback() {
    //     console.log('connectedCallback');
    // }

    navMenuLink1;
    navMenuLink2;
    navMenuLink3;
    navMenuLinkProject;
    navMenuLinkProject1;
    navMenuLinkProject2;
    navMenuLinkProject3;
    navMenuLinkProject4;

    renderedCallback() {
        // console.log('renderedCallback');

		loadStyle(this, ICONS + '/style.css');

        // console.log(location.pathname);

        // this.navMenuLinkHighlight();
        setInterval(() => this.navMenuLinkHighlight(), 2000);
        // setTimeout(() => this.clearIntervalAll(), 10000);

        this.NavMenuLink1 = this.template.querySelector('.navMenu li:nth-child(1) a');
        this.NavMenuLink2 = this.template.querySelector('.navMenu li:nth-child(2) a');
        this.NavMenuLink3 = this.template.querySelector('.navMenu li:nth-child(3) a');
        this.navMenuLinkProject = this.template.querySelector('.navMenu li:nth-child(4) a');
        this.navMenuLinkProject1 = this.template.querySelector('.navMenu li:nth-child(4) ul li:nth-child(1) a');
        this.navMenuLinkProject2 = this.template.querySelector('.navMenu li:nth-child(4) ul li:nth-child(2) a');
        this.navMenuLinkProject3 = this.template.querySelector('.navMenu li:nth-child(4) ul li:nth-child(3) a');
        this.navMenuLinkProject4 = this.template.querySelector('.navMenu li:nth-child(4) ul li:nth-child(4) a');

        this.navMenuLinkListener();
    }

    // disconnectedCallback() {
    //     console.log('disconnectedCallback');
    // }

	// Toggle between adding and removing the "responsive" class to navMenu when the user clicks on the icon
	handleHamburgerClicked() {
		const navMenu = this.template.querySelector('.navMenu');
		navMenu.classList.toggle('responsive');
	}

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

    navMenuLinkHighlight() {
        const styleNavMenuLinkUnhighlight = `
            border-bottom: none;
            font-weight: none;
        `;

        const styleNavMenuLinkHighlight = `
            border-bottom: 5px solid rgba(13, 157, 218, 0.5);
            font-weight: bold;
        `;

        if (this.pageName.includes('Home')) {
            this.navMenuLink = this.template.querySelector('.navMenu li:nth-child(1) a');

            // To unhighlight link
            // about-me
            this.parent1Next1Child1 = this.navMenuLink.parentElement.nextElementSibling.firstElementChild;
            this.parent1Next1Child1.style.cssText = styleNavMenuLinkUnhighlight;
            // education
            this.parent1Next2Child1 = this.navMenuLink.parentElement.nextElementSibling.nextElementSibling.firstElementChild;
            this.parent1Next2Child1.style.cssText = styleNavMenuLinkUnhighlight;
            // project-salesforce
            this.parent1Next3Child1 = this.navMenuLink.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
            this.parent1Next3Child1.style.cssText = styleNavMenuLinkUnhighlight;

            // To highlight link
            this.navMenuLink.style.cssText = styleNavMenuLinkHighlight;
        } else if (this.pageName.includes('about_me__c')) {
            this.navMenuLink = this.template.querySelector('.navMenu li:nth-child(2) a');

            // To unhighlight link
            // Home
            this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
            this.parent1Prev1Child1.style.cssText = styleNavMenuLinkUnhighlight;
            // education
            this.parent1Next1Child1 = this.navMenuLink.parentElement.nextElementSibling.firstElementChild;
            this.parent1Next1Child1.style.cssText = styleNavMenuLinkUnhighlight;
            // project-salesforce
            this.parent1Next2Child1 = this.navMenuLink.parentElement.nextElementSibling.nextElementSibling.firstElementChild;
            this.parent1Next2Child1.style.cssText = styleNavMenuLinkUnhighlight;

            // To highlight link
            this.navMenuLink.style.cssText = styleNavMenuLinkHighlight;
        } else if (this.pageName.includes('education__c')) {
            this.navMenuLink = this.template.querySelector('.navMenu li:nth-child(3) a');

            // To unhighlight link
            // Home
            this.parent1Prev2Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
            this.parent1Prev2Child1.style.cssText = styleNavMenuLinkUnhighlight;
            // about-me
            this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
            this.parent1Prev1Child1.style.cssText = styleNavMenuLinkUnhighlight;
            // project-salesforce
            this.parent1Next1Child1 = this.navMenuLink.parentElement.nextElementSibling.firstElementChild;
            this.parent1Next1Child1.style.cssText = styleNavMenuLinkUnhighlight;

            // To highlight link
            this.navMenuLink.style.cssText = styleNavMenuLinkHighlight;
        } else if (this.pageName.includes('project_salesforce__c') || this.pageName.includes('portfolio__c') || this.pageName.includes('student_tracking__c') || this.pageName.includes('sprint_flow__c') || this.pageName.includes('superhero_villain_tracking__c')) {
            this.navMenuLink = this.template.querySelector('.navMenu li:nth-child(4) a');

            // To unhighlight link
            // Home
            this.parent1Prev3Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild;
            this.parent1Prev3Child1.style.cssText = styleNavMenuLinkUnhighlight;
            // about-me
            this.parent1Prev2Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
            this.parent1Prev2Child1.style.cssText = styleNavMenuLinkUnhighlight;
            // education
            this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
            this.parent1Prev1Child1.style.cssText = styleNavMenuLinkUnhighlight;

            // To highlight link
            this.navMenuLink.style.cssText = styleNavMenuLinkHighlight;
        } else {
            console.log('navMenuLinkHighlight if else');
        }
        // console.log('navMenuLinkHighlight if navMenuLink => ' + this.navMenuLink);

        // switch (this.pageName) {
        //     case 'Home':
        //         this.navMenuLink = this.template.querySelector('.navMenu li:nth-child(1) a');
    
        //         // To unhighlight link
        //         // about-me
        //         this.parent1Next1Child1 = this.navMenuLink.parentElement.nextElementSibling.firstElementChild;
        //         this.parent1Next1Child1.style.cssText = styleNavMenuLinkUnhighlight;
        //         // education
        //         this.parent1Next2Child1 = this.navMenuLink.parentElement.nextElementSibling.nextElementSibling.firstElementChild;
        //         this.parent1Next2Child1.style.cssText = styleNavMenuLinkUnhighlight;
        //         // project-salesforce
        //         this.parent1Next3Child1 = this.navMenuLink.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
        //         this.parent1Next3Child1.style.cssText = styleNavMenuLinkUnhighlight;
    
        //         // To highlight link
        //         this.navMenuLink.style.cssText = styleNavMenuLinkHighlight;
        //         break;
        //     case 'about_me__c':
        //         this.navMenuLink = this.template.querySelector('.navMenu li:nth-child(2) a');
    
        //         // To unhighlight link
        //         // Home
        //         this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
        //         this.parent1Prev1Child1.style.cssText = styleNavMenuLinkUnhighlight;
        //         // education
        //         this.parent1Next1Child1 = this.navMenuLink.parentElement.nextElementSibling.firstElementChild;
        //         this.parent1Next1Child1.style.cssText = styleNavMenuLinkUnhighlight;
        //         // project-salesforce
        //         this.parent1Next2Child1 = this.navMenuLink.parentElement.nextElementSibling.nextElementSibling.firstElementChild;
        //         this.parent1Next2Child1.style.cssText = styleNavMenuLinkUnhighlight;
    
        //         // To highlight link
        //         this.navMenuLink.style.cssText = styleNavMenuLinkHighlight;
        //         break;
        //     case 'education__c':
        //         this.navMenuLink = this.template.querySelector('.navMenu li:nth-child(3) a');
    
        //         // To unhighlight link
        //         // Home
        //         this.parent1Prev2Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev2Child1.style.cssText = styleNavMenuLinkUnhighlight;
        //         // about-me
        //         this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
        //         this.parent1Prev1Child1.style.cssText = styleNavMenuLinkUnhighlight;
        //         // project-salesforce
        //         this.parent1Next1Child1 = this.navMenuLink.parentElement.nextElementSibling.firstElementChild;
        //         this.parent1Next1Child1.style.cssText = styleNavMenuLinkUnhighlight;
    
        //         // To highlight link
        //         this.navMenuLink.style.cssText = styleNavMenuLinkHighlight;
        //         break;
        //     case 'project_salesforce__c':
        //         this.navMenuLink = this.template.querySelector('.navMenu li:nth-child(4) a');
    
        //         // To unhighlight link
        //         // Home
        //         this.parent1Prev3Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev3Child1.style.cssText = styleNavMenuLinkUnhighlight;
        //         // about-me
        //         this.parent1Prev2Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev2Child1.style.cssText = styleNavMenuLinkUnhighlight;
        //         // education
        //         this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
        //         this.parent1Prev1Child1.style.cssText = styleNavMenuLinkUnhighlight;
    
        //         // To highlight link
        //         this.navMenuLink.style.cssText = styleNavMenuLinkHighlight;
        //         break;
        //     case 'portfolio__c':
        //         this.navMenuLink = this.template.querySelector('.navMenu li:nth-child(4) a');
    
        //         // To unhighlight link
        //         // Home
        //         this.parent1Prev3Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev3Child1.style.cssText = styleNavMenuLinkUnhighlight;
        //         // about-me
        //         this.parent1Prev2Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev2Child1.style.cssText = styleNavMenuLinkUnhighlight;
        //         // education
        //         this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
        //         this.parent1Prev1Child1.style.cssText = styleNavMenuLinkUnhighlight;
    
        //         // To highlight link
        //         this.navMenuLink.style.cssText = styleNavMenuLinkHighlight;
        //         break;
        //     case 'student_tracking__c':
        //         this.navMenuLink = this.template.querySelector('.navMenu li:nth-child(4) a');
    
        //         // To unhighlight link
        //         // Home
        //         this.parent1Prev3Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev3Child1.style.cssText = styleNavMenuLinkUnhighlight;
        //         // about-me
        //         this.parent1Prev2Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev2Child1.style.cssText = styleNavMenuLinkUnhighlight;
        //         // education
        //         this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
        //         this.parent1Prev1Child1.style.cssText = styleNavMenuLinkUnhighlight;
    
        //         // To highlight link
        //         this.navMenuLink.style.cssText = styleNavMenuLinkHighlight;
        //         break;
        //     case 'sprint_flow__c':
        //         this.navMenuLink = this.template.querySelector('.navMenu li:nth-child(4) a');
    
        //         // To unhighlight link
        //         // Home
        //         this.parent1Prev3Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev3Child1.style.cssText = styleNavMenuLinkUnhighlight;
        //         // about-me
        //         this.parent1Prev2Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev2Child1.style.cssText = styleNavMenuLinkUnhighlight;
        //         // education
        //         this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
        //         this.parent1Prev1Child1.style.cssText = styleNavMenuLinkUnhighlight;
    
        //         // To highlight link
        //         this.navMenuLink.style.cssText = styleNavMenuLinkHighlight;
        //         break;
        //     case 'superhero_villain_tracking__c':
        //         this.navMenuLink = this.template.querySelector('.navMenu li:nth-child(4) a');
    
        //         // To unhighlight link
        //         // Home
        //         this.parent1Prev3Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev3Child1.style.cssText = styleNavMenuLinkUnhighlight;
        //         // about-me
        //         this.parent1Prev2Child1 = this.navMenuLink.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
        //         this.parent1Prev2Child1.style.cssText = styleNavMenuLinkUnhighlight;
        //         // education
        //         this.parent1Prev1Child1 = this.navMenuLink.parentElement.previousElementSibling.firstElementChild;
        //         this.parent1Prev1Child1.style.cssText = styleNavMenuLinkUnhighlight;
    
        //         // To highlight link
        //         this.navMenuLink.style.cssText = styleNavMenuLinkHighlight;
        //         break;
        //     default:
        //         console.log('navMenuLinkHighlight switch default');
        //         break;
        // }
        // console.log('navMenuLinkHighlight switch navMenuLink => ' + this.navMenuLink);
    }

    // clearIntervalAll() {
    //     for (let i = 1; i < 99999; i++) {
    //         clearInterval(i);
    //     }
    //     console.log('clearIntervalAll');
    // }

    navMenuLinkListener() {
        // window.addEventListener('popstate', () => {
        //     // console.log('navMenuLinkListener popstate');
        //     this.navMenuLinkHighlight();
        // });

        this.NavMenuLink1.addEventListener('click', this.navMenuLinkListenerHandler);
        this.NavMenuLink2.addEventListener('click', this.navMenuLinkListenerHandler);
        this.NavMenuLink3.addEventListener('click', this.navMenuLinkListenerHandler);
        this.navMenuLinkProject.addEventListener('click', this.navMenuLinkListenerHandler);
        this.navMenuLinkProject1.addEventListener('click', this.navMenuLinkListenerHandler);
        this.navMenuLinkProject2.addEventListener('click', this.navMenuLinkListenerHandler);
        this.navMenuLinkProject3.addEventListener('click', this.navMenuLinkListenerHandler);
        // this.navMenuLinkProject4.addEventListener('click', this.navMenuLinkListenerHandler);
    }

    parent3;

    // portfolio || student-tracking || sprint-flow || superhero-villain-tracking
    // parent3Prev3Child1;
    // parent3Prev2Child1;
    // parent3Prev1Child1;

    // parent2Prev1;

    navMenuLinkListenerHandler() {
        // console.log('navMenuLinkListenerHandler this => ' + this);
        // console.log('navMenuLinkListenerHandler JSON.stringify(this) => ' + JSON.stringify(this));
        // console.log('navMenuLinkListenerHandler String(this) => ' + String(this));

        // const styleNavMenuLinkUnhighlight = `
        //     border-bottom: none;
        //     font-weight: none;
        // `;

        // const styleNavMenuLinkHighlight = `
        //     border-bottom: 5px solid rgba(13, 157, 218, 0.5);
        //     font-weight: bold;
        // `;

        switch (true) {
            case !(String(this).includes('/about-me') || String(this).includes('/education') || String(this).includes('/project-salesforce') || String(this).includes('/portfolio') || String(this).includes('/student-tracking') || String(this).includes('/sprint-flow') || String(this).includes('/superhero-villain-tracking')):
                // To remove responsive
                this.parent3 = this.parentElement.parentElement.parentElement;
                if (this.parent3.classList.contains('responsive')) {
                    this.parent3.classList.remove('responsive');
                }

                // To highlight link
                // this.style.cssText = styleNavMenuLinkHighlight;

                // To unhighlight link
                // about-me
                // this.parent1Next1Child1 = this.parentElement.nextElementSibling.firstElementChild;
                // this.parent1Next1Child1.style.cssText = styleNavMenuLinkUnhighlight;
                // education
                // this.parent1Next2Child1 = this.parentElement.nextElementSibling.nextElementSibling.firstElementChild;
                // this.parent1Next2Child1.style.cssText = styleNavMenuLinkUnhighlight;
                // project-salesforce
                // this.parent1Next3Child1 = this.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
                // this.parent1Next3Child1.style.cssText = styleNavMenuLinkUnhighlight;
                break;
            case String(this).includes('/about-me'):
                // To remove responsive
                this.parent3 = this.parentElement.parentElement.parentElement;
                if (this.parent3.classList.contains('responsive')) {
                    this.parent3.classList.remove('responsive');
                }

                // To highlight link
                // this.style.cssText = styleNavMenuLinkHighlight;

                // To unhighlight link
                // Home
                // this.parent1Prev1Child1 = this.parentElement.previousElementSibling.firstElementChild;
                // this.parent1Prev1Child1.style.cssText = styleNavMenuLinkUnhighlight;
                // education
                // this.parent1Next1Child1 = this.parentElement.nextElementSibling.firstElementChild;
                // this.parent1Next1Child1.style.cssText = styleNavMenuLinkUnhighlight;
                // project-salesforce
                // this.parent1Next2Child1 = this.parentElement.nextElementSibling.nextElementSibling.firstElementChild;
                // this.parent1Next2Child1.style.cssText = styleNavMenuLinkUnhighlight;
                break;
            case String(this).includes('/education'):
                // To remove responsive
                this.parent3 = this.parentElement.parentElement.parentElement;
                if (this.parent3.classList.contains('responsive')) {
                    this.parent3.classList.remove('responsive');
                }

                // To highlight link
                // this.style.cssText = styleNavMenuLinkHighlight;

                // To unhighlight link
                // Home
                // this.parent1Prev2Child1 = this.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
                // this.parent1Prev2Child1.style.cssText = styleNavMenuLinkUnhighlight;
                // about-me
                // this.parent1Prev1Child1 = this.parentElement.previousElementSibling.firstElementChild;
                // this.parent1Prev1Child1.style.cssText = styleNavMenuLinkUnhighlight;
                // project-salesforce
                // this.parent1Next1Child1 = this.parentElement.nextElementSibling.firstElementChild;
                // this.parent1Next1Child1.style.cssText = styleNavMenuLinkUnhighlight;
                break;
            case String(this).includes('/project-salesforce') && !(String(this).includes('/portfolio') || String(this).includes('/student-tracking') || String(this).includes('/sprint-flow') || String(this).includes('/superhero-villain-tracking')):
                // To remove responsive
                this.parent3 = this.parentElement.parentElement.parentElement;
                if (this.parent3.classList.contains('responsive')) {
                    this.parent3.classList.remove('responsive');
                }

                // To highlight link
                // this.style.cssText = styleNavMenuLinkHighlight;

                // To unhighlight link
                // Home
                // this.parent1Prev3Child1 = this.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild;
                // this.parent1Prev3Child1.style.cssText = styleNavMenuLinkUnhighlight;
                // about-me
                // this.parent1Prev2Child1 = this.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
                // this.parent1Prev2Child1.style.cssText = styleNavMenuLinkUnhighlight;
                // education
                // this.parent1Prev1Child1 = this.parentElement.previousElementSibling.firstElementChild;
                // this.parent1Prev1Child1.style.cssText = styleNavMenuLinkUnhighlight;
                break;
            case String(this).includes('/portfolio') || String(this).includes('/student-tracking') || String(this).includes('/sprint-flow') || String(this).includes('/superhero-villain-tracking'):
                // To unhighlight link
                // Home
                // this.parent3Prev3Child1 = this.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild;
                // this.parent3Prev3Child1.style.cssText = styleNavMenuLinkUnhighlight;
                // about-me
                // this.parent3Prev2Child1 = this.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
                // this.parent3Prev2Child1.style.cssText = styleNavMenuLinkUnhighlight;
                // education
                // this.parent3Prev1Child1 = this.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild;
                // this.parent3Prev1Child1.style.cssText = styleNavMenuLinkUnhighlight;

                // To highlight link
                // project-salesforce
                // this.parent2Prev1 = this.parentElement.parentElement.previousElementSibling;
                // this.parent2Prev1.style.cssText = styleNavMenuLinkHighlight;
                break;
            default:
                console.log('navMenuLinkListenerHandler switch default');
                break;
        }
    }
}