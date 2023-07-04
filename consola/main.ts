import readline from "readline/promises";
import { mainMenu } from "./menu";
import { loginUser } from "./login/Login";

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const delay = (ms: number): Promise<void> =>
  new Promise((res) => setTimeout(res, ms));

const main = async () => {
  while (true) {
    console.clear();
    console.log(mainMenu);

    const response = await rl.question(">> ");
    if (response == "1") {
      await loginUser();
      rl.close();
      break;
    } else if (response == "2") {
      console.log("Registrarse...");
      await delay(500);
    } else if (response == "0") {
      console.log("Saliendo...");
      rl.close();
      break;
    } else {
      console.log("Opcion no valida");
      await delay(500);
    }
  }
  return;
};

main();
