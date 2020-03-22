import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit, OnDestroy {

  private audio = new Audio();

  constructor() { }

  ngOnInit() {

    this.play();

  }

  ngOnDestroy() {

    this.audio.pause();

  }

  public play(): void {

    this.audio.src = "assets/audio/music.mp3";
    this.audio.play();
    this.audio.volume = 0.05;

  }

}
