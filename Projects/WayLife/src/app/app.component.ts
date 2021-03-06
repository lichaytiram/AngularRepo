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
      this.emailSentSuccessfully = true; // will be on callback^
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
    this.informationContainer();

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

  private informationContainer(): void {

    // pin for media query
    const informationContainer: string = '.informationContainer';

    // layer images for cover
    const layer0: string = '.informationContainer>.cover>img.layer0'
    const layer1: string = '.informationContainer>.cover>img.layer1'
    const layer2: string = '.informationContainer>.cover>img.layer2'
    const layer3: string = '.informationContainer>.cover>img.layer3'
    const layer5: string = '.informationContainer>.cover>img.layer5'
    ScrollTrigger.matchMedia({

      // for desktop && height position on mobile
      "(min-height:451px)": () => {

        // main container
        gsap.to(informationContainer, {
          scrollTrigger: {
            trigger: informationContainer,
            pin: true,
            pinSpacing: false,
            refreshPriority: -1
          }
        });

        // layer pictures
        gsap.to(layer0, {
          scrollTrigger: {
            trigger: layer0,
            start: 'top top',
            scrub: true
          },
          y: 50, ease: 'none'
        });

        gsap.to(layer1, {
          scrollTrigger: {
            trigger: layer1,
            start: 'top top',
            scrub: true
          },
          y: 15, x: 30, ease: 'none'
        });

        gsap.to(layer2, {
          scrollTrigger: {
            trigger: layer2,
            start: 'center center',
            scrub: true
          },
          x: -30, ease: 'none'
        });

        gsap.to(layer3, {
          scrollTrigger: {
            trigger: layer3,
            start: 'center center',
            scrub: true
          },
          yPercent: -10, ease: 'none'
        });

        gsap.to(layer5, {
          scrollTrigger: {
            trigger: layer5,
            start: 'center 20%',
            scrub: true
          },
          x: 20, ease: 'none'
        });

      },

      // for width position on mobile
      "(max-height:450px)": () => {

        // main container
        gsap.to(informationContainer, {
          scrollTrigger: {
            trigger: informationContainer,
            start: '10% top',
            pin: true,
            pinSpacing: false,
            refreshPriority: -1
          }
        });

        // layer pictures
        gsap.to(layer0, {
          scrollTrigger: {
            trigger: layer0,
            start: 'top top',
            scrub: true
          },
          y: 15, ease: 'none'
        });

        gsap.to(layer1, {
          scrollTrigger: {
            trigger: layer1,
            start: 'top 10%',
            scrub: true
          },
          y: 15, x: 10, ease: 'none'
        });

        gsap.to(layer2, {
          scrollTrigger: {
            trigger: layer2,
            start: 'center center',
            scrub: true
          },
          x: -10, ease: 'none'
        });

        gsap.to(layer3, {
          scrollTrigger: {
            trigger: layer3,
            start: 'center center',
            scrub: true
          },
          yPercent: -7, ease: 'none'
        });

        gsap.to(layer5, {
          scrollTrigger: {
            trigger: layer5,
            start: 'center 20%',
            scrub: true
          },
          x: 15, ease: 'none'
        });

      },

      "all": () => {

        // animation for images
        const images: string = '.informationContainer>.informationInnerContainer>.containerCard>ul>li>img';
        const imageActions = [];
        let clickable: boolean = false;
        ScrollTrigger.saveStyles(images);
        ScrollTrigger.addEventListener("refreshInit", () => imageActions.forEach(elementAnimation => elementAnimation.invalidate()));

        gsap.to(images, {
          scrollTrigger: {
            trigger: images,
            start: 'top center'
          },
          top: 100, y: 5, x: 30, duration: 1.5, ease: 'power4.out', rotate: '5deg',
          yoyo: true, repeat: 1, repeatDelay: 0, yoyoEase: 'power4.in',
          onComplete: function () {
            this.kill();
            clickable = true;
          }
        });

        // events
        gsap.utils.toArray(images).forEach((element: HTMLElement, index) => {

          // click event
          const actionAll = gsap.to(element, {
            right: 50, top: 200, scale: 1.4, opacity: 1, skewX: 0, zIndex: 5, duration: 0.45,
            yoyo: true, repeat: 1, repeatDelay: 0.4, paused: true
          });
          const actionMobileHeight = gsap.to(element, {
            right: 200, top: 60, scale: 1.4, opacity: 1, skewX: 0, zIndex: 5, duration: 0.45,
            yoyo: true, repeat: 1, repeatDelay: 0.4, paused: true
          });
          element.addEventListener("click", () => {
            const screenHeightSize: number = window.innerHeight;
            if (screenHeightSize >= 450) {
              imageActions[index] = actionAll;
              elementHover.pause(0);
              clickable && actionAll.play(0);
            } else {
              imageActions[index] = actionMobileHeight;
              elementHover.pause(0);
              clickable && actionMobileHeight.play(0);
            }
          });

          // hover event
          const elementHover = gsap.to(element, {
            scale: 1.05, duration: .3, ease: 'power4.out', yoyo: true, repeat: 1, yoyoEase: 'power4.out', paused: true
          });
          element.addEventListener("mouseenter", () => {
            const screenHeightSize: number = window.innerHeight;
            if (screenHeightSize >= 450) {
              if (!actionAll.isActive() == true)
                clickable && elementHover.play(0);
            } else {
              if (!actionMobileHeight.isActive() == true)
                clickable && elementHover.play(0);
            }
          });

        });

      }

    });

  }

}
