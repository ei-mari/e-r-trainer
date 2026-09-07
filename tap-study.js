const cards = [
  {
    id: "hobbies-q5",
    topic: "hobbies",
    topicLabel: "Hobbies",
    number: "Q5",
    question: "What are your hobbies, and how many hours a week do you spend on them?",
    questionIpa: "/wʌt ər jər ˈhɑbiz, ən haʊ ˈmɛni ˈaʊərz ə wik də jə spɛnd ɑn ðəm?/",
    answer:
      "One of my hobbies is watching shows on Netflix.\nI spend a lot of time watching them at home, probably around 35 hours a week.\nIt's fun, and it also helps me practice English.",
    answerLineAudios: [
      "./tap-study-audio/lines/hobbies-q5-answer-line-1.wav",
      "./tap-study-audio/lines/hobbies-q5-answer-line-2.wav",
      "./tap-study-audio/lines/hobbies-q5-answer-line-3.wav",
    ],
    answerIpa:
      "/wʌn əv maɪ ˈhɑbiz ɪz ˈwɑtʃɪŋ ʃoʊz ɑn ˈnɛtflɪks/\n/aɪ spɛnd ə lɑt əv taɪm ˈwɑtʃɪŋ ðəm ət hoʊm, ˈprɑbəbli əˈraʊnd ˈθɜrti faɪv ˈaʊərz ə wik/\n/ɪts fʌn, ən ɪt ˈɔlsoʊ hɛlps mi ˈpræktɪs ˈɪŋɡlɪʃ/",
  },
  {
    id: "hobbies-q6",
    topic: "hobbies",
    topicLabel: "Hobbies",
    number: "Q6",
    question: "Would you recommend your hobbies to your friends? Why or why not?",
    questionIpa: "/wəd jə ˌrɛkəˈmɛnd jər ˈhɑbiz tə jər frɛndz? waɪ ər waɪ nɑt?/",
    answer:
      "Yes, I would.\nWatching shows on Netflix is fun.\nI especially enjoy shows like Stranger Things.\nIt's really exciting.",
    answerLineAudios: [
      "./tap-study-audio/lines/hobbies-q6-answer-line-1.wav",
      "./tap-study-audio/lines/hobbies-q6-answer-line-2.wav",
      "./tap-study-audio/lines/hobbies-q6-answer-line-3.wav",
      "./tap-study-audio/lines/hobbies-q6-answer-line-4.wav",
    ],
    answerIpa:
      "/jɛs, aɪ wʊd/\n/ˈwɑtʃɪŋ ʃoʊz ɑn ˈnɛtflɪks ɪz fʌn/\n/aɪ əˈspɛʃəli ɛnˈdʒɔɪ ʃoʊz laɪk ˈstreɪndʒər θɪŋz/\n/ɪts ˈrɪli ɪkˈsaɪtɪŋ/",
  },
  {
    id: "hobbies-q7",
    topic: "hobbies",
    topicLabel: "Hobbies",
    number: "Q7",
    question: "If you were to start a new hobby, which would you like to learn?",
    questionIpa: "/ɪf jə wər tə stɑrt ə nu ˈhɑbi, wɪtʃ wəd jə laɪk tə lɜrn?/",
    answer:
      "I would like to learn a new language, especially German.\nI want to travel to Europe someday, so I think it would be useful.\nI'm also interested in German culture and food.\nI think learning a new language is a great way to understand other countries and cultures.",
    answerLineAudios: [
      "./tap-study-audio/lines/hobbies-q7-answer-line-1.wav",
      "./tap-study-audio/lines/hobbies-q7-answer-line-2.wav",
      "./tap-study-audio/lines/hobbies-q7-answer-line-3.wav",
      "./tap-study-audio/lines/hobbies-q7-answer-line-4.wav",
    ],
    answerIpa:
      "/aɪ wəd laɪk tə lɜrn ə nu ˈlæŋɡwɪdʒ, əˈspɛʃəli ˈdʒɜrmən/\n/aɪ wɑnt tə ˈtrævəl tə ˈjʊrəp ˈsʌmˌdeɪ, soʊ aɪ θɪŋk ɪt wəd bi ˈjusfəl/\n/aɪm ˈɔlsoʊ ˈɪntrəstəd ɪn ˈdʒɜrmən ˈkʌltʃər ən fud/\n/aɪ θɪŋk ˈlɜrnɪŋ ə nu ˈlæŋɡwɪdʒ ɪz ə ɡreɪt weɪ tə ˌʌndərˈstænd ˈʌðər ˈkʌntriz ən ˈkʌltʃərz/",
  },
  {
    id: "transport-q5",
    topic: "transport",
    topicLabel: "Transport",
    number: "Q5",
    question: "When was the last time you used public transportation, and where did you go?",
    questionIpa: "/wɛn wəz ðə læst taɪm jə juzd ˈpʌblɪk ˌtrænspərˈteɪʃən, ən wɛr dɪd jə ɡoʊ?/",
    answer: "The last time I used public transportation was yesterday.\nI took the train to Shibuya for work.",
    answerLineAudios: [
      "./tap-study-audio/lines/transport-q5-answer-line-1.wav",
      "./tap-study-audio/lines/transport-q5-answer-line-2.wav",
    ],
    answerIpa:
      "/ðə læst taɪm aɪ juzd ˈpʌblɪk ˌtrænspərˈteɪʃən wəz ˈjɛstərˌdeɪ/\n/aɪ tʊk ðə treɪn tə ʃɪˈbuːjə fər wɜrk/",
  },
  {
    id: "transport-q6",
    topic: "transport",
    topicLabel: "Transport",
    number: "Q6",
    question: "Have you ever gotten lost when using public transportation? What did you do then?",
    questionIpa: "/həv jə ˈɛvər ˈɡɑtən lɔst wɛn ˈjuzɪŋ ˈpʌblɪk ˌtrænspərˈteɪʃən? wʌt dɪd jə du ðɛn?/",
    answer:
      "No, I haven't.\nI usually check Google Maps before I go somewhere, so public transportation is not too difficult for me.",
    answerLineAudios: [
      "./tap-study-audio/lines/transport-q6-answer-line-1.wav",
      "./tap-study-audio/lines/transport-q6-answer-line-2.wav",
    ],
    answerIpa:
      "/noʊ, aɪ ˈhævənt/\n/aɪ ˈjuʒuəli tʃɛk ˈɡuɡəl mæps bɪˈfɔr aɪ ɡoʊ ˈsʌmˌwɛr, soʊ ˈpʌblɪk ˌtrænspərˈteɪʃən ɪz nɑt tə ˈdɪfəkəlt fər mi/",
  },
  {
    id: "transport-q7",
    topic: "transport",
    topicLabel: "Transport",
    number: "Q7",
    question:
      "Do you think the announcements inside stations and trains should be made in different languages? Why?",
    questionIpa:
      "/də jə θɪŋk ði əˈnaʊnsmənts ɪnˈsaɪd ˈsteɪʃənz ən treɪnz ʃəd bi meɪd ɪn ˈdɪfərənt ˈlæŋɡwɪdʒɪz? waɪ?/",
    answer:
      "Yes, I do.\nRecently, many tourists have been visiting Japan.\nAnnouncements in different languages are very helpful for them.\nI have also seen some people get lost.\nJapan's train systems may be more complicated than those in other countries.\nSo, I think multilingual announcements are very important in Japan.",
    answerLineAudios: [
      "./tap-study-audio/lines/transport-q7-answer-line-1.wav",
      "./tap-study-audio/lines/transport-q7-answer-line-2.wav",
      "./tap-study-audio/lines/transport-q7-answer-line-3.wav",
      "./tap-study-audio/lines/transport-q7-answer-line-4.wav",
      "./tap-study-audio/lines/transport-q7-answer-line-5.wav",
      "./tap-study-audio/lines/transport-q7-answer-line-6.wav",
    ],
    answerIpa:
      "/jɛs, aɪ du/\n/ˈrisəntli, ˈmɛni ˈtʊrɪsts həv bən ˈvɪzɪtɪŋ dʒəˈpæn/\n/əˈnaʊnsmənts ɪn ˈdɪfərənt ˈlæŋɡwɪdʒɪz ər ˈvɛri ˈhɛlpfəl fər ðəm/\n/aɪ həv ˈɔlsoʊ sin sʌm ˈpipəl ɡɛt lɔst/\n/dʒəˈpænz treɪn ˈsɪstəmz meɪ bi mɔr ˈkɑmpləˌkeɪtəd ðən ðoʊz ɪn ˈʌðər ˈkʌntriz/\n/soʊ, aɪ θɪŋk ˌmʌltiˈlɪŋɡwəl əˈnaʊnsmənts ər ˈvɛri ɪmˈpɔrtənt ɪn dʒəˈpæn/",
  },
  {
    id: "online-shopping-q5",
    topic: "online-shopping",
    topicLabel: "Online Shopping",
    number: "Q5",
    question: "What online shopping site do you visit most often, and what do you usually buy?",
    questionIpa: "/wʌt ˈɑnˌlaɪn ˈʃɑpɪŋ saɪt də jə ˈvɪzət moʊst ˈɔfən, ən wʌt də jə ˈjuʒuəli baɪ?/",
    answer:
      "I use Rakuten most often because it is convenient and I can earn points when I shop there.\nI usually buy groceries and cosmetics.",
    answerLineAudios: [
      "./tap-study-audio/lines/online-shopping-q5-answer-line-1.wav",
      "./tap-study-audio/lines/online-shopping-q5-answer-line-2.wav",
    ],
    answerIpa:
      "/aɪ juz ˈrɑkətɛn moʊst ˈɔfən bɪˈkəz ɪt ɪz kənˈvinjənt ən aɪ kən ɜrn pɔɪnts wɛn aɪ ʃɑp ðɛr/\n/aɪ ˈjuʒuəli baɪ ˈɡroʊsəriz ən kɑzˈmɛtɪks/",
  },
  {
    id: "online-shopping-q6",
    topic: "online-shopping",
    topicLabel: "Online Shopping",
    number: "Q6",
    question: "Which device do you usually use when you shop online, and why?",
    questionIpa: "/wɪtʃ dɪˈvaɪs də jə ˈjuʒuəli juz wɛn jə ʃɑp ˈɑnˌlaɪn, ən waɪ?/",
    answer:
      "I usually use my smartphone because I can shop anytime and anywhere.\nIt is also quick and easy to use, so it is very convenient.",
    answerLineAudios: [
      "./tap-study-audio/lines/online-shopping-q6-answer-line-1.wav",
      "./tap-study-audio/lines/online-shopping-q6-answer-line-2.wav",
    ],
    answerIpa:
      "/aɪ ˈjuʒuəli juz maɪ ˈsmɑrtˌfoʊn bɪˈkəz aɪ kən ʃɑp ˈɛniˌtaɪm ən ˈɛniˌwɛr/\n/ɪt ɪz ˈɔlsoʊ kwɪk ən ˈizi tə juz, soʊ ɪt ɪz ˈvɛri kənˈvinjənt/",
  },
  {
    id: "online-shopping-q7",
    topic: "online-shopping",
    topicLabel: "Online Shopping",
    number: "Q7",
    question: "What are some of the potential dangers of online shopping?",
    questionIpa: "/wʌt ər sʌm əv ðə pəˈtɛnʃəl ˈdeɪndʒərz əv ˈɑnˌlaɪn ˈʃɑpɪŋ?/",
    answer:
      "I think there are two potential dangers of online shopping.\nOne is buying clothes in the wrong size because you cannot try them on before you buy them.\nAnother danger is that personal information, such as credit card details, could be stolen.\nTherefore, we should be careful when shopping online.",
    answerLineAudios: [
      "./tap-study-audio/lines/online-shopping-q7-answer-line-1.wav",
      "./tap-study-audio/lines/online-shopping-q7-answer-line-2.wav",
      "./tap-study-audio/lines/online-shopping-q7-answer-line-3.wav",
      "./tap-study-audio/lines/online-shopping-q7-answer-line-4.wav",
    ],
    answerIpa:
      "/aɪ θɪŋk ðər ər tu pəˈtɛnʃəl ˈdeɪndʒərz əv ˈɑnˌlaɪn ˈʃɑpɪŋ/\n/wʌn ɪz ˈbaɪɪŋ kloʊ(ð)z ɪn ðə rɔŋ saɪz bɪˈkəz jə ˈkænɑt traɪ ðəm ɑn bɪˈfɔr jə baɪ ðəm/\n/əˈnʌðər ˈdeɪndʒər ɪz ðət ˈpɜrsənəl ˌɪnfərˈmeɪʃən, sʌtʃ əz ˈkrɛdət kɑrd ˈditelz, kəd bi stoʊl/\n/ˈðɛrˌfɔr, wi ʃəd bi ˈkɛrfəl wɛn ˈʃɑpɪŋ ˈɑnˌlaɪn/",
  },
  {
    id: "clothes-shopping-q5",
    topic: "clothes-shopping",
    topicLabel: "Clothes Shopping",
    number: "Q5",
    question: "Where is your favorite place to buy clothes? Why do you like that place?",
    answer:
      "I don't really have a favorite place to buy clothes.\nI usually shop online because it's easy and convenient.",
    answerLineAudios: [
      "./tap-study-audio/lines/clothes-shopping-q5-answer-line-1.wav",
      "./tap-study-audio/lines/clothes-shopping-q5-answer-line-2.wav",
    ],
    answerIpa:
      "/aɪ doʊnt ˈrɪli həv ə ˈfeɪvərət pleɪs tə baɪ kloʊ(ð)z/\n/aɪ ˈjuʒuəli ʃɑp ˈɑnˌlaɪn bɪkəz ɪts ˈizi ən kənˈvinjənt/",
  },
  {
    id: "clothes-shopping-q6",
    topic: "clothes-shopping",
    topicLabel: "Clothes Shopping",
    number: "Q6",
    question: "Do you enjoy shopping for clothes for other people? Why or why not?",
    answer:
      "No, I don't.\nShopping for clothes for other people is very difficult.\nI might buy the wrong size, and they might not like what I choose.",
    answerLineAudios: [
      "./tap-study-audio/lines/clothes-shopping-q6-answer-line-1.wav",
      "./tap-study-audio/lines/clothes-shopping-q6-answer-line-2.wav",
      "./tap-study-audio/lines/clothes-shopping-q6-answer-line-3.wav",
    ],
    answerIpa:
      "/noʊ, aɪ doʊnt/\n/ˈʃɑpɪŋ fər kloʊ(ð)z fər ˈʌðər ˈpipəl ɪz ˈvɛri ˈdɪfəkəlt/\n/aɪ maɪt baɪ ðə rɔŋ saɪz, ən ðeɪ maɪt nɑt laɪk wʌt aɪ tʃuz/",
  },
  {
    id: "clothes-shopping-q7",
    topic: "clothes-shopping",
    topicLabel: "Clothes Shopping",
    number: "Q7",
    question: "How do you feel about salespeople approaching you and helping you when you shop for clothes?",
    answer:
      "I think it depends on the shop.\nIf I know the salesperson and we're friendly, I don't mind talking with them or asking for help.\nBut if it's my first time at the shop, I prefer to look around by myself and take my time.\nSometimes I feel a little uncomfortable when salespeople approach me too much.",
    answerLineAudios: [
      "./tap-study-audio/lines/clothes-shopping-q7-answer-line-1.wav",
      "./tap-study-audio/lines/clothes-shopping-q7-answer-line-2.wav",
      "./tap-study-audio/lines/clothes-shopping-q7-answer-line-3.wav",
      "./tap-study-audio/lines/clothes-shopping-q7-answer-line-4.wav",
    ],
    answerIpa:
      "/aɪ θɪŋk ɪt dɪˈpɛndz ɑn ðə ʃɑp/\n/ɪf aɪ noʊ ðə ˈseɪlzˌpɜrsən ən wɪr ˈfrɛndli, aɪ doʊnt maɪnd ˈtɔkɪŋ wɪð ðəm ər ˈæskɪŋ fər hɛlp/\n/bət ɪf ɪts maɪ fɜrst taɪm ət ðə ʃɑp, aɪ prɪˈfɜr tə lʊk əˈraʊnd baɪ maɪˈsɛlf ən teɪk maɪ taɪm/\n/ˈsʌmˌtaɪmz aɪ fil ə ˈlɪtəl ʌnˈkʌmfərtəbəl wɛn ˈseɪlzˌpipəl əˈproʊtʃ mi tu mʌtʃ/",
  },
  {
    id: "tourist-information-q1",
    topic: "tourist-information",
    topicLabel: "Tourist Information",
    number: "Q1",
    question: "Have you ever used a tourist information center? What did you ask about?",
    answer:
      "No, I haven't.\nI usually check information online before I go somewhere.\nFor example, I check public transportation and the places I want to visit before I leave home.",
    answerLineAudios: [
      "./tap-study-audio/lines/tourist-information-q1-answer-line-1.wav",
      "./tap-study-audio/lines/tourist-information-q1-answer-line-2.wav",
      "./tap-study-audio/lines/tourist-information-q1-answer-line-3.wav",
    ],
    answerIpa:
      "/noʊ, aɪ ˈhævənt/\n/aɪ ˈjuʒuəli tʃɛk ˌɪnfərˈmeɪʃən ˈɑnˌlaɪn bɪˈfɔr aɪ ɡoʊ ˈsʌmˌwɛr/\n/fər ɪɡˈzæmpəl, aɪ tʃɛk ˈpʌblɪk ˌtrænspərˈteɪʃən ən ðə ˈpleɪsɪz aɪ wɑnt tə ˈvɪzət bɪˈfɔr aɪ liv hoʊm/",
  },
  {
    id: "tourist-information-q2",
    topic: "tourist-information",
    topicLabel: "Tourist Information",
    number: "Q2",
    question: "What kind of information do you think tourist information centers should provide?",
    answer:
      "I'm not sure because I've never been to a tourist information center.\nBut I think they should provide information about public transportation in multiple languages, such as how to buy tickets and how to use buses and trains.",
    answerLineAudios: [
      "./tap-study-audio/lines/tourist-information-q2-answer-line-1.wav",
      "./tap-study-audio/lines/tourist-information-q2-answer-line-2.wav",
    ],
    answerIpa:
      "/aɪm nɑt ʃʊr bɪˈkəz aɪv ˈnɛvər bɪn tə ə ˈtʊrɪst ˌɪnfərˈmeɪʃən ˈsɛntər/\n/bət aɪ θɪŋk ðeɪ ʃəd prəˈvaɪd ˌɪnfərˈmeɪʃən əˈbaʊt ˈpʌblɪk ˌtrænspərˈteɪʃən ɪn ˈmʌltəpəl ˈlæŋɡwɪdʒɪz, sʌtʃ əz haʊ tə baɪ ˈtɪkəts ən haʊ tə juz ˈbʌsɪz ən treɪnz/",
  },
  {
    id: "tourist-information-q3",
    topic: "tourist-information",
    topicLabel: "Tourist Information",
    number: "Q3",
    question: "Do you think tourist information centers are still necessary now that people can use smartphones? Why or why not?",
    answer:
      "No, I don't.\nWe can check maps and a lot of information on our smartphones.\nBut I think public transportation can be difficult for foreigners to understand.\nSo transportation websites and apps should provide clear information about how to buy tickets and how to pay.",
    answerLineAudios: [
      "./tap-study-audio/lines/tourist-information-q3-answer-line-1.wav",
      "./tap-study-audio/lines/tourist-information-q3-answer-line-2.wav",
      "./tap-study-audio/lines/tourist-information-q3-answer-line-3.wav",
      "./tap-study-audio/lines/tourist-information-q3-answer-line-4.wav",
    ],
    answerIpa:
      "/noʊ, aɪ doʊnt/\n/wi kən tʃɛk mæps ən ə lɑt əv ˌɪnfərˈmeɪʃən ɑn aʊər ˈsmɑrtˌfoʊnz/\n/bət aɪ θɪŋk ˈpʌblɪk ˌtrænspərˈteɪʃən kən bi ˈdɪfəkəlt fər ˈfɔrənərz tə ˌʌndərˈstænd/\n/soʊ ˌtrænspərˈteɪʃən ˈwɛbˌsaɪts ən æps ʃəd prəˈvaɪd klɪr ˌɪnfərˈmeɪʃən əˈbaʊt haʊ tə baɪ ˈtɪkəts ən haʊ tə peɪ/",
  },
  {
    id: "daily-routine-q5",
    topic: "daily-routine",
    topicLabel: "Daily Routine",
    number: "Q5",
    question: "How much time do you usually spend eating dinner? Where do you usually eat it?",
    answer:
      "I usually spend about 30 minutes eating dinner.\nI usually eat at home while watching Netflix.",
    answerLineAudios: [
      "./tap-study-audio/lines/daily-routine-q5-answer-line-1.wav",
      "./tap-study-audio/lines/daily-routine-q5-answer-line-2.wav",
    ],
    answerIpa:
      "/aɪ ˈjuʒuəli spɛnd əˈbaʊt ˈθɜrti ˈmɪnəts ˈitɪŋ ˈdɪnər/\n/aɪ ˈjuʒuəli it ət hoʊm waɪl ˈwɑtʃɪŋ ˈnɛtflɪks/",
  },
  {
    id: "daily-routine-q6",
    topic: "daily-routine",
    topicLabel: "Daily Routine",
    number: "Q6",
    question: "Do you think adopting good sleeping habits is important? Why or why not?",
    answer:
      "Yes, I do.\nHaving good sleep habits keeps us healthy and helps us stay in good condition.",
    answerLineAudios: [
      "./tap-study-audio/lines/daily-routine-q6-answer-line-1.wav",
      "./tap-study-audio/lines/daily-routine-q6-answer-line-2.wav",
    ],
    answerIpa:
      "/jɛs, aɪ du/\n/ˈhævɪŋ ɡʊd slip ˈhæbəts kips əs ˈhɛlθi ən hɛlps əs steɪ ɪn ɡʊd kənˈdɪʃən/",
  },
  {
    id: "daily-routine-q7",
    topic: "daily-routine",
    topicLabel: "Daily Routine",
    number: "Q7",
    question: "Can you tell me about your daily morning routine before going to work or school?",
    answer:
      "I usually wake up at 7 a.m.\nThen, I stretch, wash my face, brush my teeth, and eat breakfast.\nI usually have granola for breakfast.\nAfter that, I brush my teeth again, get dressed, and put on makeup.\nThen, I start working at home.\nI usually start working around 9 a.m.",
    answerLineAudios: [
      "./tap-study-audio/lines/daily-routine-q7-answer-line-1.wav",
      "./tap-study-audio/lines/daily-routine-q7-answer-line-2.wav",
      "./tap-study-audio/lines/daily-routine-q7-answer-line-3.wav",
      "./tap-study-audio/lines/daily-routine-q7-answer-line-4.wav",
      "./tap-study-audio/lines/daily-routine-q7-answer-line-5.wav",
      "./tap-study-audio/lines/daily-routine-q7-answer-line-6.wav",
    ],
    answerIpa:
      "/aɪ ˈjuʒuəli weɪk ʌp ət ˈsɛvən eɪ ˈɛm/\n/ðɛn, aɪ strɛtʃ, wɑʃ maɪ feɪs, brʌʃ maɪ tiθ, ən it ˈbrɛkfəst/\n/aɪ ˈjuʒuəli həv ɡrəˈnoʊlə fər ˈbrɛkfəst/\n/ˈæftər ðæt, aɪ brʌʃ maɪ tiθ əˈɡɛn, ɡɛt drɛst, ən pʊt ɑn ˈmeɪkˌʌp/\n/ðɛn, aɪ stɑrt ˈwɜrkɪŋ ət hoʊm/\n/aɪ ˈjuʒuəli stɑrt ˈwɜrkɪŋ əˈraʊnd naɪn eɪ ˈɛm/",
  },
  {
    id: "fast-food-q5",
    topic: "fast-food",
    topicLabel: "Fast Food",
    number: "Q5",
    question: "How often do you eat fast food?",
    answer:
      "I usually eat fast food once a week.\nThere is a MOS Burger across from my house, so I often go there.",
    answerLineAudios: [
      "./tap-study-audio/lines/fast-food-q5-answer-line-1.wav",
      "./tap-study-audio/lines/fast-food-q5-answer-line-2.wav",
    ],
    answerIpa:
      "/aɪ ˈjuʒuəli it fæst fud wʌns ə wik/\n/ðər ɪz ə mɔs ˈbɜrɡər əˈkrɔs frəm maɪ haʊs, soʊ aɪ ˈɔfən ɡoʊ ðɛr/",
  },
  {
    id: "fast-food-q6",
    topic: "fast-food",
    topicLabel: "Fast Food",
    number: "Q6",
    question: "Has fast food in your country become more popular than in the past? Why?",
    answer:
      "No, it hasn't.\nSince COVID, prices have gone up, so fast food has become more expensive.\nI think many people want to save money, too.",
    answerLineAudios: [
      "./tap-study-audio/lines/fast-food-q6-answer-line-1.wav",
      "./tap-study-audio/lines/fast-food-q6-answer-line-2.wav",
      "./tap-study-audio/lines/fast-food-q6-answer-line-3.wav",
    ],
    answerIpa:
      "/noʊ, ɪt ˈhæzənt/\n/sɪns ˈkoʊvɪd, ˈpraɪsɪz həv ɡɔn ʌp, soʊ fæst fud həz bɪˈkʌm mɔr ɪkˈspɛnsɪv/\n/aɪ θɪŋk ˈmɛni ˈpipəl wɑnt tə seɪv ˈmʌni, tu/",
  },
  {
    id: "fast-food-q7",
    topic: "fast-food",
    topicLabel: "Fast Food",
    number: "Q7",
    question: "If a new fast food restaurant opened in your area, which of the following would encourage you to go there? Why?",
    answer:
      "A healthy menu would encourage me to go there.\nRecently, I had appendicitis, so I've been trying to be careful about what I eat.\nAlso, when I went to Europe, there were various kinds of salads, and they were really tasty.\nI'd like to eat similar food in Japan.",
    answerLineAudios: [
      "./tap-study-audio/lines/fast-food-q7-answer-line-1.wav",
      "./tap-study-audio/lines/fast-food-q7-answer-line-2.wav",
      "./tap-study-audio/lines/fast-food-q7-answer-line-3.wav",
      "./tap-study-audio/lines/fast-food-q7-answer-line-4.wav",
    ],
    answerIpa:
      "/ə ˈhɛlθi ˈmɛnju wəd ɪnˈkɜrɪdʒ mi tə ɡoʊ ðɛr/\n/ˈrisəntli, aɪ hæd əˌpɛndəˈsaɪtəs, soʊ aɪv bɪn ˈtraɪɪŋ tə bi ˈkɛrfəl əˈbaʊt wʌt aɪ it/\n/ˈɔlsoʊ, wɛn aɪ wɛnt tə ˈjʊrəp, ðər wər ˈvɛriəs kaɪndz əv ˈsælədz, ən ðeɪ wər ˈrɪli ˈteɪsti/\n/aɪd laɪk tə it ˈsɪmələr fud ɪn dʒəˈpæn/",
  },
];

const state = {
  topic: "all",
  currentIndex: 0,
  showAnswer: false,
  flippedCards: new Set(),
};

const cardList = document.querySelector("#cardList");
const topicTabs = document.querySelector("#topicTabs");
const focusCard = document.querySelector("#focusCard");
const focusTopic = document.querySelector("#focusTopic");
const focusNumber = document.querySelector("#focusNumber");
const focusSide = document.querySelector("#focusSide");
const focusText = document.querySelector("#focusText");
const focusIpa = document.querySelector("#focusIpa");
const tapHint = document.querySelector("#tapHint");
const prevQuestionButton = document.querySelector("#prevQuestionButton");
const nextQuestionButton = document.querySelector("#nextQuestionButton");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const answerPlayer = new Audio();

function playAudioSource(src, speed = 1) {
  if (!src) {
    alert("この行の音声ファイルがまだありません。");
    return;
  }

  answerPlayer.pause();
  answerPlayer.currentTime = 0;
  answerPlayer.src = src;
  answerPlayer.playbackRate = speed;
  answerPlayer.play().catch(() => {
    alert("音声を再生できませんでした。ページを再読み込みしてもう一度お試しください。");
  });
}

function answerLines(card) {
  const textLines = card.answer.split("\n");
  const ipaLines = card.answerIpa.split("\n");

  return textLines.map((text, index) => ({
    audio: card.answerLineAudios?.[index] || "",
    ipa: ipaLines[index] || "",
    text,
  }));
}

function audioSpeedButtons({ cardId, lineIndex = "", type }) {
  const speeds = [
    { label: "0.25x", value: "0.25" },
    { label: "0.5x", value: "0.5" },
    { label: "0.75x", value: "0.75" },
    { label: "1.0x", value: "1" },
  ];

  return `
    <div class="audio-control-group" aria-label="Playback speeds">
      <span class="audio-label">音声</span>
      <div class="audio-speed-buttons">
        ${speeds
          .map(
            (speed) => `
              <button class="audio-speed-button" type="button" data-audio-type="${type}" data-card-id="${cardId}" data-line-index="${lineIndex}" data-audio-speed="${speed.value}" aria-label="Play at ${speed.label}">${speed.label}</button>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderAnswerLines(card, scope) {
  const lines = answerLines(card)
    .map(
      (line, index) => `
        <div class="answer-line">
          <div class="answer-line-copy">
            <span class="answer-line-text">${line.text}</span>
            <span class="answer-line-ipa">${line.ipa}</span>
          </div>
          ${audioSpeedButtons({ cardId: card.id, lineIndex: index, type: "line" })}
        </div>
      `
    )
    .join("");

  return `<div class="answer-line-list">${lines}</div>`;
}

function visibleCards() {
  if (state.topic === "all") {
    return cards;
  }

  return cards.filter((card) => card.topic === state.topic);
}

function currentCard() {
  const list = visibleCards();
  return list[state.currentIndex] || list[0] || cards[0];
}

function renderFocus() {
  const card = currentCard();

  focusTopic.textContent = card.topicLabel;
  focusNumber.textContent = card.number;
  focusSide.textContent = state.showAnswer ? "Answer" : "Question";
  focusText.innerHTML = state.showAnswer ? renderAnswerLines(card, "focus") : card.question;
  focusIpa.textContent = "";
  focusIpa.classList.add("is-hidden");
  tapHint.textContent = state.showAnswer ? "カードをタップして問題を見る" : "カードをタップして答えを見る";
  focusCard.classList.toggle("answer-side", state.showAnswer);
}

function renderTabs() {
  topicTabs.querySelectorAll(".segment").forEach((button) => {
    button.classList.toggle("active", button.dataset.topic === state.topic);
  });
}

function renderList() {
  const list = visibleCards();
  cardList.innerHTML = "";

  list.forEach((card) => {
    const button = document.createElement("article");
    const isAnswer = state.flippedCards.has(card.id);

    button.className = "study-card";
    button.classList.toggle("answer-side", isAnswer);
    button.dataset.cardId = card.id;
    button.role = "button";
    button.tabIndex = 0;
    button.innerHTML = `
      <span class="card-meta">${card.topicLabel} ${card.number}</span>
      <span class="side-label">${isAnswer ? "Answer" : "Question"}</span>
      <div class="card-question">${isAnswer ? renderAnswerLines(card, "list") : card.question}</div>
      <div class="card-footer">
        <span class="card-status">${isAnswer ? "タップで問題を見る" : "タップで答えを見る"}</span>
      </div>
    `;

    cardList.appendChild(button);
  });
}

function render() {
  renderTabs();
  renderFocus();
  renderList();
}

function moveFocus(direction) {
  const list = visibleCards();
  state.currentIndex = (state.currentIndex + direction + list.length) % list.length;
  state.showAnswer = false;
  render();
}

topicTabs.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-topic]");
  if (!button) return;

  state.topic = button.dataset.topic;
  state.currentIndex = 0;
  state.showAnswer = false;
  render();
});

focusCard.addEventListener("click", (event) => {
  if (event.target.closest("button[data-audio-type]")) {
    return;
  }

  state.showAnswer = !state.showAnswer;
  renderFocus();
});

focusCard.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") {
    return;
  }

  if (event.target.closest("button[data-audio-type]")) {
    return;
  }

  event.preventDefault();
  focusCard.click();
});

focusCard.addEventListener("click", (event) => {
  const audioButton = event.target.closest("button[data-audio-type]");
  if (!audioButton) {
    return;
  }

  event.stopPropagation();
  const card = currentCard();
  const speed = Number(audioButton.dataset.audioSpeed);

  playAudioSource(card.answerLineAudios?.[Number(audioButton.dataset.lineIndex)], speed);
});

prevQuestionButton.addEventListener("click", () => moveFocus(-1));
nextQuestionButton.addEventListener("click", () => moveFocus(1));
prevButton.addEventListener("click", () => moveFocus(-1));
nextButton.addEventListener("click", () => moveFocus(1));

cardList.addEventListener("click", (event) => {
  const audioButton = event.target.closest("button[data-audio-type]");
  if (audioButton) {
    event.stopPropagation();
    const card = cards.find((item) => item.id === audioButton.dataset.cardId);
    const speed = Number(audioButton.dataset.audioSpeed);

    if (card) {
      playAudioSource(card.answerLineAudios?.[Number(audioButton.dataset.lineIndex)], speed);
    }
    return;
  }

  const button = event.target.closest("[data-card-id]");
  if (!button) return;

  const id = button.dataset.cardId;
  const willShowAnswer = !state.flippedCards.has(id);

  if (willShowAnswer) {
    state.flippedCards.add(id);
  } else {
    state.flippedCards.delete(id);
  }

  renderList();
});

cardList.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") {
    return;
  }

  const card = event.target.closest("[data-card-id]");
  if (!card || event.target.closest("button[data-audio-type]")) {
    return;
  }

  event.preventDefault();
  card.click();
});

render();
