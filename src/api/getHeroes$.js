import { ajax } from "rxjs/ajax";

export default () => ajax.getJSON("https://hahow-recruit.herokuapp.com/heroes");
