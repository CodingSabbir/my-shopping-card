const incrementBtn=document.getElementById('incrementBtn');
incrementBtn.addEventListener('click',()=>{
    hendleProductChange(true)
    claculate()
});

const decrementBtn=document.getElementById('decrementBtn');
decrementBtn.addEventListener('click',()=>{
    hendleProductChange(false)
    claculate()
});

function hendleProductChange(isIncrease){
    const caseInput=document.getElementById('incrementInput');
    const newCaseInput=parseInt(caseInput.value);
    let caseCount=newCaseInput
    if(isIncrease == true){
        caseCount=newCaseInput+1
    }else if(isIncrease == false && caseCount >0){
        caseCount=newCaseInput-1
    }

    caseInput.value=caseCount
    const casePrice=parseInt(document.getElementById('casePrice').innerText);
    const caseTotalPrice=caseCount*1219;
    document.getElementById('casePrice').innerText='$'+caseTotalPrice.toFixed(2);
}



const phoneIncBtn=document.getElementById('phoneIncBtn');
phoneIncBtn.addEventListener('click',()=>{
    phoneAmountChange(true)
    claculate()
});

const phoneDecBtn=document.getElementById('phoneDecBtn');
phoneDecBtn.addEventListener('click',()=>{
    phoneAmountChange(false)
    claculate()
});

function phoneAmountChange(isIncrease){
    const phoneInput=document.getElementById('phoneInput');
    const newphoneInput=parseInt(phoneInput.value);
    let newPhoneCount=newphoneInput;
    if(isIncrease == true){
        newPhoneCount=newphoneInput+1
    }else if(isIncrease == false && newphoneInput >0){
        newPhoneCount=newphoneInput-1
    }
    phoneInput.value=newPhoneCount;
    const phonePrice=document.getElementById('phonePrice').innerText;
    const newPhonePrice=parseInt(phonePrice);
    const totalPhonePrice=newPhoneCount*59;
    document.getElementById('phonePrice').innerText= '$'+totalPhonePrice.toFixed(2);
}


function claculate(){
    const caseInput=document.getElementById('incrementInput');
    const newCaseInput=parseInt(caseInput.value);

    const phoneInput=document.getElementById('phoneInput');
    const newphoneInput=parseInt(phoneInput.value);
    const total=newCaseInput*1219 +newphoneInput*59;
    const subTotal=document.getElementById('subTotal').innerHTML= '$'+total.toFixed(2);

    const tax= Math.round((total /100)*1);
    document.getElementById('tax').innerText='$'+tax.toFixed(2);

    const grandTotal=total+tax;
    document.getElementById('grandTotal').innerText='$'+grandTotal.toFixed(2);
}





// const incrementBtn=document.getElementById('incrementBtn');
// incrementBtn.addEventListener('click',()=>{
//     const caseInput=document.getElementById('incrementInput');
//     const newCaseInput=parseInt(caseInput.value);
//     const caseIncrementInput=newCaseInput+1;
//     caseInput.value=caseIncrementInput
    
//     const casePrice=parseInt(document.getElementById('casePrice').innerText);
//     const caseTotalPrice=caseIncrementInput*1219;
//     document.getElementById('casePrice').innerText='$'+caseTotalPrice;
   
// });

// const decrementBtn=document.getElementById('decrementBtn');
// decrementBtn.addEventListener('click',()=>{
//     const caseInput=document.getElementById('incrementInput');
//     const newCaseInput=parseInt(caseInput.value);
//     const caseIncrementInput=newCaseInput-1;
//     caseInput.value=caseIncrementInput

//     const casePrice=parseInt(document.getElementById('casePrice').innerText);
//     const caseTotalPrice=caseIncrementInput*1219;
//     document.getElementById('casePrice').innerText='$'+caseTotalPrice;
// });



// const phoneIncBtn=document.getElementById('phoneIncBtn');
// phoneIncBtn.addEventListener('click',()=>{
//     const phoneInput=document.getElementById('phoneInput');
//     const newphoneInput=parseInt(phoneInput.value);
//     const newPhoneCount=newphoneInput+1
//     phoneInput.value=newPhoneCount;

//     const phonePrice=document.getElementById('phonePrice').innerText;
//     const newPhonePrice=parseInt(phonePrice);
//     const totalPhonePrice=newPhoneCount*59;
//     document.getElementById('phonePrice').innerText= '$'+totalPhonePrice;

// });


// const phoneDecBtn=document.getElementById('phoneDecBtn');
// phoneDecBtn.addEventListener('click',()=>{
//     const phoneInput=document.getElementById('phoneInput');
//     const newphoneInput=parseInt(phoneInput.value);
//     const newPhoneCount=newphoneInput-1
//     phoneInput.value=newPhoneCount;

//     const phonePrice=document.getElementById('phonePrice').innerText;
//     const newPhonePrice=parseInt(phonePrice);
//     const totalPhonePrice=newPhoneCount*59;
//     document.getElementById('phonePrice').innerText= '$'+totalPhonePrice;

// });