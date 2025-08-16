import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OPTIONS_MENU_DATA_MOCK } from '../../mocks/layout-data-mock';
import { SidebarConfig } from '../../models/sidebar-config.model';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  @Input()
  public isSidebarOpen: boolean = true;

  public sidebarConfig: SidebarConfig = {
    title: 'polyshop-ng',
    optionsMenu: OPTIONS_MENU_DATA_MOCK,
  };
}
