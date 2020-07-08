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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
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
export class HomeComponent implements OnInit {
  public center;
  public data;//{ "coord": { "lon": 78.66, "lat": 11.13 }, "weather": [ { "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d" } ], "base": "stations", "main": { "temp": 37.04, "feels_like": 36.97, "temp_min": 37.04, "temp_max": 37.04, "pressure": 1005, "humidity": 33, "sea_level": 1005, "grnd_level": 990 }, "wind": { "speed": 4.13, "deg": 277 }, "clouds": { "all": 100 }, "dt": 1592639551, "sys": { "country": "IN", "sunrise": 1592612620, "sunset": 1592658613 }, "timezone": 19800, "id": 1254043, "name": "Turaiyūr", "cod": 200 };
  public imgurl;
  constructor(private _weatherdata: WeatherDataService) { }

  ngOnInit(): void {
    this.getCurrentWeather()
  }
  getCurrentWeather(){
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
      this._weatherdata.getWeatherData(position.coords.latitude,position.coords.longitude).subscribe(data=>{
        this.data=data;
        console.log(data);
        if(data.hasOwnProperty('weather')){
          this.imgurl="http://openweathermap.org/img/wn/"+data['weather'][0]['icon']+"@2x.png";
          }
          else{
            this.imgurl="";
          }
      
      });
    })
  }
}
