import { Component, OnInit } from '@angular/core';

import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-cop',
  templateUrl: './cop.component.html',
  styleUrls: ['./cop.component.css']
})
export class CopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

    gsap.to('p',{
      scrollTrigger:'p',
      x:200
    })

    const rule = CSSRulePlugin.getRule("p::after");
    console.log(rule);
    gsap.to(rule, { duration: 3, cssRule: { color: "#0000FF" }, x: 300 });
  }

}
