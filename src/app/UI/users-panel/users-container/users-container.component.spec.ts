import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsWindowComponent } from './items-window.component';

describe('ItemsWindowComponent', () => {
  let component: ItemsWindowComponent;
  let fixture: ComponentFixture<ItemsWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsWindowComponent]
    });
    fixture = TestBed.createComponent(ItemsWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
