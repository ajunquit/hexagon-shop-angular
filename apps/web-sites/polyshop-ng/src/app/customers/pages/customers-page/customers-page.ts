import { Component } from '@angular/core';
import { CustomersContainer } from '../customers-container/customers-container';

@Component({
  selector: 'app-customers-page',
  imports: [CustomersContainer],
  templateUrl: './template/customers-page.html',
  styleUrl: './customers-page.scss',
})
export class CustomersPage {}
