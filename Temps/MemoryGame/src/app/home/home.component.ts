import { Component, OnInit, OnDestroy } from '@angular/core';
import { Game } from '../shared/models/Game';
import { IGame } from '../shared/models/IGame.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private isGameStart: boolean = false;
  public name: string = '';
  public game: IGame = new Game();

  private clearTimeout: ReturnType<typeof setTimeout>[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

    this.clearTimeout.forEach(id => clearTimeout(id));

  }

  // start game
  public startGame(): void {

    if (this.name.length > 0) {

      this.isGameStart = true;
      const game: IGame = this.game;
      const randomNumber: number = game.startGame();

      const elementSelected: HTMLButtonElement = this.getButtonElementByHisPosition(randomNumber);
      this.showTimeOut(elementSelected);

    }

  }

  public playCheck(event: any): void {

    const gameStart: boolean = this.isGameStart;

    if (gameStart) {

      // Indicate element index
      const elementIndex: number = event.currentTarget.getAttribute('position');

      const game: IGame = this.game;
      const newNumberRandom: number | boolean = game.clickSequence(elementIndex);

      // Check if user win or loss  
      if (typeof newNumberRandom === 'boolean') {
        this.isGameStart = false;

        if (newNumberRandom == true) {
          console.log('Won');
        }
        else {
          console.log('Loss');
        }

      }

      // The game continue
      else if (newNumberRandom != -1) {

        console.log('keep play');

        const nextNumber: number = newNumberRandom as number;

        const newElement: HTMLButtonElement = this.getButtonElementByHisPosition(nextNumber);
        this.showTimeOut(newElement);

      }

    }

  }

  private getButtonElementByHisPosition(position: number): HTMLButtonElement {

    const selector: string = '.container>.bulbsWrap>button';
    const buttonList: NodeListOf<HTMLButtonElement> = document.querySelectorAll(selector);

    const element: HTMLButtonElement = buttonList.item(position);

    return element;
  }

  private showTimeOut(element: HTMLButtonElement): void {

    element.style.backgroundColor = 'pink';
    this.clearTimeout.push(setTimeout(() => {
      element.style.backgroundColor = '';
    }, 1000));

  }

}
