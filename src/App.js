//libs
import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/users/users.actions";
import { fetchAlbumStartAsync } from "./redux/albums/albums.actions";
import { selectCurrentUser } from "./redux/users/users.selectors";
//styles
import "./App.scss";

//components
import Toolbar from "./components/toolbar/toolbar.component";
import Footer from "./components/footer/footer.component";
import Spinner from "./components/spiner/spiner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

//lazy loading, it gives us a possibility to load this components when needed
//suspense gives ability to load wrapped component async

const Homepage = lazy(() => import("./pages/homepage/homepage.page"));
const AlbumsPageContainer = lazy(() =>
  import("./pages/albums/albums.container")
);
const SongsPageContainer = lazy(() => import("./pages/songs/songs.container"));
const AboutPage = lazy(() => import("./pages/about/about.page"));
const SignInPage = lazy(() => import("./pages/signin/signin.page"));
const SignUpPage = lazy(() => import("./pages/signup/signup.page"));
const ProfilePage = lazy(() => import("./pages/profile/profile.page"));

const App = ({ setCurrentUser, fetchAlbums, currentUser }) => {
  useEffect(() => {
    //fetching albums

    fetchAlbums();

    //opening user subscribtion and setting user snapshot data into redux currentUser
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div className="app__div">
      <ErrorBoundary>
        <Toolbar className="toolbar" />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/" component={Homepage} />

            <Route path="/albums" component={AlbumsPageContainer} />
            <Route path="/songs" component={SongsPageContainer} />
            <Route exact path="/about" component={AboutPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInPage />
              }
            />
            <Route
              exact
              path="/signup"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignUpPage />
              }
            />
            {currentUser ? (
              <Route
                path={`/profile/${currentUser.id}`}
                component={ProfilePage}
              />
            ) : (
              <Redirect to="/" />
            )}
          </Switch>
        </Suspense>
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  fetchAlbums: () => dispatch(fetchAlbumStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
