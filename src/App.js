//libs
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { auth, createUserProfileDocument, firestore, convertAlbumsSnapshotToMap } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/users/users.actions";
import { updateAlbums } from './redux/albums/albums.actions'
import { selectCurrentUser } from "./redux/users/users.selectors";
import { selectAlbums } from './redux/albums/albums.selectors'
//styles
import "./App.scss";

//pages
import Homepage from "./pages/homepage/homepage.page";
import AlbumsPage from "./pages/albums/albums.page";
import SongsPage from "./pages/songs/songs.page";
import AboutPage from "./pages/about/about.page";
import SignInPage from "./pages/signin/signin.page";
import SignUpPage from "./pages/signup/signup.page";

//components
import Toolbar from "./components/toolbar/toolbar.component";
import Footer from "./components/footer/footer.component";
import WithSpinner from './with-spinner/with-spinner.component'


const SongsPageWithSpinner = WithSpinner(SongsPage);
const AlbumsPageWithSpinner = WithSpinner(AlbumsPage);


class App extends React.Component {
  state = {
    isLoading: true
  }

  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser, updateAlbums } = this.props;



    const collectionRef = firestore.collection('albums')

    collectionRef.onSnapshot(async snapshot =>{
    const albumsMap =  convertAlbumsSnapshotToMap(snapshot)
    updateAlbums(albumsMap);
    
    })



    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } 
        
      
      setCurrentUser(userAuth);

    });

    this.setState({isLoading: false})
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    const { isLoading } = this.state;
    console.log(this.state)
    return (
      <div className="app__div">
        <Toolbar className="toolbar" />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/albums" render={(props) => <AlbumsPageWithSpinner isLoading={isLoading} {...props}/>} />
          <Route path="/songs" render={(props) => <SongsPageWithSpinner isLoading={isLoading} {...props}  />}/>
          <Route exact path="/about" component={AboutPage} />
          <Route
            exact
            path="/signin"
            render={() => (currentUser ? <Redirect to="/" /> : <SignInPage />)}
          />
          <Route
            exact
            path="/signup"
            render={() => (currentUser ? <Redirect to="/" /> : <SignUpPage />)}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  albums: selectAlbums
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  updateAlbums: albums => dispatch(updateAlbums(albums))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
