import { LightningElement } from 'lwc';
// import { loadScript } from 'lightning/platformResourceLoader';
import createLead from '@salesforce/apex/ContactMeController.createLead';
import ICONS from '@salesforce/resourceUrl/Icons';
// import jQuery from '@salesforce/resourceUrl/jQuery';

export default class ContactMe extends LightningElement {
    // https://icomoon.io/app/#/select
    iconURL_clear = ICONS + '/clear_60.png';

    dialog;
    firstname;
    lastname;
    company;
    phone;
    email;
    linkedinprofileurl;
    message;
    snackbar;

    renderedCallback() {
        // loadScript(this, jQuery + '/jquery-3.7.1.min.js')
        // .then(() => {
        //     console.log('jQuery loaded');
        // })
        // .catch(error => {
        //     console.log('jQuery not loaded: ' + error);
        // });

        this.dialog = this.template.querySelector('.contactMe-dialog');
        this.firstname = this.template.querySelector('.firstname');
        this.lastname = this.template.querySelector('.lastname');
        this.company = this.template.querySelector('.company');
        this.phone = this.template.querySelector('.phone');
        this.email = this.template.querySelector('.email');
        this.linkedinprofileurl = this.template.querySelector('.linkedinprofileurl');
        this.message = this.template.querySelector('.message');
        this.snackbar = this.template.querySelector('c-snackbar');

        this.inputListener();

        // this.template.querySelector(`input[type='tel']`).addEventListener('keyup', this.phoneFormat);
    }

    inputListener() {
        this.firstname.addEventListener('keydown', this.classRemoveError);
        this.lastname.addEventListener('keydown', this.classRemoveError);
        this.phone.addEventListener('keydown', this.classRemoveError);
        this.email.addEventListener('keydown', this.classRemoveError);
        this.linkedinprofileurl.addEventListener('keydown', this.classRemoveError);

        this.firstname.addEventListener('invalid', this.classAddError);
        this.lastname.addEventListener('invalid', this.classAddError);
        this.phone.addEventListener('invalid', this.classAddError);
        this.email.addEventListener('invalid', this.classAddError);
        this.linkedinprofileurl.addEventListener('invalid', this.classAddError);
    }

    classRemoveError() {
        if (this.parentElement.classList.contains('slds-has-error')) {
            this.parentElement.classList.remove('slds-has-error');
        }
    }

    classAddError() {
        if (!this.parentElement.classList.contains('slds-has-error')) {
            this.parentElement.classList.add('slds-has-error');
        }
    }

    clearFirstName() {
        this.firstname.value = null;
        if (this.firstname.parentElement.classList.contains('slds-has-error')) {
            this.firstname.parentElement.classList.remove('slds-has-error');
        }
    }

    clearLastName() {
        this.lastname.value = null;
        if (this.lastname.parentElement.classList.contains('slds-has-error')) {
            this.lastname.parentElement.classList.remove('slds-has-error');
        }
    }

    clearCompany() {
        this.company.value = null;
    }

    // phoneFormat() {
    //     const num = $(this).val().replace(/\D/g,'');
    //     $(this).val('(' + num.substring(0,3) + ') ' + num.substring(3,6) + '-' + num.substring(6,10));
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
        this.linkedinprofileurl.value = null;
        if (this.linkedinprofileurl.parentElement.classList.contains('slds-has-error')) {
            this.linkedinprofileurl.parentElement.classList.remove('slds-has-error');
        }
    }

    closeDialog() {
        this.dialog.close();
    }

    showDialog() {
        this.dialog.showModal();
    }

    handleSubmit(event) {
        // prevent submit
        event.preventDefault();

        const firstnameValue = this.firstname.value;
        const lastnameValue = this.lastname.value;
        const companyValue = this.company.value;
        const phoneValue = this.phone.value;
        const emailValue = this.email.value;
        const linkedinprofileurlValue = this.linkedinprofileurl.value;
        const messageValue = this.message.value;

        createLead({
            firstname: firstnameValue,
            lastname: lastnameValue,
            company: companyValue || 'N/A',
            phone: phoneValue,
            email: emailValue,
            linkedinprofileurl: linkedinprofileurlValue,
            message: messageValue
        })
        .then(() => {this.snackbar.showSnackBar('Form submitted! Expect a confirmation email')})
        .catch((error) => {
            this.snackbar.showSnackBar('Form not submitted! Something went wrong');
            console.log(JSON.stringify(error));
        });

        this.closeDialog();
    }
}