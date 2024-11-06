const calculateButton = document.getElementById("calculateButton");
const ticketResultLabel = document.getElementById("ticketResultLabel");
const ticketsPerHourLabel = document.getElementById("ticketsPerHour");
const pivotResultLabel = document.getElementById("pivotResultLabel");

let ticketsResult = 0;
let pivotsResult = 0;

// set default text
ticketResultLabel.textContent = "vendorCost-obFee:";
ticketsPerHourLabel.textContent = "ticketsPerHour:";
pivotResultLabel.textContent = "pivotResult:";

calculateButton.addEventListener("click", function() {
    const vendorCostInput = parseFloat(document.getElementById("vendorCost").value) || 0;
    const obFeeInput = parseFloat(document.getElementById("obFee").value) || 0;
    ticketsResult = vendorCostInput - obFeeInput;
    ticketResultLabel.textContent = ticketsResult;

    const ticketsDoneInput = parseFloat(document.getElementById("ticketsDone").value) || 0;
    const hoursWorkedInput = parseFloat(document.getElementById("hoursWorked").value) || 0;
    ticketsPerHourLabel.textContent = ticketsDoneInput/hoursWorkedInput;

    const pivotStartInput = parseFloat(document.getElementById("pivotStart").value) || 0;
    const pivotEndInput = parseFloat(document.getElementById("pivotEnd").value) || 0;
    pivotsResult = pivotEndInput - pivotStartInput;
    pivotResultLabel.textContent = pivotsResult;
    pivotResultLabel.textContent = pivotsResult;

    // debug
    console.log(ticketsDoneInput);
    console.log(vendorCostInput);
    console.log(obFeeInput);
    console.log(ticketsResult);
    console.log(pivotsResult);
})