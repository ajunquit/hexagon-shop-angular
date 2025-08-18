import { Component } from '@angular/core';
import { ItemsContainer } from '../items-container/items-container';

@Component({
  selector: 'app-items-page',
  imports: [ItemsContainer],
  templateUrl: './template/items-page.html',
  styleUrl: './items-page.scss',
})
export class ItemsPage {}
