let count =1;

const cards = document.querySelectorAll(".kbd");
//console.log(cards)

for(let index =0; index<cards.length; index++){
   const card = cards[index];

   card.addEventListener("click", function(){
       const title = card.querySelector("h3").innerText; 
       const titleContainer = document.getElementById('container');

       let new_li = document.createElement("li");
        //const p = document.createElement("p");
       
    if(count<=4){
       let p1 = document.createElement("p");
         p1.innerText= (count) + ". " + title ;

         let p2 = document.createElement("p");
         p2.innerText= "Economy"  ;
         let p3 = document.createElement("p");
         p3.innerText= "550"  ;

         new_li.appendChild(p1);
         new_li.appendChild(p2);
         new_li.appendChild(p3);
        
       titleContainer.appendChild(new_li);
       new_li.style.display = "flex"
       new_li.style.justifyContent = "space-evenly"

       total = parseInt(550 * count);
       document.getElementById('totalPrice').innerText= total;

       
      const totalSeat = document.getElementById('Seat');
       totalSeat.innerText=count;
       document.getElementById('seatLeft').innerText= 8 - (count); 
       card.classList.add('bg-green-500'); 
       }

       else{
         alert("Limit up");
       }
       
    count++;
     
  });

}

// --------------------------------coupon------------------------------------------
const btn = document.getElementById('apply-btn');
btn.addEventListener("click", function(){
 
   const couponElement = document.getElementById('input-field').value;
  
  
      if(couponElement==="NEW15"){
        const discountElement = document.getElementById('discountPrice');
        const discount = parseFloat(total * 0.15);
        discountElement.innerText= total - discount;
        document.getElementById('input-field').classList.add("hidden");
        btn.classList.add("hidden");
      }
     else if(couponElement==="Couple 20"){
        const discountElement = document.getElementById('discountPrice');
        const discount = parseFloat(total * 0.2);
        discountElement.innerText= total - discount;
        document.getElementById('input-field').classList.add("hidden");
        btn.classList.add("hidden");
      }
      else{
        alert("Invalid Coupon");
      }  

});  


// hidden section----------------------------------------------------------------------

function buy(){
   // hidden add
   const hiddenAdd = document.getElementById('banner');
   hiddenAdd.classList.add('hidden');

   // hidden remove
   const hiddenRemove = document.getElementById('ticket');
   hiddenRemove.classList.remove('hidden');

   const hiddenRemove1 = document.getElementById('coupon');
   hiddenRemove1.classList.remove('hidden');

}

// -------------------------------------------------------------------------------------
