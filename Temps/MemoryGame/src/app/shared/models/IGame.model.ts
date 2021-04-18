export interface IGame {

    board: Array<boolean>;
    historyBoard: Array<number>;
    amountClicks: number;
    indexToCheck:number;
    score: number;
    maxScore: number;

    startGame(): number;
    runGame(): number;
    clickSequence(clickValue:number): number;
    gameOver(): void;
    newGame(): void;
    isWin(): boolean;
}