import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbidlistComponent } from './userbidlist.component';

describe('UserbidlistComponent', () => {
  let component: UserbidlistComponent;
  let fixture: ComponentFixture<UserbidlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserbidlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserbidlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
