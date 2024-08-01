console.log("Script Running");

let str = "";
let calculationCompleted = false;
let btn = document.querySelectorAll('.button');

Array.from(btn).forEach((i) => {
    i.addEventListener("click", (e) => {
        let buttonValue = e.target.innerHTML;

        if (buttonValue == '=') {
            str = eval(str);
            document.querySelector('input').value = str;
            calculationCompleted = true;

        } else if (buttonValue == 'CE' || buttonValue == 'AC') {
            str = "";
            document.querySelector('input').value = str;

        } else {
            if (calculationCompleted && !isNaN(buttonValue)) {
                // If the calculation is completed and a number is pressed, reset the screen

                str = buttonValue;
                calculationCompleted = false;
            } else {
                str += buttonValue;
            }
            document.querySelector('input').value = str;
        }
    });
});
