export interface IGame {

    board: Array<boolean>;
    historyBoard: Array<number>;
    amountClicks: number;
    indexToCheck: number;
    score: number;
    maxScore: number;

    startGame(): number;
    randomNumber(): number;
    clickSequence(clickValue: number): number | boolean;
    restartGame(): void;
    newGame(): void;
    isWin(): boolean;
    isLoss(value: number): boolean;
    finishRound(): boolean;
}