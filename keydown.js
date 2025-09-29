
document.addEventListener("keydown", function(event) {
    document.getElementById("para").innerText = event.key;
    console.log("wcisniety klawisz:", event.key, event.code);
    if(event.key === 'p'){
        document.getElementById("para").innerText = "pokaz mi to w kodzie";
    }
    
})