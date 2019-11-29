//libs
import React from "react";
import { Switch, Route } from "react-router-dom";

//styles
import './App.scss'

//pages
import Homepage from "./pages/homepage/homepage.page";
import AlbumsPage from "./pages/albums/albums.page"
import SongsPage from './pages/songs/songs.page'

//components
import Toolbar from './components/toolbar/toolbar.component'
import Footer from './components/footer/footer.component'

class App extends React.Component {
  render() {
    return (
      <div className="app__div">
        <Toolbar className="toolbar"/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/albums" component={AlbumsPage} />
          <Route path="/songs" component={SongsPage}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
