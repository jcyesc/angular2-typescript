import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';

/**
 * Returns `true` if FormControl's value represents a valid SSN,
 * otherwise returns `false`.
 */
function ssnValidator(control: FormControl): { [key: string]: any } {
    const value: string = control.value || '';
    const valid = value.match(/^\d{9}$/);
    return valid ? null : { ssnError: true };
}

/**
 * Wraps existing ssnValidator function into a directive,
 * so it can be used in a template to validate a form field.
 * 
 * The square brackets in [ssn] denote that the directive can be used as an attribute.
 * 
 * "multi" enables to pass multiple validators.
 */
@Directive({
    selector: '[ssnValidator]',
    providers: [{ provide: NG_VALIDATORS, useValue: ssnValidator, multi: true }]
})
export class SsnValidatorDirective { }

