
const input = [];
const form = document.getElementById("form");
for( let i=1; i<=100; i++){
    let input = document.createElement("input");
    form.appendChild(input);
    input.id="numer"+i;
    input.name="numer"+i;
    input.style.margin="10px";
    input.style.boxShadow="5px 5px lightblue";
    input.placeholder="Element numer "+i;
    if(i%5==0){
       form.appendChild(document.createElement("br"));
    }
}