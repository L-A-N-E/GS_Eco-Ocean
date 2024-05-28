function openMenu(){
    const open = document.querySelector('#nav-mobile')
    const menu = document.querySelector('#abrir-menu')

    open.style.display = 'flex'
    menu.style.display = 'none'
}

// Close Menu Mobile
function closeMenu(){
    const close = document.querySelector('#nav-mobile')
    const menu = document.querySelector('#abrir-menu')

    close.style.display = 'none'
    menu.style.display = 'flex'
}