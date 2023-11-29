import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {UserDataService} from "@services/user-data.service";
import {combineLatest, debounceTime, distinctUntilChanged, map, Observable, startWith, tap} from "rxjs";
import {User} from "@core/models/user";
import {Store} from "@ngrx/store";
import {selectShowUserForm, selectUsers} from "@store/app.selectors";
import {UsersActions} from "@store/app.actions";
import {ItemsLayout} from "@core/models/items-layout.type";

@Component({
  selector: 'app-items-window',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss', '../users-panel.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersContainerComponent implements OnInit {

  queryControl = new FormControl<string>('', {nonNullable: true});
  usersData$!: Observable<User[]> | null;
  itemsLayout: ItemsLayout = 'list';

  showForm$ = this.store.select(selectShowUserForm);
  private users$ = this.store.select(selectUsers);


  constructor(private userData: UserDataService, private store: Store) {
  }

  ngOnInit(): void {
    this.setUpData();
    this.userData.getUsers().subscribe((users) => {
      this.store.dispatch(UsersActions.usersResult({users}))
    })
  }

  private setUpData(): void {
    const queryChange$ = this.queryControl.valueChanges.pipe(startWith(''));
    this.usersData$ = combineLatest([queryChange$, this.users$]).pipe(
      tap(([, users]) => console.log(users)),
      distinctUntilChanged(),
      debounceTime(400),
      map(([query, users]) => users.filter(user => user.name
        .toLowerCase().includes(query.toLowerCase()))
      )
    );
  }

  onSetGridViewClick(): void {
    this.itemsLayout = 'grid';
  }

  onSetListViewClick(): void {
    this.itemsLayout = 'list'
  }
}
