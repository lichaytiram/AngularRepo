import { Component, OnInit } from '@angular/core';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WayLife';

  ngOnInit() {

    this.gsap();

  }

  private gsap(): void {

    gsap.registerPlugin(ScrollTrigger);

    const t1 = gsap.timeline({

      scrollTrigger: {
        trigger: '.section2',
        toggleActions: 'restart pause reverse pause',
        scrub: 4,
        start: 'bottom 90%',
        end: 'top 70%',
        markers: true
      }

    });

    t1.to('.section2',
      {
        xPercent: -100,
        opacity: 1,
        duration: 5
      });

  }

}
