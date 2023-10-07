import MegjSor from "./MegjSor.js";

class Megjelenit {
  #lista = [];
  constructor(lista, szulo) {
    this.#lista = lista;
    this.szulo = szulo;
    szulo.append(`<table>`);
    this.tszulo = szulo.children("table");
    this.megjelenit();
  }

  megjelenit() {
    let txt = "";

    for (let x = 0; x < this.#lista.length; x++) {
      txt += `<tr>`;
      const elem = this.#lista[x];
      new MegjSor(elem, this.tszulo);
    }
    txt += "</table>";
  }
}

export default Megjelenit;
