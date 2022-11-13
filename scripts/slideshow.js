
 let imgs = document.querySelectorAll(".slides img");

 let i =0;



let slideshow = setInterval(imageslide,2000);

function imageslide(){
   
imgs.forEach((elm,i)=>{

    elm.style.display="none";

});

if(i==imgs.length){
    i=0;
}

imgs[i].style.display="flex";
i++;

}


