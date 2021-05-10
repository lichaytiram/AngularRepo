import { Component, OnInit, OnDestroy } from '@angular/core';
import { Game } from '../shared/models/Game';
import { IGame } from '../shared/models/IGame.model';
import { IStartGame } from '../shared/models/IStartGame.model';
import { Level } from '../shared/models/Level.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  // Game values
  public isGameStart: boolean = false;
  public game: IGame = new Game();
  public buttonElement: number[] = [];
  public score: number = 0;
  public bestScore: number = 0;
  public isWin: boolean = false;
  public isLoss: boolean = false;

  public name: string = '';
  public level: Level = Level.EMPTY;
  public levelKeys: string[] = [];
  private clearTimeout: ReturnType<typeof setTimeout>[] = [];

  // Mobile screen
  public mobileSetTimeoutID: ReturnType<typeof setTimeout> | null = null;

  constructor() { }

  ngOnInit(): void {

    // initial game object
    const game: IGame = this.game;
    this.score = game.score;
    this.bestScore = game.bestScore;

    // initial level object
    const levelKeys: string[] = Object.values(Level);
    this.levelKeys = levelKeys;

  }

  ngOnDestroy(): void {

    if (this.mobileSetTimeoutID)
      this.clearTimeout.push(this.mobileSetTimeoutID);

    this.clearTimeout.forEach(id => clearTimeout(id));

  }

  // Start game
  public startGame(): void {

    const level: Level = this.level;

    const isNameValid: boolean = this.name.length > 0;
    const isLevelValid: boolean = level != Level.EMPTY;
    const gameStart: boolean = isNameValid && isLevelValid;

    if (gameStart) {

      this.isGameStart = true;

      const startGame: IStartGame = this.game.startGame(level);
      const { randomNumber } = startGame;
      const { boardLength } = startGame;

      // Fill the array with index values
      this.buttonElement = new Array<number>(boardLength).fill(0).map((_, index) => index);

      // Create small delay (to show first glowing color)
      this.clearTimeout.push(setTimeout(() => {

        const elementSelected: HTMLButtonElement = this.getButtonElementByHisPosition(randomNumber);

        this.showTimeOutOnScreen(elementSelected);

      }, 700));

    }

  }

  public playCheck(elementIndex: number): void {

    const gameStart: boolean = this.isGameStart;

    if (gameStart) {

      const game: IGame = this.game;
      const newNumberRandom: number | boolean = game.clickSequence(elementIndex);

      // Check if user win or loss  
      if (typeof newNumberRandom === 'boolean') {
        this.isGameStart = false;
        this.score = game.score;
        this.bestScore = game.bestScore;

        if (newNumberRandom == true)
          this.isWin = true;

        else
          this.isLoss = true;

      }

      // The game continue
      else if (newNumberRandom != -1) {

        this.score = game.score;
        const nextNumber: number = newNumberRandom as number;

        const newElement: HTMLButtonElement = this.getButtonElementByHisPosition(nextNumber);
        this.showTimeOutOnScreen(newElement);

      }

    }

  }

  public gameEnd(): void {

    this.score = 0;

    if (this.isWin)
      this.isWin = false;

    else
      this.isLoss = false;

  }

  public resetScore(): void {
    this.game.resetScore();
    this.bestScore = 0;
  }

  private getButtonElementByHisPosition(position: number): HTMLButtonElement {

    const selector: string = '.container>.gameWrap>.bulbsWrap>button';
    const buttonList: NodeListOf<HTMLButtonElement> = document.querySelectorAll(selector);

    const element: HTMLButtonElement = buttonList.item(position);

    return element;
  }

  private showTimeOutOnScreen(element: HTMLButtonElement): void {

    element.style.backgroundColor = 'pink';
    this.clearTimeout.push(setTimeout(() => {
      element.style.backgroundColor = '';
    }, 1000));

  }

  // Mobile screen

  public infoScreenMobile(): void {

    const wrapSelector: string = '.container>.infoWrap';
    const informationSelector: string = '.container>.infoWrap>.information';
    const arrowSelector: string = '.container>.infoWrap>.information+i.arrow';
    const wrapElement: HTMLElement | null = document.querySelector(wrapSelector);
    const informationElement: HTMLElement | null = document.querySelector(informationSelector);
    const arrowElement: HTMLElement | null = document.querySelector(arrowSelector);

    if (wrapElement && informationElement && arrowElement) {

      const width: number = wrapElement.offsetWidth;

      const rootContainer: any = document.querySelector('.container');
      // contain px
      const widthWrap: string = getComputedStyle(rootContainer).getPropertyValue('--widthWrap');
      // delete px from value
      var widthFromHTML: number = Number.parseInt(widthWrap.replace(/[^0-9]/g, ''));

      if (width <= widthFromHTML) {
        wrapElement.style.width = "80vw";
        informationElement.style.transform = "scale(1.3)";
        informationElement.style.display = "inherit";
        arrowElement.style.opacity = "0";
      } else {
        wrapElement.style.width = "45px";
        informationElement.style.transform = "scale(1)";
        informationElement.style.display = "none";
        arrowElement.style.opacity = "1";
      }

      if (this.mobileSetTimeoutID)
        clearTimeout(this.mobileSetTimeoutID);

      this.mobileSetTimeoutID = setTimeout(() => {
        wrapElement.style.removeProperty('width');
        informationElement.style.removeProperty('transform');
        informationElement.style.removeProperty('display');
        arrowElement.style.removeProperty('opacity');

      }, 3000);

    }

  }

}
