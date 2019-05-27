import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { NgModule } from '@angular/core';

import { ApplicationComponent } from './components/application/application';
import { CustomInputComponent } from './components/reactive-form-8/custom-input';
import { EqualValidatorDirective } from './directives/equal-validator-directive';
import { ReactiveForm1 } from './components/reactive-form-1/reactive-form-1';
import { ReactiveForm2 } from './components/reactive-form-2/reactive-form-2';
import { ReactiveForm3 } from './components/reactive-form-3/reactive-form-3';
import { ReactiveForm4 } from './components/reactive-form-4/reactive-form-4';
import { ReactiveForm5 } from './components/reactive-form-5/reactive-form-5';
import { ReactiveForm6 } from './components/reactive-form-6/reactive-form-6';
import { ReactiveForm7 } from './components/reactive-form-7/reactive-form-7';
import { ReactiveForm8 } from './components/reactive-form-8/reactive-form-8';
import { ReactiveForm9 } from './components/reactive-form-9/reactive-form-9';
import { TemplateDriven1 } from './components/template-driven-1/template-driven-1';
import { TemplateDriven2 } from './components/template-driven-2/template-driven-2';
import { TemplateDriven3 } from './components/template-driven-3/template-driven-3';
import { SsnValidatorDirective } from './directives/ssn-validator-directive';
import { ROUTING_CONFIG } from './app.routing';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, ROUTING_CONFIG],
    declarations: [
        ApplicationComponent,
        CustomInputComponent,
        EqualValidatorDirective,
        ReactiveForm1,
        ReactiveForm2,
        ReactiveForm3,
        ReactiveForm4,
        ReactiveForm5,
        ReactiveForm6,
        ReactiveForm7,
        ReactiveForm8,
        ReactiveForm9,
        SsnValidatorDirective,
        TemplateDriven1,
        TemplateDriven2,
        TemplateDriven3,
    ],
    bootstrap: [ApplicationComponent],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
    ]
})
export class AppModule {
}
