import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainorsComponent } from './trainors.component';

describe('TrainorsComponent', () => {
  let component: TrainorsComponent;
  let fixture: ComponentFixture<TrainorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
