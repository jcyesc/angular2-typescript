import { Component } from '@angular/core';

/*
This components show that angular doesn't support two-way binding by default.
*/
@Component({
    selector: 'attribute-vs-property',
    template: `
        <h3>Property vs attribute binding:</h3>
        <input [value]="greeting" [attr.value] = "greeting" (input)="onInputEvent($event)">
        `
})
export class AttributeVsPropertyComponent {
    greeting: string = 'My value';

    onInputEvent(event: Event): void {
        let inputElement: HTMLInputElement = <HTMLInputElement>event.target;

        console.log(`The input property value = ${inputElement.value}`);
        console.log(`The input attribute value = ${inputElement.getAttribute('value')}`);
        console.log(`The greeting property value = ${this.greeting}`);
    }

    /*
        // Using destructuring
        onInputEvent({ target }): void {
            console.log(`The input property value = ${target.value}`);
            console.log(`The input attribute value = ${target.getAttribute('value')}`);
            console.log(`The greeting property value = ${this.greeting}`);
        }
    */

}