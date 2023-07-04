import { delay, rl } from "../main";

export const loginUser = async () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  while (true) {
    console.clear();
    const response = await rl.question("Ingrese su Email: ");

    //===== Si el formato del email es incorecto ====== //
    if (!emailRegex.test(response)) {
      console.log("Email invalido!");
      await delay(1000);
      const respuesta = await rl.question(
        "Volver a intentar? [S]si - [N]no => "
      );
      if (respuesta == "S" || respuesta == "s") {
        continue;
      } else {
        rl.close();
        console.log("saliendo....");
        break;
      }

      // =========================================== //
    } else {
      console.log(response);
      rl.close();
      break;
    }
  }
  return;
};
