import { Component } from '@angular/core';

@Component({
    selector: 'parent-ngonchanges-lifecycle',
    styles: ['.parent {background: lightblue}'],
    template: `
     <div class="parent">
       <h2>Parent</h2>
      <div>
        Greeting: 
        <input type="text" [value]="greetingParent" (change)="greetingParent = $event.target.value">
      </div>
      <div>
        User name: 
        <input type="text" [value]="user.name" (change)="user.name = $event.target.value"></div>
      <child-ngonchanges-lifecycle [greeting]="greetingParent" [user]="user"></child-ngonchanges-lifecycle>
    </div>
  `
})
export class ParentNgOnChangesLifecycleComponent {
    greetingParent: string = 'Hello';
    user: { name: string } = { name: 'John' };
}
