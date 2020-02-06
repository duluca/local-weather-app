import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { defaultIfEmpty, flatMap } from 'rxjs/operators'
import { environment } from 'src/environments/environment'

export interface IPostalCode {
  countryCode: string
  postalCode: string
  placeName: string
  lng: number
  lat: number
}

export interface IPostalCodeData {
  postalCodes: [IPostalCode]
}

export interface IPostalCodeService {
  resolvePostalCode(postalCode: string): Observable<IPostalCode>
}

@Injectable()
export class PostalCodeService implements IPostalCodeService {
  constructor(private httpClient: HttpClient) {}

  resolvePostalCode(postalCode: string): Observable<IPostalCode> {
    const uriParams = `postalcode=${postalCode}`

    return this.httpClient
      .get<IPostalCodeData>(
        `${environment.baseUrl}${environment.geonamesApi}.geonames.org/postalCodeSearchJSON?` +
          `${uriParams}&maxRows=1&username=${environment.username}`
      )
      .pipe(
        flatMap(data => data.postalCodes),
        defaultIfEmpty(null)
      )
  }
}
