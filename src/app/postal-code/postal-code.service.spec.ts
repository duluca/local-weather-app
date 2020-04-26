import { HttpClientTestingModule } from '@angular/common/http/testing'
import { PostalCodeService } from './postal-code.service'
import { TestBed } from '@angular/core/testing'
import { injectClass } from 'angular-unit-test-helper'

describe('PostalCodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] })
  })

  it('should be created', () => {
    const service = injectClass(PostalCodeService)
    expect(service).toBeTruthy()
  })
})
