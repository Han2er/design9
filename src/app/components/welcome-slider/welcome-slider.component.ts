import { Component, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper';

// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
]);

@Component({
  selector: 'app-welcome-slider',
  templateUrl: './welcome-slider.component.html',
  styleUrls: ['./welcome-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WelcomeSliderComponent {}
