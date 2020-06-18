import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const CounterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.25em 0;
`;

const Name = styled.span`
  text-transform: uppercase;
`;

const Form = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  margin: 0 0.25em;
`;

const Button = styled.button`
  padding: 0.25em 0.75em;
`;

export default function AbilityCounter({ name, count, noMorePoint, onChange }) {
  const decrementBtnDisabled = count === 0;

  return (
    <CounterWrapper>
      <Name data-testid="name">{name}</Name>
      <Form>
        <Button
          onClick={() => onChange(count + 1)}
          type="button"
          disabled={noMorePoint}
          data-testid="increment-btn"
        >
          +
        </Button>

        <SwitchTransition>
          <CSSTransition
            key={count}
            addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
            classNames="slide-up"
          >
            <span data-testid="count">{count}</span>
          </CSSTransition>
        </SwitchTransition>

        <Button
          onClick={() => onChange(count - 1)}
          type="button"
          disabled={decrementBtnDisabled}
          data-testid="decrement-btn"
        >
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
