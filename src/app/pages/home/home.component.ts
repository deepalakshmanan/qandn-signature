import { Component , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule, MatIconModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  currentIndex = 0;
  currentSlide = 0;
  intervalId: any;
  productIntervalId: any;

  products  = [{
      id: 1,
      name: 'Floral Cotton Dress',
      category: 'Dress',
      price: 1899,
      originalPrice: 2299,
      image: 'https://instagram.fccj6-2.fna.fbcdn.net/v/t51.82787-15/729684136_17933838039327068_149354681482594690_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=MzkzMDI5MDM5Mjc4NjAzMzYwNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=ZW89lW1U4JEQ7kNvwEPBVbF&_nc_oc=AdrRgNLEL1Fy2G3WEC4JYQfmiHi8ImkPnFwoszadPV4kpI9hPpU0fuRNGJZQWK5djVCga3sBniE8RJbLO0lNyzkJ&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fccj6-2.fna&_nc_gid=RzZx7ckZidNo1tGK4HyJtw&_nc_ss=7a22e&oh=00_AQGtQDrefP4q-0bcF47QIt_gqT1Wy5n0cmuI463VUw1-Yw&oe=6A70CBA8',
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
      image: 'https://instagram.fccj6-2.fna.fbcdn.net/v/t51.82787-15/726925031_17932231125327068_7204731691552442616_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=MzkyNDI0NzA2MzA2OTg4MjQ2OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=yYqM6erFAU0Q7kNvwGuGHSv&_nc_oc=AdqOthRQKvQbht7wBs5qpiVaMIdZYR9Q-nGB8VxeAT3tICvAOe--CbTLz54bYurGE8HxBv6nuSMIF2_kEviHPw3v&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fccj6-2.fna&_nc_gid=o9WK-EEto8hWaQlWS-zVGw&_nc_ss=7a22e&oh=00_AQEicnEuKrdYza7SVmyY-RKImPODx2mWVMF58k3TvO0HLw&oe=6A713AC5',
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
      image: 'https://instagram.fccj6-2.fna.fbcdn.net/v/t51.82787-15/723208255_17931383283327068_5432007474249282017_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=MzkyMDYxNzcyMTQzMzQ4ODg1MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=V2MqzYFm2S4Q7kNvwFe55r1&_nc_oc=AdrxA4GgaDjtynQ9cek3j-gzJxAtcytLDjozJwvukjXkB58RXRn2sO-5RVb5Ze1j6m3aqRbERgl46XzBrilo51uC&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fccj6-2.fna&_nc_gid=o9WK-EEto8hWaQlWS-zVGw&_nc_ss=7a22e&oh=00_AQGl-7J0f00gjR00pvrJVaLxF5YLmWPuGxuYjyOKEm7PTA&oe=6A715A44',
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
      image: 'https://instagram.fccj6-1.fna.fbcdn.net/v/t51.82787-15/719585430_17930168868327068_8440680211741227208_n.heic?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=100&ig_cache_key=MzkxNTAxNDgzODI4OTc3NTIxOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMjgyNC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=590ICifLN_cQ7kNvwFSXOcy&_nc_oc=AdqIppKDsZtnThfZveKcAhG0GZ5hpNwer4vx1nUyN3HDJAWIAqU0G-Q59CoeKLp7DqhIgriYv7HYgrfp6YCEme6t&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fccj6-1.fna&_nc_gid=o9WK-EEto8hWaQlWS-zVGw&_nc_ss=7a22e&oh=00_AQHe4kQzjk1PwBrCh06N5urZRisi12K4FvJ6t9NUuT6Frw&oe=6A715C02',
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
      image: 'https://instagram.fccj6-1.fna.fbcdn.net/v/t51.82787-15/713725280_17929321011327068_2024436268770728814_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=111&ig_cache_key=MzkxMTI0NDgwODY5OTgwNjU4OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=8ExF_qbYRCcQ7kNvwFWQaNn&_nc_oc=Adqb3x2rYKKuAWWyR2t4omQhsFtZbVXKWDShz3TtMUJHUP47hkHjBhqshND1HrVzkJq-pf0mwYqHgft_L3rwLDOm&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fccj6-1.fna&_nc_gid=ldRT_vjefvL6gGjkSyClzg&_nc_ss=7a22e&oh=00_AQHjl5pHTTA1eETJPmkEjMRVWbkxEn_ZdhuDKvQJ4fwoPg&oe=6A7146C9',
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
      image: 'https://instagram.fccj6-1.fna.fbcdn.net/v/t51.82787-15/710098623_17928795495327068_319527326862185657_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzkwODk4NDY0NzAyMTExMzE0MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=gP7wUUg8sZoQ7kNvwEotNKw&_nc_oc=Adp7phrXt_AVIAa17FTDSMwIUJBvECAveN7U29tR1Mp45Hc8sBUXiedzOpiJHWvfg89e6fugwtlHNXQrWEBybV5s&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fccj6-1.fna&_nc_gid=ldRT_vjefvL6gGjkSyClzg&_nc_ss=7a22e&oh=00_AQFFb-qlxYrN76_ngzRhpV0V7gnC53Maa2Cc4qbwmgVVkw&oe=6A713CC5',
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
      image: 'https://instagram.fccj6-2.fna.fbcdn.net/v/t51.82787-15/538133391_17890380252327068_2070876389722684926_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=MzcwNTM2NDczODg2NTI4Njc3Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=PRJihhd6_TMQ7kNvwHlheY8&_nc_oc=AdpwM2nqt1afYVrXRQkxxrpWSbE1Kp13psa8B7oiY3iVfjda0FabHlC9NQU9DsLFJJrJWUK8knjC3dVmz7s5RMD9&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fccj6-2.fna&_nc_gid=CZpGYKmUz9GxVaUNxFbedw&_nc_ss=7a22e&oh=00_AQF3aeb4cKYr3AYIi7AKUeq1I-nzofWrc1Z4C7dkcf6-bQ&oe=6A713428'
    },
    {
      title: 'Kurtas',
      image: 'https://instagram.fccj6-2.fna.fbcdn.net/v/t51.82787-15/631620020_17911728168327068_1513114476896828185_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=MzgzNTAyNjg3MDY2NDQ5ODM2NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=zvF69VJFrBMQ7kNvwEbfxN7&_nc_oc=AdrA0EgQbTnsTnH4wGGLFiFZOmkGHw8W2snzwjM7bprs57JWAfYA4NjXp0JBqfsW2BHtJWIyykN7ZeChCD0Wk1Xf&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fccj6-2.fna&_nc_gid=gFUuQJ1bZdm1IUIFTZGpag&_nc_ss=7a22e&oh=00_AQEDesd-cSSBtGt03mVODR62qk7zwGV_Adz_klIYDPtK9w&oe=6A71399D'
    },
    {
      title: 'New Arrivals',
      image: 'https://instagram.fccj6-1.fna.fbcdn.net/v/t51.82787-15/755432561_17938708515327068_7891877604681636107_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=Mzk1MDQ4OTc0Mzg2OTI1MDU0Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=q8QXOKrMdu4Q7kNvwGxeCki&_nc_oc=AdqY_p5NsBHEFiLRUh2n0LayiJrbD5Qeq_aZwwAI79QXgg-3m71KFAW_uz0hk991Esha0TCt67UrCdlPAdW3-n--&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fccj6-1.fna&_nc_gid=iwm5fUYThIZXkTeLhIz2og&_nc_ss=7a22e&oh=00_AQHSFl0iaHnJZISlxd3EG4Tgujc4WG-wGOgjr7v2o5GAQg&oe=6A70A74C'
    },
    {
      title: 'Best Sellers',
      image: 'https://instagram.fccj6-1.fna.fbcdn.net/v/t51.82787-15/732986824_17935352511327068_5775080947415106449_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=MzkzNjU3MDQ3MDkwNjE1MTAzNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=p2cgpsOX0QgQ7kNvwEBZJ3Y&_nc_oc=AdqzuK_BwxHUzmXBuNVhl7zJ7JayIEw1Y9Okz_h2BcD2M-VuR8hlS81E7ARY3ufVD9exXW_hOfxpdImQeKt4UQ27&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fccj6-1.fna&_nc_gid=RzZx7ckZidNo1tGK4HyJtw&_nc_ss=7a22e&oh=00_AQGxeVPN_m_KgKqiT53IO12c9kjkjUe8n8aPAkSWZ87qGQ&oe=6A70D7B1'
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
