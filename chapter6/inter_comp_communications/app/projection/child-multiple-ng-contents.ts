import { Component } from '@angular/core';

@Component({
    selector: 'child-multiple-ng-contents',
    styles: ['.child-style {background: lightgreen;}'],
    template: `
        <div class="child-style">
         <h2>Child</h2>
          <ng-content select=".header" ></ng-content>
          <div>This content is defined in child</div>
          <ng-content select=".footer"></ng-content>
        </div>
  `
})
export class ChildMultipleNgContentsComponent {
}