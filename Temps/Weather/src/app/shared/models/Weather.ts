export class Weather {
    public constructor(
        public key: string,
        public country: string,
        public temperature?: number,
        public temperatureMood?: string,
        public day?: string
    ) { }
}