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
        let leftValue = '';
        let maskPosition = '';

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
        // set left value on 768px for progress-bar__range
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
                            var(--proggress-bar-bg-color) 6px
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