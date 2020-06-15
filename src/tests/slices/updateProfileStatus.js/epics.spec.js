import createTestScheduler from "../../utils/createTestScheduler";
import {
  updateProfileEpic,
  updateProfile,
  updateProfileFulfilled,
  updateProfileFailed,
} from "../../../slices/updateProfileStatus";
import updateProfile$ from "../../../api/updateProfile$";
import createAction from "../../utils/createAction";

jest.mock("../../../api/updateProfile$");

const createState = () => ({
  profile: {
    id: "4",
    abilities: {
      str: 10,
      int: 0,
      agi: 5,
      luk: 2,
    },
    totalPoints: 17,
  },
});

it("updates profile successfully", () => {
  createTestScheduler().run(({ hot, cold, expectObservable }) => {
    const state$ = hot("ss", {
      s: createState(),
    });
    const action$ = hot("-a", { a: createAction(updateProfile.type) });

    updateProfile$.mockReturnValue(cold("--r"));

    const output$ = updateProfileEpic(action$, state$);

    expectObservable(output$).toBe("---a", {
      a: createAction(updateProfileFulfilled.type),
    });
  });
});

it("updates profile unsuccessfully", () => {
  createTestScheduler().run(({ hot, cold, expectObservable }) => {
    const state$ = hot("ss", {
      s: createState(),
    });
    const action$ = hot("-a", { a: createAction(updateProfile.type) });

    updateProfile$.mockReturnValue(cold("--#"));

    const output$ = updateProfileEpic(action$, state$);

    expectObservable(output$).toBe("---a", {
      a: createAction(updateProfileFailed.type, { error: "error" }),
    });
  });
});
