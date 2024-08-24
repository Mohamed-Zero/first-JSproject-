let logIn= document.getElementById("link1")
let signUp= document.getElementById("link2")
let userD=document.getElementById("profile")
if (localStorage.getItem("username")) {
    logIn.style.display="none"
    signUp.style.display="none"
    userD.style.display="block"
    userD.innerHTML=localStorage.getItem("username")
}