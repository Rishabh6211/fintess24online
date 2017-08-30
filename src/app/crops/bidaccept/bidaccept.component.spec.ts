import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidAcceptComponent } from './bidaccept.component';

describe('BidAcceptComponent', () => {
  let component: BidAcceptComponent;
  let fixture: ComponentFixture<BidAcceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidAcceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
