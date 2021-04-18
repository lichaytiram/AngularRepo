import { Component, OnInit } from '@angular/core';
import { Game } from '../shared/models/Game';
import { IGame } from '../shared/models/IGame.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private game: IGame = new Game();

  constructor() { }

  ngOnInit(): void { }

  public chosen(event: any): void {

    const game: IGame = this.game;
    const element: HTMLElement = event.currentTarget;
    const elementIndex: number = event.currentTarget.getAttribute('position');
    const playerTurn: number = game.currentPlayer;

    if (game.isPlaceEmpty(elementIndex)) {
      this.paintHtmlElement(element, playerTurn);
    }

    game.choose(playerTurn, elementIndex);

  }

  private paintHtmlElement(element: HTMLElement, playerID: number): void {

    element.style.backgroundColor = playerID == 1 ? 'blue' : 'red';

  }

  public startGame(): void {
    this.game.startGame();
  }

  public resetGame(): void {

  }

}
