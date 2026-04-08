const STARRED_KEY = "detective-drill-lab-starred";

const cards = [
  {
    id: 1,
    section: "Opening",
    detectiveEnglish: "Thanks for coming in, Alex. Have a seat.",
    detectiveJapanese: "Alex、来てくれてありがとう。座ってください。",
    suspectEnglish: "Okay.",
    suspectJapanese: "分かりました。",
    notes: "刑事: 一語でシンプルに。容疑者: 了解する。",
  },
  {
    id: 2,
    section: "Opening",
    detectiveEnglish: "This interview is being recorded. Do you understand?",
    detectiveJapanese: "この取調べは録音されます。分かりますね。",
    suspectEnglish: "Yes.",
    suspectJapanese: "はい。",
    notes: "刑事: シンプルに１語で。容疑者: 理解したことを伝える。",
  },
  {
    id: 3,
    section: "Opening",
    detectiveEnglish: "State your full name for the record.",
    detectiveJapanese: "記録のためフルネームを。",
    suspectEnglish: "Alex Parker.",
    suspectJapanese: "アレックス パーカー。",
    notes: "刑事: 名前だけを答えましょう。容疑者: フルネームを伝える。",
  },
  {
    id: 4,
    section: "Opening",
    detectiveEnglish: "How do you know Maria O'Brian?",
    detectiveJapanese: "マリアオブライアンとはどういう関係？",
    suspectEnglish: "We were friends. We worked together.",
    suspectJapanese: "友人です。以前一緒に働きました。",
    notes:
      "刑事: How do you know ...? : ...とはどういう関係？。容疑者: 友人だと答え、以前一緒に働いたことも伝える。",
  },
  {
    id: 5,
    section: "Opening",
    detectiveEnglish: "When was the last time you saw Maria?",
    detectiveJapanese: "最後にマリアに会ったのはいつ？",
    suspectEnglish: "Yesterday evening.",
    suspectJapanese: "昨日の夕方です。",
    notes: "刑事: シンプルに時間だけで答えましょう。容疑者: 昨日の夕方だと答える。",
  },
  {
    id: 6,
    section: "Opening",
    detectiveEnglish: "Where?",
    detectiveJapanese: "どこで？",
    suspectEnglish: "A cafe on Main Street.",
    suspectJapanese: "メインストリートのカフェです。",
    notes: "刑事: こちらは場所だけでOK。容疑者: Main Street にあるカフェだと答える。",
  },
  {
    id: 7,
    section: "Opening",
    detectiveEnglish: "What time did you get there?",
    detectiveJapanese: "何時にそこに着いた？",
    suspectEnglish: "Around seven ten.",
    suspectJapanese: "7時10分くらい。",
    notes: "刑事: Around 時間：時間くらい。容疑者: 大体7時10分くらいだと答える。",
  },
  {
    id: 8,
    section: "Opening",
    detectiveEnglish: "What did you two talk about?",
    detectiveJapanese: "何を話した？",
    suspectEnglish: "Work stuff. Life stuff. Nothing big.",
    suspectJapanese: "仕事のこと、生活のこと。大した話は。",
    notes:
      "刑事: 何を話したかを聞く。容疑者: 仕事のこと、生活のことを話したと答え、大したことは話していないと伝える。",
  },
  {
    id: 9,
    section: "Opening",
    detectiveEnglish: "Any argument?",
    detectiveJapanese: "何か口論は？",
    suspectEnglish: "No.",
    suspectJapanese: "ないです。",
    notes: "刑事: argument : 口論。容疑者: なかったと答える。",
    suspectNotes: "シンプルに１語で表現しよう",
  },
  {
    id: 10,
    section: "Opening",
    detectiveEnglish: "Did Maria mention meeting someone later?",
    detectiveJapanese: "後で誰かと会うって言ってた？",
    suspectEnglish: "Maria said she was waiting for someone.",
    suspectJapanese: "誰かを待ってると言ってました。",
    notes:
      "刑事: 後で誰かと会うって言っていたかを聞く。容疑者: 誰かを待っていると言っていたと答える。",
  },
  {
    id: 11,
    section: "Opening",
    detectiveEnglish: "Did Maria say who?",
    detectiveJapanese: "誰か言ってた？",
    suspectEnglish: "No.",
    suspectJapanese: "言っていません。",
    notes: "刑事: say who : 誰かを言う。容疑者: 誰を待っていたのかは知らないと伝える。",
  },
  {
    id: 12,
    section: "Opening",
    detectiveEnglish: "What time did you leave the cafe?",
    detectiveJapanese: "何時にカフェを出た？",
    suspectEnglish: "Around eight twenty five.",
    suspectJapanese: "8時25分くらい。",
    notes: "刑事: Around 時間：時間くらい。容疑者: 8時25分くらいだと答える。",
  },
  {
    id: 13,
    section: "Opening",
    detectiveEnglish: "Did Maria leave with you?",
    detectiveJapanese: "一緒に出た？",
    suspectEnglish: "No. Maria stayed.",
    suspectJapanese: "いいえ。マリアは残りました。",
    notes: "刑事: stayed : 残った。容疑者: 否定して、マリアは残ったと答える。",
  },
  {
    id: 14,
    section: "Opening",
    detectiveEnglish: "After you left, what did you do?",
    detectiveJapanese: "出た後は何をした？",
    suspectEnglish: "I drove straight home.",
    suspectJapanese: "まっすぐ車で帰宅です。",
    notes: "刑事: カフェを出た後に何をしたかを聞く。容疑者: まっすぐ車で帰宅したと答える。",
  },
  {
    id: 15,
    section: "Opening",
    detectiveEnglish: "Did you stop anywhere? Gas station, store, anything?",
    detectiveJapanese: "どこか寄った？ ガソリンスタンド、店、何でも。",
    suspectEnglish: "No.",
    suspectJapanese: "いいえ。",
    notes: "刑事: シンプルに1語で表現しよう。容疑者: 否定する。",
  },
  {
    id: 16,
    section: "Opening",
    detectiveEnglish: "What time did you get home?",
    detectiveJapanese: "何時に家に着いた？",
    suspectEnglish: "Around eight forty five.",
    suspectJapanese: "8時45分くらい。",
    notes: "刑事: Around 時間：時間くらい。容疑者: およそ8時45分ぐらいだと答える。",
  },
  {
    id: 17,
    section: "Opening",
    detectiveEnglish: "Who was home with you?",
    detectiveJapanese: "家には誰といた？",
    suspectEnglish: "My wife.",
    suspectJapanese: "妻です。",
    notes: "刑事: wife : 妻。容疑者: 妻だと答える。",
  },
  {
    id: 18,
    section: "Opening",
    detectiveEnglish: "Did you text Maria after you left?",
    detectiveJapanese: "出た後マリアにメッセージした？",
    suspectEnglish: "Yes. Just one text.",
    suspectJapanese: "はい。1回だけ。",
    notes: "刑事: カフェを出た後、マリアにメッセージをしたか聞く。容疑者: 一度だけしたと答える。",
  },
  {
    id: 19,
    section: "Opening",
    detectiveEnglish: "What did you say?",
    detectiveJapanese: "何て送った？",
    suspectEnglish: "I asked if she got home safe.",
    suspectJapanese: "無事に帰れたか確認しました。",
    notes: "刑事: sayを使って表現しよう。容疑者: 無事に帰れたかを聞いたと答える。",
  },
  {
    id: 20,
    section: "Opening",
    detectiveEnglish: "Did Maria reply?",
    detectiveJapanese: "返信は？",
    suspectEnglish: "No.",
    suspectJapanese: "ありません。",
    notes: "刑事: reply : 返信する。容疑者: なかったと答える。",
    suspectNotes: "シンプルに１語で表現しよう",
  },
  {
    id: 21,
    section: "Opening",
    detectiveEnglish: "Okay. That gives me a timeline.",
    detectiveJapanese: "分かった。タイムラインは一応できた。",
    suspectEnglish: "Okay.",
    suspectJapanese: "はい。",
    notes: "刑事: シンプルに１語で表現しよう。容疑者: 了解する。",
  },
  {
    id: 22,
    section: "Pressure",
    detectiveEnglish:
      "Alex, I need you to listen carefully. We have a record of an outgoing call to Maria at 9:12 from your phone.",
    detectiveJapanese:
      "アレックス、よく聞いて。あなたの携帯から9時12分にマリアへ発信した記録があります。",
    suspectEnglish: "What? No. I did not call.",
    suspectJapanese: "え？ いいえ。私はかけてません。",
    notes: "刑事: What? : え？。容疑者: 自分は電話をかけていないと否定する。",
  },
  {
    id: 23,
    section: "Pressure",
    detectiveEnglish: "Then explain the call.",
    detectiveJapanese: "じゃあその通話を説明して。",
    suspectEnglish: "Maybe it was an accident.",
    suspectJapanese: "事故発信かも。",
    notes: "刑事: Maybe : かも。accident : 事故。容疑者: 事故で発信してしまったかもしれないと伝える。",
  },
  {
    id: 24,
    section: "Pressure",
    detectiveEnglish: "An accident call that lasts forty seconds?",
    detectiveJapanese: "事故発信で40秒も？",
    suspectEnglish: "I do not know.",
    suspectJapanese: "分かりません。",
    notes: "刑事: knowを使って４語で表現しましょう。容疑者: 分からないと伝える。",
  },
  {
    id: 25,
    section: "Pressure",
    detectiveEnglish: "Let's tighten this up. After you got home, what did you do?",
    detectiveJapanese: "じゃあ細かく。帰宅後は何をした？",
    suspectEnglish: "I changed. I ate something. I watched TV.",
    suspectJapanese: "着替えて、少し食べて、テレビを見ました。",
    notes: "刑事: tighten this up : これを細かくする。After you got home : 帰宅後。容疑者: 着替えて、少し食べて、テレビを見たと伝える。",
  },
  {
    id: 26,
    section: "Pressure",
    detectiveEnglish: "What did you eat?",
    detectiveJapanese: "何を食べた？",
    suspectEnglish: "Leftovers.",
    suspectJapanese: "残り物です。",
    notes: "刑事: ここではeatを使いましょう。容疑者: 昨日の残り物だと答える。",
  },
  {
    id: 27,
    section: "Pressure",
    detectiveEnglish: "What show did you watch?",
    detectiveJapanese: "何の番組を見た？",
    suspectEnglish: "I do not remember.",
    suspectJapanese: "覚えてません。",
    notes: "刑事: What show : 何の番組。容疑者: 覚えていないと答える。",
  },
  {
    id: 28,
    section: "Pressure",
    detectiveEnglish: "A witness saw someone who looked like you near the cafe at nine.",
    detectiveJapanese:
      "目撃者がカフェ付近であなたに似た人物を9時に見たと言っている。",
    suspectEnglish: "That was not me.",
    suspectJapanese: "私じゃありません。",
    notes: "刑事: not me : 私じゃない。容疑者: 自分ではないと否定する。",
  },
  {
    id: 29,
    section: "Pressure",
    detectiveEnglish: "Tell me the truth. Did you kill Maria?",
    detectiveJapanese: "本当のことを言って。マリアを殺した？",
    suspectEnglish: "No, I did not hurt Maria.",
    suspectJapanese: "いいえ。マリアを傷つけていません。",
    notes: "刑事: 真実を言うように促し、マリアを殺したか聞く。容疑者: マリアを傷つけていないと伝える。",
  },
  {
    id: 30,
    section: "Pressure",
    detectiveEnglish: "Did you meet Maria again after you left?",
    detectiveJapanese: "あなたが出た後、マリアと再度会った？",
    suspectEnglish: "I went back to the cafe area. I just drove by.",
    suspectJapanese: "カフェのあたりに戻ったことはあります。車で通っただけです。",
    notes: "刑事: カフェを去った後、またマリアと会ったかを聞く。容疑者: カフェに戻ったことを認めて、車で通っただけだと伝える。",
  },
  {
    id: 31,
    section: "Pressure",
    detectiveEnglish: "Did you see Maria?",
    detectiveJapanese: "マリアを見た？",
    suspectEnglish: "No.",
    suspectJapanese: "いいえ。",
    notes: "刑事: see Maria: マリアを見る。容疑者: 見ていないと否定し、止まっていないと伝える。",
    suspectNotes: "シンプルに１語で表現しよう",
  },
  {
    id: 32,
    section: "Pressure",
    detectiveEnglish: "Then why did you call Maria at 9:12?",
    detectiveJapanese: "じゃあなぜ9時12分に電話した？",
    suspectEnglish: "I called to check in on her. Maria did not answer.",
    suspectJapanese: "心配で確認の電話をしました。出なかった。",
    notes: "刑事: なぜ9時12分に電話したのか聞く。容疑者: 心配で確認の電話をしたことと、出なかったことを伝える。",
  },
  {
    id: 33,
    section: "Pressure",
    detectiveEnglish: "That is different from what you told me earlier.",
    detectiveJapanese: "それは最初の話と違う。",
    suspectEnglish: "I know. I panicked.",
    suspectJapanese: "分かってます。パニックでした。",
    notes: "刑事: 最初に言っていた話と違うことを伝える。容疑者: わかっている、パニクっただけだと伝える。",
  },
  {
    id: 34,
    section: "Pressure",
    detectiveEnglish: "One last question. Did you see anyone with Maria that night?",
    detectiveJapanese: "最後に一つ。あの夜、マリアと一緒にいた人物を見た？",
    suspectEnglish: "No.",
    suspectJapanese: "いいえ。",
    notes: "刑事: シンプルに１語で表現しよう。容疑者: 見ていないと伝える。",
  },
];

const missionGuides = {
  1: {
    detective: ["来てくれたお礼を言いましょう", "seat を使って座るよう促してください"],
    suspect: ["了解する"],
  },
  2: {
    detective: ["この取調べは録音されると伝えてください", "最後に理解したかを聞いてください"],
    suspect: ["理解したことを伝える"],
  },
  3: {
    detective: ["記録のためだと伝えた上でフルネームを聞いてください"],
    suspect: ["フルネームを伝える"],
  },
  4: {
    detective: ["Maria O'Brian とはどういう関係かをHowで始まる疑問文で聞いてください"],
    suspect: ["友人だと答える", "以前一緒に働いたことも伝える"],
  },
  5: {
    detective: ["最後に Maria に会ったのはいつか聞いてください"],
    suspect: ["昨日の夕方だと答える"],
  },
  6: {
    detective: ["どこで会ったかを聞いてください"],
    suspect: ["Main Street にあるカフェだと答える"],
  },
  7: {
    detective: ["Suspectがそこに着いた時間を聞いてください"],
    suspect: ["7時10分くらいだと答える"],
  },
  8: {
    detective: ["二人で何について話したか聞いてください"],
    suspect: ["仕事のことと生活のことを話したと答える", "大した話ではなかったと伝える"],
  },
  9: {
    detective: ["口論があったかを短く聞いてください"],
    suspect: ["なかったと答える"],
  },
  10: {
    detective: ["後で誰かと会う話が出たか聞いてください"],
    suspect: ["Maria は誰かを待っていたと言っていたと答える"],
  },
  11: {
    detective: ["誰と会うか言っていたかを聞いてください。"],
    suspect: ["誰かまでは言っていなかったと伝える"],
  },
  12: {
    detective: ["Suspectがカフェを出た時間を聞いてください"],
    suspect: ["8時25分くらいだと答える"],
  },
  13: {
    detective: ["Mariaが一緒に出たかを聞いてください"],
    suspect: ["否定する", "Maria は残ったと伝える"],
  },
  14: {
    detective: ["Suspectがカフェを出た後に何をしたか聞いてください"],
    suspect: ["まっすぐ車で帰宅したと答える"],
  },
  15: {
    detective: ["Suspectが途中でどこかに寄ったか聞いてください"],
    suspect: ["否定する"],
  },
  16: {
    detective: ["Suspectが家に着いた時間を聞いてください"],
    suspect: ["8時45分くらいだと答える"],
  },
  17: {
    detective: ["家には誰といたかを聞いてください。"],
    suspect: ["妻だと答える"],
  },
  18: {
    detective: ["出た後に Maria にメッセージしたか聞いてください。"],
    suspect: ["1回だけしたと答える"],
  },
  19: {
    detective: ["何と言ったかを聞いてください。"],
    suspect: ["無事に帰れたか確認したと答える"],
  },
  20: {
    detective: ["Mariaが返信したかを聞いてください。"],
    suspect: ["返信はなかったと答える"],
  },
  21: {
    detective: ["タイムラインが見えてきたことを伝えてください。"],
    suspect: ["了解すると返す"],
  },
  22: {
    detective: ["注意して聞くよう促してください。", "Maria への発信記録があると示してください。"],
    suspect: ["電話をかけていないと否定する"],
  },
  23: {
    detective: ["その通話を説明するよう促してください。"],
    suspect: ["事故発信かもしれないと伝える"],
  },
  24: {
    detective: ["40秒続いた事故発信なのかと疑ってください。"],
    suspect: ["分からないと伝える"],
  },
  25: {
    detective: ["帰宅後に何をしたか細かく聞いてください。"],
    suspect: ["着替えて少し食べてテレビを見たと伝える"],
  },
  26: {
    detective: ["何を食べたか聞いてください。"],
    suspect: ["残り物だと答える"],
  },
  27: {
    detective: ["何の番組を見たか聞いてください。"],
    suspect: ["覚えていないと伝える"],
  },
  28: {
    detective: ["目撃者が9時にカフェ付近で見たと伝えてください"],
    suspect: ["自分ではないと否定する"],
  },
  29: {
    detective: ["本当のことを言うよう促してください", "Maria を殺したか聞いてください"],
    suspect: ["Maria を傷つけていないと伝える"],
  },
  30: {
    detective: ["出た後にもう一度 Maria と会ったか聞いてください"],
    suspect: ["カフェのあたりに戻ったとは認める", "車で通っただけだと伝える"],
  },
  31: {
    detective: ["Maria を見たか聞いてください"],
    suspect: ["見ていないと否定する"],
  },
  32: {
    detective: ["なぜ 9時12分 に Maria に電話したのか聞いてください"],
    suspect: ["様子を確かめるために電話したと伝える", "Maria は出なかったと伝える"],
  },
  33: {
    detective: ["最初の話と違うことを指摘してください。"],
    suspect: ["分かっていると伝える", "パニックだったと伝える"],
  },
  34: {
    detective: ["最後の質問だと伝える", "あの夜 Maria と一緒にいた人を見たか聞く"],
    suspect: ["見ていないと伝える"],
  },
};

const state = {
  selectedRole: "detective",
  selectedMode: "translation",
  activeTab: "home",
  currentIndexByTab: {
    memorize: 0,
    starred: 0,
  },
  listModeByCard: {},
  clozeModeByCard: {},
  cardMode: "closed",
  starred: loadStarred(),
};

const elements = {
  lessonScreen: document.querySelector("#lessonScreen"),
  lessonTopbar: document.querySelector(".lesson-topbar"),
  progressWrap: document.querySelector("#progressWrap"),
  progressFill: document.querySelector("#progressFill"),
  modeSwitchButtons: document.querySelectorAll("[data-mode]"),
  roleSwitchButtons: document.querySelectorAll("[data-role]"),
  tabLabel: document.querySelector("#tabLabel"),
  switchModeLink: document.querySelector("#switchModeLink"),
  starToggleButton: document.querySelector("#starToggleButton"),
  homeView: document.querySelector("#homeView"),
  homeSummary: document.querySelector("#homeSummary"),
  homeRoleButtons: document.querySelectorAll("[data-home-role]"),
  modeSelectView: document.querySelector("#modeSelectView"),
  homeTranslationButton: document.querySelector("#homeTranslationButton"),
  homeClozeButton: document.querySelector("#homeClozeButton"),
  cardView: document.querySelector("#cardView"),
  challengeCard: document.querySelector("#challengeCard"),
  challengePrompt: document.querySelector("#challengePrompt"),
  showHintButton: document.querySelector("#showHintButton"),
  showAnswerButton: document.querySelector("#showAnswerButton"),
  hintBox: document.querySelector("#hintBox"),
  hintChipList: document.querySelector("#hintChipList"),
  feedbackBox: document.querySelector("#feedbackBox"),
  modelAnswerCard: document.querySelector("#modelAnswerCard"),
  partnerLineCard: document.querySelector("#partnerLineCard"),
  correctAnswerText: document.querySelector("#correctAnswerText"),
  correctAnswerJapanese: document.querySelector("#correctAnswerJapanese"),
  reviewLaterButton: document.querySelector("#reviewLaterButton"),
  nextAnswerButton: document.querySelector("#nextAnswerButton"),
  partnerLineText: document.querySelector("#partnerLineText"),
  partnerLineJapanese: document.querySelector("#partnerLineJapanese"),
  partnerLineNote: document.querySelector("#partnerLineNote"),
  listView: document.querySelector("#listView"),
  clozeView: document.querySelector("#clozeView"),
  emptyStarredView: document.querySelector("#emptyStarredView"),
  sessionCompleteCard: document.querySelector("#sessionCompleteCard"),
  completeSummary: document.querySelector("#completeSummary"),
  retryButton: document.querySelector("#retryButton"),
  backToSetupButton: document.querySelector("#backToSetupButton"),
  footerHomeButton: document.querySelector("#footerHomeButton"),
  roleFooter: document.querySelector("#roleFooter"),
  footerNavButtons: document.querySelectorAll("[data-tab]"),
};

function loadStarred() {
  try {
    return JSON.parse(localStorage.getItem(STARRED_KEY)) ?? [];
  } catch {
    return [];
  }
}

function saveStarred() {
  localStorage.setItem(STARRED_KEY, JSON.stringify(state.starred));
}

function getTargetEnglish(card) {
  return state.selectedRole === "detective" ? card.detectiveEnglish : card.suspectEnglish;
}

function getTargetJapanese(card) {
  return state.selectedRole === "detective" ? card.detectiveJapanese : card.suspectJapanese;
}

function getNextLineCard(card) {
  if (state.selectedRole === "detective") {
    return card;
  }

  const cardIndex = cards.findIndex((entry) => entry.id === card.id);
  if (cardIndex === -1) {
    return null;
  }

  return cards[cardIndex + 1] ?? null;
}

function getPartnerEnglish(card) {
  if (state.selectedRole === "detective") {
    return card.suspectEnglish;
  }

  const nextLineCard = getNextLineCard(card);
  return nextLineCard ? nextLineCard.detectiveEnglish : "以上で終了です！GOOD JOB!";
}

function getPartnerJapanese(card) {
  if (state.selectedRole === "detective") {
    return card.suspectJapanese;
  }

  const nextLineCard = getNextLineCard(card);
  return nextLineCard ? nextLineCard.detectiveJapanese : "";
}

function getRoleLabel() {
  return state.selectedRole === "detective" ? "Detective" : "Suspect";
}

function getNextLineRoleLabel() {
  return state.selectedRole === "detective" ? "Suspect" : "Detective";
}

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

const phraseHints = [
  ["thanks for coming in", "come in: 来てもらう、署へ来る"],
  ["have a seat", "have a seat: 座ってください"],
  ["this interview", "This interview : この取調べ"],
  ["is being recorded", "being recorded: 録音されている"],
  ["understand", "understand : 分かる"],
  ["state your full name", "State your full name: フルネームを言う"],
  ["for the record", "for the record: 記録のために"],
  ["when was the last time", "When was the last time SV? : 主語が〜したのはいつ？"],
  ["when was the last time you saw", "ここではsawを使おう"],
  ["get there", "get there : そこに着く"],
  ["talk about", "two talk about 〜：二人は〜について話す"],
  ["worked together", "worked together: 一緒に働いた"],
  ["work stuff", "work stuff : 仕事のこと"],
  ["life stuff", "life stuff: 私生活のこと"],
  ["nothing big", "nothing big: 大したことではない"],
  ["leave the cafe", "leave the cafe : カフェを出る"],
  ["just one text", "Just one text : 1回だけのメッセージ"],
  ["after you left", "After you left : あなたが出た後"],
  ["meet maria again", "ここではmeetを使おう"],
  ["stop anywhere", "stop anywhere : どこかに寄る"],
  ["mention meeting someone later", "mention meeting someone later: 誰かに会う予定のことを口にした"],
  ["waiting for someone", "wait for: を待つ"],
  ["anything", "anything : 何でも"],
  ["get home", "get home : 家に着く"],
  ["was home with you", "was home with <人>: <人>といた"],
  ["leave with you", "leave with: 一緒に立ち去る"],
  ["drove straight home", "straight home: まっすぐ家へ"],
  ["gas station", "gas station: ガソリンスタンド"],
  ["got home safe", "got home safe : 無事に帰った"],
  ["gives me a timeline", "timeline: 時系列"],
  ["that gives", "That givesを使おう"],
  ["listen carefully", "listen carefully: 注意して聞く、よく聞く"],
  ["a record of an outgoing call", "a record of an outgoing call: 発信した記録"],
  ["then", "Then : じゃあ"],
  ["explain the call", "explain: 説明する"],
  ["accident call", "accident call : 事故発信, 誤った発信"],
  ["lasts forty seconds", "last: 続く"],
  ["tighten this up", "tighten this up : これを細かくする"],
  ["after you got home", "After you got home : 帰宅後"],
  ["go over it again", "go over: もう一度確認する"],
  ["i changed", "changed: 着替えた"],
  ["ate something", "ate something : 少し食べた"],
  ["leftovers", "leftovers: 残り物"],
  ["i do not remember", "rememberを使って４語で表現しましょう"],
  ["witness", "witness: 目撃者"],
  ["looked like you", "looked like: に見えた"],
  ["tell me the truth", "truth: 真実"],
  ["hurt maria", "hurt: 傷つける"],
  ["the cafe area", "the cafe area: カフェのあたり"],
  ["drove by", "drove by: 車で通り過ぎた"],
  ["check in on her", "check in on her: 彼女の様子を確かめる"],
  ["did not answer", "answer: 電話に出る"],
  ["what you told me earlier", "what you told me earlier : あなたが先ほど私に言ったこと -> 最初の話"],
  ["that is different from", "different from 〜: 〜と違う"],
  ["panicked", "panicked: パニックになった"],
  ["one last question", "One last question. : 最後にもう一つ質問"],
  ["that night", "that night : あの夜"],
];

function getHintEntries(card) {
  const targetEnglish = getTargetEnglish(card).toLowerCase();
  const seen = new Set();
  const hints = [];

  phraseHints.forEach(([phrase, hint]) => {
    if (targetEnglish.includes(phrase) && !seen.has(hint)) {
      seen.add(hint);
      hints.push(hint);
    }
  });

  const roleNote =
    state.selectedRole === "detective"
      ? card.detectiveNotes ?? card.notes
      : card.suspectNotes ?? card.notes;

  if (!hints.length && roleNote) {
    const note = roleNote
      .replace(/^刑事:\s*/u, "")
      .replace(/^容疑者:\s*/u, "")
      .split("。")
      .map((item) => item.trim())
      .filter(Boolean)[0];

    if (note) {
      hints.push(note);
    }
  }

  return hints;
}

function getRoleMissionNote(card) {
  const roleLabel = state.selectedRole === "detective" ? "刑事" : "容疑者";
  const otherRoleLabel = state.selectedRole === "detective" ? "容疑者" : "刑事";
  const roleNote =
    state.selectedRole === "detective"
      ? card.detectiveNotes ?? card.notes
      : card.suspectNotes ?? card.notes;

  if (!roleNote) return [];

  const directSegments = roleNote.match(new RegExp(`${roleLabel}:\\s*([^]+?)(?=${otherRoleLabel}:|$)`, "u"));
  const raw = directSegments?.[1] ?? roleNote.replace(/^刑事:\s*/u, "").replace(/^容疑者:\s*/u, "");

  return raw
    .split("。")
    .map((item) => item.replace(/^[①②③]\s*/u, "").trim())
    .filter(Boolean);
}

function getMissionEntries(card) {
  const roleEntries = missionGuides[card.id]?.[state.selectedRole];
  if (roleEntries?.length) {
    return roleEntries;
  }
  return getRoleMissionNote(card);
}

function getClozeModeKey(cardId) {
  return `${state.selectedRole}-${cardId}`;
}

function getMaskedTargetEnglish(card) {
  const targetEnglish = getTargetEnglish(card);
  const matchedPhrases = phraseHints
    .map(([phrase]) => phrase)
    .filter((phrase) => targetEnglish.toLowerCase().includes(phrase))
    .sort((a, b) => b.length - a.length);

  if (!matchedPhrases.length) {
    return targetEnglish.replace(/[A-Za-z][A-Za-z']+/g, "_____");
  }

  let masked = targetEnglish;
  matchedPhrases.forEach((phrase) => {
    const replacement = "_".repeat(Math.max(5, phrase.replace(/\s+/g, "").length));
    masked = masked.replace(new RegExp(escapeRegExp(phrase), "ig"), replacement);
  });
  return masked;
}

function getClozeMode(cardId) {
  return state.clozeModeByCard[getClozeModeKey(cardId)] ?? "closed";
}

function setClozeMode(cardId, mode) {
  state.clozeModeByCard[getClozeModeKey(cardId)] = mode;
}

function getClozeLines(card) {
  if (state.selectedRole === "detective") {
    return {
      firstLabel: "Detective",
      firstText: getMaskedTargetEnglish(card),
      secondLabel: "Suspect",
      secondText: card.suspectEnglish,
      answerText: card.detectiveEnglish,
    };
  }

  return {
    firstLabel: "Detective",
    firstText: card.detectiveEnglish,
    secondLabel: "Suspect",
    secondText: getMaskedTargetEnglish(card),
    answerText: card.suspectEnglish,
  };
}

function getListMode(cardId) {
  return state.listModeByCard[`${state.selectedRole}-${cardId}`] ?? "closed";
}

function setListMode(cardId, mode) {
  state.listModeByCard[`${state.selectedRole}-${cardId}`] = mode;
}

function toggleCombinedMode(currentMode, targetMode) {
  if (targetMode === "hint") {
    if (currentMode === "hint") return "closed";
    if (currentMode === "answer") return "both";
    if (currentMode === "both") return "answer";
    return "hint";
  }

  if (currentMode === "answer") return "closed";
  if (currentMode === "hint") return "both";
  if (currentMode === "both") return "hint";
  return "answer";
}

function getDeck(tab = state.activeTab) {
  if (tab === "starred") {
    return cards.filter((card) => state.starred.includes(card.id));
  }
  return cards;
}

function getCurrentIndexKey() {
  return state.activeTab === "starred" ? "starred" : "memorize";
}

function clampCurrentIndex() {
  const key = getCurrentIndexKey();
  const deck = getDeck();
  if (!deck.length) {
    state.currentIndexByTab[key] = 0;
    return;
  }
  if (state.currentIndexByTab[key] >= deck.length) {
    state.currentIndexByTab[key] = deck.length - 1;
  }
}

function getCurrentCard() {
  const deck = getDeck();
  const key = getCurrentIndexKey();
  return deck[state.currentIndexByTab[key]] ?? null;
}

function isStarred(cardId) {
  return state.starred.includes(cardId);
}

function toggleStar(cardId) {
  if (isStarred(cardId)) {
    state.starred = state.starred.filter((id) => id !== cardId);
  } else {
    state.starred = [...state.starred, cardId];
  }
  saveStarred();
  clampCurrentIndex();
  render();
}

function setTab(tab) {
  state.activeTab = tab;
  state.cardMode = "closed";
  clampCurrentIndex();
  render();
}

function updateProgress() {
  const deck = getDeck();
  const key = getCurrentIndexKey();
  const index = state.currentIndexByTab[key];
  const progress = deck.length ? (index / deck.length) * 100 : 0;
  elements.progressFill.style.width = `${progress}%`;
}

function renderRoleSwitch() {
  elements.roleSwitchButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.role === state.selectedRole);
  });
}

function renderModeSwitch() {
  elements.modeSwitchButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === state.selectedMode);
  });
}

function renderFooterTabs() {
  elements.footerNavButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === state.activeTab);
  });
}

function renderTopline() {
  const labels = {
    home: "ホーム",
    starred: "スター",
    memorize: "暗記",
    list: "一覧",
    mission: "ミッション",
  };
  const currentLabel = state.selectedMode === "mission" ? labels.mission : labels[state.activeTab];
  elements.tabLabel.textContent = currentLabel;
  elements.tabLabel.classList.toggle("is-hidden", state.selectedMode === "mission");
  const showModeLink =
    state.selectedMode === "translation" &&
    (state.activeTab === "list" || state.activeTab === "memorize");
  elements.switchModeLink.classList.toggle("is-hidden", !showModeLink);
  if (state.activeTab === "list") {
    elements.switchModeLink.textContent = "暗記モードに切り替える";
  } else if (state.activeTab === "memorize") {
    elements.switchModeLink.textContent = "一覧モードに切り替える";
  }

  const currentCard = getCurrentCard();
  const showStar =
    state.selectedMode === "translation" &&
    (state.activeTab === "memorize" || state.activeTab === "starred");
  elements.starToggleButton.classList.toggle("is-hidden", !showStar || !currentCard);

  if (currentCard) {
    elements.starToggleButton.textContent = isStarred(currentCard.id) ? "★" : "☆";
    elements.starToggleButton.classList.toggle("active", isStarred(currentCard.id));
  }
}

function renderHomeView() {
  elements.homeSummary.textContent =
    "ロープレで用いる会話を役ごとに step by step で練習できます。昨日のレッスンを踏まえ、一部内容を変更する可能性がございますのでご了承ください。";
  elements.homeRoleButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.homeRole === state.selectedRole);
  });
}

function clearCardFeedback() {
  elements.hintBox.classList.add("is-hidden");
  elements.feedbackBox.classList.add("is-hidden");
  elements.partnerLineNote.classList.add("is-hidden");
  elements.modelAnswerCard.classList.remove("speaker-detective", "speaker-suspect");
  elements.partnerLineCard.classList.remove("speaker-detective", "speaker-suspect");
}

function renderCardView() {
  const deck = getDeck();
  const currentCard = getCurrentCard();

  if (!deck.length && state.activeTab === "starred") {
    elements.cardView.classList.add("is-hidden");
    elements.sessionCompleteCard.classList.add("is-hidden");
    elements.emptyStarredView.classList.remove("is-hidden");
    return;
  }

  elements.emptyStarredView.classList.add("is-hidden");

  if (!currentCard) {
    elements.cardView.classList.add("is-hidden");
    elements.sessionCompleteCard.classList.remove("is-hidden");
    elements.completeSummary.textContent = `${deck.length} 問の模範解答を確認しました。`;
    elements.progressFill.style.width = "100%";
    return;
  }

  elements.cardView.classList.remove("is-hidden");
  elements.challengeCard.classList.remove("is-hidden");
  elements.sessionCompleteCard.classList.add("is-hidden");
  elements.challengePrompt.textContent = getTargetJapanese(currentCard);
  clearCardFeedback();
  updateProgress();

  if (state.cardMode === "hint" || state.cardMode === "both") {
    const hints = getHintEntries(currentCard);
    elements.hintChipList.innerHTML = hints.length
      ? hints.map((hint) => `<span class="hint-chip">${escapeHtml(hint)}</span>`).join("")
      : `<span class="hint-chip hint-chip-muted">ヒントなし</span>`;
    elements.hintBox.classList.remove("is-hidden");
  }

  if (state.cardMode === "answer" || state.cardMode === "both") {
    const targetSpeakerClass =
      state.selectedRole === "detective" ? "speaker-detective" : "speaker-suspect";
    const partnerSpeakerClass =
      state.selectedRole === "detective" ? "speaker-suspect" : "speaker-detective";

    elements.feedbackBox.classList.remove("is-hidden");
    elements.partnerLineNote.classList.remove("is-hidden");
    elements.modelAnswerCard.classList.add(targetSpeakerClass);
    elements.partnerLineCard.classList.add(partnerSpeakerClass);
    elements.correctAnswerText.textContent = getTargetEnglish(currentCard);
    elements.correctAnswerJapanese.textContent = getTargetJapanese(currentCard);
    elements.reviewLaterButton.textContent = isStarred(currentCard.id)
      ? "後で復習する（★）"
      : "後で復習する（☆）";
    elements.reviewLaterButton.classList.toggle("active", isStarred(currentCard.id));
    elements.partnerLineText.textContent = getPartnerEnglish(currentCard);
    elements.partnerLineJapanese.textContent = getPartnerJapanese(currentCard);
    elements.partnerLineNote.textContent = `NEXT LINEは${getNextLineRoleLabel()}の想定解答です。会話の流れを意識して練習をしましょう。⭐︎を押したあと、ページ下部の⭐︎ボタンを押すと、練習したい文だけを確認することができます。`;
  }
}

function renderListView() {
  elements.listView.innerHTML = cards
    .map((card) => {
      const active = isStarred(card.id) ? "active" : "";
      const listMode = getListMode(card.id);
      const hints = getHintEntries(card);
      const answerSpeakerClass =
        state.selectedRole === "detective" ? "list-answer-detective" : "list-answer-suspect";
      const partnerSpeakerClass = "list-answer-partner";
      const nextLineRoleLabel = getNextLineRoleLabel();
      const hintMarkup = hints.length
        ? hints
            .map((hint) => `<span class="hint-chip">${escapeHtml(hint)}</span>`)
            .join("")
        : `<span class="hint-chip hint-chip-muted">ヒントなし</span>`;
      return `
        <article class="list-item">
          <div class="list-item-head">
            <p class="list-item-index">${card.id}</p>
            <button class="list-star-button ${active}" data-star-id="${card.id}" aria-label="Toggle star">
              ${isStarred(card.id) ? "★" : "☆"}
            </button>
          </div>
          <p class="list-item-jp">${getTargetJapanese(card)}</p>
          <div class="list-pill-row">
            <button
              class="list-pill ${listMode === "hint" || listMode === "both" ? "active" : ""}"
              data-list-mode="hint"
              data-card-id="${card.id}"
            >
              ヒント
            </button>
            <button
              class="list-pill ${listMode === "answer" || listMode === "both" ? "active" : ""}"
              data-list-mode="answer"
              data-card-id="${card.id}"
            >
              答え
            </button>
          </div>
          <div class="list-panel ${listMode === "hint" || listMode === "both" ? "" : "is-hidden"}">
            <div class="hint-chip-list">${hintMarkup}</div>
          </div>
          <div class="list-panel ${listMode === "answer" || listMode === "both" ? "" : "is-hidden"}">
            <div class="list-answer-block ${answerSpeakerClass}">
              <span class="feedback-item-label">Model answer</span>
              <p class="list-item-en">${getTargetEnglish(card)}</p>
              <p class="list-item-partner">${getTargetJapanese(card)}</p>
            </div>
            <div class="list-answer-block ${partnerSpeakerClass}">
              <span class="feedback-item-label">Next Line</span>
              <p class="list-item-en">${getPartnerEnglish(card)}</p>
              <p class="list-item-partner">${getPartnerJapanese(card)}</p>
              ${
                card.id === 1
                  ? `<div class="feedback-divider"></div>
              <p class="feedback-note">
                NEXT LINEは${nextLineRoleLabel}の想定解答です。会話の流れを意識して練習をしましょう。⭐︎を押したあと、ページ下部の⭐︎ボタンを押すと、練習したい文だけを確認することができます。
              </p>`
                  : ""
              }
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderClozeView() {
  const cardsMarkup = cards
    .map((card) => {
      const clozeMode = getClozeMode(card.id);
      const lines = getClozeLines(card);
      const missions = getMissionEntries(card);
      const missionMarkup = missions.length
        ? `<ul class="mission-guide-list">${missions
            .map((item) => `<li>${escapeHtml(item)}</li>`)
            .join("")}</ul>`
        : `<p class="mission-guide-empty">ミッション準備中</p>`;

      return `
        <article class="cloze-item">
          <p class="cloze-index">${card.id}</p>
          <div class="cloze-mission">
            <p class="cloze-answer-label">Mission</p>
            ${missionMarkup}
          </div>
          <div class="cloze-lines">
            <p class="cloze-line"><strong>${lines.firstLabel}:</strong> ${escapeHtml(lines.firstText)}</p>
            <p class="cloze-line"><strong>${lines.secondLabel}:</strong> ${escapeHtml(lines.secondText)}</p>
          </div>
          <div class="list-pill-row">
            <button
              class="list-pill ${clozeMode === "answer" ? "active" : ""}"
              data-cloze-mode="answer"
              data-card-id="${card.id}"
            >
              Answer
            </button>
          </div>
          <div class="cloze-answer ${clozeMode === "answer" ? "" : "is-hidden"}">
            <p class="cloze-answer-label">Answer</p>
            <p class="cloze-answer-text">${escapeHtml(lines.answerText)}</p>
          </div>
        </article>
      `;
    })
    .join("");

  elements.clozeView.innerHTML = `
    <p class="cloze-intro">
      こちらはミッションを見ながら練習するモードです。穴埋めはあくまでヒントとして使い、会話の流れを想定して実践してみてください。自分の解答があっているかどうか気になった時は、BauerまでDMを送ってください。
    </p>
    ${cardsMarkup}
  `;
}

function render() {
  renderModeSwitch();
  renderRoleSwitch();
  renderFooterTabs();
  renderTopline();
  renderHomeView();
  renderListView();
  renderClozeView();

  const isHome = state.activeTab === "home";
  const isModeSelect = state.activeTab === "mode-select";
  const isList = state.activeTab === "list";
  const isCardTab = state.activeTab === "memorize" || state.activeTab === "starred";
  const isTranslationMode = state.selectedMode === "translation";
  const isMissionMode = state.selectedMode === "mission";
  const hideChrome = isHome || isModeSelect;

  elements.homeView.classList.toggle("is-hidden", !isHome);
  elements.modeSelectView.classList.toggle("is-hidden", !isModeSelect);
  elements.listView.classList.toggle("is-hidden", !isTranslationMode || !isList);
  elements.clozeView.classList.toggle("is-hidden", !isMissionMode);
  elements.progressWrap.classList.toggle("is-hidden", !isTranslationMode || !isCardTab);
  elements.cardView.classList.toggle("is-hidden", !isTranslationMode || !isCardTab);
  elements.sessionCompleteCard.classList.toggle("is-hidden", true);
  elements.emptyStarredView.classList.toggle("is-hidden", true);
  elements.lessonTopbar.classList.toggle("is-hidden", hideChrome);
  elements.roleFooter.classList.toggle("is-hidden", isMissionMode || hideChrome);

  if (isTranslationMode && isCardTab) {
    renderCardView();
  } else if (isTranslationMode) {
    elements.challengeCard.classList.add("is-hidden");
    elements.sessionCompleteCard.classList.add("is-hidden");
  }
}

function revealAnswer() {
  if (state.activeTab !== "memorize" && state.activeTab !== "starred") return;
  state.cardMode = toggleCombinedMode(state.cardMode, "answer");
  renderCardView();
}

function revealHint() {
  if (state.activeTab !== "memorize" && state.activeTab !== "starred") return;
  state.cardMode = toggleCombinedMode(state.cardMode, "hint");
  renderCardView();
}

function nextChallenge() {
  const key = getCurrentIndexKey();
  state.currentIndexByTab[key] += 1;
  state.cardMode = "closed";
  render();
}

function resetDeck(role = state.selectedRole, tab = "memorize") {
  state.selectedRole = role;
  state.activeTab = tab;
  state.currentIndexByTab[tab] = 0;
  state.cardMode = "closed";
  render();
}

elements.roleSwitchButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextRole = button.dataset.role;
    if (nextRole === state.selectedRole) return;
    state.selectedRole = nextRole;
    state.currentIndexByTab.memorize = 0;
    state.currentIndexByTab.starred = 0;
    state.cardMode = "closed";
    render();
  });
});

elements.modeSwitchButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextMode = button.dataset.mode;
    if (nextMode === state.selectedMode) return;
    state.selectedMode = nextMode;
    state.cardMode = "closed";
    render();
  });
});

elements.footerNavButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setTab(button.dataset.tab);
  });
});

elements.switchModeLink.addEventListener("click", () => {
  setTab(state.activeTab === "list" ? "memorize" : "list");
});

elements.starToggleButton.addEventListener("click", () => {
  const currentCard = getCurrentCard();
  if (!currentCard) return;
  toggleStar(currentCard.id);
});

elements.reviewLaterButton.addEventListener("click", () => {
  const currentCard = getCurrentCard();
  if (!currentCard) return;
  toggleStar(currentCard.id);
});

elements.nextAnswerButton.addEventListener("click", nextChallenge);

elements.listView.addEventListener("click", (event) => {
  const starButton = event.target.closest("[data-star-id]");
  if (starButton) {
    toggleStar(Number(starButton.dataset.starId));
    return;
  }

  const modeButton = event.target.closest("[data-list-mode]");
  if (!modeButton) return;
  const cardId = Number(modeButton.dataset.cardId);
  const nextMode = modeButton.dataset.listMode;
  const currentMode = getListMode(cardId);
  setListMode(cardId, toggleCombinedMode(currentMode, nextMode));
  renderListView();
});

elements.clozeView.addEventListener("click", (event) => {
  const modeButton = event.target.closest("[data-cloze-mode]");
  if (!modeButton) return;
  const cardId = Number(modeButton.dataset.cardId);
  const currentMode = getClozeMode(cardId);
  setClozeMode(cardId, currentMode === "answer" ? "closed" : "answer");
  renderClozeView();
});

elements.homeRoleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.selectedRole = button.dataset.homeRole;
    state.activeTab = "mode-select";
    render();
  });
});

elements.homeTranslationButton.addEventListener("click", () => {
  state.selectedMode = "translation";
  resetDeck(state.selectedRole, "list");
});

elements.homeClozeButton.addEventListener("click", () => {
  state.selectedMode = "mission";
  state.activeTab = "list";
  state.cardMode = "closed";
  render();
});

elements.footerHomeButton.addEventListener("click", () => {
  state.activeTab = "home";
  state.cardMode = "closed";
  render();
});

elements.retryButton.addEventListener("click", () => {
  resetDeck(state.selectedRole, state.activeTab === "starred" ? "starred" : "memorize");
});

elements.backToSetupButton.addEventListener("click", () => {
  state.activeTab = "home";
  state.cardMode = "closed";
  render();
});

elements.showHintButton.addEventListener("click", revealHint);
elements.showAnswerButton.addEventListener("click", revealAnswer);

render();
