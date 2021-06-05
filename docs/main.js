const intent = document.querySelector("button");
const playAgain = document.getElementById("play-again");
//Show message
const msg = document.getElementsByClassName("msg")[0];
//Show intent high/low
const msgIntent = document.getElementsByClassName("msg-yelow")[0];

//Generate random number
const random = Math.floor(Math.random() * 10) + 1;
console.log(random);

//function try number and reload game if number is correct
intent.addEventListener("click", () => {
  if (guessNumber()) {
    play();
  }
});

//Guess number function
const guessNumber = () => {
  numberTry = parseInt(document.querySelector("input").value);
  if (numberTry === random) {
    msg.classList.remove("hide");
    msg.classList.add("msg-blue");
    msg.innerHTML = `Congratulations the namber is: ${random}`;
    msgIntent.style.display = "none";
    document.querySelector("input").value = "";
    return true;
  } else {
    msg.classList.toggle("apply-shake");
    msg.classList.remove("hide");
    msg.classList.remove("msg-blue");
    msg.classList.add("msg-red");
    msg.innerHTML = `Try again`;
    msgIntent.style.display = "block";
    msgIntent.innerHTML = numberTry > random ? "Very High" : "Very Low";
    return false;
  }
};

//reload game
const play = () => {
  let sec = 5;
  setInterval(() => {
    document.getElementById("timer").style.display = "block";
    document.getElementById("timer").innerHTML = `Play again in ${sec}`;
    sec--;
    if (sec < 0) {
      window.location.reload();
    }
  }, 1000);
};
