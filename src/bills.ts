import inquirer from "inquirer";
import chalk from "chalk";

const bills = async (balance: number) => {
  console.log(
    chalk.red(
      "Electricity bill: RS.25000\nTelephone bill: RS.2000\nInternet bill: RS.4000"
    )
  );
  const choices = await inquirer.prompt([
    {
      name: "ch",
      message: chalk.blueBright("Select the bill you want to pay:"),
      type: "list",
      choices: ["Electricity", "Telephone", "Internet"],
    },
  ]);
  if (choices.ch === "Electricity") {
    balance = balance - 25000;
  } else if (choices.ch === "Telephone") {
    balance = balance - 2000;
  } else if (choices.ch === "Internet") {
    balance = balance - 4000;
  }
  return balance;
};
export default bills;
