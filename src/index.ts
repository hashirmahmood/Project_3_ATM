import login from "./login.js";
import mainScreen from "./mainscreen.js";
import chalk from "chalk";

const mainMenu = async () => {
  console.log(chalk.cyanBright("Welcome to ATM machine"));
  let balance: any = await login();
  await mainScreen(balance);
};

await mainMenu();
