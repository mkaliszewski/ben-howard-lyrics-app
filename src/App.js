//libs
import React from "react";
import { Switch, Route } from "react-router-dom";
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
//styles
import './App.scss'

//pages
import Homepage from "./pages/homepage/homepage.page";
import AlbumsPage from "./pages/albums/albums.page"
import SongsPage from './pages/songs/songs.page'
import AboutPage from './pages/about/about.page'
import SignInPage from './pages/signin/signin.page'
import SignUpPage from './pages/signup/signup.page'

//components
import Toolbar from './components/toolbar/toolbar.component'
import Footer from './components/footer/footer.component'


class App extends React.Component {
  constructor(props){
    super(props);

    this.state ={
      currentUser: null,

    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () =>{
            console.log(this.state)
          })
        })
        
      }else{
        this.setState({currentUser: userAuth})
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="app__div">
        <Toolbar className="toolbar" currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/albums" component={AlbumsPage} />
          <Route path="/songs" component={SongsPage}/>
          <Route exact path="/about" component={AboutPage}/>
          <Route exact path="/signin" component={SignInPage}/>
          <Route exact path="/signup" component={SignUpPage}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
