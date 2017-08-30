import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidslistComponent } from './bidslist.component';

describe('BidslistComponent', () => {
  let component: BidslistComponent;
  let fixture: ComponentFixture<BidslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
