import { AddPatientComponent } from './../../core/secure/patients/add-patient.component';
import { Routes, RouterModule } from '@angular/router';
import { GuardService } from './../../../shared/services/auth/guard.service';

export const secureLayoutRoutes: Routes = [
    { path: 'add-patient', component: AddPatientComponent, canActivate: [GuardService] },
];
