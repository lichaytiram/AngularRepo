import { Component, OnInit } from '@angular/core';
import { CountryService } from '../shared/services/country.service';
import { Weather } from '../shared/models/Weather';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  private apikey: string = "he595QKe3mhlSk8TAeSe2iUq54Fhl6YV";
  private isCelsius: boolean = false;
  public weathers: Weather[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit() {

    let length = localStorage.length;

    for (let index = 0; index < length; index++) {

      let key: string = localStorage.key(index);
      let weather: Weather = JSON.parse(localStorage.getItem(key));
      this.findTemperature(weather);

      this.isCelsius = JSON.parse(sessionStorage.getItem("isCelsius"));

    }

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
