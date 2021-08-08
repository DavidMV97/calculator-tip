document.addEventListener('DOMContentLoaded' , () => {
    //$tipAmount = ( 15% => valueButtonTip ) / valueNumberPeople
    //%total = ( valueButtonTip / valueNumberPeople ) + $tipAmount  
    
    var valueButtonTip = 0,  
    valueBill=0,
    valueNumberPeople = 0 ,
    percentTip = 0 ,
    tipAmount = 0, 
    totalTip = 0,
    error = false;  

    tipAmount = document.querySelector('#results-tip-value') ;
    totalTip = document.querySelector('#results-total') ; 
    
    let allButtonTip = document.querySelectorAll('.button-tip');
    let ResetButton = document.querySelector('.button-reset') ; 
    
    for (let buttonTip of allButtonTip) {
        buttonTip.addEventListener('click' , (e) => {
            valueButtonTip = e.target.value; 
            valueBill = document.querySelector('#value-bill').value;
            valueNumberPeople = document.querySelector('#number-people').value ;
            percentTip = (valueButtonTip * valueBill ) / 100 ; 
            calcularTip(percentTip, valueBill, valueNumberPeople) ; 
             
        })
    }

    function calcularTip(bill, tip, people) {
        let tipAmountValue = (bill / people) ; 
        let totalValue = (tip / people) + tipAmountValue ; 
        tipAmount.textContent = tipAmountValue.toFixed(2) ; 
        totalTip.textContent = totalValue.toFixed(2);
    }

    function reset() {
        tipAmount.textContent = '$0.00' ; 
        totalTip.textContent = '$0.00' ;   
        valueBill = document.querySelector('#value-bill');
        valueNumberPeople = document.querySelector('#number-people') ;  
        valueBill.value = 0; 
        valueNumberPeople.value = 0 ; 
    }

    ResetButton.addEventListener('click' , () => {
        reset() ; 
    } )

} )