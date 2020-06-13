import { createSlice, createAction } from "@reduxjs/toolkit";
import { ofType } from "redux-observable";
import { switchMap, map } from "rxjs/operators";
import getHeroes$ from "../api/getHeroes$";

const initialState = null;

const slice = createSlice({
  name: "heroes",
  initialState,
  reducers: {
    fetchHeroesFulfilled(_, { payload: { heroes } }) {
      return heroes;
    },
  },
});

export default slice.reducer;

export const { fetchHeroesFulfilled } = slice.actions;
export const fetchHeroes = createAction("FETCH_HEROES");

export const fetchHeroesEpic = (action$) =>
  action$.pipe(
    ofType(fetchHeroes),
    switchMap(() => getHeroes$().pipe(map((heroes) => fetchHeroesFulfilled({ heroes }))))
  );
