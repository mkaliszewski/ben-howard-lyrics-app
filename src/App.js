//libs
import React from "react";
import { Switch, Route } from "react-router-dom";

//styles
import './App.scss'

//pages
import Homepage from "./pages/homepage/homepage.page";

//components
import Toolbar from './components/toolbar/toolbar.component'
import Footer from './components/footer/footer.component'

class App extends React.Component {
  render() {
    return (
      <div className="app__div">
        <Toolbar className="toolbar"/>
        <Switch>
          <Route exact to="/" component={Homepage} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
