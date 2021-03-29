import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { LoginComponent } from './login/login.component';
export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      { path: '', redirectTo: 'registry', pathMatch: 'full' },
      {
        path: 'registry',
        loadChildren: () =>
          import('./registry/registry.module').then((m) => m.RegistryModule),
        data: { breadcrumb: 'registry' },
      },
      {
        path: 'login',
        component: LoginComponent,
        data: { breadcrumb: 'login' },
      },
      {
        path: 'recovery',
        component: RecoveryComponent,
        data: { breadcrumb: 'recovery' },
      },
    ],
  },
];

export const HomeRouting: ModuleWithProviders<any> = RouterModule.forChild(
  routes
);
