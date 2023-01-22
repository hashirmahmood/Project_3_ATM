import inquirer from "inquirer";
import chalk from "chalk";
const widthdraw = async (balance) => {
    const amount = await inquirer.prompt([
        {
            name: "am",
            message: chalk.blueBright("Select amount to widthdraw: "),
            type: "list",
            choices: ["1000", "5000", "10000", "20000", "custom"],
        },
    ]);
    if (amount.am !== "custom") {
        balance = balance - amount.am;
    }
    else {
        balance = balance - (await custom());
    }
    return balance;
};
const custom = async () => {
    const amount = await inquirer.prompt([
        {
            name: "am",
            message: chalk.blueBright("Enter your custom amount:"),
            type: "number",
            validate: (input) => {
                if (isNaN(input) === true) {
                    return "invalid input, press UP arrow key and try again";
                }
                else {
                    return true;
                }
            },
        },
    ]);
    return amount.am;
};
export default widthdraw;
