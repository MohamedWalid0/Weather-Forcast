import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WeatherService } from '../weather.service';
import {Forecast} from '../forecast' ;


@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  constructor( private _WeatherService:WeatherService ) { }

  cityForecast:Forecast[] = [] ;

  forecastForm:FormGroup = new FormGroup({
    'forecastCity': new FormControl
  })

  onSubmit (data) {

    this.cityForecast.splice(0 , this.cityForecast.length);

    this._WeatherService.fiveDaysForecast(data.value.forecastCity).subscribe( data => {

      for(let i=0 ; i<data['list'].length ; i+=8 ){
        let temporary = new Forecast (data['list'][i].dt_txt , data['list'][i].weather[0].icon  , data['list'][i].main.temp_max  , data['list'][i].main.temp_min  )
        this.cityForecast.push(temporary) ;
      }


    })

  }



  ngOnInit(): void {
  }


}
