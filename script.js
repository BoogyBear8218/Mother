function createHearts() {
  for (let i = 0; i < 15; i++) {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}

function openEnvelope() {
  const envelope = document.querySelector(".envelope");
  envelope.classList.toggle("open");
}

function showSurprise() {
  window.location.href = "nightSky_and_flower.html";
}