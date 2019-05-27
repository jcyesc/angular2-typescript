import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'reactive-form-8',
    template: `
    <h2>Reactive Form 7 - FormModel and FormGroup validations</h2>

    <div>
        Custom: <custom-input [formControl]="customInput" ngDefaultControl></custom-input>
        <button (click)="onSubmit()">Submit</button>
        <br>
        {{ getValue() }}
    </div>
  `
})
export class ReactiveForm8 {
    customInput: FormControl = new FormControl('default value');

    onSubmit() {
        console.log("ReactiveForm8 value: " + this.customInput.value);
    }

    getValue() {
        return this.customInput.value;
    }
}