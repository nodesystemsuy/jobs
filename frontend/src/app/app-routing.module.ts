import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'modules',
    pathMatch: 'full',
  },
  {
    path: 'modules',
    loadChildren: () =>
      import('./modules/modules.module').then((m) => m.ModulesModule),
    data: { breadcrumb: 'modules' },
  },
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes, {
  useHash: true,
});
