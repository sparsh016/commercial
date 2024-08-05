let icon=document.querySelector(".icon");
let ul=document.querySelector("ul");

icon.addEventListener('click' , ()=>{
    ul.classList.toggle("showData");

    if(ul.className=="showData")
        {
            document.getElementById("bar").className="fa-solid fa-xmark";
        }
        else{
            document.getElementById("bar").className="fa-solid fa-bars";
        }
})


let crd=document.querySelectorAll(".crd");
let itemPage=document.querySelector(".itemPage");
let container=document.querySelector(".container");
let itemSrc=document.getElementById("itemSrc");
let buybtn=document.getElementById("buybtn");
let buyText=document.querySelector(".buyText");
let buyPage=document.querySelector(".buyPage");
let cross=document.querySelector(".cross");

crd.forEach(function(curValue){

    curValue.addEventListener("click",function(){

        itemPage.style.display="flex";
        container.style.display="none";
        
        let imgSrc=curValue.firstElementChild.src;
        itemSrc.src=imgSrc;

       buybtn.addEventListener("click",function(){
        
        buyPage.style.display="flex";
        buyText.innerHTML=
        
        ` <h3>Enter Details:</h3><br>
            <input type="text" placeholder="Enter Your Name"><br>
            <input type="text" placeholder="Address"> <br>
            <input type="text" placeholder="Mobile no."><br>

            <h3>Payment options:</h3><br>

            <select>
                <option value="Google-Pay"> Google-Pay</option>
                <option value="Phone-pay"> Phone-pay</option>
                <option value="Bharat-Pay"> Bharat-Pay</option>
                <option value="Cash-on-Delivery">Cash-on-Delivery</option>
            </select><br>

            <button>submit</button> `



       })
   
       cross.addEventListener("click",function(){
 
        buyPage.style.display="none";

       })
       

    })
    
})

