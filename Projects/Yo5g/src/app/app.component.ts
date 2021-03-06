import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {

    this.gsap();

  }

  private gsap(): void {

    gsap.registerPlugin(ScrollTrigger);

    this.headerDiv();
    this.security();
  }

  private headerDiv(): void {

    const headerDiv: string = 'header+div>h3';

    const headerDivDesktop = gsap.timeline({
      scrollTrigger: {
        trigger: headerDiv,
        start: 'top 60%',
        end: 'top 25%',
        scrub: true
      }
    });

    headerDivDesktop.to(headerDiv, { scale: 1.25, duration: .5 });
    headerDivDesktop.to(headerDiv, { color: 'black', backgroundColor: 'rgba(187, 185, 183, 0.5)', duration: 1 });

  }

  private security(): void {

    const h1: string = '.security>.textBigContainer>h1';
    const textBigContainerP: string = '.security>.textBigContainer>p';

    const h2: string = '.security>.textSmallContainer>h2';
    const textSmallContainerP: string = '.security>.textSmallContainer>p';

    gsap.to(h1, {
      scrollTrigger: {
        trigger: h1,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      },
      y: 0, opacity: 1, duration: 1.1, ease: 'power2.out'
    });

    gsap.to(textBigContainerP, {
      scrollTrigger: {
        trigger: textBigContainerP,
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      },
      x: 0, opacity: 1, duration: 1.5, ease: 'power2.out'
    });

    gsap.to(h2, {
      scrollTrigger: {
        trigger: h2,
        start: 'top 75%',
        toggleActions: 'play reverse play reverse'
      },
      y: 0, opacity: 1, duration: 1.1, ease: 'power2.out'
    });

    gsap.to(textSmallContainerP, {
      scrollTrigger: {
        trigger: textSmallContainerP,
        start: 'top 70%',
        toggleActions: 'play reverse play reverse'
      },
      x: 0, opacity: 1, duration: 1.5, ease: 'power2.out'
    });

  }

}
