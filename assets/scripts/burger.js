let burger = document.getElementById('burger');
burger.addEventListener('click', ()=>{
    let x = document.getElementById('link');

    if (x.classList.contains('links')) {
        x.classList.remove('links')
        x.classList.add('links_active')
    } else if (x.classList.contains('links_active')) {
        x.classList.remove('links_active')
        x.classList.add('links')
    }
});