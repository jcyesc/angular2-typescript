import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `<h1>Chapter 5 - Binding, Observables and pipes</h1>
        <attribute-vs-property></attribute-vs-property>
        <br/>
        <br />
        <template-binding></template-binding>
        <br />
        <two-way-binding></two-way-binding>
        <br />
        <observable-events></observable-events>
        <br />
        <observable-events-http></observable-events-http>
        <br />
        <temperature-pipe-tester></temperature-pipe-tester>
        <br />
    `
})
export class AppComponent {
}

