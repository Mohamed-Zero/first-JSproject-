let username=localStorage.getItem("username")
let email=localStorage.getItem("email")
let password=localStorage.getItem("password")
let U=document.getElementById("username")
let E=document.getElementById("email")
let P=document.getElementById("password")

let con_user=document.getElementsByClassName("informa")

function drawinfo() {
 U.innerHTML=username
 E.innerHTML=email
 P.innerHTML=password
}
drawinfo()

