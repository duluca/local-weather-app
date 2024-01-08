import { HttpClient, HttpParams } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { lastValueFrom } from 'rxjs'

import { environment } from '../../environments/environment'

export interface IPostalCode {
  countryCode: string
  postalCode: string
  placeName: string
  lng: number
  lat: number
}

export const defaultPostalCode: IPostalCode = {
  countryCode: '--',
  postalCode: '--',
  placeName: '--',
  lng: 0,
  lat: 0,
}

export interface IPostalCodeData {
  postalCodes: [IPostalCode]
}

export interface IPostalCodeService {
  resolvePostalCode(postalCode: string): Promise<IPostalCode | null>
}

@Injectable({
  providedIn: 'root',
})
export class PostalCodeService implements IPostalCodeService {
  private readonly httpClient = inject(HttpClient)

  resolvePostalCode(postalCode: string): Promise<IPostalCode> {
    const uriParams = new HttpParams()
      .set('maxRows', '1')
      .set('username', environment.username)
      .set('postalcode', postalCode)

    const httpCall$ = this.httpClient.get<IPostalCodeData>(
      `${environment.baseUrl}${environment.geonamesApi}.geonames.org/postalCodeSearchJSON`,
      { params: uriParams }
    )

    return lastValueFrom(httpCall$).then((data) =>
      data.postalCodes?.length > 0 ? data.postalCodes[0] : defaultPostalCode
    )
  }
}
