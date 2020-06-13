import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware, ofType } from "redux-observable";
import { BehaviorSubject } from "rxjs";
import { mergeMap, takeUntil } from "rxjs/operators";
import { rootEpic, rootReducer } from "./slices/root";

const epicMiddleware = createEpicMiddleware();

const store = configureStore({ reducer: rootReducer, middleware: [epicMiddleware] });

const epic$ = new BehaviorSubject(rootEpic);
const hotReloadingEpic = (action$, ...rest) =>
  epic$.pipe(
    mergeMap((epic) => epic(action$, ...rest).pipe(takeUntil(action$.pipe(ofType("EPIC_END")))))
  );
epicMiddleware.run(hotReloadingEpic);

/**
 * https://redux-observable.js.org/docs/recipes/HotModuleReplacement.html
 */
if (module.hot) {
  module.hot.accept("./slices/root", () => {
    // eslint-disable-next-line global-require
    const root = require("./slices/root");

    const nextRootReducer = root.rootReducer;
    store.replaceReducer(nextRootReducer);

    const nextRootEpic = root.rootEpic;
    // First kill any running epics
    store.dispatch({ type: "EPIC_END" });
    // Now setup the new one
    epic$.next(nextRootEpic);
  });
}

export default store;
