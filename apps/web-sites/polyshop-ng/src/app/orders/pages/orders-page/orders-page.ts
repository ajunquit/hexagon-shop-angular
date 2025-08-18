import { Component } from '@angular/core';
import { OrdersContainer } from '../orders-container/orders-container';

@Component({
  selector: 'app-orders-page',
  imports: [OrdersContainer],
  templateUrl: './template/orders-page.html',
  styleUrl: './orders-page.scss',
})
export class OrdersPage {}
