import { OptionsMenu } from '../models/options-menu.model';

export const OPTIONS_MENU_DATA_MOCK: OptionsMenu = {
  dashboard: {
    label: 'Dashboard',
    icon: 'dashboard',
    route: '/dashboard',
  },
  items: {
    label: 'Items',
    icon: 'inventory_2',
    route: '/items',
  },
  orders: {
    label: 'Orders',
    icon: 'shopping_cart',
    route: '/orders',
  },
  customers: {
    label: 'Customers',
    icon: 'people',
    route: '/customers',
  },
};
