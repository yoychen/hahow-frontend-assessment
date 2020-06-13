import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import { catchError } from "rxjs/operators";
import heroes, { fetchHeroesEpic } from "./heroes";

/**
 * Adding global error handler to prevent the entire stream to terminate.
 *
 * https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html#adding-global-error-handler
 */
export const rootEpic = (action$, store$, dependencies) =>
  combineEpics(fetchHeroesEpic)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    })
  );

export const rootReducer = combineReducers({
  heroes,
});
