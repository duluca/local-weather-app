import { TestBed } from '@angular/core/testing'

import { PostalCodeService } from './postal-code.service'

describe('PostalCodeService', () => {
  let service: PostalCodeService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(PostalCodeService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
