//libs
import React from "react";
import { Switch, Route } from "react-router-dom";

//styles
import { AppContainer } from "./App.styles";

//pages
import Homepage from "./pages/homepage/homepage.page";

//components
import Toolbar from './components/toolbar/toolbar.component'
import Footer from './components/footer/footer.component'

class App extends React.Component {
  render() {
    return (
      <AppContainer className="app">
        <Toolbar/>
        <Switch>
          <Route exact to="/" component={Homepage} />
        </Switch>
        <Footer/>
      </AppContainer>
    );
  }
}

export default App;
