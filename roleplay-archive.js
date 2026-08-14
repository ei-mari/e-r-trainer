const player = document.querySelector("#roleplayPlayer");
const title = document.querySelector("#currentEpisodeTitle");
const meta = document.querySelector("#currentEpisodeMeta");
const episodeButtons = [...document.querySelectorAll(".roleplay-episode")];

episodeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    episodeButtons.forEach((item) => item.classList.toggle("active", item === button));

    title.textContent = button.dataset.title;
    meta.textContent = button.dataset.meta;
    player.src = button.dataset.src;
    player.title = button.dataset.title;
  });
});
