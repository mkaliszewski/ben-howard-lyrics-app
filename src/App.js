//libs
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/users/users.actions";
import { selectCurrentUser } from "./redux/users/users.selectors";
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


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

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
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div className="app__div">
        <Toolbar className="toolbar" />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/albums" component={AlbumsPage} />
          <Route path="/songs" component={SongsPage} />
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
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
