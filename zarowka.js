const zarowka = document.querySelector("img");
const wl = document.getElementById("wl");
const wyl = document.getElementById("wyl");
const wlwyl = document.getElementById("wlwyl");
const swl = document.getElementById("swl");
const swyl = document.getElementById("swyl");
const label = document.getElementById("label")

wlwyl.addEventListener("change", function (){
    if(wlwyl.checked){
        wl.checked = true;
        zarowka.src = "swieci2.png";
        label.textContent = "Włączona";
    }else{
        wyl.checked = true;
        zarowka.src = "nieswieci2.png";
        label.textContent = "Wyłączona";
    }
    
});
wl.addEventListener("change", function (){
    if(wl.checked){
        wlwyl.checked = true;
        zarowka.src = "swieci2.png"
        label.textContent = "Włączona";
    }
    
});
wyl.addEventListener("change", function (){
    if(wyl.checked){
        wlwyl.checked = false;
        zarowka.src = "nieswieci2.png";
        label.textContent = "Wyłączona";
    }
});
swl.addEventListener("click", function(){
    wl.checked = true;
    zarowka.src = "swieci2.png";
    label.textContent = "Włączona";
    wlwyl.checked= true;
});
swyl.addEventListener("click", function(){
    wyl.checked = true;
    zarowka.src = "nieswieci2.png";
    label.textContent = "Wyłączona";
    wlwyl.checked = false;
});

