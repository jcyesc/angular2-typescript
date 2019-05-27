import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

interface IChanges { [key: string]: SimpleChange };

@Component({
    selector: 'child-ngonchanges-lifecycle',
    styles: ['.child{background:lightgreen}'],
    template: `
     <div class="child">
      <h2>Child</h2>
      <div>Greeting: {{ greeting }}</div>
      <div>User name: {{ user.name }}</div>
      <div>Message: <input [(ngModel)]="message"></div>
    </div>
  `
})
export class ChildNgOnChangesLifecycleComponent implements OnChanges {
    @Input() greeting: string;
    
    /**
     * If the user property is not updated or replaced completely, the ngOnChanges()
     * event is not invoked. If just the "user.name" value is updated, ngOnChanges() is
     * not invoked.
     */
    @Input() user: { name: string };
    /**
     * When message is changed in the input field, it doesn't invoke ngOnChanges()
     * because this property wasn't associated with @Input.
     */
    message: string = 'Initial message'; 

    ngOnChanges(changes: IChanges) {
        console.log("ChildNgOnChangesLifecycleComponent.ngOnChanges(): " +
            JSON.stringify(changes, null, 2));
    }
}
