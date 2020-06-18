import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

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

    gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

    const t1 = gsap.timeline({

      scrollTrigger: {
        trigger: '.section1',
        toggleActions: 'restart pause reverse pause',
        scrub: 4,
        start: 'bottom 90%',
        end: 'top 70%',
        // markers: true
      }

    });

    t1.to('.section2',
      {
        xPercent: -100,
        opacity: 1,
        duration: 5
      });

    const t2 = gsap.timeline({

      scrollTrigger: {
        trigger: '.container2',
        toggleActions: 'restart pause reverse pause',
        scrub: 4,
        start: 'bottom 90%',
        end: 'top center',
        markers: true
      }

    });

    var container2Before = CSSRulePlugin.getRule(".cc::after");
    t2.from('.container2 .left img', {
      x: innerWidth * 1,
      opacity: 0,
      duration: 4
    })
      gsap.to(container2Before, 3, { cssRule: { color: "#0000FF", opacity: 0 } });
    // gsap.to(CSSRulePlugin.getRule(".cc:after"), 3, { cssRule: { color: "#0000CC", opacity: 0 } });
    // gsap.to(container2Before, {duration: 3, cssRule: {opacity:0 }});

  }

}
