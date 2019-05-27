/*
Imports the bootstrap method and the @Component annotation from the corresponding
Angular packages, making them available for the application's code.
*/

import { Component } from '@angular/core';
import { Directive, ElementRef, Renderer } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/* The @Directive decorator allows you to attach custom behavior to an HTML element.
 * Each component is basically a directive with an associated view, but unlike a 
 * component, a directive doesn't have its own view.
 * 
 * This directive can be attached to an input element in order to log the input's value 
 * to the browser's console as soon as the value is changed.
 */
@Directive({
    selector: 'input[log-directive]',
    // The host element is the one you attach your directive to.
    host: {
        '(input)': 'onInput($event)'
    }
})
class LogDirective {
    onInput(event) {
        console.log(event.target.value);
    }
}

/* Directive that changes the background of the attached element to blue. */
@Directive({selector: '[highlight]'})
export class HighlightDirective {
    constructor(renderer: Renderer, el: ElementRef) {
        renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'blue');
    }
}

/*
The @Component annotation placed above the HelloWorldComponent class turns it into an
Angular component.

Note: To refer to DOM object's property within the template, we add a local template
variable (its name must start with #) that will automatically store a reference to
the corresponding DOM object, and use dot notation.
*/
@Component({
    selector: 'hello-world',
    template: `<h1>Hello {{ name }}!</h1>
               Enter something: <input #title type="text" log-directive />
               <span> {{ title.value }} </span>
               <h1 highlight>Hello world!</h1>` 
})
class HelloWorldComponent {
    name: string;

    constructor() {
        this.name = 'Angular';
    }
}

// Declares the content of the module.
@NgModule({
    imports: [BrowserModule],
    declarations: [HelloWorldComponent, HighlightDirective, LogDirective],
    bootstrap: [HelloWorldComponent]
})
export class AppModule { }

// App boostrap
platformBrowserDynamic().bootstrapModule(AppModule);

