import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserItemComponent } from './user-item.component';
import {User} from "@core/models/user";

describe('UserItemComponent', () => {
  let component: UserItemComponent;
  let fixture: ComponentFixture<UserItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserItemComponent],
    });

    fixture = TestBed.createComponent(UserItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit itemClick event when onUserItemClick is called', () => {
    const userMock: User = {
      id: 2,
      name: 'Sammy',
      phone: '000-777-555',
      email: 'opp@qwe.bom',
      username: 'pooo'
    };
    component.user = userMock;

    spyOn(component.itemClick, 'emit');

    component.onUserItemClick();

    expect(component.itemClick.emit).toHaveBeenCalledWith(userMock);
  });
});
