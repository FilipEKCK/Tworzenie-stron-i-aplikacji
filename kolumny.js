 document.querySelector('header').style.backgroundColor = 'yellow';
  const HEADERH1 = document.querySelector('header h1');
  console.log(HEADERH1);
  HEADERH1.style.fontFamily="ARIAL BLACK";
  HEADERH1.textContent="PREAMBUŁA";
   const sections = document.querySelectorAll('section');
   console.log(sections);
   for(const sec of sections){
   sec.style.border="solid 2px brown";}
    const maincolumnh1 = document.querySelector('.main_column h1');
    console.log(maincolumnh1); 
    maincolumnh1.textContent="Specjalność szefa";
     const maincolumn = document.querySelector('.main_column');
     const P1 = document.createElement("P");
     P1.textContent="Kebab na frytkach -_-";
     maincolumn.appendChild(P1);
      const footer = document.querySelector("footer");
      const div = document.createElement("div");
      const p2 = document.createElement("p");
      div.style.backgroundColor="pink";
      p2.textContent="&copy";
      p2.style.textAlign="center";
      footer.appendChild(div);
      div.appendChild(p2);
       const h1=document.querySelectorAll("H1");
       h1[3].remove();
        const p3=document.createElement("p");
        p3.innerHTML="<i>Pochylony tekst</i>"
        const p4=document.createElement("p");
        p4.innerText = "<i>Pochylony tekst</i>"
        const header=document.querySelector("header");
        header.appendChild(p3);
        header.appendChild(p4);
         const section5=document.createElement("section");
         section5.style.border="solid 2px blue";
         section5.style.padding="10px 20px";
         section5.textContent="Zderzak";
         const script=querySelector("script");
         script.appendChild(section5);

   
