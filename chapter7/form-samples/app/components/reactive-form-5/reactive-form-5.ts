import { Component } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';

/**
 * Returns `true` if FormControl's value represents a valid SSN,
 * otherwise returns `false`.
 */
function ssnValidator(control: FormControl): { [key: string]: any } {
    const value: string = control.value || '';
    const valid = value.match(/^\d{9}$/);
    // Use Custom Error
    return valid ? null : { ssnError: { description: 'SSN is invalid (custom)' } };
}

@Component({
    selector: 'reactive-form-5',
    templateUrl: 'app/components/reactive-form-5/reactive-form-5.html'
})
export class ReactiveForm5 {
    userForm: FormGroup;

    constructor() {
        this.userForm = new FormGroup({
            'my-ssn': new FormControl('', ssnValidator)
        });
    }

    get value() {
        return JSON.stringify(this.userForm.value, null, 4);
    }
}
