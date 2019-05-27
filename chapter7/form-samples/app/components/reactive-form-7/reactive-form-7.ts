import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

/**
 * Returns `true` if FormControl's value represents an invalid SSN,
 * otherwise returns null.
 */
function ssnValidator(control: FormControl): { [key: string]: any } {
    const value: string = control.value || '';
    const valid = value.match(/^\d{9}$/);
    return valid ? null : { ssn: true };
}

/**
 * Returns `true` if all FormControls in the specified FormGroup have different value.
 * Otherwise returns null.
 */
function equalValidator({value}: FormGroup): { [key: string]: any } {
    const [first, ...rest] = Object.keys(value || {});
    const valid = rest.every(v => value[v] === value[first]);
    return valid ? null : { equal: true };
}

@Component({
    selector: 'reactive-form-7',
    templateUrl: 'app/components/reactive-form-7/reactive-form-7.html'
})
export class ReactiveForm7 {
    userFormModel: FormGroup;

    constructor() {
        this.userFormModel = new FormGroup({
            'username': new FormControl('', Validators.required),
            'ssn': new FormControl('', ssnValidator),
            'passwordsGroup': new FormGroup({
                'password': new FormControl('', Validators.minLength(5)),
                'pconfirm': new FormControl('')
            }, equalValidator)
        });
    }
    
    get value() {
        return JSON.stringify(this.userFormModel.value, null, 4);
    }
    
    onSubmit() {
        if (this.formModel.valid) {
            console.log(this.formModel.value);
        }
    }
}
