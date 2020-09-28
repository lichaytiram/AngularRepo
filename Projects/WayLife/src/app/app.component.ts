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

    gsap.timeline({
      scrollTrigger: {
        trigger: '.container',
        start: 'center center',
        end: '+=2300',
        scrub: true,
        // markers: true,
        pin: true
      }
    })
      .to('.outImg', { opacity: 0 })
      .from('.container .container1 .right', { x: innerWidth * 1, opacity: 0 }, "-=0.6")
      .from('.right h2', { y: 100, opacity: 0 })
      .to('.right h2', { y: 50, scale: 0, opacity: 0 })
      .from('.right h3', { y: 100, x: 30, opacity: 0, scale: 0 })
      .from('.right .smallImg', { y: -100, opacity: 0, scale: 0 })

    gsap.utils.toArray('.space .flex>img').forEach((element: HTMLElement) => {
      const spaceHover = gsap.to(element, { scaleX: 1.12, scaleY: 1.12, scaleZ: 1.5, duration: 1.2, paused: true, ease: "ease-in-out" });
      element.addEventListener('mouseenter', () => spaceHover.play());
      element.addEventListener('mouseleave', () => spaceHover.reverse());
    });

    // const space = document.querySelector('.space .flex>img');

    // space.addEventListener("mouseenter", () => spaceHover.play());
    // space.addEventListener("mouseleave", () => spaceHover.reverse());

    // const space = document.querySelector('.space .flex>img');
    // const spaceHover = gsap.to(space, {
    //   scaleX: 1.12, scaleY: 1.12, scaleZ: 1.5,
    //   color: "blue",
    //   duration: 1.5,
    //   paused: true,
    //   ease: "ease-in-out"
    // });

    // space.addEventListener("mouseenter", () => spaceHover.play());
    // space.addEventListener("mouseleave", () => spaceHover.reverse());


    const flex1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.container2 .walk',
        start: 'bottom 90%',
        toggleActions: 'restart none none reverse'
      }
    });
    const flex2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.container2 .seaAtNight',
        start: 'bottom 90%',
        toggleActions: 'restart none none reverse'
      }
    });

    flex1
      .from('.walk', { x: -300, opacity: 0, duration: 4 })
      .from('.yoga', { x: 300, opacity: 0, duration: 4 }, "-=");
    flex2
      .from('.seaAtNight', { x: -300, opacity: 0, duration: 4 })
      .from('.treesIsland', { x: 300, opacity: 0, duration: 4 }, "-=");

    this.parallax();

  }

  private parallax(): void {

    const totalScroll = 3000;

    gsap.to(".parallaxContainer", {
      scrollTrigger: {
        pin: ".parallaxContainer",
        end: `+=${totalScroll}`
      }
    });

    gsap.to(".parallax-bg", {
      scrollTrigger: {
        trigger: ".parallax-bg",
        start: 'center center',
        end: `+=${totalScroll}`,
        scrub: true
      },
      y: (i, target) => -totalScroll * target.dataset.speed,
      ease: "none"
    });

  }

}
