import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from './../shared/services/auth/guard.service';

// Ojo no se si funcione asi el index, aqui agregamos los layouts
import { PublicLayoutComponent, publicLayoutRoutes } from './layout/public/index';
import { SecureLayoutComponent, secureLayoutRoutes } from './layout/secure/index';
/**
 * Route constant
 * Aqui definimos todas las rutas de la app
 */
const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '', component: PublicLayoutComponent, data: { title: 'Public Views' }, children: publicLayoutRoutes },
    { path: '', component: SecureLayoutComponent, canActivate: [GuardService], data: { title: 'Secure Views' }, children: secureLayoutRoutes },
    { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }