import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Card from "./Card";
import devices from "../../utils/devices";

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Col = styled.div`
  flex-basis: 100%;
  padding: 1em;
  box-sizing: border-box;

  @media screen and ${devices.sm} {
    flex-basis: 50%;
  }

  @media screen and ${devices.md} {
    flex-basis: 25%;
  }
`;

export default function List({ onHeroSelect, fetchHeroes, heroes, currentHeroId }) {
  useEffect(() => {
    fetchHeroes();
  }, [fetchHeroes]);

  if (!heroes) {
    return "(loading...)";
  }

  const handleHeroSelect = (heroId) => {
    onHeroSelect(heroId);
  };

  return (
    <ListWrapper>
      {heroes.map(({ id, name, image }) => (
        <Col key={id}>
          <Card
            onClick={() => handleHeroSelect(id)}
            selected={id === currentHeroId}
            image={image}
            name={name}
          />
        </Col>
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
