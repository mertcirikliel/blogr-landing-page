const navBarEl = document.querySelector('.hero');
const footerEl = document.getElementById('footer-el');
const arrowIconDown = document.querySelectorAll('.arrow-icon');
const burgerIcon = document.querySelector('.burger-icon');
const burgerMenuModal = document.querySelector('.burger-menu');
const subMenuHeadings = document.querySelectorAll('.sub-menu-heading');
const subMenus = document.querySelectorAll('.sub-menus');

navBarEl.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.preventDefault();
    }
});

footerEl.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.preventDefault();
    }
});

burgerIcon.addEventListener('click', () => {
    burgerMenuModal.style.display = (burgerMenuModal.style.display === 'none' || burgerMenuModal.style.display === '') 
                                    ? 'flex' : 'none';
    burgerIcon.src = (burgerMenuModal.style.display === 'none' || burgerMenuModal.style.display === '') 
                        ? './images/icon-hamburger.svg' : './images/icon-close.svg';
});

subMenuHeadings.forEach((heading, index) => {
    heading.addEventListener('click', () => {
      // Toggle the visibility of the corresponding sub-menus
      subMenus[index].classList.toggle('display-sub-menus');
    });
});