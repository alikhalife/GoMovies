let screenW = window.innerWidth;
let screenH = window.innerHeight;
let pomme = screenW + 'px';
let counter = 1;
console.log(pomme);
document.body.onload=function(){
    nbr=3;
    p=0;
    contain_carrousel=document.getElementById('contain_carrousel');
    right=document.getElementById('r');
    contain_carrousel.style.width=(screenW*nbr)+"px";
    for (i = 1; i <= nbr;i++){
        div=document.createElement("div");
        div.className='photo';
        div.style.width = pomme;
        div.style.backgroundImage="url('/assets/images/Film"+i+".jpg')";
        contain_carrousel.appendChild(div);
    }
    console.log(screenW);
    right.onclick=function(){
        if(counter === 3){
            counter=0;
            p=1;
        }
        p--;
        counter++;
        contain_carrousel.style.transform="translate("+p*screenW+"px)";
        contain_carrousel.style.transition="all 0.5s ease";
        console.log(counter);
        // console.log(p);
    }
}