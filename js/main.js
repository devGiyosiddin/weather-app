import insertCards from './components/insertCards.js';
import forecast from './components/forecast.js';
import input from './components/input.js';
import tabSwitcher from './components/tabSwitcher.js';
import btnsclick from './components/btns.js';

document.addEventListener('DOMContentLoaded', (event) => {
    insertCards();
    input();
    forecast();
    tabSwitcher();
    btnsclick();
});