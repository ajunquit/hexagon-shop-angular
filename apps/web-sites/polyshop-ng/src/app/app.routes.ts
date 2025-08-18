import { Routes } from '@angular/router';
import { authRoutes } from './auth/auth.routes';
import { customersRoutes } from './customers/customers.routes';
import { dashboardRoutes } from './dashboard/dashboard.routes';
import { MainLayout } from './layout/components/main-layout/main-layout';
import { itemsRoutes } from './items/items.routes';
import { ordersRoutes } from './orders/orders.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: MainLayout,
    children: [...dashboardRoutes, ...customersRoutes, ...itemsRoutes, ...ordersRoutes],
  },
  ...authRoutes,
  { path: '**', redirectTo: 'dashboard' },
];
