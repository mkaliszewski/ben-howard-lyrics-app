import { createSelector } from 'reselect';

const selectToolbar = state => state.toolbar;

export const selectToolbarIsOpen = createSelector(
    [selectToolbar],
    toolbar => toolbar.isOpen
)