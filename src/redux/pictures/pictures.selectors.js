import { createSelector } from 'reselect';


export const selectPicturesData = state => state.pictures;

export const selectProperties =createSelector(
    [selectPicturesData],
    data => data.properties
)

export const selectProperty = createSelector(
    [selectProperties],
    properties => properties[0]
)

export const selectActivePicture = createSelector(
    [selectPicturesData],
    data => data.activePicture
)