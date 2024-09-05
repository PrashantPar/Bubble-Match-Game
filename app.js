let ttimer = 16;
let score = 0;
let random_number = 0;
function makeBubble() {
  let bubble = "";
  for (let i = 1; i <= 39; i++) {
    bubble += `<div class="bubble">${Math.floor(Math.random() * 10) + 1}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = bubble;
}
function timer() {
  let a = setInterval(() => {
    if (ttimer > 0) {
      ttimer--;
      document.querySelector("#timerbox").textContent = ttimer;
    } else {
      clearInterval(a);
      document.querySelector(
        "#pbtm"
      ).innerHTML = `&#129313 <br> <p id="abc">Your Score : ${score}</p>`;
    }
  }, 1000);
}
function hit() {
  random_number = Math.floor(Math.random() * 10) + 1;
  document.querySelector("#hitbox").textContent = random_number;
  return score;
}
function increaseScore() {
  score += 5;
  document.querySelector("#scores").textContent = score;
}
document.querySelector("#pbtm").addEventListener("click", function (dets) {
  let click = Number(dets.target.textContent);
  if (click === random_number) {
    increaseScore();
    makeBubble();
    hit();
  } else {
  }
});
hit();
timer();
makeBubble();
