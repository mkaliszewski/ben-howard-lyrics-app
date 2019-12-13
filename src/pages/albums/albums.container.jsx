import { connect } from 'react-redux';
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect';
import { selectAreAlbumsLoaded } from '../../redux/albums/albums.selectors';
import WithSpinner from '../../with-spinner/with-spinner.component';
import AlbumsPage from './albums.page'

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectAreAlbumsLoaded(state)
})

const AlbumsPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(AlbumsPage)


export default AlbumsPageContainer