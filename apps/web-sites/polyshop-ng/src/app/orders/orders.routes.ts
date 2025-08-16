import { Routes } from '@angular/router';

export const ordersRoutes: Routes = [
  {
    path: 'orders',
    loadComponent: () => import('./pages/orders-page/orders-page').then((m) => m.OrdersPage),
  },
];
