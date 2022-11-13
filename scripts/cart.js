let mycart = JSON.parse(localStorage.getItem("ms_cart_added"))||[];
let promise = new Promise((res,rej)=>{
res("Your Health! Our Responsibility.");
rej("Somethings missing");
}) ;
promise.then((val)=>{alert(val);displaycart(mycart)}).catch((val)=>alert(val));
// displaycart(mycart);
console.log(mycart);
function displaycart(mycart){
    document.querySelector("#cartitems").innerHTML="";
mycart.forEach(function(elem,i){


    let innerdiv = document.createElement("div");
   
   
    let box2=document.createElement("div");
    let name = document.createElement("p");
    name.innerText=elem.name;
    name.style.fontWeight="550";
    name.style.fontSize="14px";
    let price =document.createElement("p");
    price.innerHTML="<b>Price</b>:: "+elem.price+" ₹";
    
    let box = document.createElement("div");
    box.className="quantity";
    let minus = document.createElement("button");
    minus.innerText="-";
    let plus = document.createElement("button");
    plus.innerText="+";
    let num = document.createElement("figcaption");
   
  
  
    box2.append(name,price);
    box2.className="Title";
    

    let box3 = document.createElement("div");
  
   
    let count =0;
    let tp=0;
    minus.addEventListener("click",function(event){
        event.preventDefault();
       
    count = localStorage.getItem("mscount");
    count--;
    if(count<0)
    {count=1};
    localStorage.setItem("mscount",count);
    num.innerText=count;
    tp=Number(elem.price*Number(count));
price.innerText="Total Price: "+tp;
        
    });
    plus.addEventListener("click",function(event){
        event.preventDefault();
       
    count = localStorage.getItem("mscount");
    count++;
    
    localStorage.setItem("mscount",count);
    num.innerText=count;
    tp=Number(elem.price*Number(count));
price.innerText="Total Price : "+tp +" ₹";
        
    });

    let remove = document.createElement("button");
    remove.innerText="Remove";
    let box4=document.createElement("div");
    box4.className="Price";
    let dust = document.createElement("img");
    dust.setAttribute("src","https://cdn-icons-png.flaticon.com/128/3569/3569930.png");
    box3.append(dust,remove);

    box4.append(box3,box);

    box.append(minus,num,plus);
    innerdiv.append(box2,box4);
    document.querySelector("#cartitems").append(innerdiv);

remove.addEventListener("click",function(elem,i){
    removeitem(elem,i)
});
    


});
}

function removeitem(elem,i){
    mycart.splice(i,1);
    displaycart(mycart);
    localStorage.setItem("ms_cart_added",JSON.stringify(mycart));
}

let cartarray =JSON.parse(localStorage.getItem("ms_cart_added"))||[];

let np = document.getElementById("np");
np.innerText=cartarray.length;