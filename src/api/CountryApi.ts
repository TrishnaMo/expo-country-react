import { CountryDetails } from '../types'

const baseUrl = "https://restcountries.com/v2"

export const getCountryDetails = async (country: string) => {
    console.log("Retrieve country details for ", country)
    const result = await fetch(`${baseUrl}/name/${country}`)
    console.log(result.ok)

    if (!result.ok) {
        console.log("Error while hitting API", result);
        return null;
    }
    const countryInfoList: CountryDetails[] = await result.json()
    return countryInfoList[0];
}
