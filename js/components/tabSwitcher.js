export default function tabSwitcher() {
    const forecastTabs = document.querySelectorAll('.forecast-radio');
    const forecastContents = document.querySelectorAll('.forecast-content');

    function setActiveTab(tabId) {
        forecastContents.forEach(content => {
            content.style.display = 'none';
        });
        const contentToShow = document.querySelector(`#${tabId.replace('tab', 'forecast')}`);
        if (contentToShow) {
            contentToShow.style.display = 'flex';
        }
        // Сохраняем активный таб в localStorage
        localStorage.setItem('activeWeatherTab', tabId);
    }

    // Переключение табов
    forecastTabs.forEach(tab => {
        tab.addEventListener('change', function () {
            setActiveTab(this.id);
        });
    });

    // Устанавливаем начальный активный таб
    document.addEventListener('DOMContentLoaded', () => {
        const savedTab = localStorage.getItem('activeWeatherTab');
        if (savedTab && document.getElementById(savedTab)) {
            setActiveTab(savedTab);
        } else {
            setActiveTab('tab-24h'); // По умолчанию активен таб на 24 часа
        }
    });
}