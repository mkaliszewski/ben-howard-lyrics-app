import { createSelector } from 'reselect';


const selectAlbumsData = state => state.albums;

//wybieramy obiekt z danymi
export const selectData = createSelector(
    [selectAlbumsData],
    albumsData => albumsData.albums
)

//zwracamy tablicę 3 obiektów
export const selectAlbums = createSelector(
    [selectData],
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
    [selectAlbums],
    album => album.map(album => album.songs).flat()
)

export const selectSong = songUrlParam =>
createSelector(
    [selectAllSongs],
    songs => songs.find(song => song["id"] === Number(songUrlParam))
)

export const selectAlbum = albumUrlParam =>
    createSelector(
    [selectAlbums],
    albums => albums.find(album => album["id"] === Number(albumUrlParam))
    )