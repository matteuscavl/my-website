const btnMenu = $('.checkbtn');
const menu = $('.navigation-menu-list')

btnMenu.click(function() {
    if(menu.hasClass('navigation-menu-list-toggle')) {
        menu.removeClass('navigation-menu-list-toggle');
    } else {
        menu.addClass('navigation-menu-list-toggle');
    }
})