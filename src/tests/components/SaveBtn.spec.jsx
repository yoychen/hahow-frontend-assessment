import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SaveBtn from "../../components/Profile/SaveBtn/SaveBtn";

const setup = (overrideProps) => {
  const props = {
    isLoading: false,
    availablePoints: 5,
    onSave: () => {},
    ...overrideProps,
  };

  return render(
    <SaveBtn
      isLoading={props.isLoading}
      availablePoints={props.availablePoints}
      onSave={props.onSave}
    />
  );
};

it("should render self", async () => {
  const availablePoints = 200;

  const { getByTestId } = setup({
    availablePoints,
  });

  expect(getByTestId("status")).toHaveTextContent(availablePoints);
});

it("should call onSave when the user click submit-btn", async () => {
  const onSave = jest.fn();

  const { getByTestId } = setup({
    availablePoints: 0,
    onSave,
  });

  const submitBtn = getByTestId("submit-btn");
  fireEvent.click(submitBtn);

  expect(onSave.mock.calls.length).toBe(1);
});

it("should not call onSave when the availablePoints value is not zero", async () => {
  const onSave = jest.fn();

  const { getByTestId } = setup({
    availablePoints: 1,
    onSave,
  });

  const submitBtn = getByTestId("submit-btn");
  fireEvent.click(submitBtn);

  expect(onSave.mock.calls.length).toBe(0);
});

it("should not call onSave when the isLoading value is true", async () => {
  const onSave = jest.fn();

  const { getByTestId } = setup({
    availablePoints: 0,
    isLoading: true,
    onSave,
  });

  const submitBtn = getByTestId("submit-btn");
  fireEvent.click(submitBtn);

  expect(onSave.mock.calls.length).toBe(0);
});
