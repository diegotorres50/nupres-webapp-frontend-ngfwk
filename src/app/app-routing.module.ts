import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Aqui definimos todas las rutas de la app

// Importamos los componetes que se renderizan segun las rutas creadas
import { LoginComponent } from './login/login.component';

// En esta constante definimos las rutas de la app
const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
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