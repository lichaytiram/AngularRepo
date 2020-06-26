import { Component, OnInit } from '@angular/core';

import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
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


    // gsap.to('.container .container1', {
    //   scrollTrigger: {
    //     trigger: '.container .container1',
    //     start: 'center center',
    //     end:'bottom top',
    //     scrub: true,
    //     pin:true,
    //     markers: true
    //   },
    //   x: innerWidth *-1

    // })

    gsap.timeline({
      scrollTrigger: {
        trigger: '.container',
        start: 'center center',
        end: '+=2300',
        scrub: true,
        markers: true,
        pin: true
      }
    })
      .to('.outImg', { opacity: 0 })
      .from('.container .container1 .right', { x: innerWidth * 1, opacity: 0 }, "-=0.6")
      .from('.right h2', { y: 100, opacity: 0 })
      .to('.right h2', { y: 50, scale: 0, opacity: 0 })
      .from('.right h3', { y: 100, x: 30, opacity: 0, scale: 0 })
      .from('.right .smallImg', { y: -100, opacity: 0, scale: 0 })



  }

}
