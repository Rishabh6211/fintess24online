import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentPayComponent } from './equipment-pay.component';

describe('EquipmentPayComponent', () => {
  let component: EquipmentPayComponent;
  let fixture: ComponentFixture<EquipmentPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
