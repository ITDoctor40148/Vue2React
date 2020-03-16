import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Navbars from "./components/Navbars";
import Contact from "./View/Contact";
import Tickets from "./View/Tickets";
import Home from "./components/Home";
import LoadingOverlay from 'react-loading-overlay';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  const [flag, setFlag] = React.useState(false);
  return (
    <LoadingOverlay
      active={flag}
      spinner
      text='Please wait just sec!'
      >
    <div className="App" style={{minHeight: "100vh"}}>
      <Router>
        <Navbars />
        <Switch>
          <Route exact path="/" >
            <Home setFlag={setFlag} />
          </Route>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/hotels" component={Tickets} />
        </Switch>
      </Router>
    </div>
    </LoadingOverlay>
  );
}

export default App;
