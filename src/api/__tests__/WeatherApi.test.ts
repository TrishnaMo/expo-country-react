import { getWeatherDetails } from "../WeatherApi"
import weatherMockResponse from "./__mocks__/weatherResponse.json"
import fetchMock from 'fetch-mock'

describe("Weather API", () => {
    beforeEach(() => {
        fetchMock.restore();
    })
    it("should fetch country details by name", async () => {
        // Given
        const placeName = "delhi";
        fetchMock.get("http://api.weatherstack.com/current",
            weatherMockResponse, {
            query: {
                "access_key": "a8b64442f217c0cf66f0f005c9e6e030",
                "query": "delhi"
            }
        })

        // When
        const weatherDetails = await getWeatherDetails(placeName);

        // Then
        expect(weatherDetails).not.toBeNull();
        expect(weatherDetails?.current.precip).toBe(0);
        expect(weatherDetails?.current.temperature).toBe(21);
        expect(weatherDetails?.current.weather_icons).toStrictEqual([
            "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0006_mist.png"
        ]);
        expect(weatherDetails?.current.wind_speed).toBe(9);
    })

    it("should should return null for weather details in case of error", async () => {
        // Given
        const placeName = "delhi";
        fetchMock.get("http://api.weatherstack.com/current",
            { status: 404 }, {
            query: {
                "access_key": "a8b64442f217c0cf66f0f005c9e6e030",
                "query": "delhi"
            }
        })

        // When
        const weatherDetails = await getWeatherDetails(placeName);

        // Then
        expect(weatherDetails).toBeNull();
    })
})