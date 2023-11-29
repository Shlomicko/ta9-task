import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "@core/models/user";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {ShowUserFormActions, UsersActions} from "@store/app.actions";
import {selectShowUserForm} from "@store/app.selectors";
import {map, skip, tap} from "rxjs";

type ItemManageProperties = Omit<User, 'username'>;
type ItemManageFormControls = Record<keyof ItemManageProperties, FormControl>;

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent implements OnInit {

  @Output() close = new EventEmitter<void>()
  title = '';

  itemManagementForm: FormGroup<ItemManageFormControls>;
  user$ = this.store.select(selectShowUserForm);

  private editOrCreateAction!: (typeof UsersActions.editUser) | (typeof UsersActions.addUser);

  constructor(private fb: FormBuilder, private store: Store, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.user$.pipe(
      skip(1),
      map((data) => data.user),
      tap((user) => {
        this.title = !!user ? 'Edit user' : 'Create new user';
        this.editOrCreateAction = !!user ? UsersActions.editUser : UsersActions.addUser;
      })).subscribe((user) => {
      this.createForm(user);
      this.cdr.markForCheck();
    });
  }

  private createForm(user: User | null): void {
    this.itemManagementForm = this.fb.group({
      id: new FormControl(user?.id, {nonNullable: true}),
      name: new FormControl(user?.name, {nonNullable: true, validators: [Validators.required]}),
      phone: new FormControl(user?.phone, {nonNullable: true, validators: [Validators.required]}),
      email: new FormControl(user?.email, {nonNullable: true})
    })
  }

  saveItem(): void {
    const user: User = this.itemManagementForm?.value as User;
    this.store.dispatch(this.editOrCreateAction(user));
  }

  clearForm(): void {
    this.itemManagementForm?.reset();
  }

  onCloseClick(): void {
    this.store.dispatch(ShowUserFormActions.openUserForm({user: null, show: false}));
  }
}
