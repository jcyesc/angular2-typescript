import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: 'app/components/application/application.html'
})
export class ApplicationComponent {
    description: string;

    constructor(private router: Router) {
        this.description = "Routing with Angular";
    }

    /**
     * Navigates programmatically to the given route.
     */
    navigateToProductDetail() {
        this.router.navigate(["/product"]);
    }
}
