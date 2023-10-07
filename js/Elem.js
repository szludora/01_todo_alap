class Elem {
  constructor(szulo, index) {
    this.index = index;
    this.szulo = szulo;
    this.negyzet();
    this.elem = $(".elem");
    this.figyel();
    this.kep = "./img/jelolo.png"; // Módosítás: kép útvonala
  }

  negyzet() {
    let txt = `<div class="elem" hanyadik="${this.index}"><p></p></div>`;
    this.szulo.append(txt);
  }

  figyel() {
    this.elem.eq(this.index).on("click", () => {
      const pElem = this.elem.eq(this.index).children("p");
      pElem.html(`<i class="fa-brands fa-x-twitter"></i>`); // Kép beszúrása
    });
  }
}

export default Elem;
