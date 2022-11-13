document.querySelector("form").addEventListener("submit",login);

function login(event){
    event.preventDefault();

    let enteremail = document.getElementById("memail").value;
    let enterpass = document.getElementById("mpass").value;

    let getdata = JSON.parse(localStorage.getItem("ms_users"))||[];

    let isuser = getdata.length && JSON.parse(localStorage.getItem("ms_users")).some(data=>data.email==enteremail&&data.pass==enterpass);

    if(!isuser){
        alert("Incorrect Login credentials!!!");
    }else{
        location.href="/Medicine.html";
    }
}