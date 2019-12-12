import { createSelector } from 'reselect';


const selectAlbumsData = state => state.albums;

//wybieramy obiekt z danymi
export const selectData = createSelector(
    [selectAlbumsData],
    albumsData => albumsData.albums
)


export const selectIsFetching = createSelector(
    [selectAlbumsData],
    data => data.isFetching
)



//zwracamy tablicę 3 obiektów
export const selectAlbums = createSelector(
    [selectData],
    albums => albums ? Object.keys(albums).map(key => albums[key]) : []
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


//Dynamic selectors
export const selectSong = songUrlParam =>
createSelector(
    [selectAllSongs],
    songs => (songs ? songs.find(song => song["id"] === Number(songUrlParam)) : null)
)

export const selectAlbum = albumUrlParam =>
    createSelector(
    [selectAlbums],
    albums => (albums ? albums.find(album => album["id"] === Number(albumUrlParam)) : null)
)