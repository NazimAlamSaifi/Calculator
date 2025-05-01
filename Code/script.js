function operate (a, operate, b) {

    function add (a, b){
        return a + b
    }
    
    function subs (a, b){
        return a - b
    }
    
    function multi (a, b){
        return a * b
    }
    
    function divide (a, b){
        return a / b
    } 
    

   if (operate == "+") {
    return (add(a, b))

   } else if (operate == "-"){ 
    return (subs(a, b))

   } else if (operate == "*") {
    return (multi(a, b))

   } else if (operate == "/") {
    return (divide(a, b))

   }else {

   }
    
}
const display = document.getElementById('display');
// document.getElementById('display').style.display = "block"; // if you want to show it




const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const zero = document.getElementById('0');

function appendToDisplay(num) {
    display.value += num;
}
one.addEventListener("click", () => appendToDisplay("1"));
two.addEventListener("click", () => appendToDisplay("2"));
three.addEventListener("click", () => appendToDisplay("3"));
four.addEventListener("click", () => appendToDisplay("4"));
five.addEventListener("click", () => appendToDisplay("5"));
six.addEventListener("click", () => appendToDisplay("6"));
seven.addEventListener("click", () => appendToDisplay("7"));
eight.addEventListener("click", () => appendToDisplay("8"));
nine.addEventListener("click", () => appendToDisplay("9"));
zero.addEventListener("click", () => appendToDisplay("0"));

const multi = document.getElementById('*');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');
const divider = document.getElementById('divider');


multi.addEventListener("click", () => appendToDisplay("*"));
minus.addEventListener("click", () => appendToDisplay("-"));
plus.addEventListener("click", () => appendToDisplay("+"));

clear.addEventListener("click", () => {display.value = ''})

equals.addEventListener("click", () => {
    if (display.value) {

        const input = display.value.replace("÷", "/");

        const match = input.match(/(-?\d+\.?\d*)([+\-*/])(-?\d+\.?\d*)/);
        if (match) {
            const a = parseFloat(match[1]);
            const operator = match[2];
            const b = parseFloat(match[3]);
            display.value = operate(a, operator, b);
        } else {
            display.value = "Error";
        }
    }
});

divider.addEventListener("click", () => appendToDisplay("÷"));



// one.addEventListener("click", () => {console.log("1")})
// two.addEventListener("click", () => {console.log("2")})
// three.addEventListener("click", () => {console.log("3")})
// four.addEventListener("click", () => {console.log("4")})
// five.addEventListener("click", () => {console.log("5")})
// six.addEventListener("click", () => {console.log("5")})
// seven.addEventListener("click", () => {console.log("7")})
// eight.addEventListener("click", () => {console.log("8")})
// nine.addEventListener("click", () => {console.log("9")})
// zero.addEventListener("click", () => {console.log("0")})

