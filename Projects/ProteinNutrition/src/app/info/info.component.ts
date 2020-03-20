import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProteinService } from '../shared/services/protein.service';
import { Store } from '@ngrx/store';
import { IProductsState } from '../store';
import { updateUser } from '../store'
import { IRegister } from '../shared/models/iRegister.model';
import { Register } from '../shared/models/register.model';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit, OnDestroy {

  private audio = new Audio();

  constructor(private store: Store<IProductsState>, private proteinService: ProteinService, private userService: UserService) { }

  ngOnInit() {
    this.audio.src = "assets/audio/music.mp3";
    this.audio.play();
    this.audio.volume = 0.05;
  }

  ngOnDestroy() {
    this.audio.pause();
  }

}
