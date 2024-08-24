let allItems=document.getElementById("allItems")

var item =[
    {
        id:1,
        Pname:"T-shirt White",
        Price:200,
        category:"fashion",
        quan:1,
        ImageUrl:"https://img.freepik.com/free-vector/monocolor-midnight-madness-marathon-t-shirt-design_742173-5733.jpg?t=st=1723194289~exp=1723197889~hmac=ab67f657b881c15e68e0453496aff4e6b10f44dd72c18c75661eb345d78f25f4&w=360"
    },
    {
        id:2,
        Pname:"Smart Watch",
        Price:400,
        category:"Phone accesories",
        quan:1,
        ImageUrl:"https://img.freepik.com/free-photo/rendering-smart-home-device_23-2151039302.jpg?t=st=1723194439~exp=1723198039~hmac=abc5a953e9e14f5b548a937f777bd7835023c6c4013ec715ed8f46efbc622973&w=740"
    },
    {
        id:3,
        Pname:"Earpods",
        Price:300,
        category:"Phone accesories",
        quan:1,
        ImageUrl:"https://img.freepik.com/free-vector/pair-blue-wireless-earphones-3d-illustration-cartoon-drawing-equipment-device-listening-music-phone-computer-3d-style-white-background-music-technology-media-concept_778687-685.jpg?t=st=1724161021~exp=1724164621~hmac=1357731fef78a2910784258681cd9bc8e7c7ce5b2b8866458cc4d3caf6f01d25&w=740"
    },
    {
        id:4,
        Pname:"Head Phones",
        Price:200,
        category:"Phone accesories",
        quan:1,
        ImageUrl:"https://img.freepik.com/free-psd/gadget-concept-poster-template_23-2148626932.jpg?t=st=1724161130~exp=1724164730~hmac=0d195ba8c81b9796dd6229ab3c51fa12e5cda47dcb52649dc97f64b69de629a5&w=740"
    },
    {
        id:5,
        Pname:"Screen ",
        Price:900,
        category:"Electronics",
        quan:1,
        ImageUrl:"https://img.freepik.com/free-photo/view-computer-monitor-with-gradient-display_23-2150757475.jpg?t=st=1724161239~exp=1724164839~hmac=3cf0b32b48b18a4403c8daf809871ca22ab8a17868faa979e1946e8047e16c42&w=940"
    },
    
    {
        id:6,
        Pname:"Laptop",
        Price:1900,
        category:"Electronics",
        quan:1,
        ImageUrl:"https://img.freepik.com/free-photo/laptop-screen-template-with-hacking-concept_23-2148165947.jpg?t=st=1724161307~exp=1724164907~hmac=fd34a40571cdea65d69a11da6b67f36c2ac2d053744ea3bd8b204484fc2402b0&w=740"
    },    {
        id:7,
        Pname:"Classic  Watch",
        Price:1000,
        category:"Fashion",
        quan:1,
        ImageUrl:"https://img.freepik.com/free-photo/elegant-watch-with-silver-golden-chain-isolated_181624-27080.jpg?t=st=1724161522~exp=1724165122~hmac=8196cee7d63f91a706312f1233bbf55e81c01b00bf1d8c58b11861c788d96c29&w=740"
    }
    ,
    {
        id:8,
        Pname:"Samsung TV",
        Price:2900,
        category:"Electronics",
        quan:1,
        ImageUrl:"https://img.freepik.com/free-psd/samsung-tv-mockup_1022-20.jpg?t=st=1724161586~exp=1724165186~hmac=5e96c8ad6ebe69cdb9354342193b7b58da8919c196b7557184b0691a80dc82db&w=740"
    }
    ,
    {
        id:9,
        Pname:"Iphone 15",
        Price:1500,
        category:"Phones",
        quan:1,
        ImageUrl:"https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437109.jpg?t=st=1724161712~exp=1724165312~hmac=e04925662861c9e848e9321200657bd3aeadaf80898c42af231055824dfef14c&w=740"
    },
]
function drawItem() {
    let  y=item.map((item)=>{
        
        return `    
        <div class="item col  col-sm-6 col-md-4 col-lg-3  m-auto " id="item">
        <div class="card cardI mt-3" style="width: 18rem;">
        <img src="${item.ImageUrl}" class="card-img-top" alt="#">
                <div class="card-body">
                <h5 class="card-title">Product :${item.Pname} </h5>
                  <p class="card-text">Price:${item.Price}$ </p>
                  <p class="card-text">Category:${item.category} </p>
                  <div class="cards-btn">
                  <div class="btn btn-primary btn-choose">Add to cart</div>
                  <div class="heart"><i class="fa-regular fa-heart heartIcon "></i></div>

                  </div>
                    </div>
                    </div>
                    </div>
              `
        })  
        allItems.innerHTML=y.join("")
        localStorage.setItem("productInCart","")
    }
    drawItem()
    var itemsInCart=localStorage.getItem("productInCart")? JSON.parse(localStorage.getItem("productInCart")):[]
    let heart=document.querySelectorAll(".item .card .card-body .cards-btn .heart")
    var  btnChoose=document.querySelectorAll(".item .card .card-body .cards-btn .btn-choose")
    let counter=document.getElementById("counter")
    var i=0;
    let favor=localStorage.getItem("favor")? JSON.parse(localStorage.getItem("favor")):[]
    
    heart.forEach((product,index) =>{    
    product.onclick=function changeCo() {
        if (localStorage.getItem("username")) {
            if (heart[index].style.backgroundColor!="red") {          
                heart[index].innerHTML= `<i class="fa-solid fa-heart heartIcon"  id="red" style="color: red;"></i>`
                heart[index].style.backgroundColor="red"
                let  heartChoosen=item[index]
                favor=[... favor,heartChoosen]
                
            }
            else{   
                heartChoosen=item[index]

                favor.splice(favor.indexOf(heartChoosen),1)
                heart[index].innerHTML= `<i class="fa-regular fa-heart heartIcon"></i>`
                 heart[index].style.backgroundColor="white"
                 
            }
            localStorage.setItem("favor",JSON.stringify(favor));
            
        } 
        else{
            setTimeout(() => {
                alert("Please Log In first")
            }, 500);
            setTimeout(() => {
                if (confirm("DO you want to Log In")) {
                    window.location="login.html"
                } 
                
            }, 1500);
            
        }
    }
}
)
// if (localStorage.getItem("productInCart")) {        
//         itemsInCart.map((pro,index)=>{ 
//             btnChoose[pro.id-1].innerHTML= "Remove from cart"
//             btnChoose[pro.id-1].style.backgroundColor="red"
//             btnChoose[pro.id-1].style.border="none"  
//             btnChoose[pro.id-1].onclick=()=>{
//           itemsInCart.splice(itemsInCart.indexOf(pro),1);
//           btnChoose[pro.id-1].innerHTML= "Add to cart"
//           btnChoose[pro.id-1].style.backgroundColor="#0d6efd"
//           btnChoose[pro.id-1].style.border="none"
//           console.log(itemsInCart.find(item[pro.id-1]));
          
//           localStorage.setItem("productInCart",JSON.stringify(itemsInCart))
    
// }

//             }
//             )
            
//         btnChoose.forEach((product,index)=>{
//             product.onclick= function change() {
//                 if ( btnChoose[index].style.backgroundColor!="red" ) {          
//                     btnChoose[index].innerHTML= "Remove from cart"
//                     btnChoose[index].style.backgroundColor="red"
//                     btnChoose[index].style.border="none"
//                     i++
//                     counter.innerHTML=i
//                     let  choosen=item[index]
//                     itemsInCart=[... itemsInCart,choosen]
//                     console.log(itemsInCart.indexOf(choosen));
                    
                    
//                 }
//                 else{   
                    
//                     choosen=item[index];
//                     btnChoose[index].innerHTML= "Add to cart"
//                     btnChoose[index].style.backgroundColor="#0d6efd"
//                     btnChoose[index].style.border="none"
//                     i--
//                     counter.innerHTML=i
//                 }
//                 localStorage.setItem("productInCart",JSON.stringify(itemsInCart))     
//         }
//         }
        
//         )
        
    
    
// }
// else{
        

    btnChoose.forEach((product,index)=>{
        product.onclick= function changeCo() {
        if (localStorage.getItem("username")) {
                if (btnChoose[index].style.backgroundColor!="red" ) {          
                btnChoose[index].innerHTML= "Remove from cart"
                btnChoose[index].style.backgroundColor="red"
                btnChoose[index].style.border="none"
                i++
                counter.innerHTML=i
                cart_icon.style.display="block"
                let choosen=item[index]
                itemsInCart=[... itemsInCart,choosen]
                console.log(itemsInCart.indexOf(choosen));
                
            }
            else{   
                choosen=item[index]
                console.log(itemsInCart.indexOf(choosen));

                itemsInCart.splice(itemsInCart.indexOf(choosen),1);
                btnChoose[index].innerHTML= "Add to cart"
                btnChoose[index].style.backgroundColor="#0d6efd"
                btnChoose[index].style.border="none"
                i--
                counter.innerHTML=i
            }
            localStorage.setItem("productInCart",JSON.stringify(itemsInCart))
        }
        else{
            setTimeout(() => {
                alert("Please Log In first")
            }, 500);
            setTimeout(() => {
                if (confirm("DO you want to Log In")) {
                    window.location="login.html"
                } 
                
            }, 1500);
            
        }
    }
}

)


// }
var cart_icon=document.getElementById("cart-icon")
cart_icon.addEventListener=("click",()=>{
    window.location="cart.html"})
 var searchInpute=document.getElementById("searchInpute")
 let submit=document.getElementById("submit")
 submit.onclick=(e)=>{
    let x= item.find((ele)=> ele.Pname===searchInpute.value) 
    if (searchInpute.value==="") {
     drawItem()
    }
     else if (x) {
         e.preventDefault()
         allItems.innerHTML=drawSearch(x)   
     }
     else{
         alert("No item with this Data")
     }

 }
function drawSearch(item) {
   
    return `    
    <div class="item col  col-sm-6 col-md-4 col-lg-3  m-auto " id="item">
  <div class="card cardI mt-3" style="width: 18rem;">
  <img src="${item.ImageUrl}" class="card-img-top" alt="#">
    <div class="card-body">
    <h5 class="card-title">Product :${item.Pname} </h5>
      <p class="card-text">Price:${item.Price} </p>
      <p class="card-text">Category:${item.category} </p>
          <div class="cards-btn">
          <div class="btn btn-primary btn-choose">Add to cart</div>
          <div class="heart"><i class="fa-regular fa-heart heartIcon "></i></div>
          
        </div>
        </div>
  </div>
  </div>
  `

}
