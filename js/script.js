/* DECLARAÇÕES DE VARIAVEIS */
const btnMenu = $('.checkbtn')
const navList = $('.navigation-menu-list');
const titulo = document.querySelector('.h1header')
const targetAnime = document.querySelectorAll('[data-anime]')
const targetNime = document.querySelectorAll('[data-nime]')
const animationClassTopDown = 'animateTopDown'
const animationClassRightLeft = 'animateRightLeft';

/* MENU */
btnMenu.click(function() {
    if (navList.hasClass('navigation-menu-list-toggle')) {
        navList.removeClass('navigation-menu-list-toggle')
    } else {
        navList.addClass('navigation-menu-list-toggle')
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

maquinaEscreverEffect(titulo);

/* EFEITO DE DESLIZE */
const animarScrollCimaEbaixo = () => {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    targetAnime.forEach(function(elemento) {
        if(windowTop > elemento.offsetTop) {
            elemento.classList.add(animationClassTopDown);
        } else {
            elemento.classList.remove(animationClassTopDown)
        }
    })
}

const animarScrollLados = () => {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    targetNime.forEach(function(elemento) {
        if(windowTop > elemento.offsetTop) {
            elemento.classList.add(animationClassRightLeft);
        } else {
            elemento.classList.remove(animationClassRightLeft)
        }
    })
}

if (targetAnime.length) {
    window.addEventListener('scroll', function() {
        animarScrollCimaEbaixo();
    })
}

if(targetNime.length) {
    window.addEventListener('scroll', function() {
        animarScrollLados();
    })
}

/* SCROLL SUAVE */

$('.main-header a').click(function(e) {
    e.preventDefault();

    let id = $(this).attr('href')
    targetOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset - 80
    }, 500)
})

$('.div-up a').click(function(e) {
    e.preventDefault();

    let id = $(this).attr('href')
    targetOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset - 80
    }, 800)
})