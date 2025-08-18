import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsContainer } from './items-container';

describe('ItemsContainer', () => {
  let component: ItemsContainer;
  let fixture: ComponentFixture<ItemsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
