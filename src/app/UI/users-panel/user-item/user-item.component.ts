import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "@core/models/user";
import {ItemsLayout} from "@core/models/items-layout.type";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss', '../users-panel.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserItemComponent {

  @Input() user!: User;
  @Input() layout!: ItemsLayout;

  @Output() itemClick: EventEmitter<User> = new EventEmitter<User>();

  onUserItemClick(): void {
    this.itemClick.emit(this.user);
  }
}
