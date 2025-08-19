import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  bootstrapBoxArrowRight,
  bootstrapGear,
  bootstrapPersonCircle,
} from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-user-menu',
  imports: [CommonModule, RouterLink, NgIcon],
  templateUrl: './user-menu.html',
  styleUrl: './user-menu.scss',
  viewProviders: [provideIcons({ bootstrapPersonCircle, bootstrapGear, bootstrapBoxArrowRight })],
})
export class UserMenu {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) email!: string;
  @Input({ required: true }) avatarUrl!: string;

  // Rutas opcionales (puedes cambiarlas por outputs si prefieres manejar navegación arriba)
  @Input() profileLink: string = '/profile';
  @Input() settingsLink: string = '/settings';

  @Output() logout = new EventEmitter<void>();

  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  close() {
    this.isOpen = false;
  }
  onLogout() {
    this.close();
    this.logout.emit();
  }

  // Cerrar fuera / con ESC
  @HostListener('document:click') onDocClick() {
    this.close();
  }

  @HostListener('document:keydown.escape') onEsc() {
    this.close();
  }
}
