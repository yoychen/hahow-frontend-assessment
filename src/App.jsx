import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from "react-hot-loader/root";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Heroes from "./pages/Heroes";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/heroes">
            <Heroes />
          </Route>
          <Route>
            <Redirect to="/heroes" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default process.env.NODE_ENV === "development" ? hot(App) : App;
