import inquirer from "inquirer";
import chalk from "chalk";
import deposit from "./deposit.js";
import widthdraw from "./widthdraw.js";
import bills from "./bills.js";
const mainScreen = async (balance) => {
    let condition = true;
    do {
        const choices = await inquirer.prompt([
            {
                name: "choice",
                message: chalk.green("Select your operation: "),
                type: "list",
                choices: ["Check_Balance", "Deposit", "Widthdraw", "Pay_Bills", "Exit"],
            },
        ]);
        if (choices.choice === "Check_Balance") {
            console.log(chalk.greenBright("\nYour balance is: " + balance));
        }
        else if (choices.choice === "Deposit") {
            balance = await deposit(balance);
        }
        else if (choices.choice === "Widthdraw") {
            balance = await widthdraw(balance);
        }
        else if (choices.choice === "Pay_Bills") {
            balance = await bills(balance);
        }
        else if (choices.choice === "Exit") {
            condition = false;
        }
    } while (condition === true);
};
export default mainScreen;
