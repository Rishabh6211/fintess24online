import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MybidProgressbarComponent } from './mybid-progressbar.component';

describe('MybidProgressbarComponent', () => {
  let component: MybidProgressbarComponent;
  let fixture: ComponentFixture<MybidProgressbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MybidProgressbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MybidProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
