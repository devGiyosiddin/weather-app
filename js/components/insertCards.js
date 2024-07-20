export default function insertCards() {
    const weatherData = [
        {
            title: "Влажность",
            icon: "humidity",
            value: "75 %",
            minParams: "0%",
            maxParams: "100%",
            range: true,
            humidity: true,
        },
        {
            title: "Давление",
            icon: "barometr",
            value: "761",
            value2: 91,
            minParams: "0%",
            maxParams: "1000%",
            param: "Повышенное",
            pressure: true,
            range: true,
        },
        {
            title: "Видимость",
            icon: "visibility",
            value: "28 км",
            minParams: "0%",
            maxParams: "100%",
            param: "Нормальная",
            range: true,
        },
        {
            title: "Рассвет",
            icon: "sunrise",
            value: "8:42",
            param: "Прошло: ",
            time: "02:47",
        },
        {
            title: "Закат",
            icon: "sunset",
            value: "16:37",
            param: "Осталось: ",
            time: "05:08",
        },
        {
            title: "Сила ветра",
            icon: "direction",
            value: "2 м/с",
            param: "Северо-западный",
        },
    ];

    const cardsContainer = document.getElementById('cards');
    const cardsHTML = weatherData.map((card, index) => {

        return `<li class="card">
            <div class="card-content">
                <h3 class="card-title">${card.title}</h3>
                <img src="../public/cards-icon/${card.icon}.svg" alt="icon" class="card-icon" width="32" height="32">
                <span class="card-value">${card.value}</span>
            </div>
            <div class="card-footer">
                ${card.range ? `<div class="card-slider ${card.pressure ? 'card-slider--pressure' : ''}">
                    <span class="card-slider__range" style="${card.value ? `left:${card.value2 ? card.value2 : parseInt(card.value)}px;` : ''}"></span>
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