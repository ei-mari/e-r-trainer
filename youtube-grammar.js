const grammarRules = [
  { words: ["I", "you", "You", "me", "We", "we"], className: "pronoun", label: "代名詞" },
  { words: ["Gary", "Brooke", "Ann", "Arbor", "Michigan", "Notre", "Dame"], className: "proper-noun", label: "名詞（固有名詞）" },
  { words: ["it", "It", "this", "This", "that", "That", "Nothing"], className: "pronoun", label: "代名詞" },
  { words: ["kitchen", "house", "meal", "dishes", "dish", "point", "desire", "bathroom", "bathroom's", "mess", "belt", "questions", "time", "money", "city", "kids", "leprechauns", "backflips", "bus", "day", "guide", "appreciation", "minutes", "ass", "man", "game", "tour", "bit", "hell", "right"], className: "noun", label: "名詞" },
  { words: ["want", "care", "cares", "busted", "worked", "said", "help", "helped", "do", "have", "offer", "asked", "call", "go", "went", "think", "show", "ask", "get", "relax", "come", "nag", "support", "make", "match", "clean", "know", "like", "Let", "let", "see", "thank", "work"], className: "verb", label: "動詞" },
  { words: ["waking"], className: "gerund", label: "動詞（-ing形）" },
  { words: ["cleaning", "cooking"], className: "participle", label: "動詞（-ing形）" },
  { words: ["screaming", "doing"], className: "participle", label: "動詞（-ing形）" },
  { words: ["acting", "busting"], className: "progressive", label: "動詞（-ing形）" },
  { words: ["being"], className: "progressive", label: "動詞（-ing形）" },
  { words: ["attacked", "nagged", "left"], className: "past-participle", label: "動詞（過去分詞・受け身）" },
  { words: ["would", "can", "could", "should", "did", "will", "Are"], className: "aux", label: "助動詞" },
  { words: ["won't"], className: "aux", label: "助動詞 + not" },
  { words: ["be", "am", "is", "are", "was", "were"], className: "verb", label: "動詞（be動詞）" },
  { words: ["don't", "didn't", "doesn't"], className: "aux", label: "助動詞 + not" },
  { words: ["I'll", "I'm", "you're", "That's", "that's"], className: "aux", label: "代名詞 + 助動詞" },
  { words: ["Who", "who"], className: "question", label: "疑問詞" },
  { words: ["What", "what"], className: "question", label: "疑問詞" },
  { words: ["Why", "why", "How", "how"], className: "question", label: "疑問詞" },
  { words: ["for", "with", "of", "in", "at", "from"], className: "prep", label: "前置詞" },
  { words: ["up", "on", "out"], className: "particle", label: "副詞（句動詞の一部）" },
  { words: ["and", "And", "because", "After", "if", "so", "when", "instead"], className: "conj", label: "接続詞" },
  { words: ["dirty", "damn", "whole", "strong", "little", "best", "crazy", "drunk", "good", "goddamn", "fun", "upset", "nice", "alone"], className: "adj", label: "形容詞" },
  { words: ["not"], className: "adv", label: "副詞（否定語）" },
  { words: ["okay"], className: "interjection", label: "間投詞" },
  { words: ["Fine"], className: "interjection", label: "間投詞" },
  { words: ["Oh", "Hey"], className: "interjection", label: "間投詞" },
  { words: ["No"], className: "interjection", label: "間投詞" },
  { words: ["Jesus"], className: "interjection", label: "間投詞" },
  { words: ["just", "today", "again", "together", "hopefully", "probably", "ever", "anywhere", "then", "Then", "home", "enough"], className: "adv", label: "副詞" },
  { words: ["a", "an", "the", "The"], className: "det", label: "冠詞" },
  { words: ["my", "your", "Your", "his", "His", "her", "Her", "our", "Our", "their", "Their"], className: "det", label: "代名詞（所有格）" },
  { words: ["every", "enough", "all", "some", "any"], className: "adj", label: "形容詞" },
  { words: ["this", "that"], className: "det", label: "指示代名詞（形容詞用法）" },
  { words: ["one"], className: "number", label: "数詞" },
];

const phraseNotes = [
  { text: "waking up to", note: "wake up to 名詞: 起きたら〜がある状態" },
  { text: "Who cares", note: "Who cares?: 誰が気にするの？ = どうでもいい" },
  { text: "I care", note: "care: 気にする。主語 + care で完結します。" },
  { text: "busted my ass", note: "bust one's ass: めちゃくちゃ頑張る" },
  { text: "It would be nice if", note: "It would be nice if SV: 〜してくれたら嬉しい" },
  { text: "helped me with", note: "help 人 with 名詞: 人の〜を手伝う" },
  { text: "help you do", note: "help 人 do: 人が〜するのを手伝う" },
  { text: "want me to help", note: "want 人 to do: 人に〜してほしい" },
  { text: "want you to want to do", note: "want 人 to do + want to do が重なった形" },
  { text: "Why would I want to", note: "Why would I ...?: そもそもなぜ私が〜するの？" },
  { text: "Let me see if", note: "Let me see if ...: 〜か確認させて" },
  { text: "Are you telling me that", note: "Are you telling me that ...?: つまり〜って言ってるの？" },
  { text: "I'm upset because", note: "I'm upset because SV: SVなので腹が立っている" },
  { text: "strong desire to", note: "desire to do: 〜したいという気持ち" },
  { text: "go anywhere together", note: "go anywhere together: 一緒にどこかへ行く" },
  { text: "show up for me", note: "show up for 人: 人のために行動で示す、支える" },
  { text: "make enough money to", note: "make enough money to do: 〜するのに十分なお金を稼ぐ" },
  { text: "All I ask is that", note: "All I ask is that SV: 私が求めているのはSVだけ" },
  { text: "instead of being", note: "instead of being ...: 〜される代わりに" },
  { text: "Nothing I ever do", note: "Nothing I ever do ...: 私が何をしても〜ない" },
  { text: "good enough", note: "good enough: 十分によい" },
  { text: "left the hell alone", note: "leave 人 alone: 人を放っておく。the hell は強調。" },
];

const segmentOne = [
  ["woman", "Gary, you know I don't like waking up to a dirty kitchen."],
  ["man", "Who cares?"],
  ["woman", "I care! All right? I care!"],
  ["woman", "I busted my ass all day cleaning this house and then cooking that meal. And I worked today. It would be nice if you said thank you and helped me with the dishes."],
  ["man", "Fine. I'll help you do the damn dishes."],
  ["woman", "Oh, come on."],
  ["woman", "You know what? No, see, that's not what I want."],
  ["man", "You just said that you want me to help you do the dishes."],
  ["woman", "I want you to want to do the dishes."],
  ["man", "Why would I want to do dishes? Why?"],
  ["woman", "See, that's my whole point."],
  ["man", "Let me see if I'm following this, okay? Are you telling me that you're upset because I don't have a strong desire to clean dishes?"],
  ["woman", "No. I'm upset because you don't have a strong desire to offer to do the dishes."],
  ["man", "I just did."],
  ["woman", "After I asked you!"],
  ["man", "Jesus, Brooke, you're acting crazy again."],
  ["woman", "Don't you call me crazy. I am not crazy."],
  ["man", "I didn't call you crazy."],
  ["woman", "You just did."],
];

const segmentTwo = [
  ["woman", "We don't go anywhere together."],
  ["man", "We just went to Ann Arbor together."],
  ["woman", "To Ann Arbor. To the Michigan-Notre Dame game. You think screaming, drunk kids and leprechauns doing backflips, that's fun. That's fun for me."],
  ["woman", "Come on, man. I did that for you. What do you... How do you show up for me?"],
  ["man", "I'm up on the bus every goddamn day for you!"],
  ["woman", "Come on."],
  ["man", "I'm busting my ass to be the best tour guide in the damn city, so I can make enough money to support both of us and hopefully you won't have to work one day."],
  ["woman", "I want to work."],
  ["man", "All I ask, Brooke, is that you show a little bit of appreciation."],
  ["man", "That I just get 20 minutes to relax when I come home, instead of being attacked with questions and nagged the whole damn time."],
  ["woman", "You think that I nag you?"],
  ["man", "That's all you do! All you do is nag me!"],
  ["man", "\"The bathroom's a mess.\" \"Your belt doesn't match.\" \"Hey, Gary, you should probably go work out.\" Nothing I ever do is ever good enough! I just want to be left the hell alone!"],
];

const lineOverrides = {
  "Gary, you know I don't like waking up to a dirty kitchen.": {
    Gary: ["proper-noun", "名詞（固有名詞）"],
    you: ["pronoun", "代名詞"],
    know: ["verb", "動詞"],
    I: ["pronoun", "代名詞"],
    "don't": ["aux", "助動詞 + not"],
    like: ["verb", "動詞"],
    waking: ["gerund", "動詞（-ing形）"],
    up: ["particle", "副詞（句動詞の一部）"],
    to: ["prep", "前置詞"],
    a: ["det", "冠詞"],
    dirty: ["adj", "形容詞"],
    kitchen: ["noun", "名詞"],
  },
  "Who cares?": {
    Who: ["question", "疑問詞"],
    cares: ["verb", "動詞"],
  },
  "I care! All right? I care!": {
    I: ["pronoun", "代名詞"],
    care: ["verb", "動詞"],
    All: ["adv", "副詞"],
    right: ["adj", "形容詞"],
  },
  "I busted my ass all day cleaning this house and then cooking that meal. And I worked today. It would be nice if you said thank you and helped me with the dishes.": {
    I: ["pronoun", "代名詞"],
    busted: ["verb", "動詞"],
    my: ["det", "代名詞（所有格）"],
    ass: ["noun", "名詞"],
    all: ["adj", "形容詞"],
    day: ["noun", "名詞"],
    cleaning: ["participle", "動詞（-ing形）"],
    this: ["det", "指示代名詞（形容詞用法）"],
    house: ["noun", "名詞"],
    and: ["conj", "接続詞"],
    then: ["adv", "副詞"],
    cooking: ["participle", "動詞（-ing形）"],
    that: ["det", "指示代名詞（形容詞用法）"],
    meal: ["noun", "名詞"],
    And: ["conj", "接続詞"],
    worked: ["verb", "動詞"],
    today: ["adv", "副詞"],
    It: ["pronoun", "代名詞"],
    would: ["aux", "助動詞"],
    be: ["verb", "動詞（be動詞）"],
    nice: ["adj", "形容詞"],
    if: ["conj", "接続詞"],
    you: ["pronoun", "代名詞"],
    said: ["verb", "動詞"],
    thank: ["verb", "動詞"],
    helped: ["verb", "動詞"],
    me: ["pronoun", "代名詞"],
    with: ["prep", "前置詞"],
    the: ["det", "冠詞"],
    dishes: ["noun", "名詞"],
  },
  "Fine. I'll help you do the damn dishes.": {
    Fine: ["interjection", "間投詞"],
    "I'll": ["aux", "代名詞 + 助動詞"],
    help: ["verb", "動詞"],
    you: ["pronoun", "代名詞"],
    do: ["verb", "動詞"],
    the: ["det", "冠詞"],
    damn: ["adj", "形容詞"],
    dishes: ["noun", "名詞"],
  },
  "Oh, come on.": {
    Oh: ["interjection", "間投詞"],
    come: ["verb", "動詞"],
    on: ["particle", "副詞（句動詞の一部）"],
  },
  "You know what? No, see, that's not what I want.": {
    You: ["pronoun", "代名詞"],
    know: ["verb", "動詞"],
    "what#1": ["question", "疑問詞"],
    No: ["interjection", "間投詞"],
    see: ["interjection", "間投詞"],
    "that's": ["aux", "指示代名詞 + 動詞（be動詞）"],
    not: ["adv", "副詞（否定語）"],
    "what#2": ["pronoun", "関係代名詞"],
    I: ["pronoun", "代名詞"],
    want: ["verb", "動詞"],
  },
  "See, that's my whole point.": {
    See: ["interjection", "間投詞"],
    "that's": ["aux", "指示代名詞 + 動詞（be動詞）"],
    my: ["det", "代名詞（所有格）"],
    whole: ["adj", "形容詞"],
    point: ["noun", "名詞"],
  },
  "Let me see if I'm following this, okay? Are you telling me that you're upset because I don't have a strong desire to clean dishes?": {
    Let: ["verb", "動詞"],
    me: ["pronoun", "代名詞"],
    see: ["verb", "動詞"],
    if: ["conj", "接続詞"],
    "I'm": ["aux", "代名詞 + 助動詞"],
    following: ["progressive", "動詞（-ing形）"],
    this: ["pronoun", "指示代名詞"],
    okay: ["interjection", "間投詞"],
    Are: ["aux", "助動詞"],
    you: ["pronoun", "代名詞"],
    telling: ["progressive", "動詞（-ing形）"],
    that: ["conj", "接続詞"],
    "you're": ["aux", "代名詞 + 動詞（be動詞）"],
    upset: ["adj", "形容詞"],
    because: ["conj", "接続詞"],
    I: ["pronoun", "代名詞"],
    "don't": ["aux", "助動詞 + not"],
    have: ["verb", "動詞"],
    a: ["det", "冠詞"],
    strong: ["adj", "形容詞"],
    desire: ["noun", "名詞"],
    to: ["infinitive", "不定詞マーカー"],
    clean: ["verb", "動詞"],
    dishes: ["noun", "名詞"],
  },
  "No. I'm upset because you don't have a strong desire to offer to do the dishes.": {
    No: ["interjection", "間投詞"],
    "I'm": ["aux", "代名詞 + 動詞（be動詞）"],
    upset: ["adj", "形容詞"],
    because: ["conj", "接続詞"],
    you: ["pronoun", "代名詞"],
    "don't": ["aux", "助動詞 + not"],
    have: ["verb", "動詞"],
    a: ["det", "冠詞"],
    strong: ["adj", "形容詞"],
    desire: ["noun", "名詞"],
    to: ["infinitive", "不定詞マーカー"],
    offer: ["verb", "動詞"],
    do: ["verb", "動詞"],
    the: ["det", "冠詞"],
    dishes: ["noun", "名詞"],
  },
  "Jesus, Brooke, you're acting crazy again.": {
    Jesus: ["interjection", "間投詞"],
    Brooke: ["proper-noun", "名詞（固有名詞）"],
    "you're": ["aux", "代名詞 + 助動詞"],
    acting: ["progressive", "動詞（-ing形）"],
    crazy: ["adj", "形容詞"],
    again: ["adv", "副詞"],
  },
  "Don't you call me crazy. I am not crazy.": {
    "Don't": ["aux", "助動詞 + not"],
    you: ["pronoun", "代名詞"],
    call: ["verb", "動詞"],
    me: ["pronoun", "代名詞"],
    crazy: ["adj", "形容詞"],
    I: ["pronoun", "代名詞"],
    am: ["aux", "動詞（be動詞）"],
    not: ["adv", "副詞（否定語）"],
  },
  "I didn't call you crazy.": {
    I: ["pronoun", "代名詞"],
    "didn't": ["aux", "助動詞 + not"],
    call: ["verb", "動詞"],
    you: ["pronoun", "代名詞"],
    crazy: ["adj", "形容詞"],
  },
  "We don't go anywhere together.": {
    We: ["pronoun", "代名詞"],
    "don't": ["aux", "助動詞 + not"],
    go: ["verb", "動詞"],
    anywhere: ["adv", "副詞"],
    together: ["adv", "副詞"],
  },
  "We just went to Ann Arbor together.": {
    We: ["pronoun", "代名詞"],
    just: ["adv", "副詞"],
    went: ["verb", "動詞"],
    to: ["prep", "前置詞"],
    Ann: ["proper-noun", "名詞（固有名詞）"],
    Arbor: ["proper-noun", "名詞（固有名詞）"],
    together: ["adv", "副詞"],
  },
  "To Ann Arbor. To the Michigan-Notre Dame game. You think screaming, drunk kids and leprechauns doing backflips, that's fun. That's fun for me.": {
    To: ["prep", "前置詞"],
    Ann: ["proper-noun", "名詞（固有名詞）"],
    Arbor: ["proper-noun", "名詞（固有名詞）"],
    the: ["det", "冠詞"],
    Michigan: ["proper-noun", "名詞（固有名詞）"],
    Notre: ["proper-noun", "名詞（固有名詞）"],
    Dame: ["proper-noun", "名詞（固有名詞）"],
    game: ["noun", "名詞"],
    You: ["pronoun", "代名詞"],
    think: ["verb", "動詞"],
    screaming: ["participle", "動詞（-ing形）"],
    drunk: ["adj", "形容詞"],
    kids: ["noun", "名詞"],
    and: ["conj", "接続詞"],
    leprechauns: ["noun", "名詞"],
    doing: ["participle", "動詞（-ing形）"],
    backflips: ["noun", "名詞"],
    "that's": ["aux", "指示代名詞 + 動詞（be動詞）"],
    "That's": ["aux", "指示代名詞 + 動詞（be動詞）"],
    fun: ["adj", "形容詞"],
    for: ["prep", "前置詞"],
    me: ["pronoun", "代名詞"],
  },
  "Come on, man. I did that for you. What do you... How do you show up for me?": {
    Come: ["verb", "動詞"],
    on: ["particle", "副詞（句動詞の一部）"],
    man: ["noun", "名詞"],
    I: ["pronoun", "代名詞"],
    did: ["verb", "動詞"],
    that: ["pronoun", "指示代名詞"],
    for: ["prep", "前置詞"],
    you: ["pronoun", "代名詞"],
    What: ["question", "疑問詞"],
    do: ["aux", "助動詞"],
    How: ["question", "疑問詞"],
    show: ["verb", "動詞"],
    up: ["particle", "副詞（句動詞の一部）"],
    me: ["pronoun", "代名詞"],
  },
  "I'm up on the bus every goddamn day for you!": {
    "I'm": ["aux", "代名詞 + 動詞（be動詞）"],
    up: ["adv", "副詞"],
    on: ["prep", "前置詞"],
    the: ["det", "冠詞"],
    bus: ["noun", "名詞"],
    every: ["adj", "形容詞"],
    goddamn: ["adj", "形容詞"],
    day: ["noun", "名詞"],
    for: ["prep", "前置詞"],
    you: ["pronoun", "代名詞"],
  },
  "Come on.": {
    Come: ["verb", "動詞"],
    on: ["particle", "副詞（句動詞の一部）"],
  },
  "I'm busting my ass to be the best tour guide in the damn city, so I can make enough money to support both of us and hopefully you won't have to work one day.": {
    "I'm": ["aux", "代名詞 + 助動詞"],
    busting: ["progressive", "動詞（-ing形）"],
    my: ["det", "代名詞（所有格）"],
    ass: ["noun", "名詞"],
    to: ["infinitive", "不定詞マーカー"],
    be: ["verb", "動詞（be動詞）"],
    the: ["det", "冠詞"],
    best: ["adj", "形容詞"],
    tour: ["noun", "名詞"],
    guide: ["noun", "名詞"],
    in: ["prep", "前置詞"],
    damn: ["adj", "形容詞"],
    city: ["noun", "名詞"],
    so: ["conj", "接続詞"],
    I: ["pronoun", "代名詞"],
    can: ["aux", "助動詞"],
    make: ["verb", "動詞"],
    enough: ["adj", "形容詞"],
    money: ["noun", "名詞"],
    support: ["verb", "動詞"],
    both: ["pronoun", "代名詞"],
    of: ["prep", "前置詞"],
    us: ["pronoun", "代名詞"],
    and: ["conj", "接続詞"],
    hopefully: ["adv", "副詞"],
    you: ["pronoun", "代名詞"],
    "won't": ["aux", "助動詞 + not"],
    work: ["verb", "動詞"],
    one: ["number", "数詞"],
    day: ["noun", "名詞"],
  },
  "I want to work.": {
    I: ["pronoun", "代名詞"],
    want: ["verb", "動詞"],
    to: ["infinitive", "不定詞マーカー"],
    work: ["verb", "動詞"],
  },
  "All I ask, Brooke, is that you show a little bit of appreciation.": {
    All: ["pronoun", "代名詞"],
    I: ["pronoun", "代名詞"],
    ask: ["verb", "動詞"],
    Brooke: ["proper-noun", "名詞（固有名詞）"],
    is: ["verb", "動詞（be動詞）"],
    that: ["conj", "接続詞"],
    you: ["pronoun", "代名詞"],
    show: ["verb", "動詞"],
    a: ["det", "冠詞"],
    little: ["adj", "形容詞"],
    bit: ["noun", "名詞"],
    of: ["prep", "前置詞"],
    appreciation: ["noun", "名詞"],
  },
  "That I just get 20 minutes to relax when I come home, instead of being attacked with questions and nagged the whole damn time.": {
    That: ["conj", "接続詞"],
    I: ["pronoun", "代名詞"],
    just: ["adv", "副詞"],
    get: ["verb", "動詞"],
    "20": ["number", "数詞"],
    minutes: ["noun", "名詞"],
    to: ["infinitive", "不定詞マーカー"],
    relax: ["verb", "動詞"],
    when: ["conj", "接続詞"],
    come: ["verb", "動詞"],
    home: ["adv", "副詞"],
    instead: ["adv", "副詞"],
    of: ["prep", "前置詞"],
    being: ["progressive", "助動詞（-ing形）"],
    attacked: ["past-participle", "動詞（過去分詞・受け身）"],
    with: ["prep", "前置詞"],
    questions: ["noun", "名詞"],
    and: ["conj", "接続詞"],
    nagged: ["past-participle", "動詞（過去分詞・受け身）"],
    the: ["det", "冠詞"],
    whole: ["adj", "形容詞"],
    damn: ["adj", "形容詞"],
    time: ["noun", "名詞"],
  },
  "You think that I nag you?": {
    You: ["pronoun", "代名詞"],
    think: ["verb", "動詞"],
    that: ["conj", "接続詞"],
    I: ["pronoun", "代名詞"],
    nag: ["verb", "動詞"],
    you: ["pronoun", "代名詞"],
  },
  "That's all you do! All you do is nag me!": {
    "That's": ["aux", "指示代名詞 + 動詞（be動詞）"],
    all: ["pronoun", "代名詞"],
    you: ["pronoun", "代名詞"],
    do: ["verb", "動詞"],
    All: ["pronoun", "代名詞"],
    is: ["verb", "動詞（be動詞）"],
    nag: ["verb", "動詞"],
    me: ["pronoun", "代名詞"],
  },
  "Nothing I ever do is ever good enough! I just want to be left the hell alone!": {
    Nothing: ["pronoun", "代名詞"],
    I: ["pronoun", "代名詞"],
    ever: ["adv", "副詞"],
    do: ["verb", "動詞"],
    is: ["aux", "助動詞"],
    good: ["adj", "形容詞"],
    enough: ["adv", "副詞"],
    just: ["adv", "副詞"],
    want: ["verb", "動詞"],
    to: ["infinitive", "不定詞マーカー"],
    be: ["aux", "助動詞"],
    left: ["past-participle", "動詞（過去分詞・受け身）"],
    the: ["det", "冠詞"],
    hell: ["noun", "名詞"],
    alone: ["adj", "形容詞"],
  },
};

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizeToken(token) {
  return token.replace(/^[^A-Za-z]+|[^A-Za-z']+$/g, "");
}

function getTokenOccurrence(tokens, index) {
  const target = normalizeToken(tokens[index]);
  return tokens
    .slice(0, index + 1)
    .filter((item) => normalizeToken(item) === target).length;
}

function getOverride(line, token, tokens = [], index = -1) {
  const clean = normalizeToken(token);
  const occurrenceKey = index >= 0 ? `${clean}#${getTokenOccurrence(tokens, index)}` : "";
  const override = lineOverrides[line]?.[occurrenceKey] ?? lineOverrides[line]?.[token] ?? lineOverrides[line]?.[clean];
  if (!override) return null;
  const [className, label] = override;
  return { className, label };
}

function classify(token, tokens = [], index = -1, line = "") {
  const override = getOverride(line, token, tokens, index);
  if (override) return override;

  const clean = normalizeToken(token);
  const lower = clean.toLowerCase();

  const previous = index > 0 ? normalizeToken(tokens[index - 1]).toLowerCase() : "";
  const next = index >= 0 && index < tokens.length - 1 ? normalizeToken(tokens[index + 1]).toLowerCase() : "";

  if (lower === "bathroom's") {
    return { className: "noun", label: "名詞 + 動詞（be動詞）" };
  }

  if (lower === "be" && next === "left") {
    return { className: "aux", label: "助動詞" };
  }

  if (lower === "to") {
    const infinitiveTriggers = new Set(["want", "wants", "wanted", "like", "desire", "offer", "help", "nice", "enough", "ask", "asked", "relax", "be", "have", "make"]);
    const infinitiveVerbs = new Set(["want", "help", "do", "clean", "offer", "relax", "be", "support", "work"]);
    if (infinitiveTriggers.has(previous) || infinitiveVerbs.has(next)) {
      return { className: "infinitive", label: "不定詞マーカー" };
    }
    return { className: "prep", label: "前置詞" };
  }

  if (lower === "that") {
    if (next === "meal") return { className: "det", label: "指示代名詞（形容詞用法）" };
    if (["said", "telling", "is"].includes(previous)) return { className: "conj", label: "接続詞" };
    return { className: "pronoun", label: "代名詞" };
  }

  if (lower === "on") {
    if (previous === "come") return { className: "particle", label: "副詞（句動詞の一部）" };
    return { className: "prep", label: "前置詞" };
  }

  for (const rule of grammarRules) {
    if (rule.words.includes(clean) || rule.words.some((word) => word.toLowerCase() === lower)) {
      return rule;
    }
  }
  if (/^[0-9]+$/.test(clean)) return { className: "number", label: "数詞" };
  if (/^[A-Z]/.test(clean)) return { className: "proper-noun", label: "名詞（固有名詞）" };
  return { className: "noun", label: "名詞" };
}

function tokenize(line) {
  return line.match(/[A-Za-z]+(?:['’][A-Za-z]+)?|[0-9]+|[.,!?;:()"]/g) ?? [];
}

function isHaveToPhrase(tokens, index) {
  const current = normalizeToken(tokens[index]).toLowerCase();
  const next = index < tokens.length - 1 ? normalizeToken(tokens[index + 1]).toLowerCase() : "";
  const afterNext = index < tokens.length - 2 ? normalizeToken(tokens[index + 2]).toLowerCase() : "";
  return current === "have" && next === "to" && afterNext === "work";
}

function renderTokens(line) {
  const tokens = tokenize(line);
  const rendered = [];

  tokens.forEach((token, index) => {
      if (index > 0 && normalizeToken(tokens[index - 1]).toLowerCase() === "have" && normalizeToken(token).toLowerCase() === "to" && isHaveToPhrase(tokens, index - 1)) {
        return;
      }
      if (/^[.,!?;:()"]$/.test(token)) {
        rendered.push(`<span class="plain">${escapeHtml(token)}</span>`);
        return;
      }
      if (isHaveToPhrase(tokens, index)) {
        rendered.push(`<span class="token aux" title="助動詞相当">${escapeHtml("have to")}</span>`);
        return;
      }
      const rule = classify(token, tokens, index, line);
      rendered.push(`<span class="token ${rule.className}" title="${escapeHtml(rule.label)}">${escapeHtml(token)}</span>`);
    });

  return rendered.join("");
}

function getNotes(line) {
  const lower = line.toLowerCase();
  const notes = phraseNotes.filter((item) => lower.includes(item.text.toLowerCase()));
  if (notes.length) return notes.map((item) => item.note);

  if (line.includes("want")) return ["want to do: 〜したい / want 人 to do: 人に〜してほしい"];
  if (line.includes("?")) return ["疑問文: 疑問詞・助動詞・主語・動詞の順番に注目しましょう。"];
  if (line.includes("because")) return ["because SV: 理由を後ろに続ける形です。"];
  return ["主語・動詞・目的語の順番を色で確認しましょう。"];
}

function getTokenRows(line) {
  const tokens = tokenize(line);
  const rows = [];

  tokens.forEach((token, index) => {
    if (/^[.,!?;:()"]$/.test(token)) return;
    if (index > 0 && normalizeToken(tokens[index - 1]).toLowerCase() === "have" && normalizeToken(token).toLowerCase() === "to" && isHaveToPhrase(tokens, index - 1)) {
      return;
    }
    if (isHaveToPhrase(tokens, index)) {
      rows.push({ token: "have to", rule: { className: "aux", label: "助動詞相当" } });
      return;
    }

    const rule = classify(token, tokens, index, line);
    rows.push({ token, rule });
  });

  return rows;
}

function renderGrammarTable(line) {
  const rows = getTokenRows(line);
  return `<table class="pos-table">
    <thead>
      <tr>
        <th>単語</th>
        <th>品詞</th>
      </tr>
    </thead>
    <tbody>
      ${rows
        .map(({ token, rule }) => {
          return `<tr>
            <td><span class="mini-token ${rule.className}">${escapeHtml(token)}</span></td>
            <td>${escapeHtml(rule.label)}</td>
          </tr>`;
        })
        .join("")}
    </tbody>
  </table>`;
}

function renderAudioPlayer(index) {
  const audioNumber = String(index + 1).padStart(2, "0");
  const speeds = [
    { value: 0.25, label: "0.25" },
    { value: 0.5, label: "0.5" },
    { value: 0.75, label: "0.75" },
    { value: 1.0, label: "1.0" },
  ];

  return `<div class="audio-practice" data-audio-player>
    <audio controls preload="metadata" src="./breakup-audio/line-${audioNumber}.mp3"></audio>
    <div class="speed-row" aria-label="再生速度">
      ${speeds
        .map((speed) => `<button class="speed-btn ${speed.value === 1.0 ? "is-active" : ""}" type="button" data-speed="${speed.value}">${speed.label}</button>`)
        .join("")}
    </div>
  </div>`;
}

function renderLine([speaker, text], index) {
  const emoji = speaker === "woman" ? "👩‍🦳" : "👨";
  return `<article class="line-card ${speaker}">
    <div class="line-top">
      <span class="speaker">${emoji}</span>
      <span class="line-number">${String(index + 1).padStart(2, "0")}</span>
    </div>
    <div class="token-line">${renderTokens(text)}</div>
    <div class="breakdown">
      ${renderGrammarTable(text)}
    </div>
    ${renderAudioPlayer(index)}
  </article>`;
}

function renderOmissionBlock() {
  return `<div class="omission-block">
    <span>（中略）</span>
  </div>`;
}

function renderSegment(id, lines) {
  const root = document.querySelector(id);
  if (!root) return;
  root.innerHTML = lines
    .map((line, index) => `${index === 19 ? renderOmissionBlock() : ""}${renderLine(line, index)}`)
    .join("");
}

renderSegment("#dialogueList", [...segmentOne, ...segmentTwo]);

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
