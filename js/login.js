let SignInBtn=document.getElementById("sign-in");
let username=document.getElementById("username");
let password=document.getElementById("password");
let get_user=localStorage.getItem("username")
let get_password=localStorage.getItem("password")
SignInBtn.addEventListener("click",function (e) {
    e.preventDefault()
    if (username.value===""||password.value==="") {
        alert("Please fill data");
    }else{
       if (get_user && get_user.trim() === username.value &&get_password && get_password.trim() === password.value) {
        setTimeout(()=>{
            window.location="index.html"
        },1500)
       }
       else{
        alert("Username or Password is wrong")
       }
    }
    
})
