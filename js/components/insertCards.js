export default function insertCards(weatherData) {
    // Маппинг данных, которые приходят от API, чтобы соответствовать структуре, используемой для карточек
    const weatherDataMapped = [
        {
            title: "Влажность",
            icon: "humidity",
            value: `${weatherData.main.humidity}%`,
            minParams: "0%",
            maxParams: "100%",
            range: true,
            humidity: true,
        },
        {
            title: "Давление",
            icon: "barometr",
            value: `${weatherData.main.pressure}`,
            value2: weatherData.main.pressure - 900, // Допустим, используем разницу для отображения давления
            minParams: "0%",
            maxParams: "1000 hPa",
            param: weatherData.main.pressure > 1010 ? "Повышенное" : "Нормальное",
            pressure: true,
            range: true,
        },
        {
            title: "Видимость",
            icon: "visibility",
            value: `${weatherData.visibility / 1000} км`,
            minParams: "0%",
            maxParams: "10 км",
            param: weatherData.visibility > 5000 ? "Нормальная" : "Плохая",
            range: true,
        },
        {
            title: "Рассвет",
            icon: "sunrise",
            value: new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
            param: "Прошло: ",
            time: new Date((Date.now() - weatherData.sys.sunrise * 1000)).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
        },
        {
            title: "Закат",
            icon: "sunset",
            value: new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
            param: "Осталось: ",
            time: new Date((weatherData.sys.sunset * 1000 - Date.now())).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
        },
        {
            title: "Сила ветра",
            icon: "direction",
            value: `${Math.round(weatherData.wind.speed)} м/с`,
            param: weatherData.wind.deg > 180 ? "Северо-западный" : "Южный",
        }
    ];    

    const cardsContainer = document.getElementById('cards');
    const cardsHTML = weatherDataMapped.map((card, index) => {
        let leftValue = '';
        let maskPosition = '';

        // Установка позиции для прогресс-бара (по аналогии с вашей логикой)
        if (index === 0) {
            maskPosition = '79px';
            leftValue = '75px';
        }
        if (index === 1) {
            maskPosition = '95px';
            leftValue = '92px';
        };
        if (index === 2) {
            maskPosition = '32px';
            leftValue = '27px';
        };

        // Для адаптивного дизайна на экранах шириной до 768px
        if (window.innerWidth <= 767) {
            if (index === 0) {
                leftValue = '52px';
                maskPosition = '56px'
            };
            if (index === 1) {
                leftValue = '52px';
                maskPosition = '56px';
            };
            if (index === 2) {
                leftValue = '17px';
                maskPosition = '21px';
            };
        } else {
            leftValue = card.value2 ? `${card.value2}px` : `${parseInt(card.value)}px`;
        }

        return `<li class="card">
            <figure class="card-content">
                <figcaption class="card-title">${card.title}</figcaption>
                <img src="./public/cards-icon/${card.icon}.svg" alt="icon" class="card-icon" width="32" height="32">
                <span class="card-value">${card.value}</span>
            </figure>
            <div class="card-footer">
                ${card.range ? `<div class="progress-bar ${card.pressure ? 'progress-bar--pressure' : ''}">
                    <div class="progress-bar__bar" style="
                        mask-image: radial-gradient(
                            circle at ${maskPosition},
                            transparent 6px,
                            transparent 6px,
                            var(--progress-bar-bg-color) 6px
                        );
                    "></div>
                    <span class="progress-bar__ellipse" style="left: ${leftValue}"></span>
                </div>` : ''}
                ${card.humidity
                ? `<div class="card-footer--humidity">
                        <span class="card-footer__from">${card.minParams}</span>
                        <span class="card-footer__to">${card.maxParams}</span>
                    </div>`
                : `${card.param || ''} ${card.time || ''}`}
            </div>
        </li>`;
    }).join("");

    cardsContainer.innerHTML = cardsHTML;
}
