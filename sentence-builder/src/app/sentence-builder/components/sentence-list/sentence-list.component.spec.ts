import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceListComponent } from './sentence-list.component';

describe('SentenceListComponent', () => {
  let component: SentenceListComponent;
  let fixture: ComponentFixture<SentenceListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SentenceListComponent]
    });
    fixture = TestBed.createComponent(SentenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
