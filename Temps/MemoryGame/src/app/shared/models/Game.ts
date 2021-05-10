import { IGame } from "./IGame.model";
import { Level } from "./Level.model";
import { IStartGame } from "./IStartGame.model";
import { StartGame } from "./StartGame.model";

export class Game implements IGame {

    board: boolean[] = [];
    historyBoard: number[] = [];
    amountClicks = 1;
    indexToCheck = 0;
    winToggle = false;
    lossToggle = false;
    score = 0;
    bestScore = 0;

    startGame(level: Level): IStartGame {

        this.restartGame(level);
        const randomNumber = this.randomNumber();
        const boardLength = this.board.length;
        const startGame: IStartGame = new StartGame(randomNumber, boardLength);

        return startGame;
    }

    randomNumber(): number {

        let randomNumber = -1;

        while (randomNumber == -1) {

            // generate a new random number (new random box).
            const maxNumber: number = this.board.length - 1;
            const randomValue: number = Math.round(Math.random() * maxNumber);

            if (this.board[randomValue] == false) {

                this.board[randomValue] = true;
                this.historyBoard.push(randomValue);

                this.indexToCheck = 0;
                randomNumber = randomValue;
            }

        }

        return randomNumber;

    }

    clickSequence(clickIndex: number): number | boolean {

        if (this.isWin()) {
            this.addScore();
            return true;
        }

        if (this.isLoss(clickIndex))
            return false;

        if (this.isRoundFinish()) {

            this.amountClicks++;
            this.indexToCheck = 0;

            return this.randomNumber();

        } else {
            this.indexToCheck++;
        }

        return -1;
    }

    restartGame(level: Level): void {

        let amount: number = 0;

        // detect which level user choose
        switch (level.toString()) {
            case 'Easy':
                amount = 6;
                break;
            case 'Normal':
                amount = 9;
                break;
            case 'Hard':
                amount = 12;
                break;
            default:
                break;
        }
        this.board = new Array<boolean>(amount).fill(false);

        this.historyBoard = [];
        this.amountClicks = 1;
        this.indexToCheck = 0;
        this.score = 0;
    }

    resetScore(): void {

        this.bestScore = 0;
    }

    isWin(): boolean {

        const board: Array<boolean> = this.board;
        const amountClicks: number = this.amountClicks;
        const indexToCheck: number = this.indexToCheck;

        const isWin: boolean = !board.includes(false) && amountClicks == board.length && indexToCheck == (board.length - 1);

        if (isWin) {
            this.winToggle = true;
        }

        return isWin;
    }

    isLoss(value: number): boolean {

        const historyBoard: Array<number> = this.historyBoard;
        const isLoss: boolean = historyBoard[this.indexToCheck] != value ? true : false;

        return isLoss;
    }

    isRoundFinish(): boolean {

        const isRoundFinish: boolean = (this.amountClicks - 1) == this.indexToCheck;

        if (isRoundFinish)
            this.addScore();

        return isRoundFinish;
    }

    addScore(): void {

        this.score += 10;

        if (this.bestScore < this.score)
            this.bestScore = this.score;

    }

}