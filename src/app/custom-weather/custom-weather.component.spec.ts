import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomWeatherComponent } from './custom-weather.component';

describe('CustomWeatherComponent', () => {
  let component: CustomWeatherComponent;
  let fixture: ComponentFixture<CustomWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
