#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from 'chalk-animation';
import figlet from "figlet";
import { createSpinner } from "nanospinner";

console.log(chalk.bgGreen('hello world'));

let playerName;

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(
        "who wants to be a millionare? \n"
    );
}