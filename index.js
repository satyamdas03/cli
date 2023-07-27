#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from 'chalk-animation';
import figlet from "figlet";
import { createSpinner } from "nanospinner";

// console.log(chalk.bgGreen('hello world'));

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(
        "who wants to be a millionare? \n"
    );
    await sleep();
    rainbowTitle.stop();

    console.log(`
        ${chalk.bgBlue('HOW TO PLAY')}
        I am a process in your computer.
        If you get any questions wrong I will be ${chalk.bgRed('killed')}
        So get the questions right
    `);
}

// await welcome()

async function askName() {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'what is your name?',
        default() {
            return 'Player';
        },
    });
    playerName = answers.player_name;
}

// await askName();

async function question1() {
    const answers = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: 'JS was created in 10 and then was released on\n',
        choices: [
            'May 23rd, 1995',
            'Nov 24th 1995',
            'Dec 4th 1995',
            'Dec 17th 1996'
        ],
    });
    return handleAnswers(answers.question_1 == 'Dec 4th 1995');
}

async function handleAnswer(isCorrect) {
    const spinner = createSpinner('checking answer....').start();
    await sleep();
    if (isCorrect) {
        spinner.success({ text: `Nice work ${playerName}. That's a legit answer` });
    }
    else {
        spinner.error({ text: `Game over, you lose ${playerName}!` });
        process.exit(1);
    }
}


await question1();