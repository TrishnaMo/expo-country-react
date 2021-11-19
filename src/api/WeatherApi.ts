import { WeatherInfo } from "../types"

const baseUrl = "http://api.weatherstack.com"
const accessKey = "a8b64442f217c0cf66f0f005c9e6e030"

export const getWeatherDetails = async (capital: string) => {
    console.log("Retrieve weather details for ", capital)
    const result = await fetch(`${baseUrl}/current?access_key=${accessKey}&query=${capital}`)

    if (result.status !== 200) {
        console.log("Error while hitting API", result)
        return null;
    }
    const weatherResult: WeatherInfo = await result.json()
    
    return weatherResult;
}


