import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

/**
 * Form directives
 * 
 * The reactive approach uses a completely different set of directives than template-driven
 * forms. The directives for reactive forms come with ReactiveFormsModule.
 *
 * All reactive directives are prefixed with the form* string, so we can easily distinguish
 * the reactive from the template-driven approach just by looking at the template.
 */
@Component({
    selector: 'reactive-form-2',
    templateUrl: 'app/components/reactive-form-2/reactive-form-2.html'
})
export class ReactiveForm2 {
    userFormModel: FormGroup;

    constructor() {
        this.userFormModel = new FormGroup({
            'username': new FormControl(),
            'ssn': new FormControl(),
            'passwordsGroup': new FormGroup({
                'password': new FormControl(),
                'pconfirm': new FormControl()
            })
        });
    }

    get value() {
        return JSON.stringify(this.userFormModel.value, null, 4);
    }

    onSubmit() {
        console.log("Submitting (ReactiveForm2): \n" +
            JSON.stringify(this.userFormModel.value, null, 4));
    }
}
