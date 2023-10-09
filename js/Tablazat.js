import Elem from "./Elem.js";

class Tablazat {
  constructor(meret, szulo) {
    this.szulo = szulo;
    this.meret = meret;
    let txt1 = `<div class="doboz">`;
    this.elemek = []; // létrehozok egy listát, amely az Elem típusú objektumokat tartalmazza
    this.szulo.append(txt1);
    let txt2 = this.letrehoz();
    this.szulo.append(txt2);
    this.getAllas();
  }

  letrehoz() {
    let szuloElem = $(".doboz");
    let txt = ``;
    for (let i = 0; i < this.meret * this.meret; i++) {
      this.elemek.push(new Elem(szuloElem, i));
    }
    txt += `</div>`;
    return txt;
  }

  getAllas() {
    let kiir = [];
    $(".doboz").on("click", () => {
      for (let i = 0; i < this.elemek.length; i++) {
        const element = this.elemek[i].allapot;
        kiir.push(element);
      }
      console.log(kiir);
      kiir = [];
    });
  }
}

export default Tablazat;
