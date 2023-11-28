import {User} from "@core/models/user";
import {createReducer, on} from "@ngrx/store";
import {ShowUserFormActions, UsersActions} from "@store/app.actions";

export const initialUsersState: User[] = [];
export const showUserFormState: { user: User | null, show: boolean } = {
  user: null,
  show: false
};

export const usersReducer = createReducer(
  initialUsersState,
  on(UsersActions.usersResult, (state, {users}) => users),
  on(UsersActions.editUser, (state, editedUser) => {
    const userIndex = state.findIndex((user) => user.id === editedUser.id);
    return state.map((user, index) => (index === userIndex ? editedUser : user));
  }),
  on(UsersActions.addUser, (state, user) => {
    return [...state, {...user, id: state.length + 1}]
  })
);

export const showUserFormReducer = createReducer(
  showUserFormState,
  on(ShowUserFormActions.openUserForm, (state, data) => ({
    ...state,
    show: data.show,
    user: data.user
  }))
)
