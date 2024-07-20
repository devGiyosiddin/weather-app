export default function btnClick() {
    const btns = document.querySelectorAll('.forecast-btn');
    
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(btn => btn.classList.remove('forecast-btn--active'));
            btn.classList.add('forecast-btn--active');
        });
    })
}