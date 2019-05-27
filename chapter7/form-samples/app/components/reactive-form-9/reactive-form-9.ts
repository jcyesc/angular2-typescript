import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

/**
 * This component creates and remove email input fields dynamically.
 */
@Component({
    selector: 'reactive-form-9',
    templateUrl: 'app/components/reactive-form-9/reactive-form-9.html'
})
export class ReactiveForm9 {
    emailFormModel: FormGroup;

    constructor() {
        this.emailFormModel = new FormGroup({
            emails: new FormArray([
                new FormControl()
            ])
        });
    }

    get value() {
        return JSON.stringify(this.emailFormModel.value, null, 4);
    }

    addEmail() {
        const emails = this.emailFormModel.get('emails') as FormArray;
        emails.push(new FormControl());
    }

    removeEmail(i) {
        const emails = this.emailFormModel.get('emails') as FormArray;
        emails.removeAt(i);
    }

    onSubmit() {
        console.log(this.value);
    }
}