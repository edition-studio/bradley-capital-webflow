// Page wrapper fade in on page load
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    const pageWrapper = document.querySelector('.page-wrapper');
    pageWrapper.style.opacity = '1'; // Initiates the fade-in effect
  }, 100); // Delay of 0.1 second
});

// toggle ability to scroll when mobile menu opens
document.addEventListener('DOMContentLoaded', (event) => {
    const menuButton = document.querySelector('.navbar1_menu-button');
    if (menuButton) {
        menuButton.addEventListener('click', () => {
            menuButton.classList.toggle('w--open');
            document.body.classList.toggle('no-scroll');
        });
    } else {
        console.error('Menu button not found');
    }
});

// Nav bar bg colour fade in on scroll
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar1_component');
    if (window.pageYOffset > 16) {
        navbar.style.backgroundColor = 'rgba(17, 17, 17, 1)';
    } else {
        navbar.style.backgroundColor = 'rgba(17, 17, 17, 0)';
    }
});
