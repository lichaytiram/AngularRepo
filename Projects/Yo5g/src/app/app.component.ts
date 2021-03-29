import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private onResizeID: ReturnType<typeof setTimeout>;
  private AnimationID: ReturnType<typeof setTimeout>;

  ngOnInit(): void {

    this.gsap();

  }

  ngOnDestroy(): void {

    clearTimeout(this.onResizeID);
    clearTimeout(this.AnimationID);

  }

  private gsap(): void {

    gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

    this.headerDiv();
    this.security();
    this.packages();

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

  private packages(): void {

    const selector: string = '.packages>.ulWrapper>ul';
    const elements: HTMLUListElement = document.querySelector(selector);
    let elementDuplicate: number;

    // Separate the amount of element to duplicate ( to save some performance )
    ScrollTrigger.matchMedia({

      // tablet and desktop
      "(min-width:900px)": () => {

        const value1 = Number.parseInt(getComputedStyle(elements).getPropertyValue('--amount-display-screen-tablet-width-desktop'));
        const value2 = Number.parseInt(getComputedStyle(elements).getPropertyValue('--amount-display-screen-tablet-height-desktop'));
        elementDuplicate = value1 > value2 ? value1 : value2;

      },

      // mobile
      "(max-width:899px)": () => {

        const value1 = Number.parseInt(getComputedStyle(elements).getPropertyValue('--amount-display-screen-width-mobile'));
        const value2 = Number.parseInt(getComputedStyle(elements).getPropertyValue('--amount-display-screen-height-mobile'));
        elementDuplicate = value1 > value2 ? value1 : value2;

      }

    });

    for (let i = 0; i < elementDuplicate; i++)
      elements.appendChild(elements.children[i].cloneNode(true));

  }

  private onResizePreWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(): void {

    clearTimeout(this.onResizeID)
    this.onResizeID = setTimeout(() => {

      const screenWidth: number = window.innerWidth;

      // check if screen on height
      if (screenWidth !== this.onResizePreWidth) {

        this.onResizePreWidth = screenWidth;

        const selector: string = '.packages>.ulWrapper>ul';
        const element: HTMLUListElement = document.querySelector(selector);

        element.style.animation = "none";
        element.offsetHeight; /* trigger reflow */

        this.AnimationID = setTimeout(() => element.style.animation = null, 1);
      }

    }, 100);

  }

}
