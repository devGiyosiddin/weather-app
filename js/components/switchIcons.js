export default function switchIcons(text) {
    let hourDataIcon = '';
    console.log(text); // исправлено: выводим сам текст
    switch (text) {
        case 'Ясно':
        case 'Солнечно':
            hourDataIcon = '01d';
            break;
        case 'Облачно с прояснениями':
            hourDataIcon = '02d';
            break;
        case 'Переменная облачность':
            hourDataIcon = '03d';
            break;
        case 'Облачно':
            hourDataIcon = '04d';
            break;
        case 'Ливень':
            hourDataIcon = '09d';
            break;
        case 'Дождь':
        case 'Местами дождь':
        case 'Умеренный дождь':
        case 'Небольшой ливневый дождь':
            hourDataIcon = '10d';
            break;
        case 'Гроза':
            hourDataIcon = '11d';
            break;
        case 'Снег':
            hourDataIcon = '13d';
            break;
        case 'Туман':
        case 'Дымка': 
        case 'Пасмурно':
            hourDataIcon = '50d';
            break;
    }
    return hourDataIcon; // добавлено: возвращаем значение
}