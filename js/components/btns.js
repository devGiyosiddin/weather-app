export default function btnClick() {
    // Элементы для прогноза на 24 часа
    const forecastList24h = document.getElementById('forecast-list-24h');
    const btnLeft24h = document.getElementById('btn-left-24h');
    const btnRight24h = document.getElementById('btn-right-24h');

    // Проверка, нашли ли кнопки
    if (!forecastList24h) console.error('forecastList24h не найден!');
    if (!btnLeft24h) console.error('btnLeft24h не найден!');
    if (!btnRight24h) console.error('btnRight24h не найден!');

    // Прокрутка для прогноза на 24 часа
    btnLeft24h.addEventListener('click', () => {
        console.log('Нажата левая кнопка 24 часа');
        forecastList24h.scrollBy({
            left: -300, // Прокрутка на 300 пикселей влево
            behavior: 'smooth'
        });
    });

    btnRight24h.addEventListener('click', () => {
        forecastList24h.scrollBy({
            left: 300, // Прокрутка на 300 пикселей вправо
            behavior: 'smooth'
        });
    });

    // Элементы для прогноза на 5 дней
    const forecastList5days = document.getElementById('forecast-list-5days');
    const btnLeft5days = document.getElementById('btn-left-5days');
    const btnRight5days = document.getElementById('btn-right-5days');

    // Прокрутка для прогноза на 5 дней
    btnLeft5days.addEventListener('click', () => {
        forecastList5days.scrollBy({
            left: -300, // Прокрутка на 300 пикселей влево
            behavior: 'smooth'
        });
    });

    btnRight5days.addEventListener('click', () => {
        forecastList5days.scrollBy({
            left: 300, // Прокрутка на 300 пикселей вправо
            behavior: 'smooth'
        });
    });
}