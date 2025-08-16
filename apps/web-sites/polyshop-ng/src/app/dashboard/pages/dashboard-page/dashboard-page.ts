import { Component } from '@angular/core';
import { DashboardContainer } from '../dashboard-container/dashboard-container';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardContainer],
  templateUrl: './template/dashboard-page.html',
  styleUrl: './dashboard-page.scss',
})
export class DashboardPage {}
