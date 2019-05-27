import { Component } from '@angular/core';

@Component({
    selector: 'lazy-load',
    template: '<h4 class="lazy">Lazy Load Component (Check Routes)</h4>',
    styles: ['.lazy {background: orange}']
})
export class LazyLoadComponent {
}