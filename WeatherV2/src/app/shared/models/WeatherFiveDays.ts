import { Weather } from './Weather';

export class WeatherFiveDays {
    public constructor(
        public day: string,
        public weather?: Weather[]
    ) { }
}