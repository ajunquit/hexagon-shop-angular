import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
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
    }),
  ],
})
export class Sidebar {
  @Input()
  public isSidebarOpen: boolean = true;

  public sidebarConfig: SidebarConfig = {
    title: 'Hexagon',
    optionsMenu: OPTIONS_MENU_DATA_MOCK,
  };
}
