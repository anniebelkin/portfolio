import MobileMenu from './modules/MobileMenu';
import ScrollReveal from 'scrollreveal';

var mobileMenu = new MobileMenu();
ScrollReveal().reveal('.revealOnScroll', {
    delay: '300'
});
