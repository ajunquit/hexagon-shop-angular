import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroArrowLeftStartOnRectangle } from '@ng-icons/heroicons/outline';
import { heroChevronDoubleLeftSolid } from '@ng-icons/heroicons/solid';
import { User } from '../../../auth/models/user.model';
import { MainLayoutConfig } from '../../models/main-layout-config';
import { Sidebar } from '../sidebar/sidebar';
import { UserMenu } from '../user-menu/user-menu';

@Component({
  selector: 'app-main-layout',
  imports: [CommonModule, Sidebar, RouterOutlet, NgIcon, UserMenu],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
  viewProviders: [provideIcons({ heroArrowLeftStartOnRectangle, heroChevronDoubleLeftSolid })],
})
export class MainLayout {
  public isSidebarOpen: boolean = true;
  public user!: User;
  public mainLayoutConfig: MainLayoutConfig = {
    quit: 'Logout',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.internalInit();
  }

  public internalInit(): void {
    this.getUserFromLocalStorage();
  }

  private getUserFromLocalStorage(): void {
    var userString = localStorage.getItem('user');
    if (userString) {
      this.user = JSON.parse(userString!);
    }
  }

  public logout(): void {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  public toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
