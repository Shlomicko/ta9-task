import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListHeaderComponent } from './users-list-header.component';

describe('UsersListHeaderComponent', () => {
  let component: UsersListHeaderComponent;
  let fixture: ComponentFixture<UsersListHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersListHeaderComponent]
    });
    fixture = TestBed.createComponent(UsersListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
