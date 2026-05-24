const lines = [
  "Gary, you know I don't like waking up to a dirty kitchen.",
  "Who cares?",
  "I care! All right? I care!",
  "I busted my ass all day cleaning this house and then cooking that meal. And I worked today. It would be nice if you said thank you and helped me with the dishes.",
  "Fine. I'll help you do the damn dishes.",
  "Oh, come on.",
  "You know what? No, see, that's not what I want.",
  "You just said that you want me to help you do the dishes.",
  "I want you to want to do the dishes.",
  "Why would I want to do dishes? Why?",
  "See, that's my whole point.",
  "Let me see if I'm following this, okay? Are you telling me that you're upset because I don't have a strong desire to clean dishes?",
  "No. I'm upset because you don't have a strong desire to offer to do the dishes.",
  "I just did.",
  "After I asked you!",
  "Jesus, Brooke, you're acting crazy again.",
  "Don't you call me crazy. I am not crazy.",
  "I didn't call you crazy.",
  "You just did.",
  "We don't go anywhere together.",
  "We just went to Ann Arbor together.",
  "To Ann Arbor. To the Michigan-Notre Dame game. You think screaming, drunk kids and leprechauns doing backflips, that's fun. That's fun for me.",
  "Come on, man. I did that for you. What do you... How do you show up for me?",
  "I'm up on the bus every goddamn day for you!",
  "Come on.",
  "I'm busting my ass to be the best tour guide in the damn city, so I can make enough money to support both of us and hopefully you won't have to work one day.",
  "I want to work.",
  "All I ask, Brooke, is that you show a little bit of appreciation.",
  "That I just get 20 minutes to relax when I come home, instead of being attacked with questions and nagged the whole damn time.",
  "You think that I nag you?",
  `That's all you do! All you do is nag me!`,
];

lines.push(String.fromCharCode(34) + "The bathroom" + String.fromCharCode(39) + "s a mess." + String.fromCharCode(34) + " " + String.fromCharCode(34) + "Your belt doesn" + String.fromCharCode(39) + "t match." + String.fromCharCode(34) + " " + String.fromCharCode(34) + "Hey, Gary, you should probably go work out." + String.fromCharCode(34) + " Nothing I ever do is ever good enough! I just want to be left the hell alone!");

const audioVersion = "manual-update-20260524";

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderLine(text, index, withAudio = false) {
  const number = String(index + 1).padStart(2, "0");
  const audioNumber = String(index + 1).padStart(2, "0");

  return `<article class="practice-card">
    <div class="practice-line">
      <span class="line-number">${number}</span>
      <p class="line-text">${escapeHtml(text)}</p>
    </div>
    ${withAudio ? renderAudio(audioNumber) : ""}
  </article>`;
}

function renderAudio(audioNumber) {
  const speeds = [
    { value: 0.25, label: "0.25" },
    { value: 0.5, label: "0.5" },
    { value: 0.75, label: "0.75" },
    { value: 1, label: "1.0" },
  ];

  return `<div class="audio-practice" data-audio-player>
    <audio controls preload="metadata" src="./breakup-audio/line-${audioNumber}.mp3?v=${audioVersion}"></audio>
    <div class="speed-row" aria-label="再生速度">
      ${speeds
        .map((speed) => `<button class="speed-btn ${speed.value === 1 ? "is-active" : ""}" type="button" data-speed="${speed.value}">${speed.label}</button>`)
        .join("")}
    </div>
  </div>`;
}

document.querySelector("#practiceList").innerHTML = lines
  .map((line, index) => renderLine(line, index, true))
  .join("");

const scrollArea = document.querySelector(".scroll");
document.querySelector(".back-top")?.addEventListener("click", () => {
  scrollArea?.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-speed]");
  if (!button) return;

  const player = button.closest("[data-audio-player]");
  const audio = player?.querySelector("audio");
  if (!audio) return;

  audio.playbackRate = Number(button.dataset.speed);
  player.querySelectorAll("[data-speed]").forEach((item) => item.classList.remove("is-active"));
  button.classList.add("is-active");
});
