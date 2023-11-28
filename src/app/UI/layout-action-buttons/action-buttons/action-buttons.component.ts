import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {ItemsLayout} from "@core/models/items-layout.type";
import {ShowUserFormActions} from "@store/app.actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionButtonsComponent {
  protected listIconName = 'list';
  protected gridIconName = 'grid';
  protected addIconName = 'plus_circle';

  protected activeLayout: ItemsLayout = 'list';

  @Output() setListView: EventEmitter<void> = new EventEmitter<void>();
  @Output() setGridView: EventEmitter<void> = new EventEmitter<void>();
  @Output() addUser: EventEmitter<void> = new EventEmitter<void>();

  constructor(private store: Store) {
  }

  onListClick(): void {
    this.activeLayout = 'list';
    this.setListView.emit();
  }

  onGridClick(): void {
    this.activeLayout = 'grid';
    this.setGridView.emit();
  }

  onAddClick() {
    this.store.dispatch(ShowUserFormActions.openUserForm({user: null, show: true}));
  }
}
