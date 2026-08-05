import {Component, ElementRef, ViewChild} from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-butterflyanimation',
  imports: [],
  templateUrl: './butterflyanimation.component.html',
  styleUrl: './butterflyanimation.component.scss'
})
export class ButterflyanimationComponent {
  @ViewChild('butterfly',{static:true})
  butterfly!:ElementRef<HTMLImageElement>;
  @ViewChild('wrapper', { static: true })
  wrapper!: ElementRef;

  ngAfterViewInit(){

    if (window.innerWidth < 1024) {
      return;
    }

    const svg = this.wrapper.nativeElement;

    const leftUpper = svg.querySelector("#leftUpperWing");
    const rightUpper = svg.querySelector("#rightUpperWing");
    const leftLower = svg.querySelector("#leftLowerWing");
    const rightLower = svg.querySelector("#rightLowerWing");
    const body = svg.querySelector("#body");

    console.log(leftUpper, rightUpper, leftLower, rightLower);

    // Initial Position
    gsap.set(svg, {
      x: 120,
      y: 120
    });

    // Wing Flapping
    const flap = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: {
        duration: 0.16,
        ease: "sine.inOut"
      }
    });

    flap
      .to(leftUpper, {
        rotation: -18,
        transformOrigin: "100% 70%"
      }, 0)

      .to(rightUpper, {
        rotation: 18,
        transformOrigin: "0% 70%"
      }, 0)

      .to(leftLower, {
        rotation: -10,
        transformOrigin: "100% 25%"
      }, 0)

      .to(rightLower, {
        rotation: 10,
        transformOrigin: "0% 25%"
      }, 0)

      .to(body, {
        y: -2,
        rotation: 1,
        transformOrigin: "50% 50%"
      }, 0);

    // Floating
    gsap.to(svg, {
      rotation: 4,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(svg, {
      y: "+=8",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Fly to headings
    const sections = [
      "heroTitle",
      "categoryTitle",
      "productTitle",
      "subscribeTitle",
      "points"
    ];

    sections.forEach(id => {

      ScrollTrigger.create({

        trigger: "#" + id,

        start: "top center",

        onEnter: () => this.flyTo(id),

        onEnterBack: () => this.flyTo(id)

      });

    });

  }
  flyTo(id: string) {

    const target = document.getElementById(id);

    if (!target) return;

    const rect = target.getBoundingClientRect();

    gsap.to(this.wrapper.nativeElement, {

      x: rect.left + rect.width / 2,

      y: rect.top + rect.height / 2,

      duration: 1.5,

      ease: "power2.inOut"

    });

  }

}
