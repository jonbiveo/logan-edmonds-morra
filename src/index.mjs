/* eslint-disable */
import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

console.log(`The consensus network is ${stdlib.connector}.`);

(async () => {
const isAlice = await ask.ask(
  `Are you the deployer of this contract?`,
  ask.yesno
);
const who = isAlice ? 'Deployer' : 'Attacher';
console.log(`Your role is ${who}.`);

let acc = null;
const createAcc = await ask.ask(
  `Would you like to create an account? (only possible on devnet)`,
  ask.yesno
);
if (createAcc) {
  acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
} else {
  const secret = await ask.ask(
    `What is your account secret`,
    (x => x)
  );
  acc = await stdlib.newAccountFromSecret(secret);
}

let ctc = null;
if (isAlice) {
  ctc = acc.contract(backend);
  ctc.getInfo().then((info) => {
    console.log(`The contract is deployed as = ${JSON.stringify(info)}`); });
} else {
  const info = await ask.ask(
    `Please paste the contract information:`,
    JSON.parse
  );
  ctc = acc.contract(backend, info);
}

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async () => fmt(await stdlib.balanceOf(acc));

const before = await getBalance();
console.log(`Your balance is ${before}`);

const interact = { ...stdlib.hasRandom };

interact.informTimeout = () => {
  console.log(`There was a timeout.`);
  process.exit(1);
};

if (isAlice) {
  const amt = await ask.ask(
    `How much do you want to wager?`,
    stdlib.parseCurrency
  );
  interact.wager = amt;
  interact.deadline = { ETH: 100, ALGO: 100, CFX: 1000 }[stdlib.connector];
} else {
  interact.acceptWager = async (amt) => {
    const accepted = await ask.ask(
      `Do you accept the wager of ${fmt(amt)}`,
      ask.yesno
    );
    if (!accepted) {
      process.exit(0);
    }
  };
}

const FINGERS = [0, 1, 2, 3, 4, 5];

interact.getFinger = async () => {
  const finger = await ask.ask(`How many fingers do you choose to play?`, (x) => {
    const finger = FINGERS[x];
    if ( finger === undefined || !FINGERS.includes(finger) ) {
      throw Error(`Not a valid hand ${finger}`);
    }
    return finger;
  });
  console.log(`You played ${FINGERS[finger]}`);
  return finger;
}

interact.getGuess = async (finger) => {
  const guess = await ask.ask(`What is your guess of how many total fingers there are?`, (x) => {
    const guess = x;
    if ( guess === undefined || guess < finger ) {
      throw Error(`Not a valid guess`);
    }
    return guess;
  });
  console.log(`You guessed ${guess}`);
  return guess;
}

interact.seeWinningNumber = async (winningNumber) => {
  console.log(`The winning number is ${winningNumber}`);
}

const OUTCOME = ['Alice wins', 'Draw', 'Bob wins'];
interact.seeOutcome = async (outcome) => {
  console.log(`The outcome is: ${OUTCOME[outcome]}`);
};

const part = isAlice ? ctc.p.Alice : ctc.p.Bob;
await part(interact);

const after = await getBalance();
console.log(`Your balance is now ${after}`);

ask.done();
})();