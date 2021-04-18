import { Component, OnInit, OnDestroy } from '@angular/core';
import { Game } from '../shared/models/Game';
import { IGame } from '../shared/models/IGame.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public name: string = '';
  public game: IGame = new Game();
  private clearTimeout: ReturnType<typeof setTimeout>[] = [];

  constructor() { }


  ngOnInit(): void {

  }

  ngOnDestroy(): void {

    this.clearTimeout.forEach(id => clearTimeout(id));

  }

  public startGame(): void {

    if (this.name.length > 0) {

      const game: IGame = this.game;
      const randomNumber: number = game.startGame();

      const selector: string = '.container>.bulbsWrap>button';
      const element: NodeListOf<HTMLElement> = document.querySelectorAll(selector);
      const elementSelected: HTMLElement = element[randomNumber];
      this.showTimeOut(elementSelected);

    }

  }

  public playCheck(event: any): void {

    const element: HTMLElement = event.currentTarget;
    const elementIndex: number = event.currentTarget.getAttribute('position');

    const game: IGame = this.game;


  }

  private showTimeOut(element: HTMLElement): void {

    element.style.backgroundColor = 'pink';
    this.clearTimeout.push(setTimeout(() => {
      element.style.backgroundColor = '';
    }, 1000));

  }

}
