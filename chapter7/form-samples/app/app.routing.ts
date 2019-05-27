import { Routes, RouterModule } from '@angular/router';

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

const ROUTES_APP: Routes = [
    { path: 'reactiveForm1', component: ReactiveForm1 },
    { path: 'reactiveForm2', component: ReactiveForm2 },
    { path: 'reactiveForm3', component: ReactiveForm3 },
    { path: 'reactiveForm4', component: ReactiveForm4 },
    { path: 'reactiveForm5', component: ReactiveForm5 },
    { path: 'reactiveForm6', component: ReactiveForm6 },
    { path: 'reactiveForm7', component: ReactiveForm7 },
    { path: 'reactiveForm8', component: ReactiveForm8 },
    { path: 'reactiveForm9', component: ReactiveForm9 },
    { path: 'templateDriven1', component: TemplateDriven1 },
    { path: 'templateDriven2', component: TemplateDriven2 },
    { path: 'templateDriven3', component: TemplateDriven3 },
];

export const ROUTING_CONFIG = RouterModule.forRoot(ROUTES_APP);
