export interface IGame {
    playersWins: Array<number>;
    board: Array<number>;
    currentPlayer: number;

    startGame(): void;
    choose(playerID: number, index: number): void;
    isPlaceEmpty(index: number): boolean;
    isWin(): boolean;
    isGameFinish(): boolean;
    resetGame(): void;
}