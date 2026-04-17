const role = document.body.dataset.role === "suspect" ? "suspect" : "detective";

const part3Cards = [
  {
    id: 22,
    detectiveEnglish:
      "Alex, I need you to listen carefully. We have a record of an outgoing call to Maria at 9:12 from your phone.",
    detectiveJapanese: "アレックス、よく聞いて。あなたの携帯から9時12分にマリアへ発信した記録があります。",
    suspectEnglish: "What? No. I didn’t call her.",
    suspectJapanese: "え？ いいえ。彼女にはかけていません。",
    detectiveAudio:
      "Alex, I need you to listen carefully. We have a record of an outgoing call to Maria at 9:12 from your phone.mp3",
    suspectAudio: "What? No. I didn't call her.mp3",
    detectiveMission: ["注意して聞くよう促してください。", "Maria への発信記録があると示してください。"],
    suspectMission: ["彼女に電話していないと否定してください。"],
  },
  {
    id: 23,
    detectiveEnglish: "Then explain the call.",
    detectiveJapanese: "じゃあその通話を説明して。",
    suspectEnglish: "Maybe it was a mistake.",
    suspectJapanese: "事故発信かも。",
    detectiveAudio: "Then explain the call.mp3",
    suspectAudio: "Maybe it was a mistake.mp3",
    detectiveMission: ["その通話を説明するよう促してください。"],
    suspectMission: ["事故発信かもしれないと伝えてください。"],
  },
  {
    id: 24,
    detectiveEnglish: "A mistake that lasted forty seconds?",
    detectiveJapanese: "事故発信で40秒も？",
    suspectEnglish: "I don’t know.",
    suspectJapanese: "分かりません。",
    detectiveAudio: "A mistake that lasted forty seconds?.mp3",
    suspectAudio: "I don’t know.mp3",
    detectiveMission: ["40秒続いた事故発信なのかと疑ってください。"],
    suspectMission: ["分からないと伝えてください。"],
  },
  {
    id: 25,
    detectiveEnglish: "Let’s tighten this up. After you got home, what did you do?",
    detectiveJapanese: "じゃあ細かく。帰宅後は何をした？",
    suspectEnglish: "I changed. I ate something. I watched TV.",
    suspectJapanese: "着替えて、少し食べて、テレビを見ました。",
    detectiveAudio: "Let’s tighten this up. After you got home, what did you do?.mp3",
    suspectAudio: "I changed. I ate something. I watched TV.mp3",
    detectiveMission: ["帰宅後に何をしたか細かく聞いてください。"],
    suspectMission: ["着替えて少し食べてテレビを見たと伝えてください。"],
  },
  {
    id: 26,
    detectiveEnglish: "What did you eat?",
    detectiveJapanese: "何を食べた？",
    suspectEnglish: "Leftovers.",
    suspectJapanese: "残り物です。",
    detectiveAudio: "What did you eat?.mp3",
    suspectAudio: "Leftovers.mp3",
    detectiveMission: ["何を食べたか聞いてください。"],
    detectiveHints: ["食べるはeatを使いましょう。"],
    suspectMission: ["残り物だと答えてください。"],
  },
  {
    id: 27,
    detectiveEnglish: "What show did you watch?",
    detectiveJapanese: "何の番組を見た？",
    suspectEnglish: "I don’t remember.",
    suspectJapanese: "覚えてません。",
    detectiveAudio: "What show did you watch?.mp3",
    suspectAudio: "I don’t remember.mp3",
    detectiveMission: ["何の番組を見たか聞いてください。"],
    detectiveHints: ["What show : 何の番組"],
    suspectMission: ["覚えていないと伝えてください。"],
  },
  {
    id: 28,
    detectiveEnglish: "A witness saw someone who looked like you near the cafe at nine.",
    detectiveJapanese: "目撃者がカフェ付近であなたに似た人物を9時に見たと言っている。",
    suspectEnglish: "That was not me.",
    suspectJapanese: "私じゃありません。",
    detectiveAudio: "A witness saw someone who looked like you near the cafe at nine.mp3",
    suspectAudio: "That was not me.mp3",
    detectiveMission: ["目撃者が9時にカフェ付近で見たと伝えてください"],
    suspectMission: ["自分ではないと否定してください。"],
  },
  {
    id: 29,
    detectiveEnglish: "Tell me the truth. Did you kill Maria?",
    detectiveJapanese: "本当のことを言って。マリアを殺した？",
    suspectEnglish: "No, I didn't hurt Maria.",
    suspectJapanese: "いいえ。マリアを傷つけていません。",
    detectiveAudio: "Tell me the truth. Did you kill Maria?.mp3",
    suspectAudio: "No, I didn't hurt Maria.mp3",
    detectiveMission: ["本当のことを言うよう促してください", "Maria を殺したか聞いてください"],
    suspectMission: ["Maria を傷つけていないと伝えてください。"],
  },
  {
    id: 30,
    detectiveEnglish: "Did you meet Maria again after you left?",
    detectiveJapanese: "あなたが出た後、マリアと再度会った？",
    suspectEnglish: "No. I went back to the cafe. I just drove by.",
    suspectJapanese: "いいえ。カフェに戻ったことはあります。車で通っただけです。",
    detectiveAudio: "Did you meet Maria again after you left?.mp3",
    suspectAudio: "No. I went back to the cafe. I just drove by.mp3",
    detectiveMission: ["出た後にもう一度 Maria と会ったか聞いてください"],
    detectiveHints: ["after you left : あなたが出た後"],
    suspectMission: ["まず否定してください。", "カフェに戻ったが、車で通っただけだと伝えてください。"],
  },
  {
    id: 31,
    detectiveEnglish: "Did you see her?",
    detectiveJapanese: "彼女を見た？",
    suspectEnglish: "No. I didn’t stop.",
    suspectJapanese: "いいえ。止まりませんでした。",
    detectiveAudio: "Did you see her?.mp3",
    suspectAudio: "No. I didn’t stop.mp3",
    detectiveMission: ["彼女を見たか聞いてください"],
    suspectMission: ["見ていないと否定し、止まっていないと伝えてください。"],
  },
  {
    id: 32,
    detectiveEnglish: "Then why did you call her at 9:12?",
    detectiveJapanese: "じゃあなぜ9時12分に電話した？",
    suspectEnglish: "I called to check in on her. She didn’t answer.",
    suspectJapanese: "心配で確認の電話をしました。出なかった。",
    detectiveAudio: "Then why did you call her at 9:12?.mp3",
    suspectAudio: "I called to check in on her. She didn’t answer.mp3",
    detectiveMission: ["なぜ 9時12分 に彼女に電話したのか聞いてください"],
    detectiveHints: ["Then why : じゃあなぜ"],
    suspectMission: ["様子を確かめるために電話したと伝えてください。", "彼女は出なかったと伝えてください。"],
  },
  {
    id: 33,
    detectiveEnglish: "That is different from what you told me earlier.",
    detectiveJapanese: "それは最初の話と違う。",
    suspectEnglish: "I know. I panicked.",
    suspectJapanese: "分かってます。パニックでした。",
    detectiveAudio: "That is different from what you told me earlier.mp3",
    suspectAudio: "I know. I panicked.mp3",
    detectiveMission: ["最初の話と違うことを指摘してください。"],
    suspectMission: ["分かっていると伝えてください。", "パニックだったと伝えてください。"],
  },
  {
    id: 34,
    detectiveEnglish: "One last question. Did you see anyone with Maria that night?",
    detectiveJapanese: "最後に一つ。あの夜、マリアと一緒にいた人物を見た？",
    suspectEnglish: "No.",
    suspectJapanese: "いいえ。",
    detectiveAudio: "One last question. Did you see anyone with Maria that night?.mp3",
    suspectAudio: "No.mp3",
    detectiveMission: ["最後の質問だと伝えてください。", "あの夜 Maria と一緒にいた人を見たか聞いてください。"],
    suspectMission: ["見ていないと伝えてください。"],
  },
  {
    id: 35,
    detectiveEnglish: "I can’t help you if you don’t tell me the truth.",
    detectiveJapanese: "本当のことを話してくれないと助けられない。",
    suspectEnglish: "Okay. I’ll tell you the truth. I did not kill Maria.",
    suspectJapanese: "分かりました。本当のことを言います。マリアは殺していません。",
    detectiveAudio: "I can’t help you if you don’t tell me the truth..mp3",
    suspectAudio: "Okay. I’ll tell you the truth. I did not kill Maria.mp3",
    detectiveMission: ["真実を話すよう最後に促してください。"],
    suspectMission: ["最後に真実を話し始めてください。", "マリアを殺さなかったと伝えてください。"],
  },
];

const phraseHints = [
  ["listen carefully", "listen carefully: 注意して聞く、よく聞く"],
  ["a record of an outgoing call", "a record of an outgoing call: 発信した記録"],
  ["did not call her", "call her: 彼女に電話する"],
  ["explain the call", "explain: 説明する"],
  ["mistake", "mistake: 間違い"],
  ["lasted forty seconds", "last: 続く"],
  ["tighten this up", "tighten this up : これを細かくする"],
  ["after you got home", "After you got home : 帰宅後"],
  ["i changed", "changed: 着替えた"],
  ["ate something", "ate something : 少し食べた"],
  ["leftovers", "leftovers: 残り物"],
  ["i don’t remember", "rememberを使って４語で表現しましょう"],
  ["witness", "witness: 目撃者"],
  ["looked like you", "looked like: に見えた"],
  ["tell me the truth", "truth: 真実"],
  ["hurt maria", "hurt: 傷つける"],
  ["went back to the cafe", "go back to the cafe: カフェに戻る"],
  ["drove by", "drove by: 車で通り過ぎた"],
  ["did you see her", "see her: 彼女を見る"],
  ["didn’t stop", "stop: 止まる"],
  ["check in on her", "check in on her: 彼女の様子を確かめる"],
  ["didn’t answer", "answer: 電話に出る"],
  ["what you told me earlier", "what you told me earlier : 最初の話"],
  ["panicked", "panicked: パニックになった"],
  ["one last question", "One last question. : 最後にもう一つ質問"],
  ["that night", "that night : あの夜"],
  ["tell you the truth", "tell you the truth: 本当のことを言う"],
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
      answerNote: card.detectiveNote ?? "",
      missions: card.detectiveMission,
      hints: card.detectiveHints ?? getHints(card.detectiveEnglish),
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
    hints: card.suspectHints ?? getHints(card.suspectEnglish),
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
    ${part3Cards
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
