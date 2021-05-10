import { IStartGame } from "./IStartGame.model";

import { Level } from "./Level.model";

export interface IGame {

    board: Array<boolean>;
    historyBoard: Array<number>;
    amountClicks: number;
    indexToCheck: number;
    winToggle: boolean;
    lossToggle: boolean;
    score: number;
    bestScore: number;

    startGame(level: Level): IStartGame;
    randomNumber(): number;
    clickSequence(clickValue: number): number | boolean;
    restartGame(level: Level): void;
    resetScore(): void;
    isWin(): boolean;
    isLoss(value: number): boolean;
    isRoundFinish(): boolean;
    addScore(): void;
}