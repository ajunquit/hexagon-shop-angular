import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { bootstrapArrowRightCircleFill, bootstrapXCircleFill } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ModalAction } from './enums/modal-action.enum';
import { ModalConfig } from './models/modal-config.model';

@Component({
  selector: 'app-modal',
  imports: [CommonModule, NgIcon],
  templateUrl: './template/modal.html',
  styleUrl: './modal.scss',
  viewProviders: [provideIcons({ bootstrapXCircleFill, bootstrapArrowRightCircleFill })],
})
export class Modal {
  @Input() show: boolean = false;
  @Input() title: string = '';

  @Output() modalAction = new EventEmitter<ModalAction>();

  public modalConfig: ModalConfig = {
    primaryButtonText: 'OK',
    secondaryButtonText: 'Cancel',
  };

  public onSecondaryButton(): void {
    this.modalAction.emit(ModalAction.SecondaryButton);
  }

  public onPrimaryButton(): void {
    this.modalAction.emit(ModalAction.PrimaryButton);
  }

  public onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.modalAction.emit(ModalAction.BackDropClick);
    }
  }
}
