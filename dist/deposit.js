import inquirer from "inquirer";
import chalk from "chalk";
const deposit = async (balance) => {
    const amount = await inquirer.prompt([
        {
            name: "am",
            message: chalk.blueBright("Enter amount you want to deposit:"),
            type: "number",
            validate: (input) => {
                if (isNaN(input) === true) {
                    return "inavlid input, press UP arrow and enter again";
                }
                else {
                    return true;
                }
            },
        },
    ]);
    balance = balance + amount.am;
    return balance;
};
export default deposit;
