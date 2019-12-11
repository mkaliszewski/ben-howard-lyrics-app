import { createSelector } from 'reselect'


export const selectUsers = state => state.users;

export const selectCurrentUser = createSelector(
    [selectUsers],
    users => users.currentUser
)