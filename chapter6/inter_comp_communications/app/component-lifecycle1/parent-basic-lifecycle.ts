import { Component } from '@angular/core';

@Component({
    selector: 'parent-basic-lifecycle',
    template: `
    <div>
    <h3>Parent basic lifecycle</h3>
    <div>
        Greeting: <input type="text" [(ngModel)]="greetingParent">
        Parent: {{ greetingParent }}
    </div>
    <child-basic-lifecycle [greeting]="greetingParent"></child-basic-lifecycle>
    </div>
  `
})
export class ParentBasicLifecycleComponent {
    greetingParent: string = 'Hello';
}