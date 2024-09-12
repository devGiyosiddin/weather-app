import { getHourlyWeather, getFiveDayForecast } from "../forecastApi.js";
import switchIcons from "./switchIcons.js";

export default async function forecast(city) {
    try {
        // 24 часа
        const hourlyData = await getHourlyWeather(city);
        if (!hourlyData || !hourlyData.forecast || !hourlyData.forecast.forecastday[0]) {
            console.error('Не удалось получить данные по почасовому прогнозу.');
            return;
        }
        
        const hourlyForecast = hourlyData.forecast.forecastday[0].hour;
        const list24h = document.getElementById('forecast-list-24h');

        const tabs24hHTML = hourlyForecast.slice(0, 8).map((hourData) => {
            const hourDataIcon = switchIcons(hourData.condition.text);
            return `
                <li class="forecast-item flip">
                    <span class="forecast-time">${new Date(hourData.time).getHours()}:00</span>
                    <img src="public/weather-icons/${hourDataIcon}.png" alt="weather icon" class="forecast-icon" width="32" height="32">
                    <span class="forecast-temp">${Math.round(hourData.temp_c)}&#176;</span>
                </li>
            `;
        }).join("");
        list24h.innerHTML = tabs24hHTML;

        // 5 дней
        const fiveDayData = await getFiveDayForecast(city);
        if (!fiveDayData || !fiveDayData.forecast || !fiveDayData.forecast.forecastday) {
            console.error('Не удалось получить данные по 5-дневному прогнозу.');
            return;
        }
        
        const dailyForecast = fiveDayData.forecast.forecastday;
        const list5days = document.getElementById('forecast-list-5days');
        const tabs5daysHTML = dailyForecast.map((dayData) => {
            const dayDataIcon = switchIcons(dayData.day.condition.text);
            return `
                <li class="forecast-item forecast-item--5days flip">
                    <span class="forecast-time">${new Date(dayData.date).toLocaleDateString('ru-RU', { weekday: 'short', day: 'numeric', month: 'short' })}</span>
                    <img src="public/weather-icons/${dayDataIcon}.png" alt="weather icon" class="forecast-icon" width="32" height="32">
                    <span class="forecast-temp">от ${Math.round(dayData.day.mintemp_c)}° до ${Math.round(dayData.day.maxtemp_c)}°</span>
                </li>`;
        }).join("");
        list5days.innerHTML = tabs5daysHTML;
    } catch (error) {
        console.error('Ошибка в функции forecast:', error.message);
    }
}