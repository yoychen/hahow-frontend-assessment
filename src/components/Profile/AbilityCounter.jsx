import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CounterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75em;
`;

const Name = styled.span`
  text-transform: uppercase;
`;

const Form = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 130px;
  margin: 0 1em;
`;

const Button = styled.button`
  padding: 0.25em 0.75em;
`;

export default function AbilityCounter({ name, count, noMorePoint, onChange }) {
  const substractBtnDisabled = count === 0;

  return (
    <CounterWrapper>
      <Name>{name}</Name>
      <Form>
        <Button onClick={() => onChange(count + 1)} type="button" disabled={noMorePoint}>
          +
        </Button>
        <span>{count}</span>
        <Button onClick={() => onChange(count - 1)} type="button" disabled={substractBtnDisabled}>
          -
        </Button>
      </Form>
    </CounterWrapper>
  );
}

AbilityCounter.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  noMorePoint: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
