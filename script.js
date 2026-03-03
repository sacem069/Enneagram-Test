// Enneagram test - 36 questions (4 per type), grouped by type
// Each: { id, type: 1-9, text, reverse: boolean }
const QUESTIONS = [
  { id: 1, text: "I feel internally unsettled when things are done incorrectly.", type: 1, reverse: false },
  { id: 2, text: "I hold myself to very high standards, even when no one else does.", type: 1, reverse: false },
  { id: 3, text: "I often notice what could be improved rather than what is already good.", type: 1, reverse: false },
  { id: 4, text: "I am comfortable letting things be imperfect.", type: 1, reverse: true },

  { id: 5, text: "I feel most valuable when I am supporting someone else.", type: 2, reverse: false },
  { id: 6, text: "I tend to prioritize other people's needs over my own.", type: 2, reverse: false },
  { id: 7, text: "I sometimes struggle to recognize my own needs.", type: 2, reverse: false },
  { id: 8, text: "I feel completely secure even when no one depends on me.", type: 2, reverse: true },

  { id: 9, text: "My sense of worth is strongly connected to my accomplishments.", type: 3, reverse: false },
  { id: 10, text: "I adapt easily to what will make me successful in a given environment.", type: 3, reverse: false },
  { id: 11, text: "I feel uncomfortable when I am not being productive.", type: 3, reverse: false },
  { id: 12, text: "I feel just as worthy when I fail as when I succeed.", type: 3, reverse: true },

  { id: 13, text: "I often feel different from the people around me.", type: 4, reverse: false },
  { id: 14, text: "I am deeply aware of my emotional states.", type: 4, reverse: false },
  { id: 15, text: "I sometimes feel that something essential is missing in my life.", type: 4, reverse: false },
  { id: 16, text: "I rarely compare myself to others.", type: 4, reverse: true },

  { id: 17, text: "I need significant time alone to feel restored.", type: 5, reverse: false },
  { id: 18, text: "I prefer observing before participating.", type: 5, reverse: false },
  { id: 19, text: "I feel safest when I understand how things work.", type: 5, reverse: false },
  { id: 20, text: "I am comfortable depending on others for help.", type: 5, reverse: true },

  { id: 21, text: "I frequently think about what could go wrong.", type: 6, reverse: false },
  { id: 22, text: "I feel more at ease when there is a clear structure or plan.", type: 6, reverse: false },
  { id: 23, text: "I tend to seek reassurance before making major decisions.", type: 6, reverse: false },
  { id: 24, text: "I trust my decisions easily without second-guessing.", type: 6, reverse: true },

  { id: 25, text: "I look for positive possibilities even in difficult situations.", type: 7, reverse: false },
  { id: 26, text: "I feel uncomfortable staying in painful emotions for long.", type: 7, reverse: false },
  { id: 27, text: "I am energized by new ideas and experiences.", type: 7, reverse: false },
  { id: 28, text: "I prefer depth over variety in most areas of my life.", type: 7, reverse: true },

  { id: 29, text: "I dislike feeling controlled or limited by others.", type: 8, reverse: false },
  { id: 30, text: "I am comfortable confronting people directly.", type: 8, reverse: false },
  { id: 31, text: "I feel protective of people I care about.", type: 8, reverse: false },
  { id: 32, text: "I avoid expressing anger, even when it is justified.", type: 8, reverse: true },

  { id: 33, text: "I prefer keeping the peace over asserting my own preferences.", type: 9, reverse: false },
  { id: 34, text: "I sometimes go along with others to avoid tension.", type: 9, reverse: false },
  { id: 35, text: "I feel unsettled when there is open conflict around me.", type: 9, reverse: false },
  { id: 36, text: "I have no difficulty asserting myself, even if it causes disagreement.", type: 9, reverse: true }
];

const TYPE_PROFILES = {
  1: {
    title: "The Reformer",
    coreFear: "Being wrong or corrupt",
    coreDesire: "To be good and correct",
    light: ["Ethical", "Responsible", "Principled", "Improves systems", "High standards"],
    shadow: ["Perfectionism", "Harsh inner critic", "Rigidity", "Difficulty relaxing"],
    integration: "They realize they don't have to be perfect to be worthy."
  },
  2: {
    title: "The Helper",
    coreFear: "Being unloved",
    coreDesire: "To be needed and appreciated",
    light: ["Caring", "Generous", "Emotionally intuitive", "Supportive"],
    shadow: ["Giving to receive validation", "Neglecting their own needs", "Subtle manipulation", "Dependency"],
    integration: "They learn they are lovable without earning it."
  },
  3: {
    title: "The Achiever",
    coreFear: "Being worthless",
    coreDesire: "To be valuable and successful",
    light: ["Motivated", "Efficient", "Inspiring", "Goal-oriented"],
    shadow: ["Identity tied to performance", "Emotional disconnection", "Image-focused", "Workaholism"],
    integration: "They discover their worth is not dependent on achievement."
  },
  4: {
    title: "The Individualist",
    coreFear: "Having no identity",
    coreDesire: "To be unique and authentic",
    light: ["Creative", "Emotionally deep", "Self-aware", "Expressive"],
    shadow: ["Feeling incomplete", "Comparison", "Melancholy", "Romanticizing suffering"],
    integration: "They realize nothing is missing — they are already whole."
  },
  5: {
    title: "The Investigator",
    coreFear: "Being incompetent or overwhelmed",
    coreDesire: "To be capable and self-sufficient",
    light: ["Analytical", "Observant", "Independent", "Innovative"],
    shadow: ["Isolation", "Emotional withdrawal", "Hoarding information", "Avoiding engagement"],
    integration: "They share their knowledge and re-enter the world."
  },
  6: {
    title: "The Loyalist",
    coreFear: "Being unsupported or unsafe",
    coreDesire: "Security and stability",
    light: ["Loyal", "Responsible", "Prepared", "Committed"],
    shadow: ["Anxiety", "Doubt", "Worst-case thinking", "Suspicion"],
    integration: "They develop internal trust, not just external security."
  },
  7: {
    title: "The Enthusiast",
    coreFear: "Being trapped in pain",
    coreDesire: "To be free and happy",
    light: ["Optimistic", "Energetic", "Creative", "Visionary"],
    shadow: ["Avoiding discomfort", "Distraction", "Impulsiveness", "Commitment issues"],
    integration: "They learn to stay present — even in discomfort."
  },
  8: {
    title: "The Challenger",
    coreFear: "Being controlled or vulnerable",
    coreDesire: "To be strong and autonomous",
    light: ["Protective", "Bold", "Direct", "Natural leader"],
    shadow: ["Controlling", "Intimidating", "Avoiding vulnerability", "Excess intensity"],
    integration: "They understand vulnerability is not weakness."
  },
  9: {
    title: "The Peacemaker",
    coreFear: "Conflict or disconnection",
    coreDesire: "Harmony and peace",
    light: ["Calm", "Mediating", "Accepting", "Grounded"],
    shadow: ["Avoiding decisions", "Losing themselves in others", "Procrastination", "Emotional numbing"],
    integration: "They claim their voice and their desires."
  }
};

// Group questions by type (section 0 = type 1, section 8 = type 9)
function getQuestionsBySection(sectionIndex) {
  const type = sectionIndex + 1;
  return QUESTIONS.filter((q) => q.type === type);
}

// State
let currentSection = 0;
const answers = {};

// DOM elements
const questionContainer = document.getElementById('question-container');
const progressFill = document.querySelector('.progress-fill');
const progressText = document.querySelector('.progress-text');
const backBtn = document.getElementById('back-btn');
const nextBtn = document.getElementById('next-btn');
const resultsContainer = document.getElementById('results-container');
const progressSection = document.querySelector('.progress-section');
const nav = document.querySelector('.navigation');

const LIKERT_LABELS = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree"
];

// Render questions for current section
function renderQuestions() {
  const questions = getQuestionsBySection(currentSection);
  questionContainer.innerHTML = questions
    .map(
      (q) => `
    <div class="question-block" data-question-id="${q.id}">
      <p class="question-text">${q.text}</p>
      <fieldset class="radio-group" role="group" aria-label="Rate your agreement">
        ${[1, 2, 3, 4, 5]
          .map(
            (v) => {
              const label = LIKERT_LABELS[v - 1];
              return `
          <label class="radio-option">
            <input type="radio" name="${q.id}" value="${v}" aria-label="${label}" ${answers[q.id] === v ? 'checked' : ''}>
            <span class="radio-value">${v}</span>
            <span class="radio-text">${label}</span>
          </label>
        `;
            }
          )
          .join('')}
      </fieldset>
    </div>
  `
    )
    .join('');

  // Attach change listeners
  questionContainer.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.addEventListener('change', handleAnswerChange);
  });
}

function handleAnswerChange(e) {
  const name = e.target.name;
  const value = parseInt(e.target.value, 10);
  answers[name] = value;
  updateNextButton();
}

function updateNextButton() {
  const questions = getQuestionsBySection(currentSection);
  const allAnswered = questions.every((q) => answers[q.id] != null);
  nextBtn.disabled = !allAnswered;
}

function updateProgress() {
  const sectionNum = currentSection + 1;
  const pct = (sectionNum / 9) * 100;
  progressFill.style.width = `${pct}%`;
  progressFill.setAttribute('aria-valuenow', Math.round(pct));
  progressText.textContent = `Section ${sectionNum} of 9 — Type ${sectionNum}`;
}

function showSection(index) {
  currentSection = index;
  updateProgress();
  renderQuestions();
  updateNextButton();

  backBtn.disabled = index === 0;
  if (index === 0) {
    nextBtn.textContent = 'Next';
  } else if (index === 8) {
    nextBtn.textContent = 'Finish';
  } else {
    nextBtn.textContent = 'Next';
  }
}

function goNext() {
  if (currentSection < 8) {
    showSection(currentSection + 1);
  } else {
    finishTest();
  }
}

function goBack() {
  if (currentSection > 0) {
    showSection(currentSection - 1);
  }
}

function finishTest() {
  const scores = calculateScores();
  renderResults(scores);

  questionContainer.style.display = 'none';
  progressSection.style.display = 'none';
  nav.style.display = 'none';
  resultsContainer.hidden = false;
}

// Score each type (1-9); reverse items use 6-val so that 1→5, 2→4, ..., 5→1
function calculateScores() {
  const scores = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
  for (const q of QUESTIONS) {
    const val = answers[q.id];
    if (val == null) continue;
    const points = q.reverse ? 6 - val : val; // reverse: 1→5, 2→4, 3→3, 4→2, 5→1
    scores[q.type] += points;
  }
  return scores;
}

const MAX_SCORE_PER_TYPE = 20;

function scoreToPercent(score) {
  return Math.round((score / MAX_SCORE_PER_TYPE) * 100);
}

function getTopThreeGroups(sortedWithPct) {
  const groups = [];
  let lastPct = null;
  for (const item of sortedWithPct) {
    if (groups.length >= 3 && item.pct !== lastPct) break;
    if (item.pct !== lastPct) {
      groups.push({ pct: item.pct, types: [] });
      lastPct = item.pct;
    }
    groups[groups.length - 1].types.push(item.type);
  }
  return groups;
}

function formatTopTypes(groups) {
  return groups
    .map((g) => {
      const typesStr = g.types.length > 1 ? `Types ${g.types.join(' & ')}` : `Type ${g.types[0]}`;
      return `${typesStr} (${g.pct}%)`;
    })
    .join(' · ');
}

function renderProfile(typeNum) {
  const p = TYPE_PROFILES[typeNum];
  if (!p) return "";
  return `
    <section class="results-profile">
      <h3 class="profile-title">Type ${typeNum} — ${p.title}</h3>
      <div class="profile-core">
        <p><strong>Core fear:</strong> ${p.coreFear}</p>
        <p><strong>Core desire:</strong> ${p.coreDesire}</p>
      </div>
      <div class="profile-aspects">
        <div class="profile-light">
          <h4 class="profile-aspect-title">Light</h4>
          <ul>${p.light.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
        <div class="profile-shadow">
          <h4 class="profile-aspect-title">Shadow</h4>
          <ul>${p.shadow.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
      </div>
      <p class="profile-integration"><strong>When integrated:</strong> ${p.integration}</p>
    </section>
  `;
}

function renderResults(scores) {
  const sortedWithPct = Object.entries(scores)
    .map(([type, score]) => ({
      type: parseInt(type, 10),
      score,
      pct: scoreToPercent(score)
    }))
    .sort((a, b) => b.score - a.score);

  const primaryType = sortedWithPct[0].type;
  const topGroups = getTopThreeGroups(sortedWithPct);
  const topText = formatTopTypes(topGroups);

  resultsContainer.innerHTML = `
    <h2 class="results-title">Your Results</h2>
    <p class="results-top">${topText}</p>
    ${renderProfile(primaryType)}
    <div class="results-bars">
      <h3 class="results-bars-title">Full breakdown</h3>
      ${sortedWithPct
        .map(
          ({ type, pct }) => `
        <div class="results-bar-row">
          <span class="results-bar-label">Type ${type}</span>
          <div class="results-bar-track">
            <div class="results-bar-fill" style="width: ${pct}%"></div>
          </div>
          <span class="results-bar-value">${pct}%</span>
        </div>
      `
        )
        .join('')}
    </div>
    <p class="results-disclaimer">For reflection only; not a diagnosis.</p>
    <button type="button" class="btn btn-restart" id="restart-btn">Restart</button>
  `;

  document.getElementById('restart-btn').addEventListener('click', restartTest);
}

function restartTest() {
  currentSection = 0;
  for (const key of Object.keys(answers)) {
    delete answers[key];
  }
  questionContainer.style.display = '';
  progressSection.style.display = '';
  nav.style.display = '';
  resultsContainer.hidden = true;
  showSection(0);
}

// Event listeners
backBtn.addEventListener('click', goBack);
nextBtn.addEventListener('click', goNext);

// Init
showSection(0);
