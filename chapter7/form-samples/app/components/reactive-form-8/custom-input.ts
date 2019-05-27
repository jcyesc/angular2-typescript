import { Component, Input } from '@angular/core';

/**
 * Defines a custom input component that is not part of the main form.
 */
@Component({
  selector: 'custom-input',
  template: `<input type="text" [(ngModel)]="value">`
})
export class CustomInputComponent {
  @Input() value: string;
}
