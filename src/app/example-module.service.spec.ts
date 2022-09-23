import { TestBed } from '@angular/core/testing';

import { ExampleModuleService } from './example-module.service';

describe('ExampleModuleService', () => {
  let service: ExampleModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
