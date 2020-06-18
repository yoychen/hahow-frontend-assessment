import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Profile from "../Profile";

const CardWrapper = styled.div`
  position: relative;
  width: 230px;
  height: 290px;
  margin: 0.5em;
  border-radius: 3px;
  background-color: white;
  box-shadow: 0 0px 2.2px rgba(0, 0, 0, 0.014), 0 0px 5.3px rgba(0, 0, 0, 0.02),
    0 0px 10px rgba(0, 0, 0, 0.025), 0 0px 17.9px rgba(0, 0, 0, 0.03),
    0 0px 33.4px rgba(0, 0, 0, 0.036), 0 0px 80px rgba(0, 0, 0, 0.05);

  cursor: pointer;
  user-select: none;

  transform-style: preserve-3d;
  transition: transform 0.5s;
  transition-timing-function: ease-in-out;

  &.active {
    transform: rotateX(180deg);
  }

  .image {
    width: 100%;
  }
  .title {
    text-align: center;
    margin: 0.5em 0 0.25em;
  }
`;

const Surface = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75em;
  background-color: white;

  &.default-cursor {
    cursor: default;
  }

  &.back {
    transform: rotateX(180deg) translateZ(1px);
  }
`;

export default function Card({ onClick, image, name, id, selected }) {
  return (
    <CardWrapper onClick={onClick} className={`${selected ? "active" : ""}`}>
      <Surface>
        <img className="image" src={image} alt={name} />
        <h2 className="title">{name}</h2>
      </Surface>
      <Surface className="back default-cursor">{selected && <Profile heroId={id} />}</Surface>
    </CardWrapper>
  );
}

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};
