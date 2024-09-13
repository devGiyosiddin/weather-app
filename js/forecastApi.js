const API_KEY = '6b036e8e011247579dd120618241209';
const BASE_URL = 'https://api.weatherapi.com/v1';

export async function getCurrentWeather(city) {
    const url = `${BASE_URL}/current.json?key=${API_KEY}&q=${city}&lang=ru`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Ошибка при получении текущей погоды:", error);
        throw error;
    }
}

export async function getForecast(city, days = 5) {
    const url = `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}&lang=ru`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Ошибка при получении прогноза:", error);
        throw error;
    }
}

export async function getHourlyWeather(city) {
    // WeatherAPI.com предоставляет почасовой прогноз в рамках обычного прогноза
    return getForecast(city, 1);
}

export async function getFiveDayForecast(city) {
    return getForecast(city, 5);
}