let miesiac = Math.floor(Math.random()*15)+1;
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const buton = document.getElementById("buton");
p1.textContent = ""+ miesiac;
switch(miesiac){
    case 1:
    case 2:
    case 3:
        p2.textContent = "I kwartał";
        break;
    case 4:
    case 5:
    case 6:
        p2.textContent = "II kwartał";
        break;
    case 7:
    case 8:
    case 9:
        p2.textContent = "III kwartał";
        break;
    case 10:
    case 11:
    case 12:
        p2.textContent = "IV kwartał";
        break;
    case 13:
    case 14:
    case 15:
        p2.textContent = "Błędny numer miesiąca";
        break;
}