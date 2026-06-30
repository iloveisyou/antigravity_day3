// MBTI Questions Pool (4 questions per dimension, total 16 questions)
const questionsPool = [
  // EI Dimension
  {
    id: 1,
    type: "EI",
    question: "주말에 약속이 없다면 당신은?",
    options: [
      { text: "집에 있는다.", score: { I: 1 } },
      { text: "밖에 나가서 사람들을 만난다.", score: { E: 1 } }
    ]
  },
  {
    id: 2,
    type: "EI",
    question: "새로운 사람을 만나는 것에 대해 어떻게 생각하나요?",
    options: [
      { text: "새로운 사람을 만나는 것은 즐겁다.", score: { E: 1 } },
      { text: "피곤하고 기가 빨리 빠져서 부담스럽다.", score: { I: 1 } }
    ]
  },
  {
    id: 3,
    type: "EI",
    question: "사람이 많은 시끌벅적한 파티나 모임에 갔을 때 당신은?",
    options: [
      { text: "구석에서 조용히 아는 사람과 대화한다.", score: { I: 1 } },
      { text: "처음 보는 사람들과도 적극적으로 대화하고 섞인다.", score: { E: 1 } }
    ]
  },
  {
    id: 4,
    type: "EI",
    question: "바쁜 한 주를 끝내고, 에너지를 재충전하는 완벽한 휴일은?",
    options: [
      { text: "집에서 혼자 책이나 넷플릭스를 보며 보낸다.", score: { I: 1 } },
      { text: "친구들과 만나 맛있는 것을 먹거나 놀러 간다.", score: { E: 1 } }
    ]
  },
  // SN Dimension
  {
    id: 5,
    type: "SN",
    question: "세상을 바라보고 파악하는 당신의 기본적인 시선은?",
    options: [
      { text: "나무보다 숲(전체적인 맥락과 의미)을 먼저 본다.", score: { N: 1 } },
      { text: "숲보다 나무(구체적인 사실과 세부 정보)를 먼저 본다.", score: { S: 1 } }
    ]
  },
  {
    id: 6,
    type: "SN",
    question: "의사결정을 하거나 정보를 다룰 때 더 중요하게 여기는 가치는?",
    options: [
      { text: "미래의 가능성보다 현재 눈앞의 사실과 경험이 중요하다.", score: { S: 1 } },
      { text: "현재의 사실보다 앞으로 일어날 미래의 가능성이 중요하다.", score: { N: 1 } }
    ]
  },
  {
    id: 7,
    type: "SN",
    question: "갑자기 우주선이 외계인에게 납치된다면 당신의 생각은?",
    options: [
      { text: "상상만 해도 흥미진진하고 온갖 SF 스토리가 떠오른다.", score: { N: 1 } },
      { text: "현실성이 전혀 없다며 다른 실용적인 생각을 한다.", score: { S: 1 } }
    ]
  },
  {
    id: 8,
    type: "SN",
    question: "새 가구를 조립하기 위해 설명서를 볼 때 당신의 모습은?",
    options: [
      { text: "처음부터 끝까지 설명서를 꼼꼼하게 읽고 순서대로 조립한다.", score: { S: 1 } },
      { text: "일단 느낌대로 조립하다가, 막히면 그때 설명서를 본다.", score: { N: 1 } }
    ]
  },
  // TF Dimension
  {
    id: 9,
    type: "TF",
    question: "친구가 슬픈 일이 생겨서 울면서 털어놓을 때, 당신은?",
    options: [
      { text: "어떻게 해결해야 할지 실질적인 해결책을 고민하고 제시한다.", score: { T: 1 } },
      { text: "무슨 일인지 듣기보단 먼저 마음 깊이 공감하고 위로한다.", score: { F: 1 } }
    ]
  },
  {
    id: 10,
    type: "TF",
    question: "중요한 일을 결정해야 할 때, 더 우선시하는 기준은?",
    options: [
      { text: "객관적인 사실과 인과관계에 따른 논리가 가장 중요하다.", score: { T: 1 } },
      { text: "해당 결정이 다른 사람들의 기분과 관계에 미칠 영향이 중요하다.", score: { F: 1 } }
    ]
  },
  {
    id: 11,
    type: "TF",
    question: "친구가 '나 요즘 힘이 안 나서 영양제 샀어'라고 카톡을 보냈다면?",
    options: [
      { text: "\"성분 뭐 들었어? 가격은 얼마야? 어떤 효과 있어?\"", score: { T: 1 } },
      { text: "\"얼마나 피곤했으면 영양제까지 샀어ㅠㅠ 아프지 마!\"", score: { F: 1 } }
    ]
  },
  {
    id: 12,
    type: "TF",
    question: "동료나 친구에게 들었을 때 가장 기분 좋은 칭찬은?",
    options: [
      { text: "\"너 정말 일 똑부러지게 잘한다, 머리가 정말 비상해!\"", score: { T: 1 } },
      { text: "\"너랑 같이 있으면 마음이 정말 따뜻해지고 편안해져.\"", score: { F: 1 } }
    ]
  },
  // JP Dimension
  {
    id: 13,
    type: "JP",
    question: "드디어 다가온 여행을 준비할 때, 당신의 스타일은?",
    options: [
      { text: "일자별/시간별 루트와 예비 일정까지 철저하게 세운다.", score: { J: 1 } },
      { text: "기본 목적지만 정해두고, 현지에서 내키는 대로 움직인다.", score: { P: 1 } }
    ]
  },
  {
    id: 14,
    type: "JP",
    question: "업무나 과제를 수행할 때 마감일에 대한 당신의 태도는?",
    options: [
      { text: "마감 기한이 미리 정해져 있어야 계획적으로 일의 효율이 난다.", score: { J: 1 } },
      { text: "마감일이 다가오는 것은 그 자체로 엄청난 압박이자 스트레스다.", score: { P: 1 } }
    ]
  },
  {
    id: 15,
    type: "JP",
    question: "큰 마음을 먹고 내 방 청소를 하려고 마음먹었을 때 당신은?",
    options: [
      { text: "청소 구역을 나눈 후 버릴 것과 보관할 것을 체계적으로 정리한다.", score: { J: 1 } },
      { text: "대충 눈에 보이는 것만 쓰레기통에 넣은 후 편하게 쉰다.", score: { P: 1 } }
    ]
  },
  {
    id: 16,
    type: "JP",
    question: "친구가 오늘 저녁 갑작스러운 번개 모임을 제안했을 때?",
    options: [
      { text: "이미 오늘 계획된 일과 휴식 패턴이 깨져 마음이 편치 않다.", score: { J: 1 } },
      { text: "마침 특별한 일도 없었는데 정말 신난다! 바로 나갈 준비를 한다.", score: { P: 1 } }
    ]
  }
];

// MBTI Type Descriptions and Emojis
const mbtiResults = {
  ISTJ: { title: "세상의 소금형 (ISTJ)", desc: "한 번 시작한 일은 끝까지 해내는 현실주의자이자 규칙과 약속을 철저히 지키는 꼼꼼한 성격입니다." },
  ISFJ: { title: "임금 뒤의 권력형 (ISFJ)", desc: "주변 사람들을 헌신적이고 따뜻하게 보살피며, 조용하고 차분하게 책임을 다하는 서포터형입니다." },
  INFJ: { title: "예언자형 (INFJ)", desc: "깊은 통찰력으로 사람들을 도우며, 자신만의 뚜렷한 신념과 이상을 실현하고자 노력하는 예술가적 영혼입니다." },
  INTJ: { title: "과학자형 (INTJ)", desc: "독립적이고 전략적인 두뇌의 소유자로, 매사 철저한 분석과 계획을 세워 복잡한 문제를 해결하는 해결사입니다." },
  ISTP: { title: "백과사전형 (ISTP)", desc: "상황을 냉철하게 분석하고 뛰어난 적응력과 손재주로 도구를 다루는 데 능숙한 과묵한 실용주의자입니다." },
  ISFP: { title: "성인군자형 (ISFP)", desc: "따뜻한 감성을 지닌 겸손한 예술가로, 타인을 잘 배려하며 자유롭고 온화한 삶을 추구합니다." },
  INFP: { title: "잔다르크형 (INFP)", desc: "따뜻하고 상상력이 풍부한 낭만주의자로, 본인의 가치관을 소중히 여기며 조화롭고 의미 있는 삶을 꿈꿉니다." },
  INTP: { title: "아이디어 뱅크형 (INTP)", desc: "지적 호기심이 매우 높고 비판적 분석을 잘하며, 직관적인 시선으로 새로운 진리와 가능성을 끝없이 탐구합니다." },
  ESTP: { title: "수완좋은 활동가형 (ESTP)", desc: "에너지가 넘치고 즉흥적이며, 현실적인 문제를 감각적으로 빠르게 해결하고 도전을 두려워하지 않는 활동가입니다." },
  ESFP: { title: "사교적인 외교관형 (ESFP)", desc: "분위기를 메이커하는 유쾌한 사교가로, 인생을 한 편의 축제처럼 즐기며 타인에게 기쁨을 주는 긍정형입니다." },
  ENFP: { title: "스파크형 (ENFP)", desc: "창의적이고 열정적인 모험가로, 타인과 소통하는 데 매우 능숙하며 항상 새로운 가능성을 꿈꾸는 자유로운 영혼입니다." },
  ENTP: { title: "발명가형 (ENTP)", desc: "도전적인 토론을 즐기고 브레인스토밍의 천재로, 틀에 박힌 것을 거부하고 기발한 아이디어를 실현해 나갑니다." },
  ESTJ: { title: "사업가형 (ESTJ)", desc: "조직을 이끌어가는 능력이 탁월한 지도자로, 명확한 사실과 계획을 바탕으로 효율적이고 체계적인 결과를 도출합니다." },
  ESFJ: { title: "사교적인 친선도모형 (ESFJ)", desc: "타인과의 끈끈한 관계를 소중히 여기며, 친절하고 다정하게 조화를 이끌어내는 협동심이 강한 리더입니다." },
  ENFJ: { title: "언행일치 리더형 (ENFJ)", desc: "사교적이고 따뜻한 카리스마의 리더로, 타인의 성장을 적극적으로 지원하고 선한 영향력을 널리 퍼뜨립니다." },
  ENTJ: { title: "지도자형 (ENTJ)", desc: "야망과 결단력을 지닌 태생적 전략가로, 장기적인 비전을 설정하고 사람들을 조직하여 목표를 쟁취합니다." }
};

// App State Variables
let activeQuestions = []; // Store the selected 8 questions for the current session
let currentQuestionIndex = 0;
let userAnswers = []; // Store answers with format { qId, type, selectedScore, timeSpent }
let questionStartTime = null;

// DOM Elements
const viewHome = document.getElementById('view-home');
const viewQuestion = document.getElementById('view-question');
const viewLoading = document.getElementById('view-loading');
const viewResult = document.getElementById('view-result');

const btnStart = document.getElementById('btn-start');
const qNumber = document.getElementById('q-number');
const qText = document.getElementById('q-text');
const btnOptionA = document.getElementById('btn-option-a');
const btnOptionB = document.getElementById('btn-option-b');
const progressBar = document.getElementById('progress-bar');

const resultSprite = document.getElementById('result-sprite');
const resultType = document.getElementById('result-type');
const resultDesc = document.getElementById('result-desc');
const btnDetail = document.getElementById('btn-detail');
const btnRestart = document.getElementById('btn-restart');

// Array shuffling helper (Fisher-Yates)
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Select 2 random questions per dimension and shuffle them globally
function initQuestions() {
  const dimensions = ["EI", "SN", "TF", "JP"];
  let selected = [];
  
  dimensions.forEach(dim => {
    const dimQuestions = questionsPool.filter(q => q.type === dim);
    const shuffledDim = shuffleArray(dimQuestions);
    selected.push(shuffledDim[0]);
    selected.push(shuffledDim[1]);
  });
  
  // Shuffle all 8 questions globally
  activeQuestions = shuffleArray(selected);
}

// View Transition Helper
function showView(viewToShow) {
  [viewHome, viewQuestion, viewLoading, viewResult].forEach(view => {
    view.classList.add('hidden');
    view.classList.remove('fade-in');
  });
  viewToShow.classList.remove('hidden');
  void viewToShow.offsetWidth;
  viewToShow.classList.add('fade-in');
}

// Reset Game State
function resetGame() {
  currentQuestionIndex = 0;
  userAnswers = [];
  questionStartTime = null;
  initQuestions();
  showView(viewHome);
}

// Render Current Question
function renderQuestion() {
  const currentQuestion = activeQuestions[currentQuestionIndex];
  
  // Update Question title
  qNumber.textContent = `Q${currentQuestionIndex + 1}.`;
  qText.textContent = currentQuestion.question;
  
  // Shuffle options order
  const shuffledOptions = shuffleArray(currentQuestion.options);
  
  // Store reference to options on DOM elements
  btnOptionA.textContent = shuffledOptions[0].text;
  btnOptionA.dataset.score = JSON.stringify(shuffledOptions[0].score);
  
  btnOptionB.textContent = shuffledOptions[1].text;
  btnOptionB.dataset.score = JSON.stringify(shuffledOptions[1].score);
  
  // Update progress bar (0% to 100%)
  const progressPercent = (currentQuestionIndex / activeQuestions.length) * 100;
  progressBar.style.width = `${progressPercent}%`;
  
  // Start response timer
  questionStartTime = Date.now();
}

// Handle Option Click
function handleOptionSelect(btnElement) {
  const timeSpent = Date.now() - questionStartTime;
  const selectedScore = JSON.parse(btnElement.dataset.score);
  const currentQuestion = activeQuestions[currentQuestionIndex];
  
  // Record choice and time
  userAnswers.push({
    qId: currentQuestion.id,
    type: currentQuestion.type,
    selectedScore: selectedScore,
    timeSpent: timeSpent
  });
  
  // Move to next question or calculate result
  currentQuestionIndex++;
  
  if (currentQuestionIndex < activeQuestions.length) {
    renderQuestion();
  } else {
    progressBar.style.width = '100%';
    showLoadingAndCalculateResult();
  }
}

// Calculate MBTI Type and Show Results
function showLoadingAndCalculateResult() {
  showView(viewLoading);
  
  // Simulate premium analyzer loading
  setTimeout(() => {
    const mbtiType = calculateMBTI();
    displayResult(mbtiType);
    showView(viewResult);
  }, 1800);
}

// Helper to get MBTI letter from the user's answer index
function getLetterFromChoice(qIndex, optionIndex) {
  // OptionIndex in userAnswers isn't stored directly, rather the selectedScore object.
  // We can determine the letter key from the keys of selectedScore.
  return Object.keys(userAnswers[qIndex].selectedScore)[0];
}

// MBTI Type Calculation Algorithm with Response Time Tie-Breaker
function calculateMBTI() {
  const dimensions = ["EI", "SN", "TF", "JP"];
  let mbti = "";
  
  dimensions.forEach((dim, idx) => {
    // Filter answers belonging to the current dimension
    const dimAnswers = userAnswers.filter(ans => ans.type === dim);
    
    // Sum scores
    const counts = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    dimAnswers.forEach(ans => {
      for (const [key, val] of Object.entries(ans.selectedScore)) {
        counts[key] = (counts[key] || 0) + val;
      }
    });
    
    const key1 = dim[0];
    const key2 = dim[1];
    
    if (counts[key1] === counts[key2]) {
      // Tie-Breaker: Prioritize the question answered faster
      if (dimAnswers[0].timeSpent <= dimAnswers[1].timeSpent) {
        mbti += Object.keys(dimAnswers[0].selectedScore)[0];
      } else {
        mbti += Object.keys(dimAnswers[1].selectedScore)[0];
      }
    } else {
      mbti += (counts[key1] > counts[key2]) ? key1 : key2;
    }
  });
  
  return mbti;
}

// Sprite positions map in 4x4 grid (Col 0-3, Row 0-3)
const spritePositions = {
  INTJ: { col: 0, row: 0 },
  INTP: { col: 1, row: 0 },
  ENTJ: { col: 2, row: 0 },
  ENTP: { col: 3, row: 0 },
  INFJ: { col: 0, row: 1 },
  INFP: { col: 1, row: 1 },
  ENFJ: { col: 2, row: 1 },
  ENFP: { col: 3, row: 1 },
  ISTJ: { col: 0, row: 2 },
  ISFJ: { col: 1, row: 2 },
  ESTJ: { col: 2, row: 2 },
  ESFJ: { col: 3, row: 2 },
  ISTP: { col: 0, row: 3 },
  ISFP: { col: 1, row: 3 },
  ESTP: { col: 2, row: 3 },
  ESFP: { col: 3, row: 3 }
};

// Update DOM with MBTI Result details
function displayResult(type) {
  const result = mbtiResults[type] || { title: type, desc: "당신만을 위한 고유한 성격 유형입니다." };
  
  resultType.textContent = result.title;
  resultDesc.textContent = result.desc;
  
  // Set CSS Sprite background position based on INTP standard (33.5% 0.63%)
  const pos = spritePositions[type];
  if (pos) {
    const posX = (pos.col === 3) ? 100 : (pos.col * 33.3 + 0.2);
    const posY = (pos.row === 3) ? 100 : (pos.row * 33.12 + 0.63);
    resultSprite.style.backgroundPosition = `${posX}% ${posY}%`;
  }
  
  // Set link to detailed MBTI type description page
  btnDetail.href = `https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-${type.toLowerCase()}`;
}

// Event Listeners
btnStart.addEventListener('click', () => {
  initQuestions();
  renderQuestion();
  showView(viewQuestion);
});

btnOptionA.addEventListener('click', () => handleOptionSelect(btnOptionA));
btnOptionB.addEventListener('click', () => handleOptionSelect(btnOptionB));
btnRestart.addEventListener('click', resetGame);
