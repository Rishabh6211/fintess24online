import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainorPortfolioComponent } from './trainor-portfolio.component';

describe('TrainorPortfolioComponent', () => {
  let component: TrainorPortfolioComponent;
  let fixture: ComponentFixture<TrainorPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainorPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainorPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
