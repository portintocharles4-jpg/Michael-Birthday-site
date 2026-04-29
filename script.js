// Password protection
const CORRECT_PASSWORD = "birthday21"; // PALITAN ANG PASSWORD KUNG GUSTO MO

function checkPassword() {
  const input = document.getElementById("password-input").value;
  const errorMessage = document.getElementById("error-message");
  
  if (input === CORRECT_PASSWORD) {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");
    createConfetti();
  } else {
    errorMessage.textContent = "❌ Wrong password! Try again.";
    document.getElementById("password-input").value = "";
  }
}

// Allow Enter key to submit password
document.getElementById("password-input").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    checkPassword();
  }
});

// Blow out candle
document.getElementById("cake").addEventListener("click", function() {
  const flame = document.getElementById("flame");
  flame.classList.add("out");
  
  setTimeout(() => {
    alert("🎉 Wishes sent to the universe! Happy 21st Birthday! 🎉");
    createConfetti();
  }, 500);
});

// Celebrate button
function celebrate() {
  createConfetti();
  createConfetti();
  setTimeout(createConfetti, 300);
}

// Confetti effect
function createConfetti() {
  const colors = ['#00d9ff', '#00ff88', '#ffd700', '#ff6b6b', '#a855f7', '#ec4899'];
  
  for (let i = 0; i < 150; i++) {
    setTimeout(() => {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
      confetti.style.opacity = Math.random();
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
      
      document.body.appendChild(confetti);
      
      setTimeout(() => confetti.remove(), 5000);
    }, i * 20);
  }
}