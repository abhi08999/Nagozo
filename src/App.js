import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { HashRouter } from "react-router-dom";

// Home page
import Home from "./Pages/home";

function App() {
  return (
    <>
          <HashRouter basename="/">

      <Switch>
      <Route exact path="/" component={Home}/>
            
        <Route path="*" render={() => <Redirect to="/" />} />

      </Switch>
      </HashRouter>

    </>
    
  );
}

export default App;
