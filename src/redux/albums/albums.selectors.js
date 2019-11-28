import { createSelector } from 'reselect';
import { create } from 'domain';


const selectAlbumsData = state => state.albums;

//wybieramy obiekt z danymi
export const selectAlbums = createSelector(
    [selectAlbumsData],
    albumsData => albumsData.albums
)

//zwracamy tablicę 3 obiektów
export const selectAlbum = createSelector(
    [selectAlbums],
    albums => Object.keys(albums).map(key => albums[key])
)


export const selectCurrentAlbum = createSelector(
    [selectAlbumsData],
    albums => albums.currentAlbum
)

export const selectCurrentSongs = createSelector(
    [selectCurrentAlbum],
    currentAlbum => currentAlbum.songs
)


export const selectAllSongs = createSelector(
    [selectAlbum],
    album => album.map(album => album.songs).flat()
)

export const selectSong = songUrlParam =>
createSelector(
    [selectAllSongs],
    songs => songs.find(song => song["id"] === Number(songUrlParam))
)