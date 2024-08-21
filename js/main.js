import insertCards from './components/insertCards.js';
import forecast from './components/forecast.js';
import input from './components/input.js';
import tabSwitcher from './components/tabSwitcher.js';
import btnsclick from './components/btns.js';

function centerContent() {
    alert(`Как бокс контента поставить на центр и по гор и по вер ?`)
    alert(`Помогите! :)`)
};
document.addEventListener('DOMContentLoaded', (event) => {
    insertCards();
    input();
    forecast();
    tabSwitcher();
    btnsclick();
    centerContent(); 
});