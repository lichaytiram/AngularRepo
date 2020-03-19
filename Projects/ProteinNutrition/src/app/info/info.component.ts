import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProteinService } from '../shared/services/protein.service';
import { Store } from '@ngrx/store';
import { IProductsState } from '../store';
import { LoadProteins } from '../store/actions/protein.action'

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit, OnDestroy {

  private audio = new Audio();

  constructor(private store: Store<IProductsState>, private service: ProteinService) { }

  ngOnInit() {
    this.audio.src = "assets/audio/music.mp3";
    this.audio.play();
    this.audio.volume = 0.05;

    // this.store.dispatch(LoadProteins({ userId: "-M2QtQTCbwrEehtulTaB" }));
  }

  ngOnDestroy() {
    this.audio.pause();
  }

}
