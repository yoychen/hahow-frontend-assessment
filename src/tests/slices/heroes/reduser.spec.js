import reducer, { fetchHeroesFulfilled } from "../../../slices/heroes";
import createAction from "../../utils/createAction";

test("fetchHeroesFulfilled", () => {
  const state = null;
  const heroes = [
    {
      name: "kanahei",
      image: "https://example.com/kanahei.jpg",
    },
  ];

  const nextState = reducer(
    state,
    createAction(fetchHeroesFulfilled.type, {
      heroes,
    })
  );

  expect(nextState).toEqual(heroes);
});
