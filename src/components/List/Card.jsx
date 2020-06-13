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

  cursor: pointer;
  user-select: none;

  transition: box-shadow 0.25s, transform 0.25s;
  transition-timing-function: ease-in-out;

  &.active {
    box-shadow: 0 2.5px 2.8px rgba(0, 0, 0, 0.011), 0 6.1px 6.7px rgba(0, 0, 0, 0.016),
      0 11.4px 12.5px rgba(0, 0, 0, 0.02), 0 20.3px 22.3px rgba(0, 0, 0, 0.024),
      0 38px 41.8px rgba(0, 0, 0, 0.029), 0 91px 100px rgba(0, 0, 0, 0.04);
    transform: translateY(-8px);
    outline: 2px dashed #3a678b;
  }

  .image {
    width: 100%;
  }
  .title {
    text-align: center;
    margin: 0.5em 0 0.25em;
  }
`;

export default function Card({ onClick, image, name, selected }) {
  return (
    <CardWrapper onClick={onClick} className={`${selected ? "active" : ""}`}>
      <img className="image" src={image} alt={name} />
      <h2 className="title">{name}</h2>
    </CardWrapper>
  );
}

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};
