import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycropsComponent } from './mycrops.component';

describe('MycropsComponent', () => {
  let component: MycropsComponent;
  let fixture: ComponentFixture<MycropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
