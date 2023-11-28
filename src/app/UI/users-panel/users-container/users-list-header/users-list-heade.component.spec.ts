import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsListHeaderComponent } from './items-list-header.component';

describe('ItemsListHeaderComponent', () => {
  let component: ItemsListHeaderComponent;
  let fixture: ComponentFixture<ItemsListHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsListHeaderComponent]
    });
    fixture = TestBed.createComponent(ItemsListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
