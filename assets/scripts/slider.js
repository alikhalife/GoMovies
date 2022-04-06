let screenW = window.innerWidth;
let screenH = window.innerHeight;
let pomme = screenW + 'px';
let counter = 1;
// console.log(pomme);
// let elipse1 = document.getElementById('elipseImg1');
// let elipse2 = document.getElementById('elipseImg2');
// let elipse3 = document.getElementById('elipseImg3');
// let lps = false;
let lps = document.getElementsByClassName('lps')[0];
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
        // div.style.backgroundImage="url('https://image.tmdb.org/t/p/w500/t7I942V5U1Ggn6OevN75u3sNYH9.jpg')"
        contain_carrousel.appendChild(div);
    }
    // console.log(screenW);
    right.onclick=function(){
        if(counter === 3){
            counter=0;
            p=1;
        }
        p--;
        counter++;
        contain_carrousel.style.transform="translate("+p*screenW+"px)";
        contain_carrousel.style.transition="all 0.5s ease";
        // console.log(counter);
        console.log(p);
        switch (p) {
            case 0 : 
                document.getElementsByClassName('lps-items')[2].classList.remove('lps-active');
                document.getElementsByClassName('lps-items')[2].classList.add('lps');
                document.getElementsByClassName('lps-items')[0].classList.remove('lps');
                document.getElementsByClassName('lps-items')[0].classList.remove('lps-active');
                document.getElementsByClassName('lps-items')[0].classList.add('lps-active');
                // console.log('case 0');
                break;
            case -1 :
                document.getElementsByClassName('lps-items')[0].classList.remove('lps-active');
                document.getElementsByClassName('lps-items')[0].classList.add('lps');
                document.getElementsByClassName('lps-items')[1].classList.remove('lps');
                document.getElementsByClassName('lps-items')[1].classList.add('lps-active');
                // console.log('case -1');
                break;
            case -2 :
                document.getElementsByClassName('lps-items')[1].classList.remove('lps-active');
                document.getElementsByClassName('lps-items')[1].classList.add('lps');
                document.getElementsByClassName('lps-items')[2].classList.remove('lps');
                document.getElementsByClassName('lps-items')[2].classList.add('lps-active');
                // console.log('case -2');
                break;
        }
    }
}