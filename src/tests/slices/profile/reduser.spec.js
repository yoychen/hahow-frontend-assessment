import reducer, {
  fetchProfileFulfilled,
  clearProfile,
  updateAbility,
} from "../../../slices/profile";
import createAction from "../../utils/createAction";

const createProfileState = () => ({
  id: "4",
  abilities: {
    str: 10,
    int: 0,
    agi: 5,
    luk: 2,
  },
  totalPoints: 17,
});

test("fetchProfileFulfilled", () => {
  const state = null;
  const profile = {
    id: "4",
    str: 10,
    int: 0,
    agi: 5,
    luk: 2,
  };

  const nextState = reducer(state, createAction(fetchProfileFulfilled.type, profile));

  expect(nextState).toEqual({
    id: "4",
    abilities: {
      str: 10,
      int: 0,
      agi: 5,
      luk: 2,
    },
    totalPoints: 17,
  });
});

test("clearProfile", () => {
  const state = createProfileState();

  const nextState = reducer(state, createAction(clearProfile.type));

  expect(nextState).toEqual(null);
});

test("updateAbility", () => {
  const state = createProfileState();
  const expectedCount = 11;

  const nextState = reducer(
    state,
    createAction(updateAbility.type, {
      name: "str",
      newCount: expectedCount,
    })
  );

  expect(nextState.abilities.str).toEqual(expectedCount);
});
