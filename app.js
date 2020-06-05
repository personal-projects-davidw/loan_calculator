let amountSlider = document.querySelector("#amount");
let termSlider = document.querySelector("#term");
let aprSlider = document.querySelector("#apr");

let amount = document.querySelector(".output.amount");
let term = document.querySelector(".output.term");
let apr = document.querySelector(".output.apr");

amountSlider.onchange = () => {
    amount.innerHTML = `£${amountSlider.value}`;
}

termSlider.onchange = () => {
    term.innerHTML = `${termSlider.value}`;
}

aprSlider.onchange = () => {
    apr.innerHTML = `${aprSlider.value}%`;
}