import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { MainSectionComponent } from './components/main-section/main-section.component';

// for sliders
import { SwiperModule } from 'swiper/angular';
import { WelcomeSliderComponent } from './components/welcome-slider/welcome-slider.component';
import { CategorySliderComponent } from './components/category-slider/category-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    MainSectionComponent,
    WelcomeSliderComponent,
    CategorySliderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
