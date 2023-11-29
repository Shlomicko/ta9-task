import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListComponent } from './users-list.component';
import {User} from "@core/models/user";
import {ShowUserFormActions} from "@store/app.actions";
import {Store} from "@ngrx/store";

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;
  let store: jasmine.SpyObj<Store>;

  beforeEach(() => {
    store = jasmine.createSpyObj('Store', ['dispatch']);

    TestBed.configureTestingModule({
      declarations: [UsersListComponent],
      providers: [{ provide: Store, useValue: store }],
    });

    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch ShowUserFormActions.openUserForm on user item click', () => {
    const user: Partial<User> = {
      id: 1,
      name: 'Samme',
      phone: '000-222-333',
      email: 'pp@ww.com'
    };
    component.onUserItemClick(user as User);

    expect(store.dispatch).toHaveBeenCalledWith(
      ShowUserFormActions.openUserForm({ user: user as User, show: true })
    );
  });
});
