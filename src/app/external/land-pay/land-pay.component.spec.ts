import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandPayComponent } from './land-pay.component';

describe('LandPayComponent', () => {
  let component: LandPayComponent;
  let fixture: ComponentFixture<LandPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
