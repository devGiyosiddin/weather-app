export async function getWeatherData(city) {
    const apiKey = '9c1c5f58313d3840cce6c5e797a522ff';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    if (!response.ok) {
        throw new Error('Ошибка при получении данных');
    }
    const data = await response.json();
    return data;
}