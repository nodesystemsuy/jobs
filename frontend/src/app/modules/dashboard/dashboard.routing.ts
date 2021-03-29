import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'business', pathMatch: 'full' },
      {
        path: 'person',
        loadChildren: () =>
          import('./person/person.module').then((m) => m.PersonModule),
        data: { breadcrumb: 'person' }
      },
      {
        path: 'business',
        loadChildren: () =>
          import('./business/business.module').then((m) => m.BusinessModule),
        data: { breadcrumb: 'business' },
      }
    ],
  },
];

export const DashBoardRouting: ModuleWithProviders<any> = RouterModule.forChild(
  routes
);
