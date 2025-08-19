import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { filter, Subscription } from 'rxjs';
import { NavItem } from '../../models/nav-item.model';
import {
  bootstrapBoxFill,
  bootstrapChevronDown,
  bootstrapCircleSquare,
  bootstrapPeopleFill,
  bootstrapPieChartFill,
} from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-nav-group',
  imports: [RouterLink, CommonModule, RouterLinkActive, NgIcon],
  templateUrl: './template/nav-group.html',
  styleUrl: './nav-group.scss',
  viewProviders: [
    provideIcons({
      bootstrapChevronDown,
      bootstrapBoxFill,
      bootstrapPeopleFill,
      bootstrapCircleSquare,
      bootstrapPieChartFill,
    }),
  ],
})
export class NavGroup implements OnInit, OnDestroy {
  @Input({ required: true }) label!: string;
  @Input() iconName?: string;
  @Input({ required: true }) items: NavItem[] = [];
  @Input() openByDefault = false;
  @Input() id?: string; // clave para persistencia; si no, usa label

  panelId = crypto.randomUUID();
  open = false;
  private sub?: Subscription;

  // estado de "activo" si alguna ruta hija está activa
  active = signal(false);
  storageKey = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.storageKey = `navgroup:${this.id || this.label.toLowerCase().replace(/\s+/g, '-')}`;
    const saved = localStorage.getItem(this.storageKey);
    this.open = saved !== null ? saved === '1' : this.openByDefault;

    this.updateActive();
    this.sub = this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => this.updateActive());
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  toggle() {
    this.open = !this.open;
    localStorage.setItem(this.storageKey, this.open ? '1' : '0');
  }

  private updateActive() {
    const url = this.router.url;
    this.active.set(this.items.some((it) => this.itemMatchesUrl(it, url)));
  }

  private itemMatchesUrl(it: NavItem, url: string): boolean {
    if (it.route && typeof it.route === 'string' && url.startsWith(it.route)) return true;
    if (it.children?.length) return it.children.some((c) => this.itemMatchesUrl(c, url));
    return false;
  }
}
