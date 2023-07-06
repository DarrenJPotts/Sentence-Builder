import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordJumbleComponent } from './word-jumble.component';

describe('WordJumbleComponent', () => {
  let component: WordJumbleComponent;
  let fixture: ComponentFixture<WordJumbleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WordJumbleComponent]
    });
    fixture = TestBed.createComponent(WordJumbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
