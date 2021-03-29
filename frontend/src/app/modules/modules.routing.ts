import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from '../../core/guards/auth.guard';
import { HomeGuard } from '../../core/guards/home.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'home',
    canActivate: [HomeGuard],
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: { breadcrumb: 'home' },
  },
  {
    path: 'dashboard',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { breadcrumb: 'home' },
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

export const modulesRouting: ModuleWithProviders<any> = RouterModule.forChild(
  routes
);
