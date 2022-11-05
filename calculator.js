function add(a, b) {
    if (a === 0 && b === 0) {
        return 0;
    }
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

const sum = function (arr) {
    //[1,25,34,4], 5, 20

    // let sum  = 0 ;
    // for (let i=0 ; i<= arr.length-1 ; i++){
    //     sum += arr[i];
    // }
    // return sum;

    const initialValue = 0;
    const sumWithInitial = arr.reduce(
        function (previousValue, currentValue) { return previousValue + currentValue },
        initialValue
    );
    return sumWithInitial;
};

function multiply(a, b) {
    return a * b;
}







function divide(a, b) {
    if (b != 0) {
        return a / b;
    } else {
        "no way";
    }

}

function power(a, b) {
    return Math.pow(a, b);
};

function factorial(n) {
    if (n = 0) {
        return 1;
    };
    let sum = n;
    for (i = n - 1; i > 1; i--) {
        sum = sum * (i);
    }
    return sum;
};


function operate(calculate, a, b) {
   
    console.log(typeof a, typeof b)
    if (typeof a == "number" && typeof b == "number") {
        return window[calculate](a, b);
    }
    console.log(213123)
};



const display = document.getElementById('display');
const buttons = document.querySelectorAll('#buttonContainer button');





//state ;
let prevOperator = false;
let secondValue = 0;
let prevValue = 0;
let lastActionWasOperator = false;
let isDotButtonClicked =false;

function clear() {
 display.innerHTML = 0;
 prevOperator = false;
 secondValue = 0;
 prevValue = 0;
 lastActionWasOperator = false;
isDotButtonClicked =false;
}


function calculateFinalResult(prevOperator, it, overridePrevValue = true) {
    console.log(display.innerHTML, 'bbbbb');
    it = Number(display.innerHTML);
    console.log(prevOperator, it, overridePrevValue, 'aaas');

    const value = Math.round(operate(prevOperator, prevValue, it));
    if (overridePrevValue) {
        prevValue = value;
    } else {
       
            prevValue = it;
        
       
    }
    display.innerHTML = value;
}


function calculationStep(ev) {
    const elem = ev.target;
    let textToAppend = '';
    let it = Number(display.innerHTML);
    if (elem.classList.contains('operator')) {
        isDotButtonClicked =false;
        const operator = elem.getAttribute('data-operator');
        console.log(operator);

        if (operator === 'clear') {
            clear();
        }
        if (operator === 'equal') {
            calculateFinalResult(prevOperator, it, false);
            prevOperator = false;
          
            return;
        }
        if(operator === 'backspace'){
            let str = String(display.innerHTML);
            console.log(str,'boo')
            str = str.substring(0, str.length - 1);
            display.innerHTML = str;
            return str;
        }

        //// 12312312 + 222 +/= 


        if (prevOperator) {
            calculateFinalResult(prevOperator, it);

        } else {
            prevValue = it;
            //secondValue = it
        }
        prevOperator = operator;

        lastActionWasOperator = true;


    } else {
        textToAppend = elem.innerHTML;
       if ( elem.getAttribute('data-value')){
            console.log('asdasdasddsd');
            if(isDotButtonClicked ===false){
                console.log('piix');
                textToAppend = elem.innerHTML;
                isDotButtonClicked =true;
                // return;
            }else{
                textToAppend='';
            }

       }
        //prevValue = Number(textToAppend);
        if (lastActionWasOperator) {
            display.innerHTML = textToAppend;
            lastActionWasOperator = false;
        } else {
            display.innerHTML += textToAppend;
        }


    }




}
buttons.forEach(button => {
    button.addEventListener("click", calculationStep);
})

   
      window.addEventListener('keydown', pressTheNumber);
        function pressTheNumber(event) {
            if(Number(event.key) >= 0 && Number(event.key) <= 9){
                if (display.innerHTML===0){
                    display.innerHTML = event.key;
                } else{
                    display.innerHTML += event.key;
                }
                

            }
        };


    
  // Add event listener on keydown
//document.addEventListener('keydown', (event) => {
    //var name = event.key;
    //ar code = event.code;
    // Alert the key name and key code on keydown
    //alert(`Key pressed ${name} \r\n Key code value: ${code}`);
 //}, false);
