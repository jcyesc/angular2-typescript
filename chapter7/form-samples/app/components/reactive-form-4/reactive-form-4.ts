import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

/**
 * Returns `true` if FormControl's value represents a valid SSN,
 * otherwise returns `false`.
 */
function ssnValidator(control: FormControl): { [key: string]: any } {
    const value: string = control.value || '';
    const valid = value.match(/^\d{9}$/);
    return valid ? null : { ssnError: true };
}

@Component({
    selector: 'reactive-form-4',
    templateUrl: 'app/components/reactive-form-4/reactive-form-4.html'
})
export class ReactiveForm4 {
    ssnform: FormGroup;

    constructor() {
        this.ssnform = new FormGroup({
            'my-ssn': new FormControl('', ssnValidator)
        });
    }

    get value() {
        return JSON.stringify(this.ssnform.value, null, 4);
    }
}
