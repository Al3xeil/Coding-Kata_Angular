﻿import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { KompetenzpflegeComponent } from './kompetenzpflege/kompetenzpflege.component'
import { KompetenzSucheComponent } from './kompetenz-suche/kompetenz-suche.component'
import { KompetenzSideMenuComponent } from './kompetenz-side-menu/kompetenz-side-menu.component'
import { KompetenzKategoryComponent } from './kompetenz-kategory/kompetenz-kategory.component'
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);