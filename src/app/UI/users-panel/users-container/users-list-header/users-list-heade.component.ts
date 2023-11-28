import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-items-list-header',
  templateUrl: './users-list-header.component.html',
  styleUrls: ['../../users-panel.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListHeaderComponent {

}
