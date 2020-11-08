import { Component, OnInit } from '@angular/core';

import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IUser } from './shared/models/IUser.model';
import { User } from './shared/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WayLife';

  public user: IUser;
  public inputTouch: boolean;
  public inputValid: boolean;
  public emailValid: boolean;
  public emailSentSuccessfully: boolean;

  ngOnInit() {

    this.user = new User(undefined, undefined, undefined);

    this.gsap();

  }

  public submit(): void {

    this.inputTouch = true;
    this.inputValidation();

    if (this.inputValid) {
      console.log(this.user); // email will send by http request to the server on real website
      this.emailSentSuccessfully = true;
    }

  }

  public inputValidation(): void {

    const user: IUser = this.user;
    if (!user.firstName || !user.lastName || !user.email ||
      user.firstName.length <= 0 || user.lastName.length <= 0 || user.email.length <= 0) {
      this.inputValid = false;
      return;
    }

    const pattrn = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    const regex = new RegExp(pattrn);
    if (!regex.test(user.email)) {
      this.inputValid = false;
      return;
    }

    this.inputValid = true;

  }

  public toggleMessage(): void {
    this.emailSentSuccessfully = false;
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
