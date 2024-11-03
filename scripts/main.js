const calculateButton = document.getElementById("calculateButton");

const resultLabel = document.getElementById("resultLabel");
let result = 0;
const ticketsPerHourLabel = document.getElementById("ticketsPerHour");

resultLabel.textContent = "vendorCost-obFee:";
ticketsPerHourLabel.textContent = "ticketsPerHour:";

calculateButton.addEventListener("click", function() {
    const vendorCostInput = parseFloat(document.getElementById("vendorCost").value) || 0;
    const obFeeInput = parseFloat(document.getElementById("obFee").value) || 0;
    const ticketsDoneInput = parseFloat(document.getElementById("ticketsDone").value) || 0;
    const hoursWorkedInput = parseFloat(document.getElementById("hoursWorked").value) || 0;

    result = vendorCostInput - obFeeInput;
    resultLabel.textContent = result;
    ticketsPerHourLabel.textContent = ticketsDoneInput/hoursWorkedInput;

    // debug
    console.log(ticketsDoneInput);
    console.log(vendorCostInput);
    console.log(obFeeInput);
    console.log(result);
})
