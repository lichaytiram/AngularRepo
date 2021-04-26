import { IGame } from "./IGame.model";

export class Game implements IGame {

    board: boolean[] = [false, false, false, false, false, false];
    historyBoard: number[] = [];
    amountClicks = 1;
    indexToCheck = 0;
    score = 0;
    maxScore = 0;

    startGame(): number {

        this.restartGame();
        const randomNumber = this.randomNumber();

        return randomNumber;
    }

    randomNumber(): number {

        let randomNumber = -1;

        while (randomNumber == -1) {

            // generate a new random number (new random box).
            const randomValue: number = Math.round(Math.random() * 5);

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

        if (this.isWin())
            return true;

        if (this.isLoss(clickIndex))
            return false;


        if (this.finishRound()) {

            this.amountClicks++;
            this.indexToCheck = 0;

            // if ((this.board.length - 1) != this.indexToCheck)
            return this.randomNumber();

        } else {
            this.indexToCheck++;
        }

        return -1;
    }

    restartGame(): void {

        this.board = [false, false, false, false, false, false];
        this.historyBoard = [];
        this.amountClicks = 1;
        this.indexToCheck = 0;
        this.score = 0;
    }

    newGame(): void {

        this.restartGame();
        this.maxScore = 0;
    }

    isWin(): boolean {

        const board: Array<boolean> = this.board;
        const amountClicks: number = this.amountClicks;
        const indexToCheck: number = this.indexToCheck;

        const isWin: boolean = !board.includes(false) && amountClicks == board.length && indexToCheck == (board.length - 1);
        
        if(isWin){
            
        }


        return isWin;

    }

    isLoss(value: number): boolean {

        const historyBoard: Array<number> = this.historyBoard;
        const isLoss: boolean = historyBoard[this.indexToCheck] != value ? true : false;

        // Restart the game (can be delete and create a separate button)
        isLoss == true && this.restartGame();

        return isLoss;
    }

    finishRound(): boolean {

        this.score += 10;
        if (this.maxScore < this.score)
            this.maxScore = this.score;

        return (this.amountClicks - 1) == this.indexToCheck;

    }

}