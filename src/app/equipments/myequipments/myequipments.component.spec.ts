import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyequipmentsComponent } from './myequipments.component';

describe('MyequipmentsComponent', () => {
  let component: MyequipmentsComponent;
  let fixture: ComponentFixture<MyequipmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyequipmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyequipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
