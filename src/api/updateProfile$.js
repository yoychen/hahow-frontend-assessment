import { ajax } from "rxjs/ajax";

export default (heroId, abilities) =>
  ajax({
    url: `https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`,
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      ...abilities,
    },
  });
