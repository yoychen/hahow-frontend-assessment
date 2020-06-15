import { TestScheduler } from "rxjs/testing";

export default () =>
  new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  });
