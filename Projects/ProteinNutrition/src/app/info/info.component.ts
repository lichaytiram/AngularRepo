import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit, OnDestroy {

  private audio = new Audio();

  ngOnInit() {
    this.audio.src = "../../../assets/audio/music.mp3";
    this.audio.play();
  }

  ngOnDestroy() {
    this.audio.pause();
  }

}
