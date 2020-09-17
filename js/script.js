/* MENU */
const btnMenu = $('.checkbtn')
const navList = $('.navigation-menu-list');

btnMenu.click(function() {
    if (navList.hasClass('navigation-menu-list-toggle')) {
        navList.removeClass('navigation-menu-list-toggle')
    } else {
        navList.addClass('navigation-menu-list-toggle')
    }
})