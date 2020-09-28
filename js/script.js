const btnMenu = $('.checkbtn');
const menu = $('.navigation-menu-list')
const title = document.querySelector('.h1header');

btnMenu.click(function() {
    if(menu.hasClass('navigation-menu-list-toggle')) {
        menu.removeClass('navigation-menu-list-toggle');
    } else {
        menu.addClass('navigation-menu-list-toggle');
    }
})

/* EFEITO DE MÁQUINA DE ESCREVER NO MENU */
const maquinaEscreverEffect = (elemento) => {
const textArray = elemento.innerHTML.split('')
elemento.innerHTML = '';

    textArray.forEach((letra, i) => {
        setTimeout(function () {
            elemento.innerHTML += letra
        }, 80 * i)
    })
}

maquinaEscreverEffect(title);