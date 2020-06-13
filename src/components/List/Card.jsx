import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CardWrapper = styled.div`
  padding: 0.75em;
  border-radius: 3px;
  background-color: white;
  box-shadow: 0 0px 2.2px rgba(0, 0, 0, 0.014), 0 0px 5.3px rgba(0, 0, 0, 0.02),
    0 0px 10px rgba(0, 0, 0, 0.025), 0 0px 17.9px rgba(0, 0, 0, 0.03),
    0 0px 33.4px rgba(0, 0, 0, 0.036), 0 0px 80px rgba(0, 0, 0, 0.05);

  .image {
    width: 100%;
  }
  .title {
    text-align: center;
    margin: 0.5em 0 0.25em;
  }
`;

export default function Card({ image, name }) {
  return (
    <CardWrapper>
      <img className="image" src={image} alt={name} />
      <h2 className="title">{name}</h2>
    </CardWrapper>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
