const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const text = document.getElementById("text");

let noScale = 1;
let yesScale = 1;

noBtn.addEventListener("click", () => {
  noScale -= 0.15;
  yesScale += 0.15;

  if (noScale <= 0.2) {
    noBtn.style.display = "none";
    text.innerText = "У тебя нету выбора 😏";
    return;
  }

  noBtn.style.transform = `scale(${noScale})`;
  yesBtn.style.transform = `scale(${yesScale})`;

  text.innerText = "Уверенна 🥺?";
});

yesBtn.addEventListener("click", () => {
  document.getElementById("main").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  startHearts();
});

/* ❤️ ПАДАЮЩИЕ СЕРДЕЧКИ ❤️ */

function startHearts() {
  setInterval(createHeart, 300);
  setInterval(flyingLoveText, 1200);
}


function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  const hearts = ["❤️", "💖", "💗", "💕"];
  heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];


  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 2) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

function flyingLoveText() {
  const texts = ["I love you 💕", "Люблю тебя 💖", "💋💋💋"];
  const el = document.createElement("div");
  el.className = "love-text";
  el.innerText = texts[Math.floor(Math.random() * texts.length)];

  el.style.left = Math.random() * 80 + "vw";

  document.body.appendChild(el);

  setTimeout(() => el.remove(), 3000);
}

