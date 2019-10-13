import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../models/Weather';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  public getKeyByCountry(apiKey: string, country: string): Observable<Weather> {
    return this.http.get<Weather>(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${country}`)
  }

  public getTemperatureByKey(apiKey: string, key: string): Observable<Weather> {
    return this.http.get<Weather>(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${apiKey}`)
  }

  public getTemperatureForFiveDaysByKey(apiKey: string, key: string): Observable<any> {
    return this.http.get<any>(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${apiKey}`)
  }

}
