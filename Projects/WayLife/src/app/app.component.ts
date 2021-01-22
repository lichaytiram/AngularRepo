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

    const pattrn: RegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
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


    gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

    this.imgContainer();
    this.parallaxContainer();

  }

  private imgContainer(): void {

    const flex1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.imgContainer .walk',
        start: 'bottom 98%',
        end: 'center top',
        toggleActions: 'play reverse play reverse'
      }
    });
    const flex2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.imgContainer .seaAtNight',
        start: 'bottom 98%',
        end: 'center top',
        toggleActions: 'play reverse play reverse'
      }
    });

    flex1
      .from('.walk', { x: -300, opacity: 0, duration: .8, ease: 'power2.out' })
      .from('.yoga', { x: 300, opacity: 0, duration: .8, ease: 'power2.out' }, "<");
    flex2
      .from('.seaAtNight', { x: -300, opacity: 0, duration: 1.1, ease: 'power2.out' })
      .from('.elephant', { x: 300, opacity: 0, duration: 1.1, ease: 'power2.out' }, "<");

    gsap.utils.toArray('.imgContainer .flex>img').forEach((element: HTMLElement) => {
      const spaceHover = gsap.to(element, { scaleX: 1.12, scaleY: 1.12, duration: 1.2, paused: true, ease: 'none' });
      element.addEventListener('mouseenter', () => spaceHover.play());
      element.addEventListener('mouseleave', () => spaceHover.reverse());
    });

  }

  private parallaxContainer(): void {

    const totalScroll = 2600;

    gsap.to(".parallaxContainer", {
      scrollTrigger: {
        pin: ".parallaxContainer",
        end: `+=${totalScroll}`
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".parallaxContainer",
        start: 'top 70%', end: `+=${totalScroll} top`,
        scrub: true, refreshPriority: -1
      }
    });

    gsap.utils.toArray(".parallax-bg-up").forEach((target: any) => {
      const speed = target.dataset.speed;
      const movement = -(target.offsetHeight * speed)
      tl.to(target, { y: movement, ease: "none" }, 0)
    });

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".parallaxContainer",
        start: 'top 70%', end: `+=${totalScroll} 90%`,
        scrub: true, refreshPriority: -1
      }
    });

    gsap.utils.toArray(".parallax-bg-stop").forEach((target: any) => {
      const speed = target.dataset.speed;
      const movement = -(target.offsetHeight * speed)
      tl.to(target, { y: movement, ease: "none" }, 0)
    });

    gsap.to('.skateboard', {
      scrollTrigger: {
        trigger: '.skateboard',
        start: 'top 80%', end: 'center 40%',
        scrub: true
      },
      opacity: 1
    });

    gsap.to('.sunbathing', {
      scrollTrigger: {
        trigger: '.sunbathing',
        start: 'top 80%', end: 'center 40%',
        scrub: true
      },
      scale: 1
    });

    gsap.to('.busTrip', {
      scrollTrigger: {
        trigger: '.busTrip',
        start: 'top center', end: 'center 40%',
        scrub: true
      },
      scale: 0, x: 100
    });

    // parallaxTextContainer
    gsap.to('.parallaxContainer>.firstText', {
      scrollTrigger: {
        trigger: '.parallaxContainer>.firstText',
        start: '600 center', end: '600 30%',
        scrub: true
      },
      x: -100, opacity: 0
    });

    gsap.to('.parallaxContainer>.secondText', {
      scrollTrigger: {
        trigger: '.parallaxContainer>.secondText',
        start: '600 40%', end: '600 20%',
        scrub: true
      },
      x: 100, opacity: 0
    });

    gsap.to('.pillows', {
      scrollTrigger: {
        trigger: '.pillows',
        start: '300 70%', end: '300 center',
        scrub: true
      },
      x: '-=200%', rotation: 360, visibility: 'visible', scale: 1, opacity: 1
    });

    gsap.to('.pillows', {
      scrollTrigger: {
        trigger: '.pillows',
        start: '300 45%', end: '300 20%',
        scrub: true
      },
      opacity: 0, x: '+=150', immediateRender: false
    });

    ScrollTrigger.matchMedia({

      // for desktop screen

      "(min-width:451px)": () => {

        gsap.to('.ship', {
          scrollTrigger: {
            trigger: '.ship',
            start: '500 center', end: '500 30%',
            scrub: true
          },
          skewX: 90, scale: 0.2
        });

      },

      "(min-width:900px)": () => {

        gsap.to('.lookAtTrees', {
          scrollTrigger: {
            trigger: '.lookAtTrees',
            start: '1300 center', end: '1300 35%',
            scrub: true
          },
          filter: 'blur(10px)'
        });

        gsap.to('.lookAtTrees', {
          scrollTrigger: {
            trigger: '.lookAtTrees',
            start: '1300 35%', end: '1300 20%',
            scrub: true
          },
          skewX: 90, scale: 0.05, immediateRender: false
        });

      },

      "(min-width:451px) and (max-width:899px)": () => {

        gsap.to('.lookAtTrees', {
          scrollTrigger: {
            trigger: '.lookAtTrees',
            start: '1200 80%', end: '1200 65%',
            scrub: true
          },
          filter: 'blur(10px)'
        });

        gsap.to('.lookAtTrees', {
          scrollTrigger: {
            trigger: '.lookAtTrees',
            start: '1200 65%', end: '1200 45%',
            scrub: true
          },
          skewX: 90, scale: 0.05, immediateRender: false
        });

      },

      // for mobile screen
      "(max-width:450px)": () => {

        gsap.to('.lookAtTrees', {
          scrollTrigger: {
            trigger: '.lookAtTrees',
            start: '1600 center', end: '1600 35%',
            scrub: true
          },
          filter: 'blur(10px)'
        });

        gsap.to('.lookAtTrees', {
          scrollTrigger: {
            trigger: '.lookAtTrees',
            start: '1600 35%', end: '1600 20%',
            scrub: true
          },
          skewX: 90, scale: 0.05, immediateRender: false
        });

        gsap.to('.ship', {
          scrollTrigger: {
            trigger: '.ship',
            start: '1000 center', end: '1000 30%',
            scrub: true
          },
          skewX: 90, scale: 0.2
        });

      }

    });

    gsap.to('.specialYoga', {
      scrollTrigger: {
        trigger: '.specialYoga',
        start: '700 40%', end: '700 20%',
        scrub: true
      },
      borderRadius: 15
    });

  }

}
