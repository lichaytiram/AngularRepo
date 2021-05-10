import { IStartGame } from "./IStartGame.model";

export class StartGame implements IStartGame {

    constructor(
        public randomNumber: number,
        public boardLength: number
    ) { }

}