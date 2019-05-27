import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

/**
 * Reactive Forms
 * 
 * This component shows how to grow the number of FormControls in a reactive forms. In
 * this component, we add emails controls dynamically.
 */
@Component({
    selector: 'reactive-form-1',
    templateUrl: 'app/components/reactive-form-1/reactive-form-1.html'
})
export class ReactiveForm1 {
    formModel: FormGroup = new FormGroup({
        emails: new FormArray([
            new FormControl()
        ])
    });

    get value() {
        return JSON.stringify(this.formModel.value, null, 4);
    }

    addEmail() {
        const emails = this.formModel.get('emails') as FormArray;
        emails.push(new FormControl());
    }

    onSubmit() {
        console.log("Submitting (ReactiveForm1): \n" +
            JSON.stringify(this.formModel.value, null, 4));
    }
}
