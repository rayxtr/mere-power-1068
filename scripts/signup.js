
document.querySelector("form").addEventListener("submit",register);


function register(event){
 event.preventDefault();
    let name = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let user ={
        name,email,pass
    };
    
let users = JSON.parse(localStorage.getItem("ms_users"))||[];

let already = users.length&& JSON.parse(localStorage.getItem("ms_users")).some(data=>data.email==email);

if(!already){
  
    users.push(user);
    localStorage.setItem("ms_users",JSON.stringify(users))
    document.querySelector("form").reset();
    document.getElementById("email").focus();

    alert("Hi "+name+" Your Account Has Been Created \n Please Sign in now and enjoy shopping");
    
}else{
    alert("This email is already registered!! \n Please try a unique email id");
}



}