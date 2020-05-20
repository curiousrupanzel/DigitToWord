import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitToWordComponent } from './digit-to-word.component';

describe('DigitToWordComponent', () => {
  let component: DigitToWordComponent;
  let fixture: ComponentFixture<DigitToWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitToWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitToWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
