import { Component , CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ButterflyanimationComponent } from '../../components/butterflyanimation/butterflyanimation.component'

import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {FitAssistantComponent} from '../../components/fit-assistant/fit-assistant.component';
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatIconModule, ButterflyanimationComponent, FitAssistantComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  currentIndex = 0;
  currentSlide = 0;
  intervalId: any;
  productIntervalId: any;
  showFitAssistant = false;

  @Output() closeModal = new EventEmitter<void>();



  products  = [{
      id: 1,
      name: 'Floral Cotton Dress',
      category: 'Dress',
      price: 1899,
      originalPrice: 2299,
      image: "assets/images/common/product/product5.jpg",
      rating: 4.8,
      reviews: 28,
      isNew: true,
      isFavourite: false
    },
    {
      id: 2,
      name: 'Elegant A-Line Dress',
      category: 'Dress',
      price: 2199,
      originalPrice: 2599,
      image: "assets/images/common/product/product6.jpg",
      rating: 4.7,
      reviews: 35,
      isNew: false,
      isFavourite: false
    },
    {
      id: 3,
        name: 'Premium Cotton Kurta',
      category: 'Kurta',
      price: 1699,
      originalPrice: 1999,
      image: "assets/images/common/product/product7.jpg",
      rating: 4.9,
      reviews: 42,
      isNew: true,
      isFavourite: false
    },
    {
      id: 4,
        name: 'Handcrafted Linen Kurta',
      category: 'Kurta',
      price: 1799,
      originalPrice: 2199,
      image: "assets/images/common/product/product8.jpg",
      rating: 4.8,
      reviews: 31,
      isNew: false,
      isFavourite: false
    },
    {
      id: 5,
        name: 'Festive Maxi Dress',
      category: 'Dress',
      price: 2499,
      originalPrice: 2899,
      image: "assets/images/common/product/product4.jpg",
      rating: 5,
      reviews: 55,
      isNew: true,
      isFavourite: false
    },
    {
      id: 6,
        name: 'Classic Straight Kurta',
      category: 'Kurta',
      price: 1599,
      originalPrice: 1899,
      image: "assets/images/common/product/product3.jpg",
      rating: 4.6,
      reviews: 24,
      isNew: false,
      isFavourite: false
    }];

  slides = [
    {
      image: '/assets/images/common/banner.png',
      title: 'Effortless Style',
      subtitle: 'Discover handcrafted outfits designed for comfort.'
    },
    {
      image: '/assets/images/common/banner2.png',
      title: 'Crafted With Elegance',
      subtitle: 'Timeless outfits made exclusively for your measurements.'
    }
  ];

  openFitAssistant() {
    this.showFitAssistant = true;
  }

  closeFitAssistant() {
    this.showFitAssistant = false;
  }

  close() {
    this.closeModal.emit();
  }
  // animation to hero section
  ngAfterViewInit() {
    // const videos = document.querySelectorAll('video');
    //
    // videos.forEach((video, index) => {
    //
    //   video.currentTime = index * 1.5;
    //
    //   video.play();
    //
    // });

    const videos = document.querySelectorAll('video');

    videos.forEach((video, index) => {

      video.muted = true;
      video.playsInline = true;

      video.currentTime = index * 1.5;

      video.play().catch((err) => {
        console.log(`Video ${index + 1} autoplay blocked`, err);
      });

    });


    gsap.utils.toArray<HTMLElement>("section").forEach((section) => {

      gsap.from(section, {

        opacity: 0,

        y: 80,

        duration: 3,

        ease: "power3.out",

        scrollTrigger: {

          trigger: section,

          start: "top 85%",

          toggleActions: "play none none reverse"

        }

      });

    });
  }


  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 4000);

    this.productIntervalId = setInterval(() => {
      this.nextProductSlide();
    }, 3500);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    clearInterval(this.productIntervalId);
  }

  collections = [
    {
      title: 'Dresses',
      // image: 'https://instagram.fccj6-2.fna.fbcdn.net/v/t51.82787-15/538133391_17890380252327068_2070876389722684926_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=MzcwNTM2NDczODg2NTI4Njc3Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=PRJihhd6_TMQ7kNvwHlheY8&_nc_oc=AdpwM2nqt1afYVrXRQkxxrpWSbE1Kp13psa8B7oiY3iVfjda0FabHlC9NQU9DsLFJJrJWUK8knjC3dVmz7s5RMD9&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fccj6-2.fna&_nc_gid=CZpGYKmUz9GxVaUNxFbedw&_nc_ss=7a22e&oh=00_AQF3aeb4cKYr3AYIi7AKUeq1I-nzofWrc1Z4C7dkcf6-bQ&oe=6A713428'
      image: 'assets/images/common/product/product1.jpg'
    },
    {
      title: 'Kurtas',
      // image: 'https://instagram.fccj6-2.fna.fbcdn.net/v/t51.82787-15/631620020_17911728168327068_1513114476896828185_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=MzgzNTAyNjg3MDY2NDQ5ODM2NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=zvF69VJFrBMQ7kNvwEbfxN7&_nc_oc=AdrA0EgQbTnsTnH4wGGLFiFZOmkGHw8W2snzwjM7bprs57JWAfYA4NjXp0JBqfsW2BHtJWIyykN7ZeChCD0Wk1Xf&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fccj6-2.fna&_nc_gid=gFUuQJ1bZdm1IUIFTZGpag&_nc_ss=7a22e&oh=00_AQEDesd-cSSBtGt03mVODR62qk7zwGV_Adz_klIYDPtK9w&oe=6A71399D'
      image: 'assets/images/common/product/product2.jpg'
    },
    {
      title: 'New Arrivals',
      image: 'assets/images/common/product/product3.jpg'
    },
    {
      title: 'Best Sellers',
      image: 'assets/images/common/product/product4.jpg'
    }
  ];

  nextProductSlide() {

    if (this.currentIndex < this.products.length - 4) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }

  }

  prevSlide() {

    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.products.length - 4;
    }

  }

}
