import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from "react-hot-loader/root";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default process.env.NODE_ENV === "development" ? hot(App) : App;
