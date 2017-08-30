import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateMarqueeComponent } from './rate-marquee.component';

describe('RateMarqueeComponent', () => {
  let component: RateMarqueeComponent;
  let fixture: ComponentFixture<RateMarqueeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateMarqueeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateMarqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
