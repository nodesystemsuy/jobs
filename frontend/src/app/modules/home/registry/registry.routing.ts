import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { RegisterBusinessComponent } from './register-business/register-business.component';
import { RegisterPeopleComponent } from './register-people/register-people.component';

export const routes: Routes = [
  { path: '', redirectTo: 'business', pathMatch: 'full' },
  {
    path: 'business',
    component: RegisterBusinessComponent,
    data: { breadcrumb: 'business' }
  },
  {
    path: 'people',
    component: RegisterPeopleComponent,
    data: { breadcrumb: 'people' }
  }
];

export const RegistryRouting: ModuleWithProviders<any> = RouterModule.forChild(
  routes
);
