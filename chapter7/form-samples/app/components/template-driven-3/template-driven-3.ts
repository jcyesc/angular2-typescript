import { Component } from '@angular/core';

@Component({
    selector: 'template-driven-3',
    templateUrl: 'app/components/template-driven-3/template-driven-3.html'
})
export class TemplateDriven3 {
    valueString = '';

    get value() {
        return this.valueString;
    }


    onSubmit(formValue: any, isFormValid: boolean) {
        this.valueString = JSON.stringify(formValue, null, 2);
        if (isFormValid) {
            console.log("Submitting (TemplateDriven3): \n" + this.valueString);

        }
    }
}