import React from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect';
import { selectAreAlbumsLoaded } from '../../redux/albums/albums.selectors';
import WithSpinner from '../../with-spinner';
import AlbumsPage from './albums.page'

const mapStateToProps = createStructuredSelector({
    isLoading: selectAreAlbumsLoaded
})

const AlbumsPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner

)(AlbumsPage)


export default AlbumsPageContainer