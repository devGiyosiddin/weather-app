export async function getHourlyWeather(lat, lon) {
    const apiKey = '9c1c5f58313d3840cce6c5e797a522ff';
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily,alerts&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.hourly; // Возвращаем почасовые данные
    } catch (error) {
        console.error("Ошибка получения почасового прогноза:", error);
    }
}

export async function getFiveDayForecast(lat, lon) {
    const apiKey = '9c1c5f58313d3840cce6c5e797a522ff';
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.list; // Возвращаем данные на 5 дней (каждые 3 часа)
    } catch (error) {
        console.error("Ошибка получения 5-дневного прогноза:", error);
    }
}