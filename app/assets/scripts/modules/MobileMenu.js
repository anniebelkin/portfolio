import $ from 'jquery';

class MobileMenu {
    constructor(){
        this.topNavbar = $(".navbar--top");
        this.menuIcon = $(".navbar__menu-icon");
        this.menuContent = $(".navbar__menu");
        this.menuLinks = $(".navbar__menu__item");
        this.logo = $("#logo");
        this.events();
    }
    
    events(){
        this.menuIcon.click(this.toggleTheMenu.bind(this));
        this.menuLinks.click(this.hideTheMenu.bind(this));
        this.logo.click(this.hideTheMenu.bind(this));
    }
    
    toggleTheMenu(){
        this.topNavbar.toggleClass("navbar--is-extended");
        this.menuContent.toggleClass("navbar__menu--is-visible");
        this.menuIcon.toggleClass("navbar__menu-icon--close-x");
    }
    
    hideTheMenu(){
        this.topNavbar.removeClass("navbar--is-extended");
        this.menuContent.removeClass("navbar__menu--is-visible");
    }
}

export default MobileMenu;