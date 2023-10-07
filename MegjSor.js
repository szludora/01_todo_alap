class MegjSor {
  #adat = {};
  constructor(adat, szulo, index) {
    this.#adat = adat;
    this.index = index;
    this.szulo = szulo;
    this.sor();

    // megfogom a pipákkal együtt az egész sort
    this.sorElem = this.szulo.children("tr:last-child");
    this.pipaElem = this.sorElem.children("td").children(".kesz");
    this.kukaElem = this.sorElem.children("td").children(".torol");
    // eseménykezelő pipára
    this.pipaElem.on("click", () => {
      this.pipa();
    });
    // eseménykezelő kukára
    this.kukaElem.on("click", () => {
      this.sorElem.remove();
    });
  }

  sor() {
    let txt = `<tr>`;
    for (const kulcs in this.#adat) {
      const obj = this.#adat[kulcs];
      txt += `<td>${obj}</td>`;
    }
    txt += `<td><span class='kesz'><i class="fa-regular fa-square-check">
    </i></span><span class='torol'><i class="fa-regular fa-trash-can"></i></td>`;
    txt += `</tr>`;
    this.szulo.append(txt);
  }

  pipa() {
    if (
      this.sorElem.hasClass("jeloltSorParos") ||
      this.sorElem.hasClass("jeloltSorParatlan")
    ) {
      this.sorElem.removeClass("jeloltSorParos");
      this.sorElem.removeClass("jeloltSorParatlan");
      // nem működik
      this.pipaElem.children().removeClass("x");
    } else if (this.index % 2 == 1) {
      this.sorElem.addClass("jeloltSorParos");
      this.pipaElem.children().addClass("x");
    } else if (this.index % 2 == 0) {
      this.sorElem.addClass("jeloltSorParatlan");
      this.pipaElem.children().addClass("x");
    }
  }

  // kuka(){
  //   this.sorElem.remove()
  // }
}

export default MegjSor;
