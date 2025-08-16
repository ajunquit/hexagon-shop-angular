import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { MainLayoutConfig } from '../../models/main-layout-config';

@Component({
  selector: 'app-main-layout',
  imports: [CommonModule, Sidebar, RouterOutlet],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
  public isSidebarOpen: boolean = true;
  public userName: string = '';
  public mainLayoutConfig: MainLayoutConfig = {
    quit: 'Logout',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.internalInit();
  }

  public internalInit(): void {
    this.setUserName();
  }

  public setUserName(): void {
    const user = localStorage.getItem('user');
    if (user) {
      this.userName = JSON.parse(user!).name;
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
