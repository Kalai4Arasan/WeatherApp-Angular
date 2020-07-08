import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { DataModel } from '../services/DataModel';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  constructor(private _http: HttpClient) { }
  getWeatherData(a,b):Observable<DataModel>{
    console.log("http://localhost:3000/data/"+a+"/"+b)
    return this._http.get<DataModel>("http://localhost:3000/data/"+a+"/"+b)
  }
  getCustomWeatherData(city):Observable<DataModel>{
    console.log("http://localhost:3000/data/"+city);
    return this._http.get<DataModel>("http://localhost:3000/data/"+city);
  }
}
