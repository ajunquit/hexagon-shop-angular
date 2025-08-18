import { HttpClientModule } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { bootstrapPlusCircleFill } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ModalAction } from '../../../shared/components/modal/enums/modal-action.enum';
import { Modal } from '../../../shared/components/modal/modal';
import { OrdersForm } from '../../components/orders-form/orders-form';
import { OrdersList } from '../../components/orders-list/orders-list';
import { OrderStatus } from '../../enums/order-status.enum';
import { MOCK_ORDERS } from '../../mocks/order-data-mock';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-orders-container',
  imports: [OrdersForm, OrdersList, Modal, HttpClientModule, NgIcon],
  templateUrl: './template/orders-container.html',
  styleUrl: './orders-container.scss',
  viewProviders: [provideIcons({ bootstrapPlusCircleFill })],
})
export class OrdersContainer {
  @ViewChild(OrdersForm)
  orderFormComponent!: OrdersForm;

  public isModalOpen: boolean = false;
  public isNewOrder: boolean = false;
  public currentOrder: Order = this.emptyOrder();
  public orders!: Order[];
  public config = {
    newButtonLabel: 'New',
    title: 'Manage Orders',
  };

  constructor(/*private orderService: OrderService*/) {}

  ngOnInit(): void {
    this.internalInit();
  }

  private internalInit(): void {
    this.loadOrders();
  }

  private loadOrders() {
    // Todo: remove mock data when integrating with backend
    this.orders = this.getOrders();
    // this.orderService.getAll().subscribe({
    //   next: (data) => (this.orders = data),
    //   error: (err) => console.error('Error al cargar ordenes', err),
    // });
  }

  private getOrders(): Order[] {
    return MOCK_ORDERS || [];
  }

  public onNewOrder(): void {
    this.currentOrder = this.emptyOrder();
    this.showModal(true);
    this.isNewOrder = true;
  }

  public handleModalAction(modalAction: ModalAction): void {
    if (modalAction === ModalAction.PrimaryButton) {
      this.submitForm();
    }
    if (modalAction === ModalAction.SecondaryButton) {
      this.showModal(false);
    }
  }

  private submitForm(): void {
    this.orderFormComponent.onSubmit();
  }

  public handleSaveAction(order: Order): void {
    if (!order) return;

    if (this.isNewOrder) {
      this.handleCreateOrder(order);
    } else if (order.id) {
      this.handleUpdateOrder(order);
    }

    this.showModal(false);
  }

  private handleCreateOrder(order: Order): void {
    // this.orderService.create(order).subscribe({
    //   next: () => this.onOrderActionSuccess(true),
    //   error: (err) => this.handleError(err, 'create'),
    // });
  }

  private handleUpdateOrder(order: Order): void {
    if (!order.id) return;

    // this.orderService.update(order.id, order).subscribe({
    //   next: () => this.onOrderActionSuccess(false),
    //   error: (err) => this.handleError(err, 'update'),
    // });
  }

  private onOrderActionSuccess(isNew: boolean): void {
    this.loadOrders();
    if (isNew) {
      this.resetOrderForm();
    }
  }

  private resetOrderForm(): void {
    this.showModal(false);
    this.currentOrder = this.emptyOrder();
  }

  private handleError(error: any, action: string): void {
    console.error(`Error al ${action} cliente`, error);
  }

  public handleEditAction(order: Order) {
    this.isNewOrder = false;
    this.currentOrder = order;
    this.showModal(true);
  }

  public handleDeleteAction(order: Order) {
    // this.orderService.delete(order.id).subscribe({
    //   next: () => this.loadOrders(),
    //   error: (err) => this.handleError(err, 'Delete'),
    // });
  }

  private emptyOrder(): Order {
    return {
      id: '00000000-0000-0000-0000-000000000000',
      customerId: '',
      orderDate: new Date(),
      orderNumber: '',
      status: OrderStatus.Pending,
      totalAmount: 0,
    };
  }

  private showModal(flag: boolean) {
    this.isModalOpen = flag;
  }
}
function providerIcons(arg0: { provideIcons: any }): import('@angular/core').Provider {
  throw new Error('Function not implemented.');
}
