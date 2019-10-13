import { Weather } from './Weather';

export class WeatherFiveDays {
    public constructor(
        public key: string,
        public day: string,
        public weather: Weather[]
    ) { }
}