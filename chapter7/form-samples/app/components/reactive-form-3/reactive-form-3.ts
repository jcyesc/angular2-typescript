import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

/**
 * FormBuilder
 * 
 * FormBuilder simplifies the creation of reactive forms. It doesn't provide any unique
 * features compared to the direct use of the FormControl, FormGroup, and FormArray
 * classes, but its API is more terse and saves you from repetitive typing of class names.
 */
@Component({
    selector: 'reactive-form-3',
    templateUrl: 'app/components/reactive-form-3/reactive-form-3.html'
})
export class ReactiveForm3 {
    userFormModel: FormGroup;

    constructor(fb: FormBuilder) {
        this.userFormModel = fb.group({
            'username': [''],
            'ssn': [''],
            'passwordsGroup': fb.group({
                'password': [''],
                'pconfirm': ['']
            })
        });
    }

    get value() {
        return JSON.stringify(this.userFormModel.value, null, 4);
    }

    onSubmit() {
        console.log("Submitting (ReactiveForm3): \n" +
            JSON.stringify(this.userFormModel.value, null, 4));
    }
}
