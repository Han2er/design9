import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeSliderComponent } from './welcome-slider.component';

describe('WelcomeSliderComponent', () => {
  let component: WelcomeSliderComponent;
  let fixture: ComponentFixture<WelcomeSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
