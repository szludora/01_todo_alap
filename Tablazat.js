import Elem from "./Elem.js";

class Tablazat {
  constructor(meret, szulo) {
    this.szulo = szulo;
    this.meret = meret;
	let txt1 = `<div class="doboz">`
	this.szulo.append(txt1)
    let txt2 = this.letrehoz();
    this.szulo.append(txt2);
  }

  letrehoz() {
	let szuloElem = $(".doboz")
	let txt = ``
    for (let i = 0; i < this.meret * this.meret; i++) {
      new Elem(szuloElem, i)
    }
	txt += `</div>`
    return txt;
  }
}

export default Tablazat;
