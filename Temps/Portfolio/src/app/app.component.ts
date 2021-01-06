import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  ngOnInit() {

    this.gsap();

  }

  private gsap(): void {

    gsap.registerPlugin(ScrollTrigger);

    this.container();

  }

  private container(): void {

    const selector: string = ".container>section>.textContainer>";

    gsap.utils.toArray(`${selector}.information`).forEach((targetElement: HTMLElement) => {
      gsap.to(targetElement, {
        scrollTrigger: {
          trigger: targetElement, start: '0 85%', toggleActions: 'play reverse play reverse'
        },
        y: '0', duration: '.7', ease: 'none', opacity: '1'
      });
    });

    gsap.utils.toArray(`${selector}.purpose`).forEach((targetElement: HTMLElement) => {
      gsap.to(targetElement, {
        scrollTrigger: {
          trigger: targetElement, start: '0 85%', toggleActions: 'play reverse play reverse'
        },
        y: '0', duration: '.7', ease: 'none', opacity: '1'
      });
    });

    gsap.utils.toArray(`${selector}.links`).forEach((targetElement: HTMLElement) => {
      gsap.to(targetElement, {
        scrollTrigger: {
          trigger: targetElement, start: '0 92%', toggleActions: 'play reverse play reverse'
        },
        y: '0', duration: '.7', ease: 'none', opacity: '1'
      });
    });

  }

}
