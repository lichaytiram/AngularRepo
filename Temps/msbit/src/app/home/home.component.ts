import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public myNumber: string = '';

  constructor(private router: Router) { }
  formGroup: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.formGroup.valueChanges.pipe(tap(() => {
      console.log(this.formGroup.getRawValue())
    })).subscribe();
  }

  public logIt() {
    
    console.log('com',this.myNumber.replace(/\s+/g, ''));
    // this.router.navigate(["home", this.myNumber]);

  }

  public setMyNumber($event: any) {
    this.myNumber = $event;
  }

}
