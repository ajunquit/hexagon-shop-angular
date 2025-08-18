import { Routes } from '@angular/router';

export const customersRoutes: Routes = [
  {
    path: 'customers',
    loadComponent: () =>
      import('./pages/customers-page/customers-page').then((m) => m.CustomersPage),
  },
];
