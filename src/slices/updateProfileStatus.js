/* eslint-disable no-param-reassign */
/**
 * With `reduxjs/toolkit`, we can directly mutate state with immer.js.
 *
 * https://redux-toolkit.js.org/api/createReducer#direct-state-mutation
 */

import { createSlice } from "@reduxjs/toolkit";
import { ofType } from "redux-observable";
import { of } from "rxjs";
import { switchMap, map, withLatestFrom, catchError } from "rxjs/operators";
import { toast } from "react-toastify";
import updateProfile$ from "../api/updateProfile$";

const initialState = {
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: "updateProfileStatus",
  initialState,
  reducers: {
    updateProfileFulfilled: () => {
      return initialState;
    },
    updateProfileFailed: (state, { payload: { error } }) => {
      state.isLoading = false;
      state.error = error;
    },
    updateProfile: (state) => {
      state.isLoading = true;
    },
  },
});

export default slice.reducer;

export const { updateProfileFulfilled, updateProfileFailed, updateProfile } = slice.actions;

const withLatestProfile = (state$) => withLatestFrom(state$.pipe(map((state) => state.profile)));
export const updateProfileEpic = (action$, state$) =>
  action$.pipe(
    ofType(updateProfile),
    withLatestProfile(state$),
    switchMap(([, profile]) =>
      updateProfile$(profile.id, profile.abilities).pipe(
        map(() => {
          toast("Update successfully!");
          return updateProfileFulfilled();
        }),
        catchError((error) => {
          toast.error("The server is temporarily unavailable. Please try again later!");
          return of(updateProfileFailed({ error }));
        })
      )
    )
  );
