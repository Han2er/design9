import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySliderComponent } from './category-slider.component';

describe('CategorySliderComponent', () => {
  let component: CategorySliderComponent;
  let fixture: ComponentFixture<CategorySliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorySliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
