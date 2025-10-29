const blok1 = document.getElementById("blok1");
const hint1 = document.getElementById("hint1");
const odp1 = document.getElementById("odp1");
const answ1 = document.getElementById("answ1");



hint1.style.display='none';
odp1.style.display='none';
let click1=0
let podp1 = hint1.textContent
blok1.addEventListener("click", function(){ 
    
if(click1==0){
    click1++;
    blok1.innerHTML='&blk34;';
    hint1.textContent=podp1.replace(/[a-z]/g, "*")+" ("+podp1.length+")";
    hint1.style.display='inline';
    
    
} else if (click1==1){
    click1++;
    blok1.innerHTML='&blk12;';
    hint1.textContent=podp1.slice(0,1)+podp1.slice(1).replace(/[a-z]/g, "*")+" ("+podp1.length+")";
}
 else if (click1==2){
    click1++;
    blok1.innerHTML='&blk14;';
    hint1.textContent=podp1.slice(0,1)+podp1.slice(1,-1).replace(/[a-z]/g, "*")+podp1.slice(-1)+" ("+podp1.length+")";
 }
 else if (click1==3){
    click1++
    blok1.style.display="none";
    hint1.style.display="none";
    answ1.style.display="none";
    odp1.style.display="inline";
 }
})

answ1.addEventListener("click", function(){
    let prompt1 = prompt("Podaj odpowiedź")
   if(prompt1==odp1.textContent){
    blok1.style.display="none";
    hint1.style.display="none";
    answ1.style.display="none";
    odp1.style.display="inline";
    alert("Poprawna odpowiedź");
   } else {
    alert("Zła odpowiedź, próbuj dalej");
   }
})





const blok2 = document.getElementById("blok2");
const hint2 = document.getElementById("hint2");
const odp2 = document.getElementById("odp2");
const answ2 = document.getElementById("answ2");

hint2.style.display='none';
odp2.style.display='none';
let click2=0
let podp2 = hint2.textContent
blok2.addEventListener("click", function(){ 
    
if(click2==0){
    click2++;
    blok2.innerHTML='&blk34;';
    hint2.textContent=podp2.replace(/[a-z]/g, "*")+" ("+podp2.length+")";
    hint2.style.display='inline';
    
    
} else if (click2==1){
    click2++;
    blok2.innerHTML='&blk12;';
    hint2.textContent=podp2.slice(0,1)+podp2.slice(1).replace(/[a-z]/g, "*")+" ("+podp2.length+")";
}
 else if (click2==2){
    click2++;
    blok2.innerHTML='&blk14;';
    hint2.textContent=podp2.slice(0,1)+podp2.slice(1,-1).replace(/[a-z]/g, "*")+podp2.slice(-1)+" ("+podp2.length+")";
 }
 else if (click2==3){
    click2++
    blok2.style.display="none";
    hint2.style.display="none";
    answ2.style.display="none";
    odp2.style.display="inline";
 }
})

answ2.addEventListener("click", function(){
    let prompt2 = prompt("Podaj odpowiedź")
   if(prompt2==odp2.textContent){
    blok2.style.display="none";
    hint2.style.display="none";
    answ2.style.display="none";
    odp2.style.display="inline";
    alert("Poprawna odpowiedź");
   } else {
    alert("Zła odpowiedź, próbuj dalej");
   }
})






const blok3 = document.getElementById("blok3");
const hint3 = document.getElementById("hint3");
const odp3 = document.getElementById("odp3");
const answ3 = document.getElementById("answ3");

hint3.style.display='none';
odp3.style.display='none';
let click3=0
let podp3 = hint3.textContent
blok3.addEventListener("click", function(){ 
    
if(click3==0){
    click3++;
    blok3.innerHTML='&blk34;';
    hint3.textContent=podp3.replace(/[a-z]/g, "*")+" ("+podp3.length+")";
    hint3.style.display='inline';
    
    
} else if (click3==1){
    click3++;
    blok3.innerHTML='&blk12;';
    hint3.textContent=podp3.slice(0,1)+podp3.slice(1).replace(/[a-z]/g, "*")+" ("+podp3.length+")";
}
 else if (click3==2){
    click3++;
    blok3.innerHTML='&blk14;';
    hint3.textContent=podp3.slice(0,1)+podp3.slice(1,-1).replace(/[a-z]/g, "*")+podp3.slice(-1)+" ("+podp3.length+")";
 }
 else if (click3==3){
    click3++
    blok3.style.display="none";
    hint3.style.display="none";
    answ3.style.display="none";
    odp3.style.display="inline";
 }
})

answ3.addEventListener("click", function(){
    let prompt3 = prompt("Podaj odpowiedź")
   if(prompt3==odp3.textContent){
    blok3.style.display="none";
    hint3.style.display="none";
    answ3.style.display="none";
    odp3.style.display="inline";
    alert("Poprawna odpowiedź");
   } else {
    alert("Zła odpowiedź, próbuj dalej");
   }
})





const blok4 = document.getElementById("blok4");
const hint4 = document.getElementById("hint4");
const odp4 = document.getElementById("odp4");
const answ4 = document.getElementById("answ4");

hint4.style.display='none';
odp4.style.display='none';
let click4=0
let podp4 = hint4.textContent
blok4.addEventListener("click", function(){ 
    
if(click4==0){
    click4++;
    blok4.innerHTML='&blk34;';
    hint4.textContent=podp4.replace(/[a-z]/g, "*")+" ("+podp4.length+")";
    hint4.style.display='inline';
    
    
} else if (click4==1){
    click4++;
    blok4.innerHTML='&blk12;';
    hint4.textContent=podp4.slice(0,1)+podp4.slice(1).replace(/[a-z]/g, "*")+" ("+podp4.length+")";
}
 else if (click4==2){
    click4++;
    blok4.innerHTML='&blk14;';
    hint4.textContent=podp4.slice(0,1)+podp4.slice(1,-1).replace(/[a-z]/g, "*")+podp4.slice(-1)+" ("+podp4.length+")";
 }
 else if (click4==3){
    click4++
    blok4.style.display="none";
    hint4.style.display="none";
    answ4.style.display="none";
    odp4.style.display="inline";
 }
})

answ4.addEventListener("click", function(){
    let prompt4 = prompt("Podaj odpowiedź")
   if(prompt4==odp4.textContent){
    blok4.style.display="none";
    hint4.style.display="none";
    answ4.style.display="none";
    odp4.style.display="inline";
    alert("Poprawna odpowiedź");
   } else {
    alert("Zła odpowiedź, próbuj dalej");
   }
})





const blok5 = document.getElementById("blok5");
const hint5 = document.getElementById("hint5");
const odp5 = document.getElementById("odp5");
const answ5 = document.getElementById("answ5");

hint5.style.display='none';
odp5.style.display='none';
let click5=0
let podp5 = hint5.textContent
blok5.addEventListener("click", function(){ 
    
if(click5==0){
    click5++;
    blok5.innerHTML='&blk34;';
    hint5.textContent=podp5.replace(/[a-z]/g, "*")+" ("+podp5.length+")";
    hint5.style.display='inline';
    
    
} else if (click5==1){
    click5++;
    blok5.innerHTML='&blk12;';
    hint5.textContent=podp5.slice(0,1)+podp5.slice(1).replace(/[a-z]/g, "*")+" ("+podp5.length+")";
}
 else if (click5==2){
    click5++;
    blok5.innerHTML='&blk14;';
    hint5.textContent=podp5.slice(0,1)+podp5.slice(1,-1).replace(/[a-z]/g, "*")+podp5.slice(-1)+" ("+podp5.length+")";
 }
 else if (click5==3){
    click5++
    blok5.style.display="none";
    hint5.style.display="none";
    answ5.style.display="none";
    odp5.style.display="inline";
 }
})

answ5.addEventListener("click", function(){
    let prompt5 = prompt("Podaj odpowiedź")
   if(prompt5==odp5.textContent){
    blok5.style.display="none";
    hint5.style.display="none";
    answ5.style.display="none";
    odp5.style.display="inline";
    alert("Poprawna odpowiedź");
   } else {
    alert("Zła odpowiedź, próbuj dalej");
   }
})







const blok6 = document.getElementById("blok6");
const hint6 = document.getElementById("hint6");
const odp6 = document.getElementById("odp6");
const answ6 = document.getElementById("answ6");

hint6.style.display='none';
odp6.style.display='none';
let click6=0
let podp6 = hint6.textContent
blok6.addEventListener("click", function(){ 
    
if(click6==0){
    click6++;
    blok6.innerHTML='&blk34;';
    hint6.textContent=podp6.replace(/[a-z]/g, "*")+" ("+podp6.length+")";
    hint6.style.display='inline';
    
    
} else if (click6==1){
    click6++;
    blok6.innerHTML='&blk12;';
    hint6.textContent=podp6.slice(0,1)+podp6.slice(1).replace(/[a-z]/g, "*")+" ("+podp6.length+")";
}
 else if (click6==2){
    click6++;
    blok6.innerHTML='&blk14;';
    hint6.textContent=podp6.slice(0,1)+podp6.slice(1,-1).replace(/[a-z]/g, "*")+podp6.slice(-1)+" ("+podp6.length+")";
 }
 else if (click6==3){
    click6++
    blok6.style.display="none";
    hint6.style.display="none";
    answ6.style.display="none";
    odp6.style.display="inline";
 }
})

answ6.addEventListener("click", function(){
    let prompt6 = prompt("Podaj odpowiedź")
   if(prompt6==odp6.textContent){
    blok6.style.display="none";
    hint6.style.display="none";
    answ6.style.display="none";
    odp6.style.display="inline";
    alert("Poprawna odpowiedź");
   } else {
    alert("Zła odpowiedź, próbuj dalej");
   }
})





const blok7 = document.getElementById("blok7");
const hint7 = document.getElementById("hint7");
const odp7 = document.getElementById("odp7");
const answ7 = document.getElementById("answ7");

hint7.style.display='none';
odp7.style.display='none';
let click7=0
let podp7 = hint7.textContent
blok7.addEventListener("click", function(){ 
    
if(click7==0){
    click7++;
    blok7.innerHTML='&blk34;';
    hint7.textContent=podp7.replace(/[a-z]/g, "*")+" ("+podp7.length+")";
    hint7.style.display='inline';
    
    
} else if (click7==1){
    click7++;
    blok7.innerHTML='&blk12;';
    hint7.textContent=podp7.slice(0,1)+podp7.slice(1).replace(/[a-z]/g, "*")+" ("+podp7.length+")";
}
 else if (click7==2){
    click7++;
    blok7.innerHTML='&blk14;';
    hint7.textContent=podp7.slice(0,1)+podp7.slice(1,-1).replace(/[a-z]/g, "*")+podp7.slice(-1)+" ("+podp7.length+")";
 }
 else if (click7==3){
    click7++
    blok7.style.display="none";
    hint7.style.display="none";
    answ7.style.display="none";
    odp7.style.display="inline";
 }
})

answ7.addEventListener("click", function(){
    let prompt7 = prompt("Podaj odpowiedź")
   if(prompt7==odp7.textContent){
    blok7.style.display="none";
    hint7.style.display="none";
    answ7.style.display="none";
    odp7.style.display="inline";
    alert("Poprawna odpowiedź");
   } else {
    alert("Zła odpowiedź, próbuj dalej");
   }
})





const blok8 = document.getElementById("blok8");
const hint8 = document.getElementById("hint8");
const odp8 = document.getElementById("odp8");
const answ8 = document.getElementById("answ8");

hint8.style.display='none';
odp8.style.display='none';
let click8=0
let podp8 = hint8.textContent
blok8.addEventListener("click", function(){ 
    
if(click8==0){
    click8++;
    blok8.innerHTML='&blk34;';
    hint8.textContent=podp8.replace(/[a-z]/g, "*")+" ("+podp8.length+")";
    hint8.style.display='inline';
    
    
} else if (click8==1){
    click8++;
    blok8.innerHTML='&blk12;';
    hint8.textContent=podp8.slice(0,1)+podp8.slice(1).replace(/[a-z]/g, "*")+" ("+podp8.length+")";
}
 else if (click8==2){
    click8++;
    blok8.innerHTML='&blk14;';
    hint8.textContent=podp8.slice(0,1)+podp8.slice(1,-1).replace(/[a-z]/g, "*")+podp8.slice(-1)+" ("+podp8.length+")";
 }
 else if (click8==3){
    click8++
    blok8.style.display="none";
    hint8.style.display="none";
    answ8.style.display="none";
    odp8.style.display="inline";
 }
})

answ8.addEventListener("click", function(){
    let prompt8 = prompt("Podaj odpowiedź")
   if(prompt8==odp8.textContent){
    blok8.style.display="none";
    hint8.style.display="none";
    answ8.style.display="none";
    odp8.style.display="inline";
    alert("Poprawna odpowiedź");
   } else {
    alert("Zła odpowiedź, próbuj dalej");
   }
})
