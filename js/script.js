const btnMenu = $('.checkbtn');
const menu = $('.navigation-menu-list')
const title = document.querySelector('.h1header');
const consoleh2 = document.querySelectorAll('.h2text');
const paragraphp2 = document.querySelectorAll('.pclass')
const targetAnime = document.querySelectorAll('[data-anime]')

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
        }, 50 * i)
    })
}

maquinaEscreverEffect(title);

consoleh2.forEach((item) => {
    maquinaEscreverEffect(item);
})

paragraphp2.forEach((item) => {
    maquinaEscreverEffect(item);
})


const efeitoContainer = () => {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    targetAnime.forEach(function(elemento) {
        if(windowTop > elemento.offsetTop) {
            elemento.classList.add('animateTop');
        } else {
            elemento.classList.remove('animateTop')
        }
    })
}

if (targetAnime.length) {
    window.addEventListener('scroll', function() {
        efeitoContainer();
    })
}