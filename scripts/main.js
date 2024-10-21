const inputButton = document.getElementById("inputButton");
const startCountInput = document.getElementById("startCount");
const endCountInput = document.getElementById("endCount");

inputButton.addEventListener("click", function() {
    const startCount = startCountInput.value;
    const endCount = endCountInput.value;

    console.log("startCount: " + startCount);
    console.log("endCount: " + endCount);
});