/* eslint-disable no-param-reassign */
/**
 * With `reduxjs/toolkit`, we can directly mutate state with immer.js.
 *
 * https://redux-toolkit.js.org/api/createReducer#direct-state-mutation
 */

import { createSlice, createSelector, createAction } from "@reduxjs/toolkit";
import { ofType } from "redux-observable";
import { switchMap, map } from "rxjs/operators";
import getProfile$ from "../api/getProfile$";

const initialState = null;

const slice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    fetchProfileFulfilled: (_, { payload: { id, str, int, agi, luk } }) => {
      return {
        id,
        abilities: {
          str,
          int,
          agi,
          luk,
        },
        totalPoints: str + int + agi + luk,
      };
    },
    clearProfile: () => {
      return initialState;
    },
    updateAbility: (state, { payload: { name, newCount } }) => {
      state.abilities[name] = newCount;
    },
  },
});

export default slice.reducer;

export const { fetchProfileFulfilled, clearProfile, updateAbility } = slice.actions;
export const fetchProfile = createAction("FETCH_PROFILE");

export const fetchProfileEpic = (action$) =>
  action$.pipe(
    ofType(fetchProfile),
    switchMap(({ payload: { heroId } }) =>
      getProfile$(heroId).pipe(map((hero) => fetchProfileFulfilled({ id: heroId, ...hero })))
    )
  );

export const availablePointsSelector = createSelector(
  ({ profile }) => (profile ? profile.abilities : {}),
  ({ profile }) => (profile ? profile.totalPoints : 0),
  (abilities, totalPoints) => {
    const currentPoints = Object.values(abilities).reduce((carry, points) => carry + points, 0);

    return totalPoints - currentPoints;
  }
);
