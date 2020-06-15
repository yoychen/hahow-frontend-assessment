import createTestScheduler from "../../utils/createTestScheduler";
import { fetchHeroesEpic, fetchHeroes, fetchHeroesFulfilled } from "../../../slices/heroes";
import getHeroes$ from "../../../api/getHeroes$";
import createAction from "../../utils/createAction";

jest.mock("../../../api/getHeroes$");

it("fetches heroes successfully", () => {
  createTestScheduler().run(({ hot, cold, expectObservable }) => {
    const heroes = [
      {
        name: "kanahei",
        image: "https://example.com/kanahei.jpg",
      },
    ];

    const action$ = hot("-a", {
      a: createAction(fetchHeroes.type),
    });

    getHeroes$.mockReturnValue(
      cold("--r", {
        r: heroes,
      })
    );

    const output$ = fetchHeroesEpic(action$);

    expectObservable(output$).toBe("---a", {
      a: createAction(fetchHeroesFulfilled.type, {
        heroes,
      }),
    });
  });
});
