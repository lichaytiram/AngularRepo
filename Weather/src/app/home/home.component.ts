import { Component, OnInit } from '@angular/core';
import { Weather } from '../shared/models/Weather';
import { WeatherFiveDays } from '../shared/models/WeatherFiveDays';
import { CountryService } from '../shared/services/country.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private apikey: string = "CHXBbUvZYnHcIRg9TRRzgzVYzRQyDAIz";
  public country: string = null;

  // objects
  public weather: Weather = new Weather("215854", "Tel Aviv");
  public weatherFiveDays: WeatherFiveDays = null;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.findTemperature();
    this.findTemperatureForFiveDays();
  }

  public findKey(): void {

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

  public findTemperature(): void {

    this.countryService.getTemperatureByKey(this.apikey, this.weather.key).subscribe(

      res => {

        this.weather.temperature = res[0].Temperature.Metric.Value;
        this.weather.temperatureMood = res[0].WeatherText;

      },

      err => alert(err.error.Message)

    );

  }

  public findTemperatureForFiveDays(): void {

    this.countryService.getTemperatureForFiveDaysByKey(this.apikey, this.weather.key).subscribe(

      res => {

        let day: string = res.Headline.Text;
        day = this.splitDay(day)

        this.weatherFiveDays = new WeatherFiveDays(day);
        this.weatherFiveDays.weather = res.DailyForecasts;

        let weather: Weather[] = [];

        for (let index = 0; index < 5; index++) {

          let key: string = this.weather.key;
          let country: string = this.weather.country;
          let temperature: number = res.DailyForecasts[index].Temperature.Minimum.Value;
          let temperatureMood: string = res.DailyForecasts[index].Day.IconPhrase;

          //conver from fahrenheit to celsius
          temperature = parseFloat(((temperature - 32) * 5 / 9).toFixed(1));

          weather[index] = new Weather(key, country, temperature, temperatureMood);

        }

        this.weatherFiveDays.weather = weather;
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

  // split the day from entire string
  public splitDay(day: string): string {

    let splitDay: string[] = day.split(" ");
    return day = splitDay[1];

  }

}
