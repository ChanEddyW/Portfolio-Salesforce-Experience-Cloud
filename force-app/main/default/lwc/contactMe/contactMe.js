import { LightningElement } from 'lwc';
// import { loadScript } from 'lightning/platformResourceLoader';

import ICONS from '@salesforce/resourceUrl/Icons';
// import jQuery from '@salesforce/resourceUrl/jQuery';

import createLead from '@salesforce/apex/ContactMeController.createLead';

export default class ContactMe extends LightningElement {
    // https://icomoon.io/app/#/select
    iconClear = ICONS + '/clear_60.png';

    dialog;
    firstName;
    lastName;
    company;
    phone;
    email;
    linkedInProfileURL;
    msg;
    snackbar;

    renderedCallback() {
        // loadScript(this, jQuery + '/jquery-3.7.1.min.js')
        // .then(() => {
        //     console.log('jQuery loaded');
        // })
        // .catch(e => {
        //     console.log('jQuery not loaded | JSON.stringify(e) = ' + JSON.stringify(e));
        // });

        this.dialog = this.template.querySelector('.contact-me-dialog');
        this.firstName = this.template.querySelector('.first-name');
        this.lastName = this.template.querySelector('.last-name');
        this.company = this.template.querySelector('.company');
        this.phone = this.template.querySelector('.phone');
        this.email = this.template.querySelector('.email');
        this.linkedInProfileURL = this.template.querySelector('.linkedin-profile-url');
        this.msg = this.template.querySelector('.msg');
        this.snackbar = this.template.querySelector('c-snackbar');

        this.inputListener();
    }

    inputListener() {
        this.firstName.addEventListener('keydown', this.removeErrorClass);
        this.firstName.addEventListener('invalid', this.addErrorClass);

        this.lastName.addEventListener('keydown', this.removeErrorClass);
        this.lastName.addEventListener('invalid', this.addErrorClass);

        this.phone.addEventListener('keydown', this.removeErrorClass);
        // this.template.querySelector(`input[type='tel']`).addEventListener('keyup', this.formatPhone);
        this.phone.addEventListener('invalid', this.addErrorClass);

        this.email.addEventListener('keydown', this.removeErrorClass);
        this.email.addEventListener('invalid', this.addErrorClass);

        this.linkedInProfileURL.addEventListener('keydown', this.removeErrorClass);
        this.linkedInProfileURL.addEventListener('invalid', this.addErrorClass);
    }

    removeErrorClass() {
        if (this.parentElement.classList.contains('slds-has-error')) {
            this.parentElement.classList.remove('slds-has-error');
        }
    }

    addErrorClass() {
        if (!this.parentElement.classList.contains('slds-has-error')) {
            this.parentElement.classList.add('slds-has-error');
        }
    }

    showDialog() {
        this.dialog.showModal();
    }

    clearFirstName() {
        this.firstName.value = null;

        if (this.firstName.parentElement.classList.contains('slds-has-error')) {
            this.firstName.parentElement.classList.remove('slds-has-error');
        }
    }

    clearLastName() {
        this.lastName.value = null;

        if (this.lastName.parentElement.classList.contains('slds-has-error')) {
            this.lastName.parentElement.classList.remove('slds-has-error');
        }
    }

    clearCompany() {
        this.company.value = null;
    }

    // formatPhone() {
    //     const NUM = $(this).val().replace(/\D/g,'');

    //     $(this).val('(' + NUM.substring(0,3) + ') ' + NUM.substring(3,6) + '-' + NUM.substring(6,10));
    // }

    clearPhone() {
        this.phone.value = null;

        if (this.phone.parentElement.classList.contains('slds-has-error')) {
            this.phone.parentElement.classList.remove('slds-has-error');
        }
    }

    clearEmail() {
        this.email.value = null;

        if (this.email.parentElement.classList.contains('slds-has-error')) {
            this.email.parentElement.classList.remove('slds-has-error');
        }
    }

    clearLinkedInProfileURL() {
        this.linkedInProfileURL.value = null;

        if (this.linkedInProfileURL.parentElement.classList.contains('slds-has-error')) {
            this.linkedInProfileURL.parentElement.classList.remove('slds-has-error');
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        createLead({
            firstName: this.firstName.value, 
            lastName: this.lastName.value, 
            company: this.company.value || 'N/A', 
            phone: this.phone.value, 
            email: this.email.value, 
            linkedInProfileURL: this.linkedInProfileURL.value, 
            msg: this.msg.value
        })
        .then(() => {
            this.snackbar.showSnackBar('Form submitted! Expect a confirmation email.')
        })
        .catch((e) => {
            console.log('JSON.stringify(e) = ' + JSON.stringify(e));

            this.snackbar.showSnackBar('Form not submitted! Something went wrong.');
        });

        this.closeDialog();
    }

    closeDialog() {
        this.dialog.close();
    }
}