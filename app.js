function calcResults() {
    const principle = parseFloat(amountSlider.value);
    const calculatedInterest = parseFloat(aprSlider.value) / 100 / 12;
    const calculatedPayments = parseFloat(termSlider.value);

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principle * x * calculatedInterest)/(x-1);

    monthlyRepaymentOutput.innerHTML = `£${monthly.toFixed(2)}`;
    totalPayableOutput.innerHTML = `£${(monthly * termSlider.value).toFixed(2)}`;
}

let amountSlider = document.querySelector("#amount");
let termSlider = document.querySelector("#term");
let aprSlider = document.querySelector("#apr");

let amountOutput = document.querySelector(".output.amount");
let termOutput = document.querySelector(".output.term");
let aprOutput = document.querySelector(".output.apr");

let monthlyRepaymentOutput = document.querySelector("#monthly");
let totalPayableOutput = document.querySelector("#total");

amountSlider.oninput = () => {
    amountOutput.innerHTML = `£${amountSlider.value}`;
    calcResults();
}

termSlider.oninput = () => {
    termOutput.innerHTML = `${termSlider.value}`;
    calcResults();
}

aprSlider.oninput = () => {
    aprOutput.innerHTML = `${aprSlider.value}%`;
    calcResults();
}

calcResults();