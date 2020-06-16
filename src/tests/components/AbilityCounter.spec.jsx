import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AbilityCounter from "../../components/Profile/AbilityCounter";

const setup = (overrideProps) => {
  const props = {
    name: "Str",
    count: 5,
    noMorePoint: false,
    onChange: () => {},
    ...overrideProps,
  };

  return render(
    <AbilityCounter
      name={props.name}
      count={props.count}
      noMorePoint={props.noMorePoint}
      onChange={props.onChange}
    />
  );
};

it("should render self", async () => {
  const name = "Str";
  const count = 5;
  const noMorePoint = true;

  const { getByTestId } = setup({
    name,
    count,
    noMorePoint,
  });

  expect(getByTestId("name")).toHaveTextContent(name);
  expect(getByTestId("count")).toHaveTextContent(count);
  expect(getByTestId("increment-btn")).toBeDisabled();
});

it("should call onChange when the user click increment-btn", async () => {
  const onChange = jest.fn();
  const currentCount = 5;
  const expectedCount = 6;

  const { getByTestId } = setup({
    count: currentCount,
    onChange,
    noMorePoint: false,
  });

  const incrementBtn = getByTestId("increment-btn");
  fireEvent.click(incrementBtn);

  expect(onChange.mock.calls.length).toBe(1);
  expect(onChange.mock.calls[0][0]).toBe(expectedCount);
});

it("should call onChange when the user click decrement-btn", async () => {
  const onChange = jest.fn();
  const currentCount = 5;
  const expectedCount = 4;

  const { getByTestId } = setup({
    count: currentCount,
    onChange,
  });

  const decrementBtn = getByTestId("decrement-btn");
  fireEvent.click(decrementBtn);

  expect(onChange.mock.calls.length).toBe(1);
  expect(onChange.mock.calls[0][0]).toBe(expectedCount);
});

it("should not call onChange when the count value is zero", async () => {
  const onChange = jest.fn();

  const { getByTestId } = setup({
    count: 0,
    onChange,
  });

  const decrementBtn = getByTestId("decrement-btn");
  fireEvent.click(decrementBtn);

  expect(onChange.mock.calls.length).toBe(0);
});

it("should not call onChange when the noMorePoint value is true", async () => {
  const onChange = jest.fn();

  const { getByTestId } = setup({
    noMorePoint: true,
    onChange,
  });

  const incrementBtn = getByTestId("increment-btn");
  fireEvent.click(incrementBtn);

  expect(onChange.mock.calls.length).toBe(0);
});
