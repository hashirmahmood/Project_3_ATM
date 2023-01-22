import inquirer from "inquirer";
import chalk from "chalk";
import accounts from "./accounts.js";

const login = async () => {
  const data = await inquirer.prompt([
    {
      name: "id",
      type: "input",
      message: chalk.blueBright("Enter account ID: "),
    },
    {
      name: "password",
      type: "password",
      message: chalk.blueBright("Enter account password: "),
    },
  ]);
  if (
    data.id === accounts.user1.accountID &&
    data.password == accounts.user1.password
  ) {
    console.log(chalk.cyanBright("you are now logged in"));
    return accounts.user1.balance;
  } else if (
    data.id === accounts.user2.accountID &&
    data.password == accounts.user2.password
  ) {
    console.log(chalk.cyanBright("you are now logged in"));
    return accounts.user2.balance;
  } else {
    console.log(chalk.red("Account not found, try again"));
    await login();
  }
};
export default login;
