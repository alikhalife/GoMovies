let burger = document.getElementById('burger');
let links = document.getElementById('links');

let boolean = false;

burger.addEventListener('click', ()=>{
    links.style.display = "block";
    boolean = true;
    if (boolean = true) {
        burger.addEventListener('click', () => {
            links.style.display= 'none';
            boolean = false;
        });
    };
});