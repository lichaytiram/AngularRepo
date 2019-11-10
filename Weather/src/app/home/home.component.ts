import { Component, OnInit } from '@angular/core';
import { Weather } from '../shared/models/Weather';
import { CountryService } from '../shared/services/country.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private apikey: string = "KpQgHJYTBKfTjAPSNJpH1mY2onFsXn6G";
  public country: string = null;
  public isCelsius: boolean = null;

  // Objects
  public weather: Weather = new Weather("215854", "Tel Aviv");
  public weatherFiveDays: Weather[] = null;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {

    this.isCelsius = JSON.parse(sessionStorage.getItem("isCelsius"))
    this.findTemperature();
    this.findTemperatureForFiveDays();

  }

  public findKey(): void {

    var regex = /\d/g;

    // Check if allowed to find a key
    if (regex.test(this.country)) {
      alert("Searching should be done in English letters only");

    } else {

      this.countryService.getKeyByCountry(this.apikey, this.country).subscribe(

        res => {

          if (res[0] == null)
            return;

          this.weather = new Weather(res[0].Key, res[0].LocalizedName);
          this.findTemperature();
          this.findTemperatureForFiveDays();

        },

        err => alert(err.error.Message)

      )
    }

  }

  public findTemperature(): void {

    this.countryService.getTemperatureByKey(this.apikey, this.weather.key).subscribe(

      res => {

        if (this.isCelsius)
          this.weather.temperature = res[0].Temperature.Metric.Value;
        else
          this.weather.temperature = res[0].Temperature.Imperial.Value;

        this.weather.temperatureMood = res[0].WeatherText;

      },

      err => alert(err.error.Message)

    );

  }

  public findTemperatureForFiveDays(): void {

    this.countryService.getTemperatureForFiveDaysByKey(this.apikey, this.weather.key).subscribe(

      res => {

        let weather: Weather[] = [];

        for (let index = 0; index < 5; index++) {

          let key: string = this.weather.key;
          let country: string = this.weather.country;
          let temperature: number = res.DailyForecasts[index].Temperature.Minimum.Value;
          let temperatureMood: string = res.DailyForecasts[index].Day.IconPhrase;
          let date: Date = new Date(res.DailyForecasts[index].Date);
          let day: string = this.getDay(date);

          // Conver from fahrenheit to celsius
          if (this.isCelsius)
            temperature = parseFloat(((temperature - 32) * 5 / 9).toFixed(1));

          weather[index] = new Weather(key, country, temperature, temperatureMood, day);

        }

        this.weatherFiveDays = weather;
      },

      err => alert(err.error.Message)

    )

  }

  public save(): void {

    let weather: Weather = new Weather(this.weather.key, this.weather.country);
    if (localStorage.getItem(weather.country))
      localStorage.removeItem(weather.country)
    else
      localStorage.setItem(weather.country, JSON.stringify(weather));

  }

  public isFavoriteExists(): boolean {

    if (localStorage.getItem(this.weather.country) != null)
      return true;
    return false;

  }

  // Conver from celsius to fahrenheit && fahrenheit to celsius (by this.isCelsius' value )
  public switch(): void {

    if (this.weather && this.weatherFiveDays) {

      let newTemperature: number;
      this.isCelsius = !this.isCelsius;

      newTemperature = parseFloat((this.isCelsius ? ((this.weather.temperature - 32) * 5 / 9).toFixed(1) : (this.weather.temperature * 9 / 5 + 32).toFixed(1)));
      this.weather.temperature = newTemperature;

      for (let weather of this.weatherFiveDays) {

        newTemperature = parseFloat((this.isCelsius ? ((weather.temperature - 32) * 5 / 9).toFixed(1) : (weather.temperature * 9 / 5 + 32).toFixed(1)));
        weather.temperature = newTemperature;

      }

    }

    sessionStorage.setItem("isCelsius", JSON.stringify(this.isCelsius));

  }

  public getDay(date: Date): string {

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let index: number = date.getDay();
    let day: string = days[index];

    return day;

  }

}
