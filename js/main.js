import { TODOLIST2 } from "./adatok.js";
import Megjelenit from "./Megjelenit.js";

$(function () {
  let szulo = $(".tarolo");

  let lista = TODOLIST2;
  new Megjelenit(lista, szulo);
});
