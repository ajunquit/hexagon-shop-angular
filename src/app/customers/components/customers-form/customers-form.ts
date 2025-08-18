import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Customer } from '../../models/customer.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customers-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './customers-form.html',
  styleUrl: './customers-form.scss',
})
export class CustomersForm {
  public title: string = 'Nuevo Cliente';
  public customerForm!: FormGroup;

  @Input()
  public customer!: Customer;

  @Output()
  public formSubmit = new EventEmitter<Customer>();

  constructor(protected formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.internalInit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['customer'] && !changes['customer'].firstChange) {
      this.prepareForm();
    }
  }

  public onSubmit(): void {
    if (this.customerForm.valid) {
      this.formSubmit.emit(this.customerForm.value);
    } else {
      this.customerForm.markAllAsTouched();
    }
  }

  private internalInit(): void {
    this.prepareForm();
  }

  private prepareForm(): void {
    this.customerForm = this.formBuilder.group({
      id: [this.customer.id || ''],
      ruc: [this.customer.ruc || '', Validators.required],
      name: [this.customer.name || '', Validators.required],
      email: [this.customer.email || '', [Validators.email, Validators.required]],
      phone: [this.customer.phone || '', Validators.required],
      address: [this.customer.address || ''],
    });
  }
}
