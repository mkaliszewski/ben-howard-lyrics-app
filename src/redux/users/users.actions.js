import usersActionTypes from './users.types'

export const setCurrentUser = user =>({
    type: usersActionTypes.SET_CURRENT_USER,
    payload: user
})

export const addFavSong = song => ({
    type: usersActionTypes.ADD_FAV_SONG,
    payload: song
})