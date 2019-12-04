import { createSelector } from 'reselect';

export const selectAboutData = state => state.about;


export const selectMembers = createSelector(
    [selectAboutData],
    data => data.members
)

export const selectMembersArr = createSelector(
    [selectMembers],
    members => Object.keys(members).map(key=>members[key])
)


