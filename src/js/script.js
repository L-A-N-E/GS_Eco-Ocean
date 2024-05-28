// Abrir Menu
function openMenu(){
    const open = document.querySelector('#nav-mobile');
    const menu = document.querySelector('#abrir-menu');

    open.style.display = 'flex';
    menu.style.display = 'none';
}

// Fechar Menhu
function closeMenu(){
    const close = document.querySelector('#nav-mobile');
    const menu = document.querySelector('#abrir-menu');

    close.style.display = 'none';
    menu.style.display = 'flex';
}

// Abrir Modal
function openModal(){
    const modal = document.querySelector('#modal-sobre');
    const conteudo_sobre = document.querySelector('#conteudo-sobre');

    modal.style.display = 'flex';
    conteudo_sobre.style.display = 'none';
}
// Fechar Modal
function closeModal(){
    const modal = document.querySelector('#modal-sobre');
    const conteudo_sobre = document.querySelector('#conteudo-sobre');

    modal.style.display = 'none';
    conteudo_sobre.style.display = 'flex';
}

//Animação aparecer
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    })
})
const hiddenElemente = document.querySelectorAll(".hidden");
hiddenElemente.forEach((el)=> observer.observe(el));