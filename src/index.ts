let cant = document.getElementById("cantidad");

function iniciar_butacas(max: number): boolean[] {
  let butacas: boolean[] = [];
  for (let i = 0; i < max; i++) {
    butacas[i] = false;
  }
  console.log(butacas);
  return butacas;
}

function consultar_butacas_disponibles(butacas: boolean[]): boolean[] {
  let cant: number = butacas.length;
  for (let i = 0; i < cant; i++) {
    if (butacas[i] == false) {
      console.log("La butaca " + i + " está libre");
    }
  }
  return butacas;
}

function reservar_butaca(butaca: number, butacas: boolean[]): boolean[] {
  if (butacas[butaca] == false) {
    butacas[butaca] = true;
    console.log("La butaca " + butaca + " elegida, se reservó exitosamente");
  } else {
    console.log("La butaca " + butaca + " elegida, está ocupada");
  }

  return butacas;
}

btnDatos1.addEventListener("click", () => {
  let cantidad: number = cant.value;
  let butacas: boolean[];
  let butacas_libres: boolean[];
  let butaca: number = 0;
  butacas = iniciar_butacas(cantidad);
  butacas_libres = consultar_butacas_disponibles(butacas);
  butaca = prompt("Elegir butaca y reservar ");
  butacas = reservar_butaca(butaca, butacas_libres);
});
