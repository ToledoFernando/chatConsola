import * as readline from "readline-sync";

export async function registrarUsuario(): Promise<void> {
  console.clear();
  console.log(` ##### REGISTRARSE #####\n\n`);
  console.log("\t Ingrese su nombre: ");
  const name: string = readline.prompt();
  if (name.length === 0) {
    console.log("\r El nombre no puede estar vacio");
    await new Promise((resolve) => setTimeout(resolve, 1000));
  } else {
    const email = await createEmail();
    const password = await createPassword();

    console.log(email);
    console.log(password);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

const createEmail = async (): Promise<string> => {
  console.clear();
  console.log(` ##### CREAR NUEVO EMAIL #####\n`);
  let bucle: boolean = true;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let emailUser: string = "";
  while (bucle) {
    const email: string = readline.prompt();
    if (!regex.test(email)) {
      console.log("ERROR");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      process.stdout.write("\r                                       \r");
    } else {
      bucle = false;
      emailUser = email;
    }
  }
  return emailUser;
};

const createPassword = async (): Promise<string> => {
  console.clear();
  console.log(` ##### CREAR NUEVA CONTRASEÑA #####\n`);
  let bucle: boolean = true;
  let password: string = "";
  while (bucle) {
    password = readline.question("", { hideEchoBack: true });
    if (password.length <= 4) {
      console.log("\r LA CONTRASEÑA NO PUEDE TENER MENOS DE 5 CARACTERES \r");
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } else {
      bucle = false;
    }
  }
  return password;
};
