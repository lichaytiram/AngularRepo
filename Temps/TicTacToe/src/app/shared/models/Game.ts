import { IGame } from "./IGame.model";

export class Game implements IGame {
    playersWins: number[] = [0, 0];
    board: number[] = [];
    currentPlayer: number = 0;

    startGame(): void {
        this.currentPlayer = Math.round(Math.random() + 1);
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    }

    choose(playerID: number, index: number): void {
        if (this.isPlaceEmpty(index)) {
            this.board[index] = playerID;

            if (this.isWin()) {

                const playerIndex = this.currentPlayer - 1;
                this.playersWins[playerIndex]++;

            } else if (this.isGameFinish()) {


            } else {
                this.currentPlayer = this.currentPlayer == 1 ? 2 : 1;
            }

        }

        console.log(this.playersWins);

    }

    isPlaceEmpty(index: number): boolean {
        return this.board[index] == 0;
    }

    isWin(): boolean {
        return true;
    }
    isGameFinish(): boolean {
        return !this.board.includes(0);
    }

    resetGame(): void {
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.playersWins = [0, 0];
    }

}