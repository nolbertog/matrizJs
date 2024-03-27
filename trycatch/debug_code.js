function performOperation(){
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    if(!isNaN(num1)&& !isNaN(num2)){
        let result = multiply(num1, num2);
        let resul2 = sum(num1, num2);
        let result3 = division(num1, num2);

        displayResult(result, resul2, result3);
    } else {
        displayResult('Favor de ingresar numero valido')
    }
}

function multiply(a,b){
    debugger;
    return a*b;
    
}
function sum(a,b){
    debugger;
    return a+b;
}
function division(a,b){
    debugger;
    return a/b;
}

function displayResult(result, result2, result3){
    const resultElement = document.getElementById('result');
    const resultElement2 = document.getElementById('result2');
    const resultElement3 = document.getElementById('result3');
    resultElement.textContent = `El resultado de la multiplicacion es : ${result}`;
    resultElement2.textContent = `El resultado de la suma es : ${result2}`;
    resultElement3.textContent = `El resultado de la division es : ${result3}`;
}