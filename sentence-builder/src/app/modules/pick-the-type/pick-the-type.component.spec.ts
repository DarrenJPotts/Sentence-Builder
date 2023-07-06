import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickTheTypeComponent } from './pick-the-type.component';

describe('PickTheTypeComponent', () => {
  let component: PickTheTypeComponent;
  let fixture: ComponentFixture<PickTheTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PickTheTypeComponent]
    });
    fixture = TestBed.createComponent(PickTheTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
