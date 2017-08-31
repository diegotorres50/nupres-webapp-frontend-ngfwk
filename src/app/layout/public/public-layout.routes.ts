import { LoginComponent } from './../../core/public/login/login.component';
import { Routes, RouterModule } from '@angular/router';

export const publicLayoutRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent }
];