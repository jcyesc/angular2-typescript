import { Component } from '@angular/core';

/**
 * Template Driven
 * 
 * In the template driven form, we use the directives: NgModel, NgModelGroup and NgForm.
 * 
 */
@Component({
    selector: 'template-driven-1',
    templateUrl: 'app/components/template-driven-1/template-driven-1.html'
})
export class TemplateDriven1 {

    onSubmit(formData) {
        console.log("Submitting (TemplateDriven1): \n" + JSON.stringify(formData, null, 2));
    }
}
