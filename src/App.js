//libs
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/users/users.actions";
import { fetchAlbumStartAsync } from './redux/albums/albums.actions'
import { selectCurrentUser } from "./redux/users/users.selectors";
//styles
import "./App.scss";

//pages
import Homepage from "./pages/homepage/homepage.page";
import AlbumsPageContainer from "./pages/albums/albums.container";
import SongsPageContainer from "./pages/songs/songs.container";
import AboutPage from "./pages/about/about.page";
import SignInPage from "./pages/signin/signin.page";
import SignUpPage from "./pages/signup/signup.page";
import ProfilePage from './pages/profile/profile.page'

//components
import Toolbar from "./components/toolbar/toolbar.component";
import Footer from "./components/footer/footer.component";


class App extends React.Component {

  unsubscribeFromAuth = null;


  componentDidMount() {

    const { setCurrentUser, fetchAlbums } = this.props;

    //fetching albums

    fetchAlbums();

    //opening user subscribtion and setting user snapshot data into redux currentUser
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()    
          });
        });
      } 
        
      
      setCurrentUser(userAuth);
      
    });

    
  }

  componentWillUnmount() {
    //closing subscribtion
    this.unsubscribeFromAuth();
  }

  render() 
  {
    const { currentUser } = this.props;

    return (
      <div className="app__div">
        <Toolbar className="toolbar" />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/albums" component={AlbumsPageContainer} />
          <Route path="/songs" component={SongsPageContainer}/>
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
          {
            currentUser ?
            <Route path={`/profile/${currentUser.id}`} component={ProfilePage}/>
            :
            <Redirect to="/"/>
          }
          
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  fetchAlbums: () => dispatch(fetchAlbumStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
