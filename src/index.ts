import * as readline from "readline-sync";
import { registrarUsuario } from "./registrarse/registrarse";

const options: string[] = ["Registrarse", "Iniciar Sesion", "Salir"];

function changeOption(option: number): Promise<void> {
  if (typeof option === "string" || option > options.length) {
    console.log("Opcion no valida");
  } else {
    if (option === 1) {
      console.log("Registrarse");
      return new Promise((resolve) => {
        registrarUsuario().then(() => resolve());
      });
    }
    if (option === 2) {
      console.log("Iniciar Sesion");
    }
    if (option === 3) {
      bucle = false;
      console.log("Saliendo...");
    }
  }
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 500);
  });
}

//################################################//
//################################################//

let bucle: boolean = true;
const main = async () => {
  while (bucle) {
    console.clear();

    console.log(` ##### BIENVENIDO #####\n
    ¿Que quieres hacer?

      1. Registrarse
      2. Iniciar Sesion
      3. Salir
      `);

    const option: number = readline.questionInt("Ingrese una opcion => ");

    await changeOption(option);
  }
};

main();
