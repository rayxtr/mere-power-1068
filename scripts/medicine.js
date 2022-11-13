
let bag=[];

fetch("https://636bd26d7f47ef51e13b5902.mockapi.io/products").then((res)=>res.json()).then((data)=>{console.log(data);bag=data; displayproduct(data)}).catch((err)=>alert(err));


function displayproduct(data){
   document.querySelector("#product1").innerHTML="";
   document.querySelector("#container").innerHTML="";
    data.forEach(function(elem){
        let anchor = document.createElement("a");
        anchor.href='/product.html';
        anchor.target="blank";
        anchor.style.textDecoration="none";
        anchor.style.color="#666";
        let innerdiv = document.createElement("div");

        let imgs = document.createElement("img");
        imgs.setAttribute("src",elem.image_url);
        let name = document.createElement("p");
        name.innerText=elem.name;
        let description = document.createElement("p");
        description.innerText=elem.description;
        let category = document.createElement("p");
        ct=elem.category
        category.innerText=ct;
        let highlights = document.createElement("p");
        highlights.innerText=elem.highlight;
        let ingredients = document.createElement("p");
        ingredients.innerText=elem.ingredients;
        let price =document.createElement("p");
        price.innerText=elem.price+" ₹";
        let ratings= document.createElement("p");
        ratings.innerText=elem.ratings;
        let safety = document.createElement("p");
        safety.innerText=elem.safety;
        innerdiv.append(imgs,name,highlights,price);
         anchor.append(innerdiv);
        document.querySelector("#product1").append(anchor);
        anchor.addEventListener("click",function(){

            addproduct(elem);

        });
        
         
        
    });

}


function addproduct(elem){
    let productarray=[];
        productarray.push(elem);
        localStorage.setItem("productms",JSON.stringify(productarray));
    
}
function search1(){
    let search = document.querySelector("#brandsearch").value;

    let filterdata = bag.filter(function(elem){
        return elem.category.toLowerCase().includes(search.toLowerCase());
    });
    displayproduct(filterdata);
}
function search2(){
    let search = document.querySelector("#productsearch").value;

    let filterdata = bag.filter(function(elem){
        return elem.name.toLowerCase().includes(search.toLowerCase());
    });
    displayproduct(filterdata);
}





