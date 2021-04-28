import { TestBed } from '@angular/core/testing';

import { ConvertNumtoStgService } from './convert-numto-stg.service';

describe('ConvertNumtoStgService', () => {
  let service: ConvertNumtoStgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertNumtoStgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(' get the CoreInfo', () => {
    expect(service.gettheCoreInfo()).toBeDefined();
  });

});
