import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {User} from "@core/models/user";

export const UsersActions = createActionGroup({
  source: 'Users',
  events: {
    'Get Users': emptyProps(),
    'Users Result': props<{ users: User[] }>(),
    'Edit User': props<User>(),
    'Add User': props<User>()
  }
});

export const ShowUserFormActions = createActionGroup(
  {
    source:'ShowUserForm',
    events: {
      'Open user form': props<{ user: User | null, show: boolean }>(),
    }
  }
)
