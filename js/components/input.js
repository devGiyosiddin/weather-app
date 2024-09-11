export default function input(onSubmit) {
    const input = document.querySelector('.header-input');
    const inputWrapper = document.querySelector('.input-wrapper');
    const clearIcon = document.querySelector('.search-icon');

    input.value = '';

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
            const city = input.value.trim();
            if (city) {
                onSubmit(city); // передаем введенный город в колбэк
            }
        }
    });

    clearIcon.addEventListener('click', function() {
        input.value = '';
        inputWrapper.classList.remove('has-text');
    });
}