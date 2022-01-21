import { TestBed } from '@angular/core/testing';

import { PostsResolveService } from './posts-resolve.service';

describe('PostsResolveService', () => {
  let service: PostsResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
