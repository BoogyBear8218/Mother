window.addEventListener("DOMContentLoaded", () => {
  const petals = document.querySelectorAll(".petal");
  const flower = document.querySelector(".flower");
  const letter = document.getElementById("letter");
  const replayBtn = document.getElementById("replay");
  const title = document.getElementById("flower-title");  // added

  let remainingPetals = petals.length;
  let secondMessageShown = false;

  function showOriginalLetter() {
    letter.innerHTML = `
      <h2>Congrats 🎉</h2>
      <p>You successfully de-petaled the flower.</p>
      <p>Just a tiny, nerdy Valentine<br>from someone who thinks you’re awesome<br>and hopes this made you smile.</p>
      <p><strong>Happy Valentine’s 💛</strong></p>
    `;
    letter.classList.add("show");
    title.style.display = "none"; // hide title when flower disappears
  }

  function showPlayfulLetter() {
    letter.innerHTML = `
      <h2>Ahh you came back! 😏</h2>
      <p>Looks like someone wanted to see this again…</p>
      <p>Hope you’re smiling now!</p>
    `;
    letter.classList.add("show");
    replayBtn.textContent = "Press me again";
  }

  function createHeartGarden() {
    flower.style.display = "none";
    letter.classList.remove("show");
    title.style.display = "none"; // ensure title is hidden

    const garden = document.createElement("div");
    garden.className = "heart-garden";
    document.querySelector(".stage").appendChild(garden);

    for (let i = 0; i < 30; i++) {
      const heart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      heart.setAttribute("class", "heart");
      heart.setAttribute("viewBox", "0 0 24 24");
      heart.innerHTML = `
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
        2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09
        C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5
        c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      `;

      // Wider horizontal spread around center
      heart.style.left = `${150 + (Math.random() * 300 - 150)}px`;
      heart.style.top = `${150 + (Math.random() * 200 - 100)}px`;
      heart.style.animationDelay = `${Math.random() * 2}s`;

      garden.appendChild(heart);
    }

    const msg = document.createElement("div");
    msg.className = "heart-message";
    msg.innerHTML = "Happy Valentine’s Day, Jen! 💖";
    garden.appendChild(msg);
  }

  petals.forEach(petal => {
    petal.addEventListener("click", () => {
      petal.style.transform = "translateY(80px) rotate(20deg)";
      petal.style.opacity = "0";
      petal.style.pointerEvents = "none";
      remainingPetals--;

      if (remainingPetals === 0) {
        showOriginalLetter();
      }
    });
  });

  replayBtn.addEventListener("click", () => {
    if (!secondMessageShown) {
      showPlayfulLetter();
      secondMessageShown = true; 
    } else {
      createHeartGarden();
    }
  });
});
