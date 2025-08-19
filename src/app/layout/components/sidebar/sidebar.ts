import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { OPTIONS_MENU_DATA_MOCK } from '../../mocks/layout-data-mock';
import { SidebarConfig } from '../../models/sidebar-config.model';
import {
  bootstrapBoxFill,
  bootstrapCircleSquare,
  bootstrapPersonFill,
  bootstrapPieChartFill,
  bootstrapShop,
  bootstrapHexagon,
  bootstrapHexagonHalf,
  bootstrapChevronDown,
} from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule, NgIcon],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  viewProviders: [
    provideIcons({
      bootstrapBoxFill,
      bootstrapPieChartFill,
      bootstrapPersonFill,
      bootstrapCircleSquare,
      bootstrapShop,
      bootstrapHexagonHalf,
      bootstrapChevronDown,
    }),
  ],
})
export class Sidebar {
  @Input()
  public isSidebarOpen: boolean = true;

  public sidebarConfig: SidebarConfig = {
    title: 'Hexagon Shop',
    optionsMenu: OPTIONS_MENU_DATA_MOCK,
  };

  ordersOpen = false;
  isOrdersSection = () => this.router.url.startsWith('/orders');

  constructor(public router: Router) {}
}
