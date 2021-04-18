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

  private onResizePreWidth: number;

  private onResizeID: ReturnType<typeof setTimeout>;
  private clearTimeoutDestroy: ReturnType<typeof setTimeout>[];

  ngOnInit(): void {

    this.onResizePreWidth = window.innerWidth;
    this.clearTimeoutDestroy = [];

    this.gsap();

    const mainAnimation: string = '.packages>.container>.ulWrapper>.animation';
    const innerAnimation: string = '.packages>.container>.ulWrapper>.animation>ul';

    const mainElement: HTMLUListElement = document.querySelector(mainAnimation);
    const innerElement: HTMLUListElement = document.querySelector(innerAnimation);
    mainElement.addEventListener('animationend', () => {
      console.log('Animation ended');
    });

  }

  ngOnDestroy(): void {

    this.clearTimeoutDestroy.push(this.onResizeID);
    this.clearTimeoutDestroy.forEach(ID => clearTimeout(ID));

  }

  private gsap(): void {

    gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

    this.gsapHeaderDiv();
    this.gsapSecurity();
    this.gsapPackages();

  }

  private gsapHeaderDiv(): void {

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

  private gsapSecurity(): void {

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

  // packages typescript section

  private gsapPackages(): void {

    const selector: string = '.packages>.container>.ulWrapper>.animation>ul';
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

  @HostListener('window:resize', ['$event'])
  onResize(): void {

    clearTimeout(this.onResizeID)
    this.onResizeID = setTimeout(() => {

      const screenWidth: number = window.innerWidth;

      // check if screen on height
      if (screenWidth !== this.onResizePreWidth) {

        this.onResizePreWidth = screenWidth;

        this.packagesRestartAnimation();
      }

    }, 100);

  }

  private packagesRestartAnimation(): void {

    const selector: string = '.packages>.container>.ulWrapper>.animation>ul';
    const element: HTMLUListElement = document.querySelector(selector);

    element.style.animation = "none";
    element.offsetHeight; /* trigger reflow */

    this.clearTimeoutDestroy.push(setTimeout(() => element.style.animation = null, 1));

  }

  private jump = 0;
  // private index = 0;
  public packagesArrow(direction: string): void {

    const mainAnimation: string = '.packages>.container>.ulWrapper>.animation';
    const innerAnimation: string = '.packages>.container>.ulWrapper>.animation>ul';

    const mainElement: HTMLUListElement = document.querySelector(mainAnimation);
    const innerElement: HTMLUListElement = document.querySelector(innerAnimation);
    // mainElement.style.animationPlayState = 'paused';
// console.log(mainElement.length);



    requestAnimationFrame(() => {

      this.jump += 240;

      innerElement.style.transform = `translate(${this.jump}px)`;
      // innerElement.appendChild(innerElement.children[this.index].cloneNode(true));
      // this.index++;
    });

  }

  // @HostListener('window:click', ['$event.target:arrow']) onClick(e){
  //   window.alert('Current DOM element is');
  //   console.log(e);
  // }

}
