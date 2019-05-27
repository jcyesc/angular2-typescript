import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

/*
The Guard class implements the interface CanActivate, which declares only one function
to implement: CanActive(). This function should contain application logic that returns
true or false. If the function returns false (the user isn't logged in), the application
won't navigate to the route and will print an error message on the console.
*/
@Injectable()
export class LoginGuard implements CanActivate {

    /*
        The parameters (destination: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    */
    canActivate(destination: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log("Destination name: " + destination.component.name);
        console.log("Url to navigate: " + state.url);

        return this.checkIfLoggedIn();
    }

    private checkIfLoggedIn(): boolean {
        // A call to the actual login service would go here.
        // For now we'll just randomly return true or false.

        let loggedIn: boolean = Math.random() < 0.5;

        if (!loggedIn) {
            console.log(`LoginGuard: The user is not logged in and can't navigate
                to product details.`);
        }

        return loggedIn;
    }
}
