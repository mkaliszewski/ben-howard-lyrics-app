import { createSelector } from 'reselect'

const selectHomepage = state => state.homepage;

export const selectIsHovered = createSelector(
    [selectHomepage],
    homepage => homepage.isHovered
)