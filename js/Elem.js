class Elem {
  constructor(szulo, index, allapot = 0) {
    this.index = index;
    this.szulo = szulo;
    this.allapot = false; //Beállítja az állapotot, alapértelmezésen 0, azaz üres, ha van benne, akkor 1
    this.szulo.append(this.negyzet()); //egy div elemet helyez el benne egy p taggel a szülő elembe
    this.elem = $(".elem");
    this.kep = "./img/jelolo.png";
    this.figyel();  //eseménykezelő, kattintásra beszúr egy képet
  }

  negyzet() {
    let txt = `<div class="elem" hanyadik="${this.index}"><p></p></div>`;
    return txt;
  }

  setAllapot(ertek) {
    this.allapot = ertek;
  }

  getAllapot() {
    return this.allapot;
  }

  toString() {
    return `Elem { index: ${this.index}, allapot: ${this.allapot} }`;
  }

  figyel() {
    const self = this;
    this.elem.eq(this.index).on("click", function () {
      const pElem = $(this).children("p");
      pElem.html(`<i class="fa-brands fa-x-twitter"></i>`);
      self.setAllapot(true);
    });
  }
}

export default Elem;
