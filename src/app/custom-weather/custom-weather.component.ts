import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-custom-weather',
  templateUrl: './custom-weather.component.html',
  styleUrls: ['./custom-weather.component.css'],
  animations:[
    trigger('simpleFadeAnimation', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(600 )
      ]),
      transition(':leave',
        animate(600, style({opacity: 0})))
    ])
  ],
})
export class CustomWeatherComponent implements OnInit {
  public city="";
  public data;//{ "coord": { "lon": 12.28, "lat": 46.74 }, "weather": [ { "id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04d" } ], "base": "stations", "main": { "temp": 16, "feels_like": 13.6, "temp_min": 16, "temp_max": 16, "pressure": 1021, "humidity": 51 }, "visibility": 10000, "wind": { "speed": 2.08, "deg": 338 }, "clouds": { "all": 75 }, "dt": 1592650653, "sys": { "type": 1, "id": 6809, "country": "IT", "sunrise": 1592623006, "sunset": 1592680093 }, "timezone": 7200, "id": 3168508, "name": "Innichen", "cod": 200 };
  public imgurl;
  public status;
  constructor(private _weatherdata: WeatherDataService) { }

  ngOnInit(): void {
  }
  sendData(){
      console.log('Sending...')
      this._weatherdata.getCustomWeatherData(this.city).subscribe(data=>{
        this.data=data;
        if(data.hasOwnProperty('weather')){
          this.imgurl="http://openweathermap.org/img/wn/"+data['weather'][0]['icon']+"@2x.png";
          this.status=data['cod'];
          }
          else{
            this.imgurl="";
          }
      
      });
  }

}
