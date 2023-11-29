import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {UserFormComponent} from './user-form.component';
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {ReactiveFormsModule} from "@angular/forms";
import {ChangeDetectorRef, NO_ERRORS_SCHEMA} from "@angular/core";
import {ShowUserFormActions} from "@store/app.actions";
import {User} from "@core/models/user";

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;
  let store: MockStore;

  const initialState: Partial<User> = {
    id: 1,
    phone: '000-111-222',
    name: 'Shooky Zikri',
    email: 'shakalaka@pmail.com'
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserFormComponent],
      imports: [ReactiveFormsModule],
      providers: [
        ChangeDetectorRef,
        provideMockStore({ initialState }),
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should dispatch action on onCloseClick', () => {
    spyOn(store, 'dispatch');

    component.onCloseClick();

    expect(store.dispatch).toHaveBeenCalledWith(ShowUserFormActions.openUserForm({user: null, show: false}));
  });
});
