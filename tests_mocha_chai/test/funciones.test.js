const expect = require("chai").expect;
const Director = require("./Director");
const Engineer = require("./Engineer");

describe("Director", () => {
  it("debería crear un nuevo director con nombre", () => {
    const d1 = new Director("Pepito");
    expect(d1.name).to.equal("Pepito");
  });

  it("debería agregar informes al director", () => {
    const d2 = new Director("Manolo");
    d2.reports.push(
      "Informe producción Enero",
      "Informe producción Febrero",
      "Informe producción Marzo"
    );
    expect(d2.reports).to.deep.equal([
      "Informe producción Enero",
      "Informe producción Febrero",
      "Informe producción Marzo",
    ]);
  });

  it("debería crear un nuevo director sin informes", () => {
    const d3 = new Director("Hortencia");
    expect(d3.reports).to.deep.equal([]);
  });
});

describe("Engineer", () => {
  it("debería crear un nuevo ingeniero con nombre y lenguaje", () => {
    const i1 = new Engineer("Juan", "JAVA");
    expect(i1.name).to.equal("Juan");
    expect(i1.programLanguage).to.equal("JAVA");
  });

  it("debería agregar proyectos al ingeniero", () => {
    const i2 = new Engineer("Carmen", "C++");
    i2.projects.push(
      `El ingeniero ${i2.name} usa el lenguaje de programación ${i2.programLanguage} en el departamento de ingeniería`
    );
    expect(i2.projects).to.deep.equal([
      "El ingeniero Carmen usa el lenguaje de programación C++ en el departamento de ingeniería",
    ]);
  });

  it("debería crear un nuevo ingeniero sin proyectos", () => {
    const i3 = new Engineer("Pablo", "JS");
    expect(i3.projects).to.deep.equal([]);
  });
});
