const lines = [
  { speaker: "detective", text: "Thanks for coming in, Alex. Have a seat.", file: "Thanks for coming in, Alex. Have a seat.mp3" },
  { speaker: "suspect", text: "Okay.", file: "Okay.mp3" },
  { speaker: "detective", text: "This interview is being recorded. Do you understand?", file: "This interview is being recorded. Do you understand?.mp3" },
  { speaker: "suspect", text: "Yes.", file: "Yes.mp3" },
  { speaker: "detective", text: "State your full name for the record.", file: "State your full name for the record.mp3" },
  { speaker: "suspect", text: "Alex Parker.", file: "Alex Parker.mp3" },
  { speaker: "detective", text: "How do you know Maria O’Brian?", file: "How do you know Maria O’Brian?.mp3" },
  { speaker: "suspect", text: "We were friends. We worked together.", file: "We were friends. We worked together.mp3" },
  { speaker: "detective", text: "When was the last time you saw Maria?", file: "When was the last time you saw Maria?.mp3" },
  { speaker: "suspect", text: "Yesterday evening.", file: "Yesterday evening.mp3" },
  { speaker: "detective", text: "Where?", file: "Where?.mp3" },
  { speaker: "suspect", text: "A cafe on Main Street.", file: "A cafe on Main Street.mp3" },
  { speaker: "detective", text: "Start from the beginning. What time did you get there?", file: "Start from the beginning. What time did you get there?.mp3" },
  { speaker: "suspect", text: "Around seven ten.", file: "Around seven ten.mp3" },
  { speaker: "detective", text: "What did you two talk about?", file: "What did you two talk about?.mp3" },
  { speaker: "suspect", text: "Work stuff. Life stuff. Nothing big.", file: "Work stuff. Life stuff. Nothing big.mp3" },
  { speaker: "detective", text: "Any argument? Any tension?", file: "Any argument? Any tension?.mp3" },
  { speaker: "suspect", text: "No.", file: "No.mp3" },
  { speaker: "detective", text: "Did Maria mention meeting someone later?", file: "Did Maria mention meeting someone later?.mp3" },
  { speaker: "suspect", text: "She said she was waiting for someone.", file: "She said she was waiting for someone.mp3" },
  { speaker: "detective", text: "Did she say who?", file: "Did she say who?.mp3" },
  { speaker: "suspect", text: "No.", file: "No 2.mp3" },
  { speaker: "detective", text: "What time did you leave the cafe?", file: "What time did you leave the cafe?.mp3" },
  { speaker: "suspect", text: "Around eight twenty five.", file: "Around eight twenty five.mp3" },
  { speaker: "detective", text: "Did Maria leave with you?", file: "Did Maria leave with you?.mp3" },
  { speaker: "suspect", text: "No. She stayed.", file: "No. She stayed.mp3" },
  { speaker: "detective", text: "After you left, what did you do?", file: "After you left, what did you do?.mp3" },
  { speaker: "suspect", text: "I drove straight home.", file: "I drove straight home.mp3" },
  { speaker: "detective", text: "Did you stop anywhere? Gas station, store, anything?", file: "Did you stop anywhere? Gas station, store, anything?.mp3" },
  { speaker: "suspect", text: "No.", file: "No 3.mp3" },
  { speaker: "detective", text: "What time did you get home?", file: "What time did you get home?.mp3" },
  { speaker: "suspect", text: "Around eight forty five.", file: "Around eight forty five.mp3" },
  { speaker: "detective", text: "Who was home with you?", file: "Who was home with you?.mp3" },
  { speaker: "suspect", text: "My husband.", file: "My husband.mp3" },
  { speaker: "detective", text: "Did you text Maria after you left?", file: "Did you text Maria after you left?.mp3" },
  { speaker: "suspect", text: "Yes. Just one text.", file: "Yes. Just one text.mp3" },
  { speaker: "detective", text: "What did you say?", file: "What did you say?.mp3" },
  { speaker: "suspect", text: "I asked if she got home safe.", file: "I asked if she got home safe.mp3" },
  { speaker: "detective", text: "Did she reply?", file: "Did she reply?.mp3" },
  { speaker: "suspect", text: "No.", file: "No 4.mp3" },
  { speaker: "detective", text: "Okay. That gives me a timeline.", file: "Okay. That gives me a timeline.mp3" },
  { speaker: "suspect", text: "Okay.", file: "Okay 2.mp3" },
  { speaker: "detective", text: "Alex, I need you to listen carefully. We have a record of an outgoing call to Maria at 9:12 from your phone.", file: "Alex, I need you to listen carefully. We have a record of an outgoing call to Maria at 9:12 from your phone.mp3" },
  { speaker: "suspect", text: "What? No. I didn't call her.", file: "What? No. I didn't call her.mp3" },
  { speaker: "detective", text: "Then explain the call.", file: "Then explain the call.mp3" },
  { speaker: "suspect", text: "Maybe it was a mistake.", file: "Maybe it was a mistake.mp3" },
  { speaker: "detective", text: "A mistake that lasted forty seconds?", file: "A mistake that lasted forty seconds?.mp3" },
  { speaker: "suspect", text: "I don’t know.", file: "I don’t know.mp3" },
  { speaker: "detective", text: "Let’s tighten this up. After you got home, what did you do?", file: "Let’s tighten this up. After you got home, what did you do?.mp3" },
  { speaker: "suspect", text: "I changed. I ate something. I watched TV.", file: "I changed. I ate something. I watched TV.mp3" },
  { speaker: "detective", text: "What did you eat?", file: "What did you eat?.mp3" },
  { speaker: "suspect", text: "Leftovers.", file: "Leftovers.mp3" },
  { speaker: "detective", text: "What show did you watch?", file: "What show did you watch?.mp3" },
  { speaker: "suspect", text: "I don’t remember.", file: "I don’t remember.mp3" },
  { speaker: "detective", text: "A witness saw someone who looked like you near the cafe at nine.", file: "A witness saw someone who looked like you near the cafe at nine.mp3" },
  { speaker: "suspect", text: "That was not me.", file: "That was not me.mp3" },
  { speaker: "detective", text: "Tell me the truth. Did you kill Maria?", file: "Tell me the truth. Did you kill Maria?.mp3" },
  { speaker: "suspect", text: "No, I didn't hurt Maria.", file: "No, I didn't hurt Maria.mp3" },
  { speaker: "detective", text: "Did you meet Maria again after you left?", file: "Did you meet Maria again after you left?.mp3" },
  { speaker: "suspect", text: "No. I went back to the cafe. I just drove by.", file: "No. I went back to the cafe. I just drove by.mp3" },
  { speaker: "detective", text: "Did you see her?", file: "Did you see her?.mp3" },
  { speaker: "suspect", text: "No. I didn’t stop.", file: "No. I didn’t stop.mp3" },
  { speaker: "detective", text: "Then why did you call her at 9:12?", file: "Then why did you call her at 9:12?.mp3" },
  { speaker: "suspect", text: "I called to check in on her. She didn’t answer.", file: "I called to check in on her. She didn’t answer.mp3" },
  { speaker: "detective", text: "That is different from what you told me earlier.", file: "That is different from what you told me earlier.mp3" },
  { speaker: "suspect", text: "I know. I panicked.", file: "I know. I panicked.mp3" },
  { speaker: "detective", text: "One last question. Did you see anyone with Maria that night?", file: "One last question. Did you see anyone with Maria that night?.mp3" },
  { speaker: "suspect", text: "Okay. I’ll tell you the truth. I did not kill Maria.", file: "Okay. I’ll tell you the truth. I did not kill Maria.mp3" },
];

const elements = {
  player: document.querySelector("#player"),
  audioList: document.querySelector("#audioList"),
  playAllButton: document.querySelector("#playAllButton"),
  pauseStopButton: document.querySelector("#pauseStopButton"),
  repeatButton: document.querySelector("#repeatButton"),
  intervalSelect: document.querySelector("#intervalSelect"),
  speedSelect: document.querySelector("#speedSelect"),
  heroEyebrowText: document.querySelector("#heroEyebrowText"),
  heroTitleText: document.querySelector("#heroTitleText"),
  heroSubtitleText: document.querySelector("#heroSubtitleText"),
  listToggleButton: document.querySelector("#listToggleButton"),
  listToggleIcon: document.querySelector("#listToggleIcon"),
  listWrap: document.querySelector(".audio-list-wrap"),
};

const state = {
  currentIndex: -1,
  queue: [],
  isPaused: false,
  repeatSingle: false,
  pendingNextIndex: null,
  pendingTimeoutId: null,
  gapMs: 3000,
  listOpen: false,
};

const REPEAT_GAP_MS = 3000;

function audioPath(filename) {
  return `./AUDIO/${encodeURIComponent(filename)}`;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getFilteredIndexes() {
  return lines.map((_, index) => index);
}

function renderLines() {
  const filteredIndexes = getFilteredIndexes();

  elements.audioList.innerHTML = filteredIndexes
    .map((actualIndex, visibleIndex) => {
      const line = lines[actualIndex];
      const speakerEmoji = line.speaker === "detective" ? "👮" : "👤";
      const speakerLabel = line.speaker === "detective" ? "Detective" : "Suspect";

      return `
        <article class="audio-line ${actualIndex === state.currentIndex ? "is-current" : ""}" data-line-index="${actualIndex}">
          <div class="audio-line-head">
            <div class="audio-line-main">
              <div class="audio-line-meta">
                <span class="audio-line-index">${String(visibleIndex + 1).padStart(2, "0")}</span>
                <span class="speaker-badge ${line.speaker}">${speakerEmoji} ${speakerLabel}</span>
              </div>
              <p class="audio-line-text">${escapeHtml(line.text)}</p>
            </div>
            <div class="audio-line-actions">
              <button class="line-play-button" type="button" data-play-index="${actualIndex}">Play</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function updateStatus(text) {
  return text;
}

function updateRepeatButton() {
  elements.repeatButton.classList.toggle("active", state.repeatSingle);
}

function updateListVisibility() {
  elements.listWrap.classList.toggle("is-hidden", !state.listOpen);
  elements.listToggleButton.querySelector("span").textContent = state.listOpen
    ? "リストを閉じる"
    : "リストすべてを表示";
  elements.listToggleIcon.textContent = state.listOpen ? "−" : "＋";
}

function updatePauseStopButton() {
  if (state.currentIndex === -1 || (elements.player.paused && !state.isPaused && state.pendingNextIndex === null)) {
    elements.pauseStopButton.textContent = "⏹";
    elements.pauseStopButton.setAttribute("aria-label", "Stop");
    elements.pauseStopButton.setAttribute("title", "Stop");
    return;
  }

  if (state.pendingNextIndex !== null || !elements.player.paused) {
    elements.pauseStopButton.textContent = "⏸";
    elements.pauseStopButton.setAttribute("aria-label", "Pause");
    elements.pauseStopButton.setAttribute("title", "Pause");
    return;
  }

  elements.pauseStopButton.textContent = "⏹";
  elements.pauseStopButton.setAttribute("aria-label", "Stop");
  elements.pauseStopButton.setAttribute("title", "Stop");
}

function updateNowPlaying() {
  if (state.currentIndex === -1) {
    elements.heroEyebrowText.textContent = "Audio Player";
    elements.heroTitleText.textContent = "Roleplay Audio";
    elements.heroSubtitleText.textContent = "再生中のセリフがここに表示されます。";
    return;
  }

  const line = lines[state.currentIndex];
  const speakerLabel = line.speaker === "detective" ? "Detective" : "Suspect";
  const shortSpeakerLabel = line.speaker === "detective" ? "👮 Detective" : "👤 Suspect";
  elements.heroEyebrowText.textContent = "Now Playing";
  elements.heroTitleText.textContent = shortSpeakerLabel;
  elements.heroSubtitleText.textContent = line.text;
}

function updateMediaSession() {
  if (!("mediaSession" in navigator) || state.currentIndex === -1) return;

  const line = lines[state.currentIndex];
  navigator.mediaSession.metadata = new MediaMetadata({
    title: line.text,
    artist: line.speaker === "detective" ? "Detective" : "Suspect",
    album: "Eimari Roleplay Trainer",
  });
}

function setCurrentIndex(index) {
  state.currentIndex = index;
  renderLines();
  updateNowPlaying();
  updateMediaSession();
  updatePauseStopButton();
}

function clearPendingNext() {
  if (state.pendingTimeoutId) {
    clearTimeout(state.pendingTimeoutId);
  }
  state.pendingTimeoutId = null;
  state.pendingNextIndex = null;
  updatePauseStopButton();
}

function playIndex(index, nextQueue = []) {
  const line = lines[index];
  if (!line) return;

  clearPendingNext();
  state.queue = nextQueue;
  state.isPaused = false;
  setCurrentIndex(index);
  elements.player.src = audioPath(line.file);
  elements.player.playbackRate = Number(elements.speedSelect.value);
  elements.player.play().catch(() => {
    updateStatus("再生を開始できませんでした。ブラウザの再生許可を確認してください。");
  });
  updateStatus("Playing");
  updatePauseStopButton();
}

function playAll(fromIndex = 0) {
  const filteredIndexes = getFilteredIndexes();
  const startPosition = filteredIndexes.indexOf(fromIndex);
  const safeStartPosition = startPosition === -1 ? 0 : startPosition;
  const startIndex = filteredIndexes[safeStartPosition];
  if (typeof startIndex !== "number") return;

  const queue = filteredIndexes.slice(safeStartPosition + 1);
  playIndex(startIndex, queue);
}

function scheduleNext(index) {
  clearPendingNext();
  state.pendingNextIndex = index;
  updateStatus("Waiting");
  updatePauseStopButton();
  state.pendingTimeoutId = window.setTimeout(() => {
    const queuedRemainder = [...state.queue];
    clearPendingNext();
    playIndex(index, queuedRemainder);
  }, state.gapMs);
}

function stopPlayback() {
  clearPendingNext();
  elements.player.pause();
  elements.player.currentTime = 0;
  state.queue = [];
  state.isPaused = false;
  state.currentIndex = -1;
  renderLines();
  updateNowPlaying();
  updateStatus("Stopped");
  updatePauseStopButton();
}

elements.player.addEventListener("ended", () => {
  if (state.repeatSingle && state.currentIndex !== -1) {
    clearPendingNext();
    state.pendingNextIndex = state.currentIndex;
    updatePauseStopButton();
    state.pendingTimeoutId = window.setTimeout(() => {
      const replayIndex = state.currentIndex;
      clearPendingNext();
      playIndex(replayIndex, []);
    }, REPEAT_GAP_MS);
    return;
  }

  const nextIndex = state.queue.shift();
  if (typeof nextIndex === "number") {
    scheduleNext(nextIndex);
    return;
  }

  updateStatus("Finished");
});

elements.playAllButton.addEventListener("click", () => {
  if (state.pendingNextIndex !== null) {
    const nextIndex = state.pendingNextIndex;
    const queuedRemainder = [...state.queue];
    clearPendingNext();
    playIndex(nextIndex, queuedRemainder);
    return;
  }

  if (state.currentIndex !== -1 && elements.player.paused) {
    elements.player.play().catch(() => {});
    state.isPaused = false;
    updateStatus("Playing");
    updatePauseStopButton();
    return;
  }

  if (state.currentIndex !== -1 && !elements.player.paused) {
    return;
  }

  const filteredIndexes = getFilteredIndexes();
  if (!filteredIndexes.length) return;
  playAll(filteredIndexes[0]);
});

elements.pauseStopButton.addEventListener("click", () => {
  if (state.pendingNextIndex !== null) {
    clearPendingNext();
    state.isPaused = true;
    updateStatus("Paused before next line");
    updatePauseStopButton();
    return;
  }

  if (state.currentIndex === -1) return;

  if (!elements.player.paused) {
    elements.player.pause();
    state.isPaused = true;
    updateStatus("Paused");
    updatePauseStopButton();
    return;
  }

  stopPlayback();
});

elements.intervalSelect.addEventListener("change", () => {
  state.gapMs = Number(elements.intervalSelect.value);
});

elements.repeatButton.addEventListener("click", () => {
  state.repeatSingle = !state.repeatSingle;
  updateRepeatButton();
});

elements.speedSelect.addEventListener("change", () => {
  elements.player.playbackRate = Number(elements.speedSelect.value);
});

elements.listToggleButton.addEventListener("click", () => {
  state.listOpen = !state.listOpen;
  updateListVisibility();
});

elements.audioList.addEventListener("click", (event) => {
  const playButton = event.target.closest("[data-play-index]");
  if (playButton) {
    playAll(Number(playButton.dataset.playIndex));
  }
});

if ("mediaSession" in navigator) {
  navigator.mediaSession.setActionHandler("play", () => {
    elements.player.play().catch(() => {});
  });
  navigator.mediaSession.setActionHandler("pause", () => {
    if (!elements.player.paused) {
      elements.player.pause();
    }
  });
  navigator.mediaSession.setActionHandler("nexttrack", () => {
    clearPendingNext();
    const nextIndex = state.queue.shift();
    if (typeof nextIndex === "number") {
      playIndex(nextIndex, state.queue);
    }
  });
  navigator.mediaSession.setActionHandler("previoustrack", () => {
    if (state.currentIndex > 0) {
      playAll(state.currentIndex - 1);
    }
  });
}

renderLines();
updateNowPlaying();
updateRepeatButton();
updatePauseStopButton();
updateListVisibility();
