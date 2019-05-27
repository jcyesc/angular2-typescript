import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LazyLoadComponent } from './lazy.load.component';

/*
Here we configure an empty path to be used as a default rout. Because this module will be
lazy-loaded, and we didn't declare the LazyLoadModule type in the root module, we have to
use the default keyword while exporting this class. When the user clicks the Lazy Load
link in the root module, the loader will load the content of the lazy.load.module.ts file
and will figure out that LazyLoadModule is a default entry point to the script from this
file.

This super-simple example reduced the size of the initial download only by 1 KB. But
architecting large applications using lazy-loading techniques can lower the initial size
of the downloadable code by hundreds of kilobytes or more, improving the perceived
performance of the application. Perceived performance is what the user thinks of the
performance of the application, and improving it is important, especially when the app is
being loaded from a mobile-device on a slow network.
*/
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: '', component: LazyLoadComponent}
        ])
    ],
    declarations: [LazyLoadComponent]
})
export default class LazyLoadModule {
}