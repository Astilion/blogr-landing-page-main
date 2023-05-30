const burgerIcon = document.querySelector('.burger-icon');
const closeIcon = document.querySelector('.close-icon')
const burgerBtn = document.querySelector('.burger-btn')

const handleNav = () => {
    closeIcon.classList.toggle('active');
    burgerIcon.classList.toggle('active');
}

burgerBtn.addEventListener('click', handleNav)