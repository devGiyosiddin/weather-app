export default function tabSwitcher() {
    const forecastTabs = document.querySelectorAll('.forecast-radio');
    const forecastContents = document.querySelectorAll('.forecast-content');

    forecastTabs.forEach(tab => {
        tab.addEventListener('change', function () {
            forecastContents.forEach(content => {
                content.style.display = 'none';
            });
            const contentToShow = document.querySelector(`#${this.id.replace('tab', 'forecast')}`);
            contentToShow.style.display = 'flex';
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const tab24h = document.getElementById('forecast-24h');
        tab24h.style.display = "flex";
    })
}
