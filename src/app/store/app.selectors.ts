import { createSelector, createFeatureSelector } from '@ngrx/store';
import {User} from "@core/models/user";

export const selectUsersFeature = createFeatureSelector<User[]>('users');
export const selectShowUserFormFeature = createFeatureSelector<{user: User | null, show: boolean}>('userForm');

export const selectUsers = createSelector(
  selectUsersFeature,
  (users) => users
);

export const selectShowUserForm = createSelector(
  selectShowUserFormFeature,
  (data) => data
)
