const chatSocket = new WebSocket("ws://localhost:8000/ws");

chatSocket.onmessage = function (event) {
  const response = event.data;
  displayResponse(response);
};

function displayResponse(response) {
  const responseContainer = document.getElementById("response-container");
  const responseElement = document.createElement("p");
  responseElement.innerText = "MindMend: " + response;
  responseContainer.appendChild(responseElement);
}

function sendMessage() {
  const userInputElement = document.getElementById("user-input");
  const userInput = userInputElement.value;

  if (userInput) {
    chatSocket.send(userInput);
    userInputElement.value = "";
    displayResponse(userInput);
  }
}
