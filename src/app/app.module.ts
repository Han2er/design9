import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './pages/main/main.component';

// for sliders
import { SwiperModule } from 'swiper/angular';
import { WelcomeSliderComponent } from './components/welcome-slider/welcome-slider.component';
import { CategorySliderComponent } from './components/category-slider/category-slider.component';
import { TopProductsComponent } from './components/top-products/top-products.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './pages/product/product.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    WelcomeSliderComponent,
    CategorySliderComponent,
    TopProductsComponent,
    FooterComponent,
    ProductComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
