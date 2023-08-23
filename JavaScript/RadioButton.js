function EnableDisabled(){

    var cc = document.getElementById('creditCard')

    var nameOfCard = document.getElementById('nameOfCard');
    var cardNo = document.getElementById('cardNo');
    var expireDate = document.getElementById('expire');
    var CVV = document.getElementById('CVV');


    nameOfCard.disabled = cc.checked? false:true;
    cardNo.disabled = cc.checked? false:true;
    expireDate.disabled = cc.checked? false:true;
    CVV.disabled = cc.checked? false:true;
    nameOfCard.value="";
    cardNo.value="";
    expireDate.value="";
    CVV.value="";

    /*Tab Order*/
    if (!nameOfCard.disabled && !cardNo.disabled && !expireDate.disabled && !CVV.disabled){
        nameOfCard.focus()

    }
}