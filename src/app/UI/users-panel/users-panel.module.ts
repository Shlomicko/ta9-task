import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {AsyncPipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {UsersContainerComponent} from "@UI/users-panel/users-container/users-container.component";
import {UsersListComponent} from "@UI/users-panel/users-list/users-list.component";
import {UserItemComponent} from "@UI/users-panel/user-item/user-item.component";
import {
  UsersListHeaderComponent
} from "@UI/users-panel/users-container/users-list-header/users-list-heade.component";
import {SearchBarModule} from "@UI/search-bar/search-bar.module";
import {ItemsWindowRoutingModule} from "@UI/users-panel/users-panel-routing.module";
import {ActionButtonsModule} from "@UI/layout-action-buttons/action-buttons.module";
import {UserFormModule} from "@UI/user-form/user-form.module";


@NgModule({
  declarations: [UsersContainerComponent, UsersListComponent, UserItemComponent, UsersListHeaderComponent],
  imports: [
    SearchBarModule,
    ItemsWindowRoutingModule,
    ReactiveFormsModule,
    AsyncPipe,
    NgForOf,
    ActionButtonsModule,
    MatIconModule,
    NgClass,
    NgIf,
    UserFormModule
  ],
  exports: [UsersContainerComponent],
})
export class UsersPanelModuleModule {
}
