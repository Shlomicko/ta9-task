import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
      imports: [ReactiveFormsModule, FormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should update innerValue when writeValue is called', () => {
    const newValue = 'TestValue';
    component.writeValue(newValue);

    expect(component.valueControl.value).toEqual(newValue);
  });

  it('should call onChange when onInputChange is called', () => {
    spyOn(component, 'onChange');
    const testValue = 'TestInputValue';

    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('input');
    inputElement.value = testValue;
    inputElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(component.onChange).toHaveBeenCalledWith(testValue);
  });

  it('should disable the component when setDisabledState is called with true', () => {
    component.setDisabledState(true);

    expect(component.disabled).toBe(true);
  });

  it('should not disable the component when setDisabledState is called with false', () => {
    component.setDisabledState(false);

    expect(component.disabled).toBe(false);
  });
});
