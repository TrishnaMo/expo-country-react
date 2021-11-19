export type CountryDetails = {
    capital: string, 
    population: number, 
    latlng: number[], 
    flag: string
}

export type Current = {
    temperature: number,
    wind_speed: number,
    precip: number,
    weather_icons: string[]
}

export type WeatherInfo = {
    current : Current
}

