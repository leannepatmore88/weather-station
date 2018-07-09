import testData from "./data/testData.json";

const WeatherStationAPI = {
  fetchweatherData() {
    return Promise.resolve(testData);
  }
};

export default WeatherStationAPI;
