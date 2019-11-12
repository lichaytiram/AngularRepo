import { Component, OnInit } from '@angular/core';
import { CountryService } from '../shared/services/country.service';
import { Weather } from '../shared/models/Weather';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  private apikey: string = "KpQgHJYTBKfTjAPSNJpH1mY2onFsXn6G";
  public weathers: Weather[] = [];
  public isCelsius: boolean = null;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {

    this.isCelsius = JSON.parse(sessionStorage.getItem("isCelsius"));

    // Find the temperature    
    let keys: string[] = Object.keys(localStorage);
    keys.forEach(key => {
      let weather: Weather = JSON.parse(localStorage.getItem(key));
      this.findTemperature(weather);
    });

  }

  public findTemperature(weather: Weather): void {

    this.countryService.getTemperatureByKey(this.apikey, weather.key).subscribe(

      res => {

        weather.temperature = res[0].Temperature.Metric.Value;
        if (this.isCelsius)
          weather.temperature = res[0].Temperature.Metric.Value;
        else
          weather.temperature = res[0].Temperature.Imperial.Value;

        weather.temperatureMood = res[0].WeatherText;
        this.weathers.push(weather);

      },

      err => alert(err.error.Message)

    );

  }

}
