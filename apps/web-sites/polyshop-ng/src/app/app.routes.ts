import { Routes } from '@angular/router';
import { authRoutes } from './auth/auth.routes';
import { dashboardRoutes } from './dashboard/dashboard.routes';
import { MainLayout } from './layout/components/main-layout/main-layout';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: MainLayout,
    children: [...dashboardRoutes],
  },
  ...authRoutes,
  { path: '**', redirectTo: 'dashboard' },
];
