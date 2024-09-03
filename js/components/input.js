export default function input() {
    const input = document.querySelector('.header-input');
    const inputWrapper = document.querySelector('.input-wrapper');
    const clearIcon = document.querySelector('.search-icon');
    
    input.addEventListener('input', function() {
        if (input.value.trim() !== '') {
            inputWrapper.classList.add('has-text');
        } else {
            inputWrapper.classList.remove('has-text');
        }
    });
    
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            // Действие по нажатию клавиши Enter (например, отправка формы)
            console.log(input.value);
        }
    });
    
    clearIcon.addEventListener('click', function () {
        input.value = '';
        inputWrapper.classList.remove('has-text');
    });
}