let cant = document.getElementById("cantidad");

function iniciarButacasAleatoriamente(cantidad: number): boolean[] {
  let butacas: boolean[] = [];
  for (let i = 0; i < cantidad; i++) {
    butacas[i] = Math.random() < 0.5;
  }
  console.log(butacas);
  return butacas;
}

function consultarButacasDisponibles(butacas: boolean[]): number {
  let cant: number = butacas.length;
  let butacasLibres: number = 0;
  for (let i = 0; i < cant; i++) {
    if (butacas[i] === false) {
      butacasLibres = butacasLibres + 1;
    }
  }
  return butacasLibres;
}

btnDatos1.addEventListener("click", () => {
  let cantidad: number = cant.value;
  let butacas: boolean[];
  let butacasLibres: number = 0;
  butacas = iniciarButacasAleatoriamente(cantidad);
  butacasLibres = consultarButacasDisponibles(butacas);
  console.log(butacasLibres);
});
