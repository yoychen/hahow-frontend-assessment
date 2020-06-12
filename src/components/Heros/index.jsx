import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Profile from "./Profile";

export default () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <h3>Select a hero to edit.</h3>
      </Route>
      <Route
        path={`${path}/:heroId`}
        render={(routeProps) => <Profile heroId={routeProps.match.params.heroId} />}
      />
    </Switch>
  );
};
