const emailInput = document.getElementById("email");
const getStartedButton = document.getElementById("get-started");
const errorMsg = document.querySelector(".error");

getStartedButton.onclick = function () {
  emailInput.value.includes("@")
    ? errorMsg.classList.add("hidden")
    : errorMsg.classList.remove("hidden");
};
