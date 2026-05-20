const tabButtons = document.querySelectorAll("[data-video-tab]");
const videoPanels = document.querySelectorAll("[data-video-panel]");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.videoTab;

    tabButtons.forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });

    videoPanels.forEach((panel) => {
      const isActive = panel.dataset.videoPanel === target;
      panel.hidden = !isActive;
      panel.classList.toggle("is-active", isActive);
    });
  });
});
