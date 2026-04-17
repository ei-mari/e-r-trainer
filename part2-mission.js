const role = document.body.dataset.role === "suspect" ? "suspect" : "detective";

const part2Cards = [
  {
    id: 12,
    detectiveEnglish: "What time did you leave the cafe?",
    detectiveJapanese: "何時にカフェを出た？",
    suspectEnglish: "Around eight twenty five.",
    suspectJapanese: "8時25分くらい。",
    detectiveAudio: "What time did you leave the cafe?.mp3",
    suspectAudio: "Around eight twenty five.mp3",
    detectiveMission: ["Suspectがカフェを出た時間を聞いてください"],
    suspectMission: ["8時25分くらいだと答えてください。"],
  },
  {
    id: 13,
    detectiveEnglish: "Did Maria leave with you?",
    detectiveJapanese: "マリアは一緒に出た？",
    suspectEnglish: "No. She stayed.",
    suspectJapanese: "いいえ。彼女は残りました。",
    detectiveAudio: "Did Maria leave with you?.mp3",
    suspectAudio: "No. She stayed.mp3",
    detectiveMission: ["Mariaが一緒に出たかを聞いてください"],
    suspectMission: ["否定してください。", "彼女は残ったと伝えてください。"],
  },
  {
    id: 14,
    detectiveEnglish: "After you left, what did you do?",
    detectiveJapanese: "出た後は何をした？",
    suspectEnglish: "I drove straight home.",
    suspectJapanese: "まっすぐ車で帰宅しました。",
    detectiveAudio: "After you left, what did you do?.mp3",
    suspectAudio: "I drove straight home.mp3",
    detectiveMission: ["Suspectがカフェを出た後に何をしたか聞いてください"],
    suspectMission: ["まっすぐ車で帰宅したと答えてください。"],
  },
  {
    id: 15,
    detectiveEnglish: "Did you stop anywhere? Gas station, store, anything?",
    detectiveJapanese: "どこか寄った？ ガソリンスタンド、店、何でも。",
    suspectEnglish: "No.",
    suspectJapanese: "いいえ。",
    detectiveAudio: "Did you stop anywhere? Gas station, store, anything?.mp3",
    suspectAudio: "No 3.mp3",
    detectiveMission: ["Suspectが途中でどこかに寄ったか聞いてください"],
    suspectMission: ["否定してください。"],
  },
  {
    id: 16,
    detectiveEnglish: "What time did you get home?",
    detectiveJapanese: "何時に家に着いた？",
    suspectEnglish: "Around eight forty five.",
    suspectJapanese: "8時45分くらい。",
    detectiveAudio: "What time did you get home?.mp3",
    suspectAudio: "Around eight forty five.mp3",
    detectiveMission: ["Suspectが家に着いた時間を聞いてください"],
    suspectMission: ["8時45分くらいだと答えてください。"],
  },
  {
    id: 17,
    detectiveEnglish: "Who was home with you?",
    detectiveJapanese: "家には誰といた？",
    suspectEnglish: "My husband. / My wife.",
    suspectJapanese: "夫です / 妻です。",
    detectiveAudio: "Who was home with you?.mp3",
    suspectAudio: "My husband.mp3",
    detectiveMission: ["家には誰といたかを聞いてください。"],
    suspectMission: ["夫または妻だと答えてください。"],
    suspectNote: "現在の音声は My husband 版です。",
  },
  {
    id: 18,
    detectiveEnglish: "Did you text Maria after you left?",
    detectiveJapanese: "出た後マリアにメッセージした？",
    suspectEnglish: "Yes. Just one text.",
    suspectJapanese: "はい。1回だけ。",
    detectiveAudio: "Did you text Maria after you left?.mp3",
    suspectAudio: "Yes. Just one text.mp3",
    detectiveMission: ["出た後に Maria にメッセージしたか聞いてください。"],
    suspectMission: ["1回だけしたと答えてください。"],
  },
  {
    id: 19,
    detectiveEnglish: "What did you say?",
    detectiveJapanese: "何て送った？",
    suspectEnglish: "I asked if she got home safe.",
    suspectJapanese: "無事に帰れたか確認しました。",
    detectiveAudio: "What did you say?.mp3",
    suspectAudio: "I asked if she got home safe.mp3",
    detectiveMission: ["何と言ったかを聞いてください。"],
    suspectMission: ["無事に帰れたか確認したと答えてください。"],
  },
  {
    id: 20,
    detectiveEnglish: "Did she reply?",
    detectiveJapanese: "返信は？",
    suspectEnglish: "No.",
    suspectJapanese: "ありません。",
    detectiveAudio: "Did she reply?.mp3",
    suspectAudio: "NO 5.mp3",
    detectiveMission: ["Mariaが返信したかを聞いてください。"],
    suspectMission: ["返信はなかったと答えてください。"],
  },
  {
    id: 21,
    detectiveEnglish: "Okay. That gives me a timeline.",
    detectiveJapanese: "分かった。タイムラインは一応できた。",
    suspectEnglish: "Okay.",
    suspectJapanese: "はい。",
    detectiveAudio: "Okay. That gives me a timeline.mp3",
    suspectAudio: "Okay 2.mp3",
    detectiveMission: ["タイムラインが見えてきたことを伝えてください。"],
    suspectMission: ["了解すると返してください。"],
  },
];

const phraseHints = [
  ["leave the cafe", "leave the cafe : カフェを出る"],
  ["around eight twenty five", "Around 時間：時間くらい"],
  ["leave with you", "leave with: 一緒に立ち去る"],
  ["she stayed", "stayed : 残った"],
  ["after you left", "After you left : あなたが出た後"],
  ["drove straight home", "straight home: まっすぐ家へ"],
  ["stop anywhere", "stop anywhere : どこかに寄る"],
  ["gas station", "gas station: ガソリンスタンド"],
  ["anything", "anything : 何でも"],
  ["get home", "get home : 家に着く"],
  ["around eight forty five", "Around 時間：時間くらい"],
  ["who was home with you", "was home with <人>: <人>といた"],
  ["my husband", "husband: 夫"],
  ["my wife", "wife: 妻"],
  ["text maria", "text: メッセージする"],
  ["just one text", "Just one text : 1回だけのメッセージ"],
  ["what did you say", "sayを使って表現しよう"],
  ["got home safe", "got home safe : 無事に帰った"],
  ["did she reply", "reply : 返信する"],
  ["that gives me a timeline", "timeline: 時系列"],
];

const clozeState = {};
const player = new Audio();
const root = document.querySelector("#partMissionView");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function maskText(text) {
  const matchedPhrases = phraseHints
    .map(([phrase]) => phrase)
    .filter((phrase) => text.toLowerCase().includes(phrase))
    .sort((a, b) => b.length - a.length);

  if (!matchedPhrases.length) {
    return text.replace(/[A-Za-z][A-Za-z']+/g, "_____");
  }

  let masked = text;
  matchedPhrases.forEach((phrase) => {
    const replacement = "_".repeat(Math.max(5, phrase.replace(/\s+/g, "").length));
    masked = masked.replace(new RegExp(escapeRegExp(phrase), "ig"), replacement);
  });
  return masked;
}

function getCardUiState(cardId) {
  return clozeState[cardId] ?? { hint: false, translation: false, answer: false };
}

function getHints(text) {
  return phraseHints
    .filter(([phrase]) => text.toLowerCase().includes(phrase))
    .map(([, hint]) => hint);
}

function getLines(card) {
  if (role === "detective") {
    return {
      firstLabel: "Detective",
      firstText: maskText(card.detectiveEnglish),
      firstAudio: card.detectiveAudio,
      secondLabel: "Suspect",
      secondText: card.suspectEnglish,
      secondAudio: card.suspectAudio,
      answerText: card.detectiveEnglish,
      translationText: card.detectiveJapanese,
      answerNote: "",
      missions: card.detectiveMission,
      hints: getHints(card.detectiveEnglish),
    };
  }

  return {
    firstLabel: "Detective",
    firstText: card.detectiveEnglish,
    firstAudio: card.detectiveAudio,
    secondLabel: "Suspect",
    secondText: maskText(card.suspectEnglish),
    secondAudio: card.suspectAudio,
    answerText: card.suspectEnglish,
    translationText: card.suspectJapanese,
    answerNote: card.suspectNote ?? "",
    missions: card.suspectMission,
    hints: getHints(card.suspectEnglish),
  };
}

function audioPath(file) {
  return `./AUDIO/${encodeURIComponent(file)}`;
}

function render() {
  root.innerHTML = `
    <p class="part-mission-intro">
      MISSIONを見てスムーズにセリフが言えるように練習しましょう！ヒントや日本語訳を使ってもOK！
    </p>
    ${part2Cards
      .map((card) => {
        const lines = getLines(card);
        const uiState = getCardUiState(card.id);
        const hintMarkup = lines.hints.length
          ? lines.hints.map((hint) => `<span class="hint-chip">${escapeHtml(hint)}</span>`).join("")
          : `<span class="hint-chip hint-chip-muted">ヒントなし</span>`;
        const hintControls =
          role === "detective"
            ? `<button class="list-pill ${uiState.hint ? "active" : ""}" type="button" data-hint-card="${card.id}">Hint</button>`
            : "";
        const translationControl = `<button class="list-pill ${uiState.translation ? "active" : ""}" type="button" data-translation-card="${card.id}">日本語訳</button>`;
        const hintPanel =
          role === "detective"
            ? `<div class="list-panel ${uiState.hint ? "" : "is-hidden"}">
              <div class="hint-chip-list">${hintMarkup}</div>
            </div>`
            : "";
        const translationPanel = `<div class="list-panel ${uiState.translation ? "" : "is-hidden"}">
              <div class="cloze-answer">
                <p class="cloze-answer-label">Japanese</p>
                <p class="cloze-answer-text">${escapeHtml(lines.translationText)}</p>
              </div>
            </div>`;
        return `
          <article class="cloze-item">
            <p class="cloze-index">${card.id}</p>
            <div class="cloze-mission">
              <p class="cloze-answer-label">Mission</p>
              <ul class="mission-guide-list">
                ${lines.missions.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
              </ul>
            </div>
            <div class="cloze-lines">
              <div class="mission-line-row">
                <p class="cloze-line"><strong>${lines.firstLabel}:</strong> ${escapeHtml(lines.firstText)}</p>
                <button class="mission-line-button" type="button" data-audio="${escapeHtml(lines.firstAudio)}" aria-label="Play ${lines.firstLabel}">▶</button>
              </div>
              <div class="mission-line-row">
                <p class="cloze-line"><strong>${lines.secondLabel}:</strong> ${escapeHtml(lines.secondText)}</p>
                <button class="mission-line-button" type="button" data-audio="${escapeHtml(lines.secondAudio)}" aria-label="Play ${lines.secondLabel}">▶</button>
              </div>
            </div>
            <div class="list-pill-row">
              ${hintControls}
              ${translationControl}
              <button class="list-pill ${uiState.answer ? "active" : ""}" type="button" data-answer-card="${card.id}">Answer</button>
            </div>
            ${hintPanel}
            ${translationPanel}
            <div class="cloze-answer ${uiState.answer ? "" : "is-hidden"}">
              <p class="cloze-answer-label">Answer</p>
              <p class="cloze-answer-text">${escapeHtml(lines.answerText)}</p>
              ${lines.answerNote ? `<p class="cloze-answer-note">${escapeHtml(lines.answerNote)}</p>` : ""}
            </div>
          </article>
        `;
      })
      .join("")}
  `;
}

root.addEventListener("click", (event) => {
  const hintButton = event.target.closest("[data-hint-card]");
  if (hintButton) {
    const cardId = Number(hintButton.dataset.hintCard);
    const current = getCardUiState(cardId);
    clozeState[cardId] = { ...current, hint: !current.hint };
    render();
    return;
  }

  const translationButton = event.target.closest("[data-translation-card]");
  if (translationButton) {
    const cardId = Number(translationButton.dataset.translationCard);
    const current = getCardUiState(cardId);
    clozeState[cardId] = { ...current, translation: !current.translation };
    render();
    return;
  }

  const answerButton = event.target.closest("[data-answer-card]");
  if (answerButton) {
    const cardId = Number(answerButton.dataset.answerCard);
    const current = getCardUiState(cardId);
    clozeState[cardId] = { ...current, answer: !current.answer };
    render();
    return;
  }

  const audioButton = event.target.closest("[data-audio]");
  if (audioButton) {
    player.pause();
    player.currentTime = 0;
    player.src = audioPath(audioButton.dataset.audio);
    player.play().catch(() => {});
  }
});

render();
