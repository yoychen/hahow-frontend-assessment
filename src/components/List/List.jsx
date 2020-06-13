import React from "react";
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

export default function List() {
  return (
    <ListWrapper>
      <Col>
        <Card
          image="http://x.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg"
          name="Thor"
        />
      </Col>
      <Col>
        <Card
          image="http://x.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg"
          name="Thor"
        />
      </Col>
      <Col>
        <Card
          image="http://x.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg"
          name="Thor"
        />
      </Col>
      <Col>
        <Card
          image="http://x.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg"
          name="Thor"
        />
      </Col>
    </ListWrapper>
  );
}
