import { getCountryDetails } from "../CountryApi"
import countryMockResponse from "./__mocks__/countryResponse.json"
import fetchMock from 'fetch-mock'


describe("Country API", () => {
    beforeEach(() => {
        fetchMock.restore();
    }) 
    it("should fetch country details by name", async () => {
        // Given
        const countryName = "australia";
        fetchMock.get("https://restcountries.com/v2/name/australia", countryMockResponse)

        // When
        const countryDetails = await getCountryDetails(countryName);

        // Then
        expect(countryDetails).not.toBeNull();
        expect(countryDetails?.capital).toBe("Canberra");
        expect(countryDetails?.flag).toBe("https://flagcdn.com/au.svg");
        expect(countryDetails?.latlng).toStrictEqual([-27.0,133.0]);
        expect(countryDetails?.population).toBe(25687041);
    })

    it("should should return null for country details in case of error (not 2xx)", async () => {
        // Given
        const countryName = "australia";
        fetchMock.get("https://restcountries.com/v2/name/australia",  {status: 404})

        // When
        const countryDetails = await getCountryDetails(countryName);

        // Then
        expect(countryDetails).toBeNull();
    })

})