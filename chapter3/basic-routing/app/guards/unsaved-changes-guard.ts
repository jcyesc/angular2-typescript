import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';

/*
This Guard is executed when we are going to leave the current route. 
*/
@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<boolean> {

    canDeactivate() {
        return window.confirm("You have unsaved changes. Still want to leave?");
    }
}
