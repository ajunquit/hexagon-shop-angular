import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalAction } from './enums/modal-action.enum';
import { ModalConfig } from './models/modal-config.model';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './templates/modal.html',
  styleUrl: './modal.scss',
})
export class Modal {
  @Input() show: boolean = false;
  @Input() title: string = '';

  @Output() modalAction = new EventEmitter<ModalAction>();

  public modalConfig: ModalConfig = {
    primaryButtonText: 'OK',
    secondaryButtonText: 'Cancel',
    backdropClickEnabled: true,
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
