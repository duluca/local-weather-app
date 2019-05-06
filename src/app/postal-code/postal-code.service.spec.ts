import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'

import { PostalCodeService } from './postal-code.service'

describe('PostalCodeService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostalCodeService],
    })
  )

  it('should be created', () => {
    const service: PostalCodeService = TestBed.get(PostalCodeService)
    expect(service).toBeTruthy()
  })
})
