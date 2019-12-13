import { connect } from 'react-redux';
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect';
import { selectAreAlbumsLoaded } from '../../redux/albums/albums.selectors';
import WithSpinner from '../../with-spinner/with-spinner.component';
import SongsPage from './songs.page'

//In this way we are wrapping HOC (withSpinner) with connect, so we get right props into WithSpinner without
//having to pass it as a props in App.js.

//we use state as a negation, since cSS passes state
const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectAreAlbumsLoaded(state)
})

//compose curring it all. From right to left => conect(mapStateToProps)(WithSpinner(SongsPage))
const SongsPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(SongsPage)

export default SongsPageContainer;