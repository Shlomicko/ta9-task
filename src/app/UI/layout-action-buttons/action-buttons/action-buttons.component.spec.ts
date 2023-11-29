import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonsComponent } from './action-buttons.component';
import {Store} from "@ngrx/store";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('ActionButtonsComponent', () => {
  let component: ActionButtonsComponent;
  let fixture: ComponentFixture<ActionButtonsComponent>;
  let storeSpy: jasmine.SpyObj<Store>;

  beforeEach(() => {
    const storeSpyObj = jasmine.createSpyObj('Store', ['dispatch']);

    TestBed.configureTestingModule({
      declarations: [ActionButtonsComponent],
      providers: [{ provide: Store, useValue: storeSpyObj }],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(ActionButtonsComponent);
    component = fixture.componentInstance;
    storeSpy = TestBed.inject(Store) as jasmine.SpyObj<Store>;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit setListView event on list button click', () => {
    spyOn(component.setListView, 'emit');
    component.onListClick();
    expect(component.setListView.emit).toHaveBeenCalled();
    expect(component.activeLayout).toEqual('list');
  });

  it('should emit setGridView event on grid button click', () => {
    spyOn(component.setGridView, 'emit');
    component.onGridClick();
    expect(component.setGridView.emit).toHaveBeenCalled();
    expect(component.activeLayout).toEqual('grid');
  });

  it('should dispatch openUserForm action on add button click', () => {
    component.onAddClick();
    expect(storeSpy.dispatch).toHaveBeenCalled();
  });
});
