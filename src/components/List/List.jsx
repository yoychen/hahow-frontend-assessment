import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Card from "./Card";
import Loading from "../Loading";

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function List({ onHeroSelect, fetchHeroes, heroes, currentHeroId }) {
  useEffect(() => {
    fetchHeroes();
  }, [fetchHeroes]);

  if (!heroes) {
    return <Loading />;
  }

  const handleHeroSelect = (heroId) => {
    onHeroSelect(heroId);
  };

  return (
    <ListWrapper>
      {heroes.map(({ id, name, image }) => (
        <Card
          key={id}
          onClick={() => handleHeroSelect(id)}
          selected={id === currentHeroId}
          image={image}
          name={name}
          id={id}
        />
      ))}
    </ListWrapper>
  );
}

List.defaultProps = {
  heroes: null,
  currentHeroId: null,
};

List.propTypes = {
  onHeroSelect: PropTypes.func.isRequired,
  fetchHeroes: PropTypes.func.isRequired,
  heroes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ),
  currentHeroId: PropTypes.string,
};
