import { Component, OnInit } from '@angular/core';


// import { gsap } from "gsap";
// import { CSSRulePlugin } from "gsap/CSSRulePlugin";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gsapProject';

  ngOnInit() {

    gsap.registerPlugin(ScrollTrigger);

    // gsap.set(".container2", { width: 500 });
    // gsap.to(".container2", {
    //   scrollTrigger: {
    //     trigger: ".container2",
    //     start: "top top",
    //     end: () => innerWidth * 3,
    //     scrub: true,
    //     anticipatePin: 1,
    //     pin: true
    //   },
    //   xPercent: -100,
    //   x: innerWidth
    // });

    this.gsap();

  }

  private gsap(): void {

    gsap.timeline({
      scrollTrigger: {
        trigger: 'section',
        start: 'center 55%',
        end: 'bottom top',
        scrub: true,
        markers: true,
        pin: true
      }
    })
      .to('.text', { scale: 0 })
      .from('.box1', { x: innerWidth * -1 })
      .from('.box2', { x: innerWidth * 1 })

  }

}
