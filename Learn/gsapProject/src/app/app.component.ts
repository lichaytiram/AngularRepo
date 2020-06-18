import { Component, OnInit } from '@angular/core';


// import { gsap } from "gsap";
// import { CSSRulePlugin } from "gsap/CSSRulePlugin";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gsapProject';

  ngOnInit() {

    // gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

    // gsap.from('div h1', {
    //   scrollTrigger: 'div h1',
    //   y: 200,
    //   duration: 5
    // });

    // const rule = CSSRulePlugin.getRule(".cc::before");
    // console.log(rule);
    
    // gsap.to(rule, 3, { cssRule: { color: "#0000FF", x: 50 }, x: 300 });

    gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

    gsap.from("h1", {
      scrollTrigger: "h1",
      y: 200,
      duration: 5
    });

    const rule = CSSRulePlugin.getRule(".cc::before");
    console.log(rule);
    gsap.to(rule, { duration: 3, cssRule: { color: "#0000FF" }, x: 300 });
  }

}
