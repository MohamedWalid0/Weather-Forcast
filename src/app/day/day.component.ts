import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import {CurrentWeather} from '../current-weather' ;
import { FormGroup , FormControl } from '@angular/forms';


@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

  location:any ;
  data:any ;
  myWeather = null;


  constructor(private _WeatherService:WeatherService)  {

    navigator.geolocation.getCurrentPosition( (pos) =>{
      this.location = pos.coords ;
      const lat = pos.coords.latitude ;
      const lon = pos.coords.longitude ;

      this._WeatherService.localWeather( lat , lon ).subscribe( (data) => {

        this.myWeather = new CurrentWeather(data['name'] , data['main'].temp , data['weather'][0].icon ,data['weather'][0].description , data['main'].temp_max , data['main'].temp_min )
        console.log(this.myWeather)
      } )
    }) ;


  }

  WeatherForm:FormGroup = new FormGroup({
    'city': new FormControl
  })

  onSubmit (data) {
    // console.log (data.value)
    this._WeatherService.anotherWeather(data.value.city).subscribe( data => {
      this.myWeather = new CurrentWeather(data['name'] , data['main'].temp , data['weather'][0].icon ,data['weather'][0].description , data['main'].temp_max , data['main'].temp_min )
    })

  }

  ngOnInit(): void {

  }

}
