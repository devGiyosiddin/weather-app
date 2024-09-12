import insertCards from './components/insertCards.js';
import forecast from './components/forecast.js';
import input from './components/input.js';
import tabSwitcher from './components/tabSwitcher.js';
import btnsclick from './components/btns.js';
import { getWeatherData } from './api.js';
import {translate} from './components/translate.js';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

async function loadWeather(city) {
    try {
        let weatherData = await getWeatherData(city);
        insertCards(weatherData);


        // Название Города с переводом
        let locationText = document.querySelector('.location');
        let translatedCity = await translate(weatherData.name);
        locationText.textContent = translatedCity;

        // День недели
        let todayDate = new Date();
        let dateText = document.querySelector('.day');
        dateText.textContent = `${capitalizeFirstLetter(todayDate.toLocaleDateString('ru-RU', { weekday: 'long' }))}, ${todayDate.toLocaleDateString('ru-RU', { day: 'numeric' })} ${todayDate.toLocaleDateString('ru-RU', { month: 'long' })}`;

        // Вычисление времени с учетом timezone (смещение в секундах)
        let timezoneOffset = weatherData.timezone;
        let localTime = new Date(todayDate.getTime() + timezoneOffset * 1000);

        // Отнимаем 5 часов
        localTime.setHours(localTime.getHours() - 5);

        let timeText = document.querySelector('.time');
        timeText.textContent = localTime.toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit'
        });

        // Температура
        let tempCelsius = kelvinToCelsius(weatherData.main.temp);
        let tempText = document.querySelector('.temp');
        tempText.textContent = `${tempCelsius > 0 ? '' : '-'}${Math.round(tempCelsius)}°`;

        // Погода и его иконка
        let weatherText = document.querySelector('.weather-text');
        let weatherIcon = document.querySelector('.weather-icon');
        let weatherCondition = weatherData.weather[0].description; 
        switch (weatherCondition) {
            case 'clear sky':
                weatherText.textContent = 'Ясно';
                weatherIcon.src = 'public/weather-icons/01d.png';
                break;
            case 'few clouds':
                weatherText.textContent = 'Облачно с прояснениями';
                weatherIcon.src = 'public/weather-icons/02d.png';
                break;
            case 'scattered clouds':
                weatherText.textContent = 'Переменная облачность';
                weatherIcon.src = 'public/weather-icons/03d.png';
                break;
            case 'broken clouds':
                weatherText.textContent = 'Облачно';
                weatherIcon.src = 'public/weather-icons/04d.png';
                break;
            case 'shower rain':
                weatherText.textContent = 'Ливень';
                weatherIcon.src = 'public/weather-icons/09d.png';
                break;
            case 'rain':
                weatherText.textContent = 'Дождь';
                weatherIcon.src = 'public/weather-icons/10d.png';
                break;
            case 'thunderstorm':
                weatherText.textContent = 'Гроза';
                weatherIcon.src = 'public/weather-icons/11d.png';
                break;
            case 'snow':
                weatherText.textContent = 'Снег';
                weatherIcon.src = 'public/weather-icons/13d.png';
                break;
            case 'mist':
                weatherText.textContent = 'Туман';
                weatherIcon.src = 'public/weather-icons/50d.png';
                break;
        };

        // Ошущается как
        let feelsTempToCelsius = kelvinToCelsius(weatherData.main.feels_like);
        let feelsValue = document.querySelector('.feels-value');
        feelsValue.textContent = `${feelsTempToCelsius > 0 ? '' : '-'}${Math.round(feelsTempToCelsius)}°`;
        
    } catch (error) {
        console.error(`Ошибка: ${error.message}`);
    }
}

input((city) => {
    loadWeather(city);
    forecast(city);
    setInterval(() => {
        loadWeather(city);
        forecast(city)
    }, 60000);
});

document.addEventListener('DOMContentLoaded', () => {
    forecast();
    tabSwitcher();
    btnsclick();
});