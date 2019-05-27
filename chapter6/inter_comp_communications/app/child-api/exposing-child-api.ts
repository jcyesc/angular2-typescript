import { NgModule, Component, ViewChild, AfterViewInit } from '@angular/core';

/**
 * When parents need to use the API exposed by the child, it can be down in two ways:
 * 
 * 1. Use template variable names
 * 2. Use the @ViewChild annotation.
 * 
 * The code below shows you how to do that.
 */
@Component({
    selector: 'child-api',
    template: `<h3>Child exposing APIs</h3>`

})
export class ChildApiComponent {
    greet(name) {
        console.log(`ChildApiComponent: Hello from ${name}.`);
    }
}

@Component({
    selector: 'parent-api',
    template: `
        <h1>Parent</h1>
        <child-api #child1></child-api>
        <child-api #child2></child-api>
        <button (click)="child2.greet('Child 2')">Invoke greet() on child 2</button>
  `
})
export class ParentApiComponent implements AfterViewInit {
    @ViewChild('child1')
    firstChild: ChildComponent;

    ngAfterViewInit() {
        this.firstChild.greet('Child 1');
    }
}

