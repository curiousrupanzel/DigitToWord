import { TestBed } from '@angular/core/testing';

import { DigitToWordService } from './digit-to-word.service';

describe('DigitToWordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DigitToWordService = TestBed.get(DigitToWordService);
    expect(service).toBeTruthy();
  });
});
