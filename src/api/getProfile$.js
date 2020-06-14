import { ajax } from "rxjs/ajax";

export default (heroId) =>
  ajax.getJSON(`https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`);
