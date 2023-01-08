function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the entirety of the string ('parseFloat' alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }


function igra() {

    let minValue = prompt('Минимальное значение числа для игры','0');
        // if (minValue <= -999){  // esli minimalka menshe -999 - nado peredelat v ternarnii
        //     minValue = -999
        // };

    let maxValue = prompt('Максимальное значение числа для игры','100');
        //  if (maxValue >= 999){    // esli max bolshe 999  - nado peredelat v ternarnii
        //      maxValue = 999
        //  };




if(!isNumeric(minValue )){
    minValue = 0;
}else{
    minValue < -999 ? minValue = -999: minValue.valueOf; // if min < -999
}
if(!isNumeric(maxValue )){
    maxValue = 100;
}else{
    maxValue > 999  || !isNumeric(minValue )  ? maxValue = 999: maxValue.valueOf;
}

if(minValue > maxValue){// To not have situatia when min = 5 and max = 3 ...
    let temp = minValue;
    minValue = maxValue;
    maxValue = temp;
}
    minValue = parseInt(minValue);
    maxValue = parseInt(maxValue);

    alert('Загадайте любое целое число от '+minValue+' до '+maxValue+', а я его угадаю');
    let answerNumber  = Math.floor((minValue + maxValue) / 2);
    let orderNumber = 1;
    let gameRun = true;
    const orderNumberField = document.getElementById('orderNumberField');
    const answerField = document.getElementById('answerField');
    orderNumberField.innerText = orderNumber;
    

    answerField.innerText = 'Вы загадали число '+getNumberWithLetters(answerNumber)+'?';

    document.getElementById('btnRetry').addEventListener('click', function () {  // eshe knopka 'zanovo' vidat tam i ne rabotala
        minValue = 0;
        maxValue = 100;
        orderNumber = 0;
    })

    document.getElementById('btnOver').addEventListener('click',  function () {   // knopka "bolshe"
        if (gameRun){
            if (minValue === maxValue){
                answerField.innerText = badRandomPhrase();
                gameRun = false;
            } else {
                minValue = answerNumber  + 1;
                answerNumber  = Math.floor((minValue + maxValue) / 2);

                orderNumber++;
                orderNumberField.innerText = orderNumber;

                lengthOfString = getNumberWithLetters(answerNumber);

                answerField.innerText = goodRandomPhrase();
            }
        }
    })

    document.getElementById('btnLess').addEventListener('click',  function () {   //knopka "menshe"
        if (gameRun){
            if (maxValue == minValue){            // == vmesto === i zarabotalo
                answerField.innerText = badRandomPhrase();
                gameRun = false;
            } else {
                maxValue = answerNumber;            // ubral +1, dl9 polucheni9 samogo minimalnogo znacheni9
                answerNumber  = Math.floor((maxValue + minValue) / 2);

                orderNumber++;
                orderNumberField.innerText = orderNumber;

                lengthOfString = getNumberWithLetters(answerNumber);
                answerField.innerText = goodRandomPhrase();
            }
        }
    })

    document.getElementById('btnEqual').addEventListener('click', function () {    // knopka "Verno"
        if (gameRun){
            answerField.innerText = guessedRandomPhrase();    // izmenil nasmeshku
            gameRun = false;
            }
    })};
     igra();
    document.querySelector('#btnRetry').addEventListener('click', igra); 