class MegjSor {
  #adat = {};
  constructor(adat, szulo) {
    this.#adat = adat;
    this.szulo = szulo;
    this.sor();

    // megfogom a pipákkal együtt az egész sort
    this.sorElem = this.szulo.children("tr:last-child");
    this.pipaElem = this.sorElem.children("td").children(".kesz");
    // eseménykezelő
    this.pipaElem.on("click", () => {});
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
}

export default MegjSor;
