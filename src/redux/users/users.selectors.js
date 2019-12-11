import { createSelector } from 'reselect'


export const selectUsers = state => state.users;

export const selectCurrentUser = createSelector(
    [selectUsers],
    users => users.currentUser
)

export const selectFavSongs = createSelector(
    [selectCurrentUser],
    user =>  user ? user.favSongs : null
)

export const selectCounter = createSelector(
    [selectCurrentUser],
    user => user ? user.counter : null
)