import {ComponentFixture, TestBed} from '@angular/core/testing';
import {UsersContainerComponent} from './users-container.component';
import {UsersActions} from "@store/app.actions";
import {UserDataService} from "@services/user-data.service";
import {of} from "rxjs";
import {Store} from "@ngrx/store";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {API_URL} from "@core/config/api.config";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('UsersContainerComponent', () => {
  let component: UsersContainerComponent;
  let fixture: ComponentFixture<UsersContainerComponent>;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersContainerComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      providers: [
        {
          provide: API_URL,
          useValue: 'some_url'
        },
        UserDataService,
        {
          provide: Store,
          useValue: {
            select: jasmine.createSpy(),
            dispatch: jasmine.createSpy(),
          },
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    fixture = TestBed.createComponent(UsersContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch UsersActions.usersResult on ngOnInit', () => {
    const userDataServiceSpy = spyOn(TestBed.inject(UserDataService), 'getUsers').and.returnValue(of([]));
    component.ngOnInit();
    expect(userDataServiceSpy).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(UsersActions.usersResult({users: []}));
  });

  it('should update itemsLayout on onSetGridViewClick', () => {
    component.onSetGridViewClick();
    expect(component.itemsLayout).toEqual('grid');
  });

  it('should update itemsLayout on onSetListViewClick', () => {
    component.onSetListViewClick();
    expect(component.itemsLayout).toEqual('list');
  });
});
