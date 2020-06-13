import { Switch, Route, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import List from "../components/List/List";
import Profile from "../components/Profile";

const Container = styled.div`
  max-width: 960px;
  padding: 1em;
  margin: auto;
`;

export default () => {
  const { path } = useRouteMatch();

  return (
    <Container>
      <List />

      <Switch>
        <Route
          path={`${path}/:heroId`}
          render={(routeProps) => <Profile heroId={routeProps.match.params.heroId} />}
        />
      </Switch>
    </Container>
  );
};
