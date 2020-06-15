import createTestScheduler from "../../utils/createTestScheduler";
import { fetchProfileEpic, fetchProfile, fetchProfileFulfilled } from "../../../slices/profile";
import getProfile$ from "../../../api/getProfile$";
import createAction from "../../utils/createAction";

jest.mock("../../../api/getProfile$");

const createProfile = () => ({
  str: 10,
  int: 0,
  agi: 5,
  luk: 2,
});

it("fetches profile successfully", () => {
  createTestScheduler().run(({ hot, cold, expectObservable }) => {
    const heroId = 3;
    const profile = createProfile();

    const action$ = hot("-a", {
      a: createAction(fetchProfile.type, {
        heroId,
      }),
    });

    getProfile$.mockReturnValue(
      cold("--r", {
        r: profile,
      })
    );

    const output$ = fetchProfileEpic(action$);

    expectObservable(output$).toBe("---a", {
      a: createAction(fetchProfileFulfilled.type, {
        id: heroId,
        ...profile,
      }),
    });
  });
});

it("will cancel previous request when start new request", () => {
  createTestScheduler().run(({ hot, cold, expectObservable }) => {
    const heroId = 3;
    const profile = createProfile();

    const action$ = hot("-aa", {
      a: createAction(fetchProfile.type, {
        heroId,
      }),
    });

    getProfile$.mockReturnValue(
      cold("--r", {
        r: profile,
      })
    );

    const output$ = fetchProfileEpic(action$);

    expectObservable(output$).toBe("----a", {
      a: createAction(fetchProfileFulfilled.type, {
        id: heroId,
        ...profile,
      }),
    });
  });
});
