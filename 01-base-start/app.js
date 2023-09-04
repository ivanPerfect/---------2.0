const resultEl= document.querySelector('#result');
const input1= document.querySelector('#input1');
const input2= document.querySelector('#input2');
const submitBtn = document.querySelector('#submit');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');

let sum;

plusBtn.onclick = function(){
    action = '+';
}

minusBtn.onclick = function (){
    action = '-';
}

function style(result){
    if (result < 0){
        resultEl.style.color = 'red';
    }
    else{
        resultEl.style.color = 'green';
    }
    resultEl.textContent = result;
}

function computeAction(inpt1, inpt2, actionSymbol){
    let num1 = Number(inpt1.value);
    let num2 = Number(inpt2.value);
    // if(actionSymbol == '+'){
    //     return num1+num2;
    // }
    // else{
    //     return num1-num2;
    // }  
    return actionSymbol == "+" ? num1+num2 : num1-num2;
}

submitBtn.onclick = function (){
    const result = computeAction(input1,input2,action);
    style(result);
}



