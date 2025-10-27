
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const p4 = document.getElementById('p4');
const buton = document.getElementById('buton');

p1.style.color='darkorchid';
p2.style.color='magenta';
p3.style.color='navy';
buton.addEventListener("click", function() { 
    let losowa = Math.floor(Math.random()*30)+1;
    p1.textContent='Wylosowana liczba ' + losowa;
if(losowa >= 20){
    p2.textContent="Wylosowana liczba jest wieksza lub równa 20"

}else{
    p2.textContent="";
}
if(losowa%2==0){
p3.textContent="Wylosowana liczba jest parzysta";
}else{
    p3.textContent="Wylosowana liczba jest nie parzysta";
}
if(losowa<=10){
    p4.textContent="Pierwsza dziesiątka";
}else if(losowa>20){
    p4.textContent="Trzecia dziesiątka";
}else {
    p4.textContent="Druga dziesiątka";
}
})