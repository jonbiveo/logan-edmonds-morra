/* eslint-disable */
'reach 0.1';

const [ isFingers, ZERO, ONE, TWO, THREE, FOUR, FIVE ] = makeEnum(6);
const [ isGuess, ZEROG, ONEG, TWOG, THREEG, FOURG, FIVEG, SIXG, SEVENG, EIGHTG, NINEG, TENG ] = makeEnum(11);
const [ isOutcome, A_WINS, DRAW, B_WINS ] = makeEnum(3);

const winner = (fingersA, fingersB, guessA, guessB) => {
  if ( guessA == guessB ) {
    const gameOutcome = DRAW;
    return gameOutcome;
  } else {
    if ( (fingersA + fingersB) == guessA ) {
      const gameOutcome = A_WINS;
      return gameOutcome;
    } else {
      if ((fingersA + fingersB) == guessB ) {
        const gameOutcome = B_WINS;
        return gameOutcome;
      } else {
        const gameOutcome = DRAW;
        return gameOutcome;
      }
    }
  }
}

const Player = {
  ...hasRandom,
  getFinger: Fun([], UInt),
  getGuess: Fun([UInt], UInt),
  seeWinningNumber: Fun([UInt], Null),
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null)
};

export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
    ...Player,
    wager: UInt,
    deadline: UInt
  });
  const Bob = Participant('Bob', {
    ...Player,
    acceptWager: Fun([UInt], Null)
  });
  init();

  const informTimeout = () => {
    each([Alice, Bob], () => {
      interact.informTimeout();
    });
  };

  Alice.only(() => {
    const wager = declassify(interact.wager);
    const deadline = declassify(interact.deadline);
  });
  Alice.publish(wager, deadline)
    .pay(wager);
  commit();
  
  Bob.only(() => {
    interact.acceptWager(wager);
  });
  Bob.pay(wager)
    .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));

  var outcome = DRAW;
  invariant( balance() == 2 * wager && isOutcome(outcome) );
  while ( outcome == DRAW ) {
    commit();

    Alice.only(() => {
      const _fingersA = interact.getFinger();
      const [_commitA, _saltA] = makeCommitment(interact, _fingersA);
      const commitA = declassify(_commitA);
      const _guessA = interact.getGuess(_fingersA);
      const [_guessCommitA, _guessSaltA] = makeCommitment(interact, _guessA);
      const guessCommitA = declassify(_guessCommitA);
    });
    Alice.publish(commitA, guessCommitA)
      .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
    commit();

    unknowable(Bob, Alice(_fingersA, _saltA));
    unknowable(Bob, Alice(_guessA, _guessSaltA));
    Bob.only(() => {
      const _fingersB = interact.getFinger();
      const _guessB = interact.getGuess(_fingersB);
      const fingersB = declassify(_fingersB);
      const guessB = declassify(_guessB);
    });
    Bob.publish(fingersB, guessB)
      .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
    commit();

    Alice.only(() => {
      const [ saltA, fingersA ] = declassify([_saltA, _fingersA]);
      const [ guessSaltA, guessA ] = declassify([_guessSaltA, _guessA]);
    });
    Alice.publish(saltA, fingersA, guessSaltA, guessA)
      .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
    checkCommitment(commitA, saltA, fingersA);
    commit();

    Alice.only(() => {
      const winningNumber = fingersA + fingersB;
      interact.seeWinningNumber(winningNumber);
    });
    Alice.publish(winningNumber)
      .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));

    outcome = winner(fingersA, fingersB, guessA, guessB);
    continue;
  }

  assert(outcome == A_WINS || outcome == B_WINS);
  transfer(2 * wager).to(outcome == A_WINS ? Alice : Bob);
  commit();

  each ([Alice, Bob], () => {
    interact.seeOutcome(outcome);
  });

  exit();
})