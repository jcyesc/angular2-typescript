import { Component } from '@angular/core';

/*
Binding in templates

Angular offers structural directives (NgIf, NgSwitch, and NgFor) that change the DOM's
structure by removing elements from or adding elements to it. 

HTML templates and Angular directives

The HTML <template> tag isn't a typical tag, because the browser ignores its content
unless the aplication includes a script to parse and add it to the DOM.
*/
@Component({
    selector: 'template-binding',
    template: `
    <div style="border: 1px solid blue">
    <button (click)="flag = !flag">Toggle flag's value</button>
    <p>
      Flag's value: {{flag}}
    </p>
    <p>
     1. span with *ngIf="flag": <span *ngIf="flag">Flag is true</span>
    </p>
    <p>
      2. template with [ngIf]="flag": <template [ngIf]="flag">Flag is true</template>
    </p>
    </div>
  `
})
export class TemplateBindingComponent {
    flag: boolean = true;
}
