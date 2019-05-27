import { Component, Input, OnInit, OnChanges } from '@angular/core';

/*
Component Lifecycle

This example uses OnInit and OnChanges to catch the lifycycle events.

The output of the program is the following:

Live reload enabled.
child-basic-lifecycle.ts:12 ChildBasicLifecycleComponent.constructor: undefined
child-basic-lifecycle.ts:17 ChildBasicLifecycleComponent.ngOnChanges: Hello
child-basic-lifecycle.ts:25 ChildBasicLifecycleComponent.ngOnInit: Hello

-- After writing k and o

ChildBasicLifecycleComponent.ngOnChanges: Hellok
ChildBasicLifecycleComponent.ngOnChanges: Helloko

*/
@Component({
    selector: 'child-basic-lifecycle',
    template: 'Child: {{greeting}}'
})
export class ChildBasicLifecycleComponent implements OnInit, OnChanges {
    @Input() greeting: string;

    /** greeting isn't initialized yet */
    constructor() {
        console.log(`ChildBasicLifecycleComponent.constructor: ${this.greeting}`);
    }

    /** Invoked every time an @Input() property changes via the data binding */
    ngOnChanges() {
        console.log(`ChildBasicLifecycleComponent.ngOnChanges: ${this.greeting}`);
    }

    /**
     * Invoked after very first ngOnChanges(). It's used if you want to
       use the values from component's properties, which are not available in the constructor.
     */
    ngOnInit() {
        console.log(`ChildBasicLifecycleComponent.ngOnInit: ${this.greeting}`);
    }
}

