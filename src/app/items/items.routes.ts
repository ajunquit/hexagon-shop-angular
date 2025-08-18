import { Routes } from '@angular/router';

export const itemsRoutes: Routes = [
  {
    path: 'items',
    loadComponent: () => import('./pages/items-page/items-page').then((m) => m.ItemsPage),
  },
];
