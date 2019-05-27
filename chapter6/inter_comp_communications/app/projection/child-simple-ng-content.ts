import { Component, ViewEncapsulation } from '@angular/core';

/**
 * Projection and NgContent
 * 
 * In some cases, you'll want to be able to dynamically change the content of a
 * component's template at runtime. In AngularJs, this was known as transclusion, but
 * the new term for it is projection. In Angular, you can project a fragment of the
 * parent component's template onto its child by using the ngContent directive.
 * 
 */
@Component({
    selector: 'child-simple-ng-content',
    styles: ['.wrapper {background: lightgreen;}'],
    template: `
    <div class="wrapper">
     <h2>Child</h2>
      <div>This div is defined in the child's template</div>
      <ng-content></ng-content>
    </div>
  `,
   // encapsulation: ViewEncapsulation.Native
})
export class ChildSimpleNgContentComponent {
}