import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable, of, Subject } from 'rxjs';
import { concatMap, mapTo, mergeMap, scan, startWith, switchMap, takeUntil, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('startButton') startButtonElement!: ElementRef<HTMLButtonElement>;
  @ViewChild('timesShow') timesShowElement!: ElementRef<HTMLHeadingElement>;
  // @ViewChild('startButton', { static: true }) startButtonElement!: ElementRef<HTMLButtonElement>;
  // @ViewChild('timesShow', { static: true }) timesShowElement!: ElementRef<HTMLHeadingElement>;

  endSub$ = new Subject();

  ngOnInit(): void {

    // const startEvent = fromEvent(this.startButtonElement.nativeElement, 'click');
    // console.log(startEvent);

    // startEvent.pipe(
    //   switchMap(() => interval(1000)),
    //   takeUntil(this.endSub$),
    //   mapTo(-1),
    //   scan((state, value) => state + value, 10),
    //   startWith(10),
    //   takeWhile(val => val >= 0),
    // ).subscribe(
    //   res => {
    //     this.timesShowElement.nativeElement.innerHTML = '' + res;
    //   }
    // );

  }

  ngAfterViewInit(): void {

    const startEvent = fromEvent(this.startButtonElement.nativeElement, 'click');
    console.log(startEvent);

    startEvent.pipe(
      switchMap(() => interval(1000)),
      takeUntil(this.endSub$),
      mapTo(-1),
      scan((state, value) => state + value, 10),
      startWith(10),
      takeWhile(val => val >= 0),
    ).subscribe(
      res => {
        this.timesShowElement.nativeElement.innerHTML = '' + res;
      }
    );

  }

  start(): void {

    // interval(1000).pipe(
    //   takeUntil(this.endSub$),
    //   mapTo(-1),
    //   scan((state, value) => state + value, 10),
    //   startWith(10),
    //   takeWhile(val => val >= 0),
    // ).subscribe(
    //   res => {
    //     this.timesShowElement.nativeElement.innerHTML = res;
    //   }
    // )

  }

  end(): void {

    this.endSub$.next();

  }

}
