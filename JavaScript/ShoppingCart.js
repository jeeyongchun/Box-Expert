//Delete Selected Row (ShoppingCart)

function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("cart-row").deleteRow(i);
}

//Drop Down Box
function DropDownTotal() {
  
  let small = 3;
  let medium = 5;
  let large = 7;
  let customize = 10;
  
  let sum1 = 0.00;
  let sum2 = 0.00;
  let sum3 = 0.00;
  let sub_total = 0.00;
  let grand_total = 0.00;
  
  var Quantity1 = document.getElementById('cart_UQuantity1').value;
  var Quantity2 = document.getElementById('cart_UQuantity2').value;
  var Quantity3 = document.getElementById('cart_UQuantity3').value;
  
  /*Row 1*/
  
  if (document.getElementById("cart_dropdown1").value == "Small")  {
    document.getElementById("cart_UPrice1").innerHTML = "1 box / RM 3.00";
    
    sum1 = Quantity1 * small;
    
    document.getElementById("cart_TotalPrice1").innerHTML = "RM " + sum1.toFixed(2);
    
    sub_total = sum1 + sum2 + sum3;
  
  document.getElementById("cart-subtotal").innerHTML = "RM " + sub_total.toFixed(2);
  
  grand_total = sub_total + 4.90;
  
  document.getElementById("cart-grandTotal").innerHTML = "RM " + grand_total.toFixed(2);
    
  }  else if(document.getElementById("cart_dropdown1").value == "Medium") {
    document.getElementById("cart_UPrice1").innerHTML = "1 box / RM 5.00";
    
    sum1 = Quantity1 * medium;
    
    document.getElementById("cart_TotalPrice1").innerHTML = "RM " + sum1.toFixed(2);
    
    sub_total = sum1 + sum2 + sum3;
  
  document.getElementById("cart-subtotal").innerHTML = "RM " + sub_total.toFixed(2);
  
  grand_total = sub_total + 4.90;
  
  document.getElementById("cart-grandTotal").innerHTML = "RM " + grand_total.toFixed(2);
    
  } else if(document.getElementById("cart_dropdown1").value == "Large") {
    document.getElementById("cart_UPrice1").innerHTML = "1 box / RM 7.00";
    
    sum1 = Quantity1 * large;
    
    document.getElementById("cart_TotalPrice1").innerHTML = "RM " + sum1.toFixed(2);
    
    sub_total = sum1 + sum2 + sum3;
  
  document.getElementById("cart-subtotal").innerHTML = "RM " + sub_total.toFixed(2);
  
  grand_total = sub_total + 4.90;
  
  document.getElementById("cart-grandTotal").innerHTML = "RM " + grand_total.toFixed(2);
    
  } else if(document.getElementById("cart_dropdown1").value == "Customize") {
    document.getElementById("cart_UPrice1").innerHTML = "1 box / RM 10.00";
    
    sum1 = Quantity1 * customize;
    
    document.getElementById("cart_TotalPrice1").innerHTML = "RM " + sum1.toFixed(2);

    sub_total = sum1 + sum2 + sum3;
  
  document.getElementById("cart-subtotal").innerHTML = "RM " + sub_total.toFixed(2);
  
  grand_total = sub_total + 4.90;
  
  document.getElementById("cart-grandTotal").innerHTML = "RM " + grand_total.toFixed(2);
    
  }
  
  /*Row 2*/
  
  if (document.getElementById("cart_dropdown2").value == "Small")  {
    document.getElementById("cart_UPrice2").innerHTML = "1 box / RM 3.00";
    
    sum2 = Quantity2 * small;
    
    document.getElementById("cart_TotalPrice2").innerHTML = "RM " + sum2.toFixed(2);
    
    sub_total = sum1 + sum2 + sum3;
  
  document.getElementById("cart-subtotal").innerHTML = "RM " + sub_total.toFixed(2);
  
  grand_total = sub_total + 4.90;
  
  document.getElementById("cart-grandTotal").innerHTML = "RM " + grand_total.toFixed(2);
    
  }  else if(document.getElementById("cart_dropdown2").value == "Medium") {
    document.getElementById("cart_UPrice2").innerHTML = "1 box / RM 5.00";
    
    sum2 = Quantity2 * medium;
    
    document.getElementById("cart_TotalPrice2").innerHTML = "RM " + sum2.toFixed(2);
    
    sub_total = sum1 + sum2 + sum3;
  
  document.getElementById("cart-subtotal").innerHTML = "RM " + sub_total.toFixed(2);
  
  grand_total = sub_total + 4.90;
  
  document.getElementById("cart-grandTotal").innerHTML = "RM " + grand_total.toFixed(2);
    
  } else if(document.getElementById("cart_dropdown2").value == "Large") {
    document.getElementById("cart_UPrice2").innerHTML = "1 box / RM 7.00";
    
    sum2 = Quantity2 * large;
    
    document.getElementById("cart_TotalPrice2").innerHTML = "RM " + sum2.toFixed(2);
    
    sub_total = sum1 + sum2 + sum3;
  
  document.getElementById("cart-subtotal").innerHTML = "RM " + sub_total.toFixed(2);
  
  grand_total = sub_total + 4.90;
  
  document.getElementById("cart-grandTotal").innerHTML = "RM " + grand_total.toFixed(2);
    
  } else if(document.getElementById("cart_dropdown2").value == "Customize") {
    document.getElementById("cart_UPrice2").innerHTML = "1 box / RM 10.00";
    
    sum2 = Quantity2 * customize; 
    
    document.getElementById("cart_TotalPrice2").innerHTML = "RM " + sum2.toFixed(2);
    
    sub_total = sum1 + sum2 + sum3;
  
  document.getElementById("cart-subtotal").innerHTML = "RM " + sub_total.toFixed(2);
  
  grand_total = sub_total + 4.90;
  
  document.getElementById("cart-grandTotal").innerHTML = "RM " + grand_total.toFixed(2);
    
  }
  
  if (document.getElementById("cart_dropdown3").value == "Small")  {
    document.getElementById("cart_UPrice3").innerHTML = "1 box / RM 3.00";
    
    sum3 = Quantity3 * small; 
    
    document.getElementById("cart_TotalPrice3").innerHTML = "RM " + sum3.toFixed(2);
    
    sub_total = sum1 + sum2 + sum3;
  
  document.getElementById("cart-subtotal").innerHTML = "RM " + sub_total.toFixed(2);
  
  grand_total = sub_total + 4.90;
  
  document.getElementById("cart-grandTotal").innerHTML = "RM " + grand_total.toFixed(2);
    
  }  else if(document.getElementById("cart_dropdown3").value == "Medium") {
    document.getElementById("cart_UPrice3").innerHTML = "1 box / RM 5.00";
    
    sum3 = Quantity3 * medium; 
    
    document.getElementById("cart_TotalPrice3").innerHTML = "RM " + sum3.toFixed(2);
    
    sub_total = sum1 + sum2 + sum3;
  
  document.getElementById("cart-subtotal").innerHTML = "RM " + sub_total.toFixed(2);
  
  grand_total = sub_total + 4.90;
  
  document.getElementById("cart-grandTotal").innerHTML = "RM " + grand_total.toFixed(2);
    
  } else if(document.getElementById("cart_dropdown3").value == "Large") {
    document.getElementById("cart_UPrice3").innerHTML = "1 box / RM 7.00";
    
    sum3 = Quantity3 * large; 
    
    document.getElementById("cart_TotalPrice3").innerHTML = "RM " + sum3.toFixed(2);
    
    sub_total = sum1 + sum2 + sum3;
  
  document.getElementById("cart-subtotal").innerHTML = "RM " + sub_total.toFixed(2);
  
  grand_total = sub_total + 4.90;
  
  document.getElementById("cart-grandTotal").innerHTML = "RM " + grand_total.toFixed(2);
    
  } else if(document.getElementById("cart_dropdown3").value == "Customize") {
    document.getElementById("cart_UPrice3").innerHTML = "1 box / RM 10.00";
    
    sum3 = Quantity3 * customize; 
    
    document.getElementById("cart_TotalPrice3").innerHTML = "RM " + sum3.toFixed(2);
    
    sub_total = sum1 + sum2 + sum3;
  
  document.getElementById("cart-subtotal").innerHTML = "RM " + sub_total.toFixed(2);
  
  grand_total = sub_total + 4.90;
  
  document.getElementById("cart-grandTotal").innerHTML = "RM " + grand_total.toFixed(2);
    
  }
  
  /*
  sub_total = sum1 + sum2 + sum3;
  
  document.getElementById("cart-subtotal").innerHTML = "RM " + sub_total.toFixed(2);
  
  grand_total = sub_total + 4.90;
  
  document.getElementById("cart-grandTotal").innerHTML = "RM " + sub_total.toFixed(2);
  */
  
}

