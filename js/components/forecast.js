export default function forecast() {
    // 24 часа
    const forecast24hData = [
                { time: '12:00', temp: '-7', icon: 'cloudy.svg' },
                { time: '15:00', temp: '-5', icon: 'cloudy.svg' },
                { time: '18:00', temp: '-7', icon: 'cloudy.svg' },
                { time: '21:00', temp: '-9', icon: 'cloudy.svg' },
                { time: '00:00', temp: '-11', icon: 'cloudy.svg' },
                { time: '03:00', temp: '-13', icon: 'cloudy.svg' },
                { time: '06:00', temp: '-15', icon: 'cloudy.svg' },
                { time: '09:00', temp: '-18', icon: 'cloudy.svg' },
    ];
    const list24h = document.getElementById('forecast-list-24h');
    const tabs24hHTML = forecast24hData.map((tab) => {
            return `
                <li class="forecast-item flip">
                    <span class="forecast-time">${tab.time}</span>
                    <img src="./public/forecast-icon/${tab.icon}" alt="weather icon" class="forecast-icon" width="32" height="32">
                    <span class="forecast-temp">${tab.temp}&#176;</span>
                </li>
            `
    }).join("");
    list24h.innerHTML = tabs24hHTML;
    
    
    // 5 дней
    const forecast5daysData = [
        { day: 'Вс, 07 янв.', temp: 'от -17° до -11°', icon: 'sunny+cloudy.svg' },
        { day: 'Пн, 08 янв.', temp: 'от -16° до -8°', icon: 'sunny+cloudy.svg' },
        { day: 'Вт, 09 янв.', temp: 'от -8° до -2°', icon: 'cloudy.svg' },
        { day: 'Ср, 10 янв.', temp: 'от -12° до -4°', icon: 'cloudy.svg' },
        { day: 'Чт, 11 янв.', temp: 'от -14° до -6°', icon: 'cloudy.svg' }
    ];
    const list5days = document.getElementById('forecast-list-5days');
    const tabs5daysHTML = forecast5daysData.map((tab) => {
        return `
            <li class="forecast-item forecast-item--5days flip">
                <span class="forecast-time">${tab.day}</span>
                <img src="./public/forecast-icon/${tab.icon}" alt="weather icon" class="forecast-icon" width="32" height="32">
                <span class="forecast-temp">${tab.temp}</span>
            </li>`
    }).join("");
    list5days.innerHTML = tabs5daysHTML;
};