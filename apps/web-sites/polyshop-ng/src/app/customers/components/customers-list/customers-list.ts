import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../models/customer.model';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  bootstrapPencilFill,
  bootstrapPersonFill,
  bootstrapTrashFill,
} from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-customers-list',
  imports: [CommonModule, FormsModule, NgIcon],
  templateUrl: './customers-list.html',
  styleUrl: './customers-list.scss',
  viewProviders: [provideIcons({ bootstrapPersonFill, bootstrapPencilFill, bootstrapTrashFill })],
})
export class CustomersList {
  @Input()
  customers!: Customer[];

  @Output()
  editAction = new EventEmitter<Customer>();

  @Output()
  deleteAction = new EventEmitter<Customer>();

  public title: string = 'Customers';

  onEditCustomer(customer: Customer): void {
    this.editCustomer(customer);
  }

  onDeleteCustomer(customer: Customer) {
    this.deleteCustomer(customer);
  }

  private deleteCustomer(customer: Customer) {
    this.deleteAction.emit(customer);
  }

  private editCustomer(customer: Customer): void {
    this.editAction.emit(customer);
  }
}
