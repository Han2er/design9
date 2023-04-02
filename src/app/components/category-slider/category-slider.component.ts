import { Component, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  Controller,
  EffectCoverflow,
} from 'swiper';

// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  Controller,
  EffectCoverflow,
]);
@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CategorySliderComponent {}
