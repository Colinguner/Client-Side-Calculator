var firstNum = undefined;
var secondNum = undefined;
var operator = undefined;
var result = "";
var view = document.querySelector(".result");
var Numbers ="1234567890";
// ____________________________________________________________
var allButtons = document.querySelectorAll(".bt").length;
for (let i = 0; i < allButtons; i++) {
    document.querySelectorAll(".bt")[i].addEventListener("click", function () {
        var clicked = this.innerText;
        console.log("Clicked:" + clicked);
        if (Numbers.includes(clicked) === true)  
        {
            if (result === "0") {
                result = "";
                view.innerHTML = result;
            }
            result = result + "" + clicked;
            view.innerText = result;
            console.log("result:" + result);
        } else if (clicked === "C") {
            result = "0";
            view.innerHTML = result;
        } else if (clicked === "=") {
            secondNum = Number(result);
            switch (operator) {
                case "*":
                    result = firstNum * secondNum;
                    view.innerHTML = result;
                    break;
                case "/":
                    result = firstNum / secondNum;
                    view.innerHTML = result;
                    break;
                case "-":
                    result = firstNum - secondNum;
                    view.innerHTML = result;
                    break;
                case "+":
                    result = firstNum + secondNum;
                    view.innerHTML = result;
                    break;
                default:
                    console.log("somthing went wrong");
            }
        } else if (clicked === "*") {
            operator = "*";
            changeAndClear();
        } else if (clicked === "-") {
            operator = "-";
            changeAndClear();
        } else if (clicked === "+") {
            operator = "+";
            changeAndClear();
        } else if (clicked === "/") {
            operator = "/";
            changeAndClear();
        } else if (clicked === ".") {
            if (result.indexOf(".") === -1) {
                result = result + "" + clicked;
            }
        } else {
            console.log("loooooool??");
        }
    }); 
}
// _________________________________________________
function changeAndClear(){
    firstNum = Number(result);
    result = "";
}
function operation(operator){
    result = firstNum + Number(operator) + secondNum;
}