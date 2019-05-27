import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

/**
 * Returns an Observable resolved with either a null or an error object.
 */
function asyncSsnValidator(control: FormControl): Observable<any> {
    const value: string = control.value || '';
    const valid = value.match(/^\d{9}$/);
    return Observable
        .of(valid ? null : { ssnError: true })
        .delay(3000);
}

/**
 * Uses an asynchronous validator.
 */
@Component({
    selector: 'reactive-form-6',
    templateUrl: 'app/components/reactive-form-6/reactive-form-6.html'
})
export class ReactiveForm6 {
    userForm: FormGroup;

    constructor() {
        this.userForm = new FormGroup({
            'my-ssn': new FormControl('', null, asyncSsnValidator)
        });
    }

    get value() {
        return JSON.stringify(this.userForm.value, null, 4);
    }
}