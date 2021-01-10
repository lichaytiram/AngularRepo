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


    this.imgContainer();
  }

  private imgContainer() {

    const selector: string = ".container>section>.imgContainer";

    ScrollTrigger.matchMedia({
      "(min-width:1400px)": () => {
        ScrollTrigger.saveStyles(`${selector}>img , ${selector}>p`);
      }
    });

    ScrollTrigger.matchMedia({
      "(max-width:1399px)": () => {

        gsap.utils.toArray(selector).forEach((targetElementContainer: HTMLElement) => {

          if (targetElementContainer.hasChildNodes && targetElementContainer.childNodes.length == 2) {

            const imgElement: Element = targetElementContainer.children[0];
            const pElement: Element = targetElementContainer.children[1];

            gsap.to(imgElement, {
              scrollTrigger: {
                trigger: imgElement, start: 'top 70%'
              },
              borderRadius: '50', opacity: 1, scale: '1.02', zIndex: '1', ease: 'Power1.Out', duration: '1.2'
            });

            gsap.to(pElement, {
              scrollTrigger: {
                trigger: imgElement, start: 'top 70%'
              },
              opacity: 0, ease: 'Power1.Out', duration: '1.2'
            });
          }
          else console.log('update imgContainer gsap mod');

        });

      }
    });

  }




}
