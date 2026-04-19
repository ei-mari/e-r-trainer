const role = document.body.dataset.role === "suspect" ? "suspect" : "detective";

const part1Cards = [
  {
    id: 1,
    detectiveEnglish: "Thanks for coming in, Alex. Have a seat.",
    detectiveIpa: "/θæŋks fɚ ˈkʌmɪŋ ɪn, ˈælɪks. hæv ə sit./",
    detectiveJapanese: "Alex、来てくれてありがとう。座ってください。",
    suspectEnglish: "Okay.",
    suspectIpa: "/oʊˈkeɪ./",
    suspectJapanese: "分かりました。",
    detectiveAudio: "Thanks for coming in, Alex. Have a seat.mp3",
    suspectAudio: "Okay.mp3",
    detectiveMission: ["来てくれたお礼を言いましょう", "seat を使って座るよう促してください"],
    suspectMission: ["了解してください。"],
  },
  {
    id: 2,
    detectiveEnglish: "This interview is being recorded. Do you understand?",
    detectiveIpa: "/ðɪs ˈɪnɚˌvju ɪz ˈbiɪŋ rɪˈkɔrdɪd. du ju ˌʌndɚˈstænd?/",
    detectiveJapanese: "この取調べは録音されます。分かりますね。",
    suspectEnglish: "Yes.",
    suspectIpa: "/jɛs./",
    suspectJapanese: "はい。",
    detectiveAudio: "This interview is being recorded. Do you understand?.mp3",
    suspectAudio: "Yes.mp3",
    detectiveMission: ["この取調べは録音されると伝えてください", "最後に理解したかを聞いてください"],
    suspectMission: ["理解したことを伝えてください。"],
  },
  {
    id: 3,
    detectiveEnglish: "State your full name for the record.",
    detectiveIpa: "/steɪt jɚ fʊl neɪm fɚ ðə ˈrɛkɚd./",
    detectiveJapanese: "記録のためフルネームを。",
    suspectEnglish: "Alex Parker.",
    suspectIpa: "/ˈælɪks ˈpɑrkɚ./",
    suspectJapanese: "アレックス パーカー。",
    detectiveAudio: "State your full name for the record.mp3",
    suspectAudio: "Alex Parker.mp3",
    detectiveMission: ["記録のためだと伝えた上でフルネームを聞いてください"],
    suspectMission: ["フルネームを伝えてください。"],
    suspectNote: "本番では自分の名前を伝えてください。",
  },
  {
    id: 4,
    detectiveEnglish: "How do you know Maria O’Brian?",
    detectiveIpa: "/haʊ du ju noʊ məˈriə oʊˈbraɪən?/",
    detectiveJapanese: "マリアオブライアンとはどういう関係？",
    suspectEnglish: "We were friends. We worked together.",
    suspectIpa: "/wi wɚ frɛndz. wi wɝkt təˈɡɛðɚ./",
    suspectJapanese: "友人です。以前一緒に働きました。",
    detectiveAudio: "How do you know Maria O’Brian?.mp3",
    suspectAudio: "We were friends. We worked together.mp3",
    detectiveMission: ["Maria O'Brian とはどういう関係かをHowで始まる疑問文で聞いてください"],
    suspectMission: ["友人だと答えてください。", "以前一緒に働いたことも伝えてください。"],
  },
  {
    id: 5,
    detectiveEnglish: "When was the last time you saw Maria?",
    detectiveIpa: "/wɛn wəz ðə læst taɪm ju sɔ məˈriə?/",
    detectiveJapanese: "最後にマリアに会ったのはいつ？",
    suspectEnglish: "Yesterday evening.",
    suspectIpa: "/ˈjɛstɚdeɪ ˈivnɪŋ./",
    suspectJapanese: "昨日の夕方です。",
    detectiveAudio: "When was the last time you saw Maria?.mp3",
    suspectAudio: "Yesterday evening.mp3",
    detectiveMission: ["最後に Maria に会ったのはいつか聞いてください"],
    suspectMission: ["昨日の夕方だと答えてください。"],
  },
  {
    id: 6,
    detectiveEnglish: "Where?",
    detectiveIpa: "/wɛr?/",
    detectiveJapanese: "どこで？",
    suspectEnglish: "A cafe on Main Street.",
    suspectIpa: "/ə kæˈfeɪ ɑn meɪn strit./",
    suspectJapanese: "メインストリートのカフェです。",
    detectiveAudio: "Where?.mp3",
    suspectAudio: "A cafe on Main Street.mp3",
    detectiveMission: ["どこで会ったかを聞いてください"],
    suspectMission: ["Main Street にあるカフェだと答えてください。"],
  },
  {
    id: 7,
    detectiveEnglish: "Start from the beginning. What time did you get there?",
    detectiveIpa: "/stɑrt frəm ðə bɪˈɡɪnɪŋ. wʌt taɪm dɪd ju ɡɛt ðɛr?/",
    detectiveJapanese: "最初から。何時に着いた？",
    suspectEnglish: "Around seven ten.",
    suspectIpa: "/əˈraʊnd ˈsɛvən tɛn./",
    suspectJapanese: "7時10分くらい。",
    detectiveAudio: "Start from the beginning. What time did you get there?.mp3",
    suspectAudio: "Around seven ten.mp3",
    detectiveMission: ["最初から始めようと伝えてください。", "Suspectがそこに着いた時間を聞いてください"],
    suspectMission: ["7時10分くらいだと答えてください。"],
  },
  {
    id: 8,
    detectiveEnglish: "What did you two talk about?",
    detectiveIpa: "/wʌt dɪd ju tu tɔk əˈbaʊt?/",
    detectiveJapanese: "何を話した？",
    suspectEnglish: "Work stuff. Life stuff. Nothing big.",
    suspectIpa: "/wɝk stʌf. laɪf stʌf. ˈnʌθɪŋ bɪɡ./",
    suspectJapanese: "仕事のこと、生活のこと。大した話は。",
    detectiveAudio: "What did you two talk about?.mp3",
    suspectAudio: "Work stuff. Life stuff. Nothing big.mp3",
    detectiveMission: ["二人で何について話したか聞いてください"],
    suspectMission: ["仕事のことと生活のことを話したと答えてください。", "大した話ではなかったと伝えてください。"],
  },
  {
    id: 9,
    detectiveEnglish: "Any argument? Any tension?",
    detectiveIpa: "/ˌɛni ˈɑrɡjəmənt? ˌɛni ˈtɛnʃən?/",
    detectiveJapanese: "何か口論は？ ピリつきは？",
    suspectEnglish: "No.",
    suspectIpa: "/noʊ./",
    suspectJapanese: "ないです。",
    detectiveAudio: "Any argument? Any tension?.mp3",
    suspectAudio: "No.mp3",
    detectiveMission: ["口論があったかを短く聞いてください", "ピリついた空気があったかも聞いてください"],
    suspectMission: ["なかったと答えてください。"],
  },
  {
    id: 10,
    detectiveEnglish: "Did Maria mention meeting someone later?",
    detectiveIpa: "/dɪd məˈriə ˈmɛnʃən ˈmitɪŋ ˈsʌmwʌn ˈleɪtɚ?/",
    detectiveJapanese: "後で誰かと会うって言ってた？",
    suspectEnglish: "She said she was waiting for someone.",
    suspectIpa: "/ʃi sɛd ʃi wəz ˈweɪtɪŋ fɚ ˈsʌmwʌn./",
    suspectJapanese: "誰かを待ってると言ってました。",
    detectiveAudio: "Did Maria mention meeting someone later?.mp3",
    suspectAudio: "She said she was waiting for someone.mp3",
    detectiveMission: ["後で誰かと会う話が出たか聞いてください"],
    suspectMission: ["Maria は誰かを待っていたと言っていたと答えてください。"],
  },
  {
    id: 11,
    detectiveEnglish: "Did she say who?",
    detectiveIpa: "/dɪd ʃi seɪ hu?/",
    detectiveJapanese: "誰か言ってた？",
    suspectEnglish: "No.",
    suspectIpa: "/noʊ./",
    suspectJapanese: "言っていません。",
    detectiveAudio: "Did she say who?.mp3",
    suspectAudio: "No 2.mp3",
    detectiveMission: ["誰と会うか言っていたかを聞いてください。"],
    suspectMission: ["シンプルに否定してください。"],
  },
];

const phraseHints = [
  ["thanks for coming in", "come in: 来てもらう、署へ来る"],
  ["have a seat", "have a seat: 座ってください"],
  ["this interview", "This interview : この取調べ"],
  ["is being recorded", "being recorded: 録音されている"],
  ["understand", "understand : 分かる"],
  ["state your full name", "State your full name: フルネームを言う"],
  ["for the record", "for the record: 記録のために"],
  ["how do you know", "How do you know ...? : ...とはどういう関係？"],
  ["worked together", "worked together: 一緒に働いた"],
  ["when was the last time", "When was the last time SV? : 主語が〜したのはいつ？"],
  ["where", "Where? : どこで？"],
  ["start from the beginning", "Start from the beginning: 最初から始める"],
  ["get there", "get there : そこに着く"],
  ["what did you two talk about", "two talk about 〜：二人は〜について話す"],
  ["work stuff", "work stuff : 仕事のこと"],
  ["life stuff", "life stuff: 私生活のこと"],
  ["nothing big", "nothing big: 大したことではない"],
  ["any argument", "argument : 口論"],
  ["any tension", "tension : ピリついた空気"],
  ["mention meeting someone later", "mention meeting someone later: 誰かに会う予定のことを口にした"],
  ["waiting for someone", "wait for: を待つ"],
  ["did she say who", "say who : 誰かを言う"],
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
  return clozeState[cardId] ?? { hint: false, ipa: false, translation: false, answer: false };
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
      ipaText: card.detectiveIpa,
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
    ipaText: card.suspectIpa,
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
      MISSIONを見てスムーズにセリフが言えるように練習しましょう！ヒントや日本語訳、発音記号を使ってもOK！
    </p>
    ${part1Cards
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
        const ipaControl = `<button class="list-pill ${uiState.ipa ? "active" : ""}" type="button" data-ipa-card="${card.id}">発音記号</button>`;
        const translationControl = `<button class="list-pill ${uiState.translation ? "active" : ""}" type="button" data-translation-card="${card.id}">訳</button>`;
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
        const ipaPanel = `<div class="list-panel ${uiState.ipa ? "" : "is-hidden"}">
              <div class="cloze-answer">
                <p class="cloze-answer-label">IPA</p>
                <p class="cloze-answer-text ipa-text">${escapeHtml(lines.ipaText)}</p>
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
              <button class="list-pill ${uiState.answer ? "active" : ""}" type="button" data-answer-card="${card.id}">答え</button>
              ${ipaControl}
            </div>
            ${hintPanel}
            ${translationPanel}
            <div class="cloze-answer ${uiState.answer ? "" : "is-hidden"}">
              <p class="cloze-answer-label">答え</p>
              <p class="cloze-answer-text">${escapeHtml(lines.answerText)}</p>
              ${lines.answerNote ? `<p class="cloze-answer-note">${escapeHtml(lines.answerNote)}</p>` : ""}
            </div>
            ${ipaPanel}
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

  const ipaButton = event.target.closest("[data-ipa-card]");
  if (ipaButton) {
    const cardId = Number(ipaButton.dataset.ipaCard);
    const current = getCardUiState(cardId);
    clozeState[cardId] = { ...current, ipa: !current.ipa };
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
