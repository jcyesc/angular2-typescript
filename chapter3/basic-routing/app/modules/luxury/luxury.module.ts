import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LuxuryComponent } from './luxury.component';

const LUXURY_ROUTES: Routes = [
    { path: 'luxury', component: LuxuryComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(LUXURY_ROUTES)
    ],
    declarations: [LuxuryComponent]
})
export class LuxuryModule {
}