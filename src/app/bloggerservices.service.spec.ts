import { TestBed } from '@angular/core/testing';

import { BloggerservicesService } from './bloggerservices.service';

describe('BloggerservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BloggerservicesService = TestBed.get(BloggerservicesService);
    expect(service).toBeTruthy();
  });
});
