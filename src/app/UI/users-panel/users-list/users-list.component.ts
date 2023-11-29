import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {User} from "@core/models/user";
import {ItemsLayout} from "@core/models/items-layout.type";
import {Store} from "@ngrx/store";
import {ShowUserFormActions} from "@store//app.actions";
import {TrackByService} from "@services/track-by.service";

@Component({
  selector: 'app-items-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  @Input() users!: User[] | null;
  @Input() layout: ItemsLayout = 'list';

  constructor(private store: Store, readonly track: TrackByService<User>) {
  }

  onUserItemClick(user: User): void {
    this.store.dispatch(ShowUserFormActions.openUserForm({user, show: true}));
  }
}
