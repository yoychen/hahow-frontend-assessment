import reducer, {
  updateProfileFulfilled,
  updateProfileFailed,
  updateProfile,
} from "../../../slices/updateProfileStatus";
import createAction from "../../utils/createAction";

test("updateProfileFulfilled", () => {
  const state = {
    isLoading: true,
    error: null,
  };

  const nextState = reducer(state, createAction(updateProfileFulfilled.type));

  expect(nextState).toEqual({
    isLoading: false,
    error: null,
  });
});

test("updateProfileFailed", () => {
  const state = {
    isLoading: true,
    error: null,
  };
  const error = new Error();

  const nextState = reducer(state, createAction(updateProfileFailed.type, { error }));

  expect(nextState).toEqual({
    isLoading: false,
    error,
  });
});

test("updateProfile", () => {
  const state = {
    isLoading: false,
    error: null,
  };

  const nextState = reducer(state, createAction(updateProfile.type));

  expect(nextState.isLoading).toEqual(true);
});
