import { TestBed } from '@angular/core/testing';

import { ListausuarioService } from './listausuario.service';

describe('ListausuarioService', () => {
  let service: ListausuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListausuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
