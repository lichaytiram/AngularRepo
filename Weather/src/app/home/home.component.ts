import { Component, OnInit } from '@angular/core';
import { CountryService } from '../shared/services/country.service';
import { Weather } from '../shared/models/Weather';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private apikey: string = "aSzj6pADTUKhZken1sVkwK1dZmkgvTkV";
  private country: string = null;

  // objects
  private weather: Weather = new Weather("215854", "Tel Aviv");

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.findTemperature();
  }

  public findKey(): void {

    this.countryService.getKeyByCountry(this.apikey, this.country).subscribe(

      res => {

        if (res[0] == null)
          return;

        this.weather = new Weather(res[0].Key, res[0].LocalizedName);
        this.findTemperature();

      },

      err => alert(err.error.Message)

    )
  }

  public findTemperature() {

    this.countryService.getTemperatureByKey(this.apikey, this.weather.key).subscribe(

      res => this.weather.temperature = res[0].Temperature.Metric.Value,

      err => alert(err.error.Message)

    );

  }

  public save() {

    let weather: Weather = new Weather(this.weather.key, this.weather.country, this.weather.temperature);
    if (localStorage.getItem(weather.country))
      localStorage.removeItem(weather.country)
    else
      localStorage.setItem(weather.country, JSON.stringify(weather));

  }



}
