import { Component, OnInit } from '@angular/core';
import { IProtein } from '../shared/models/iProtein.model';
import { Protein } from '../shared/models/protein.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public login: boolean;
  // public egg: number;
  public protein: IProtein;

  constructor() { }

  ngOnInit() {

    if (!!localStorage.getItem("login")) {
      this.login = true;
      this.protein = new Protein();
    }

  }

  public isLogin(): void {
    this.login = true;
    localStorage.setItem('login', "true");
  }

  public submit() {
    console.log(this.protein.eggs);
    console.log(this.protein);

  }

}
