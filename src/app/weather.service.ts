import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
import {Forecast} from './forecast' ;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private _HttpClient:HttpClient ) { }

  localWeather (lat , lon)  {

    return this._HttpClient.get ( `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a2709bf8db053f3672d4c310e52ea872&units=imperial` )
    ;

  }


  anotherWeather(city:string){
    return this._HttpClient.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a2709bf8db053f3672d4c310e52ea872`)
  }



  fiveDaysForecast(city:string){
    return this._HttpClient.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=a2709bf8db053f3672d4c310e52ea872&units=imperial`)
  }

}
