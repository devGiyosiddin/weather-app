export default function logoChange() {
    function updateLogoPath() {
        const logo = document.getElementById('header-logo');
        if (window.innerWidth < 1024 && window.innerWidth > 640) {
            logo.src = 'public/Logo-small.svg'; // Change this to the path of your smaller logo
            logo.style.width = "54px";
            logo.style.height = "23px";
        } else if (window.innerWidth < 640) {
            logo.src = 'public/Logo-mini.svg'; // Change this to the path of your smaller logo
            logo.style.width = "32px";
            logo.style.height = "15px";

            // Change input range
            const range = document.querySelectorAll('.card-slider__range');
            range[0].style.left = "52px";
            range[1].style.left = "52px";
            range[2].style.left = "17px";
        }
        else {
            logo.src = 'public/Logo.svg';
        };
    }

    window.addEventListener('resize', updateLogoPath);
    updateLogoPath(); // Call the function on initial load
}