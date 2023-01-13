const bottaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')

bottaoMenu.addEventListener('click', () => {
    menu.classList.toggle("menu-lateral--ativo")
})