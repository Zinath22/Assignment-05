let totalPrice = 0;
function handleClick(target){
    const selectedItemsContainer = document.getElementById("selected-items")
const itemName = target.childNodes[5].childNodes[1].innerText;
const li = document.createElement('li');
li.style.listStyle = 'number' ;
li.innerText = itemName;
selectedItemsContainer.appendChild(li);
// total 
const price = target.childNodes[5].childNodes[3].innerText.split(" ")[0]
totalPrice = parseFloat  (totalPrice)  + parseFloat (price);
const totalDecimal = totalPrice.toFixed(2)
document.getElementById("total").innerText = totalDecimal;
// apply 
const applyButton = document.getElementById("apply-confirm")
if (totalPrice >= 200){
    applyButton.removeAttribute('disabled');
}
else{
    applyButton.setAttribute('disabled', true)
}
// purchase 
const purchaseField = document.getElementById('apply-purchase')
if( totalPrice > 0){
    purchaseField.removeAttribute('disabled');
    
}
else{
    purchaseField.setAttribute('disabled', true);
}
}
// discount 
  document.getElementById('apply-confirm').addEventListener('click', function(){
    const discountName =document.getElementById('discount-btn');
    const discountTotal = document.getElementById('discount-total');
    const applyCode = document.getElementById('coupon-main').value; 
   document.getElementById('coupon-main').value = ' ';
    
   if(applyCode === "SELL200"){
    
    const discountAmount = discountName.innerText = parseFloat(totalPrice * 20 / 100).toFixed(2);
    // const fixedTaka = discountAmount.toFixed(2)
   const totalAmount  = discountTotal.innerText =(totalPrice - discountAmount).toFixed(2);
//    totalAmount.toFixed(2);
  
    }
   else{
    alert("Invalid Code");
   }

})

// go home
function goHomeBtn(){
    totalPrice = parseFloat(0);
    document.getElementById('selected-items').innerText = "";
    document.getElementById('total').innerText = "00";
    document.getElementById('coupon-main').value = "";
    document.getElementById('discount-btn').innerText = "00";
    document.getElementById('discount-total').innerText = "00";
   
    document.getElementById('apply-confirm').setAttribute('disabled', true) ;
    document.getElementById('apply-purchase').setAttribute('disabled', true) ;
   

} 
