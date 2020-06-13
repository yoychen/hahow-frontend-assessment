import { useRouteMatch, useHistory } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import List from "../components/List";
import Profile from "../components/Profile";

const Container = styled.div`
  max-width: 960px;
  padding: 1em;
  margin: auto;
`;

export default () => {
  const { path } = useRouteMatch();

  const heroRouteMatch = useRouteMatch(`${path}/:heroId`);
  const currentHeroId = heroRouteMatch && heroRouteMatch.params.heroId;

  const history = useHistory();

  const handleHeroSelect = (heroId) => {
    if (heroId === currentHeroId) {
      history.push(`${path}`);
    } else {
      history.push(`${path}/${heroId}`);
    }
  };

  return (
    <Container>
      <List onHeroSelect={handleHeroSelect} currentHeroId={currentHeroId} />

      {heroRouteMatch && <Profile heroId={currentHeroId} />}
    </Container>
  );
};
