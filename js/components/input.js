import forecast from './forecast.js';
import { loadWeather } from "../main.js";

export default function input(onSubmit) {
    const input = document.querySelector('.header-input');
    const inputWrapper = document.querySelector('.input-wrapper');
    const clearIcon = document.querySelector('.search-icon');
    const suggestionsList = document.getElementById('suggestions-list');
    
    input.value = '';
    
    input.addEventListener('input', function() {
        if (input.value.trim() !== '') {
            inputWrapper.classList.add('has-text');
        } else {
            inputWrapper.classList.remove('has-text');
        }
    });

    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const city = input.value.trim();
            if (city) {
                onSubmit(city); // передаем введенный город в колбэк
                suggestionsList.style.display = 'none';
            }
        }
    });
    
    clearIcon.addEventListener('click', function() {
        input.value = '';
        inputWrapper.classList.remove('has-text');
        suggestionsList.style.display = 'none';
    });
    
    // Функция для получения списка городов через API
    async function getCitySuggestions(query) {
        const apiKey = '9c1c5f58313d3840cce6c5e797a522ff';
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${apiKey}`);
        const cities = await response.json();
        return cities;
    }
    
    // Функция для отображения рекомендаций
    function showSuggestions(cities) {
        suggestionsList.innerHTML = ''; // Очистить предыдущие предложения
    
        if (cities.length > 0) {
            cities.forEach(city => {
                const listItem = document.createElement('li');
                listItem.textContent = `${city.name}, ${city.country}`;
                listItem.addEventListener('click', async () => {
                    input.value = city.name;
                    suggestionsList.innerHTML = ''; // Очистить список при выборе города
                    
                    // Вызов всех нужных функций с проверками
                    try {
                        await forecast(city.name);    // Прогноз на 24 часа и 5 дней
                        await loadWeather(city.name); // Основные данные о погоде
                    } catch (error) {
                        console.error('Ошибка при получении данных:', error);
                    }
                });
                suggestionsList.style.display = 'block';
                suggestionsList.appendChild(listItem);
            });
        }
    }
    

    // Обработчик ввода текста
    input.addEventListener('input', async () => {
        const query = input.value.trim();
        
        if (query.length > 2) {
            const cities = await getCitySuggestions(query);
            showSuggestions(cities);
        } else {
            suggestionsList.innerHTML = ''; // Очистить список если ввели меньше 3 символов
        }
    });

    // Закрытие списка при клике за его пределами
    document.addEventListener('click', function(event) {
        const isClickInside = inputWrapper.contains(event.target);
        if (!isClickInside) {
            suggestionsList.style.display = 'none';
        }
    });
}
