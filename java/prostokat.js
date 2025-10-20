
const guzik = document.getElementById('narysuj');
guzik.addEventListener('click', function (){


const wysokoscel = document.getElementById("wysokosc");
let wysokosc = wysokoscel.value;

// console.log(wysokosc);




const szerokoscel = document.getElementById("szerokosc");
let  szerokosc = szerokoscel.value;

const kolorel = document.getElementById("kolor");
let  kolor = kolorel.value;

const prostokat = document.getElementById('prostokat');
    prostokat.style.width = szerokosc +'cm';
    prostokat.style.height = wysokosc + 'cm';
    prostokat.style.backgroundColor = kolor ;

    let pole = wysokosc*szerokosc;
const polee = document.getElementById("pole");
polee.innerHTML = "Pole prostokąta to: " + pole + " cm²";

    let obwod = 2*wysokosc+2*szerokosc;
    const owood = document.getElementById("obwod");
    owood.innerHTML = "Obwód prostokąta to: " + obwod + " cm";


})


