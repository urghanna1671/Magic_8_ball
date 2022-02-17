 let input = document.querySelector("input");
const ballButton = document.getElementById("askButton");
ballButton.addEventListener("click", ask);
function ask() {
  var ball = document.getElementById("ball");
  var messageText = document.getElementById("message");
  //remove previous message if it exists
  if (messageText != null) {
    messageText.parentNode.removeChild(messageText);
  }

  //Make the ball aske by adding the css class
  ball.classList.add("shake");

  //Remove the shake class after it stops shaking
  setTimeout(function () {
    ball.classList.remove("shake");
  }, 2000);

  //call the answer function to get your answer only after 2sec

  getAnswer();
}

//generate the answer for the ball
function getAnswer() {
  //array of answer
  var answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes -- definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes, Signs point to yes",
    "Reply hazy",
    "try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Dont count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];

  //get a random answer message message

  var value = answers[Math.floor(Math.random() * answers.length)];

  //display the answer on the page

  setTimeout(() => {
    if (!input.value) {
      ballButton.innerHTML = "Please ask a question";
    } else {
      var parent = document.getElementById("answer");
      var newMessage = document.createElement("div");
      newMessage.setAttribute("id", "message");
      newMessage.innerHTML = '"' + value + '"';
      parent.appendChild(newMessage);
    }
    input.innerHTML = value;
    input.remove();
  }, 2000);
}