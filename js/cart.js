let allItems=document.getElementById("allItems")
let InCart=localStorage.getItem("productInCart")
let favor=localStorage.getItem("favor")
var  totalP=document.getElementById("totalP")
if (InCart) {
  var pro=JSON.parse(InCart) 
  drawItem(pro);
  totalP.style.display="block";
    }
    else{
      allItems.innerHTML="NO items has been choosen "

    }
function drawItem(pro) {
    let y=pro.map((item)=>{
  return `    
      <div class="item col  col-sm-6 col-md-4 col-lg-3  m-auto " id="item">
      <div class="card cardI mt-2" style="width: 18rem;">
                <img src="${item.ImageUrl}" class="card-img-top" alt="#">
                <div class="card-body">
                  <h5 class="card-title">Product :${item.Pname} </h5>
                  <p class="card-text">Price:${item.Price} </p>
                  <p class="card-text">Category:${item.category} </p>
                  <div class="btns">
                    <button class="btn btn-secondary add" >+</button>
                    <span class="quantity">1</span>
                    <button class="btn btn-secondary remove" >-</button>
                    <button class=" btn btn-danger btnremove ">Remove </button>
  
                  </div>
                  </div>
                  </div>
                  </div>
                  `
                  
                  
                })  
                
                allItems.innerHTML=y
                effects();
              }
              function effects() {
    
                let remove=document.querySelectorAll(".item .cardI  .card-body .btns .btnremove ")
                let  btnAdd=document.querySelectorAll(".item .cardI  .card-body .btns .add ")
                let  quantity=document.querySelectorAll(".item .cardI  .card-body .btns .quantity ")
                let btnRemove=document.querySelectorAll(".item .cardI  .card-body .btns .remove ")
                btnAdd.forEach((element,index)=>{
                    element.onclick=()=>{
                      ++pro[index].quan;
                      quantity[index].innerHTML=pro[index].quan;
                    }
                })
                btnRemove.forEach((element,index)=>{
                  element.onclick=()=>{
                    --pro[index].quan;
                    if (pro[index].quan>0) {
                      quantity[index].innerHTML=pro[index].quan;
                    }
                    else{
                      pro[index].quan=1;
                    }
                  }
                })
                remove.forEach((element,index)=>{
                  element.onclick=()=>{
                    pro.splice(index,1); 
                    localStorage.setItem("productInCart",JSON.stringify(pro))
                    drawItem(pro);
                  }
                })
}
 var showP=document.getElementById("showPr")
 var num=document.getElementById("num")
var total =0
totalP.onclick=()=>{
  if (showP.style.display!="block") {
    showP.style.display="block"
  }
  else{
    showP.style.display="none"
  }
  pro.map((item)=>{
    total+=item.Price*item.quan
  })
    num.innerHTML=total+"$"
    total=0;
 }