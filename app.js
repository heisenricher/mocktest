// MockTest Hub - Core Application Logic

let allTests = [...SAMPLE_MOCK_TESTS];
let currentTest = null;
let currentQuestionIndex = 0;
let userResponses = {}; // { questionId: { selectedOption: number, markedForReview: boolean } }
let timerInterval = null;
let timeRemainingSeconds = 0;
let activeCategory = "All";

// DOM Elements
document.addEventListener("DOMContentLoaded", () => {
  loadCustomTestsFromStorage();
  initTheme();
  renderCatalog();
  setupEventListeners();
});

// Load Custom Tests from LocalStorage
function loadCustomTestsFromStorage() {
  const saved = localStorage.getItem("custom_mock_tests");
  if (saved) {
    try {
      const customTests = JSON.parse(saved);
      allTests = [...SAMPLE_MOCK_TESTS, ...customTests];
    } catch (e) {
      console.error("Failed to load saved tests", e);
    }
  }
}

// Theme Toggle
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById("themeIcon");
  if (icon) {
    icon.textContent = theme === "dark" ? "🌙" : "☀️";
  }
}

// Render Test Catalog
function renderCatalog() {
  const grid = document.getElementById("testsGrid");
  const searchVal = (document.getElementById("searchInput")?.value || "").toLowerCase();

  grid.innerHTML = "";

  const filtered = allTests.filter(test => {
    const matchCategory = activeCategory === "All" || test.category === activeCategory;
    const matchSearch = test.title.toLowerCase().includes(searchVal) || 
                        test.description.toLowerCase().includes(searchVal) ||
                        test.category.toLowerCase().includes(searchVal);
    return matchCategory && matchSearch;
  });

  document.getElementById("totalTestsCount").textContent = allTests.length;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.2rem; font-weight: 600;">No mock tests found matching your criteria.</p>
        <p style="font-size: 0.9rem; margin-top: 0.5rem;">Try clearing search or importing your own test JSON!</p>
      </div>
    `;
    return;
  }

  filtered.forEach(test => {
    const card = document.createElement("div");
    card.className = "test-card";
    card.innerHTML = `
      <div>
        <span class="test-category-tag">${test.category}</span>
        <h3 class="test-card-title">${test.title}</h3>
        <p class="test-card-desc">${test.description}</p>
      </div>
      <div>
        <div class="test-meta">
          <div class="meta-item">
            <span class="meta-icon">⏱️</span>
            <span>${test.durationMinutes} Mins</span>
          </div>
          <div class="meta-item">
            <span class="meta-icon">❓</span>
            <span>${test.totalQuestions} Questions</span>
          </div>
          <div class="meta-item">
            <span class="meta-icon">🎯</span>
            <span>${test.totalMarks} Marks</span>
          </div>
        </div>
        <button class="btn btn-primary" style="width: 100%; justify-content: center;" onclick="startTest('${test.id}')">
          🚀 Start Free Test
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Setup Event Listeners
function setupEventListeners() {
  document.getElementById("searchInput")?.addEventListener("input", renderCatalog);
  document.getElementById("themeToggleBtn")?.addEventListener("click", toggleTheme);

  // Category Pills
  const pills = document.querySelectorAll(".pill");
  pills.forEach(pill => {
    pill.addEventListener("click", (e) => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeCategory = pill.getAttribute("data-cat");
      renderCatalog();
    });
  });
}

// Start Test Engine
function startTest(testId) {
  currentTest = allTests.find(t => t.id === testId);
  if (!currentTest) return;

  currentQuestionIndex = 0;
  userResponses = {};
  timeRemainingSeconds = currentTest.durationMinutes * 60;

  // Initialize response state
  currentTest.questions.forEach(q => {
    userResponses[q.id] = {
      selectedOption: null,
      markedForReview: false,
      visited: false
    };
  });

  // Mark first question visited
  userResponses[currentTest.questions[0].id].visited = true;

  document.getElementById("examTitle").textContent = currentTest.title;
  document.getElementById("examScreen").classList.add("active");

  renderSectionTabs();
  renderQuestion();
  renderPalette();
  startTimer();
}

// Timer Logic
function startTimer() {
  clearInterval(timerInterval);
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timeRemainingSeconds--;
    updateTimerDisplay();

    if (timeRemainingSeconds <= 0) {
      clearInterval(timerInterval);
      alert("⏰ Time is up! Submitting your test automatically.");
      submitTest();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const hours = Math.floor(timeRemainingSeconds / 3600);
  const mins = Math.floor((timeRemainingSeconds % 3600) / 60);
  const secs = timeRemainingSeconds % 60;

  const formatted = hours > 0 
    ? `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
    : `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  const timerEl = document.getElementById("timerDisplay");
  if (timerEl) timerEl.textContent = formatted;
}

// Render Section Tabs
function renderSectionTabs() {
  const container = document.getElementById("sectionTabsContainer");
  const sections = [...new Set(currentTest.questions.map(q => q.section))];

  container.innerHTML = "";
  sections.forEach(sec => {
    const btn = document.createElement("button");
    btn.className = "section-tab";
    btn.textContent = sec;
    btn.onclick = () => {
      const firstQIndex = currentTest.questions.findIndex(q => q.section === sec);
      if (firstQIndex !== -1) {
        goToQuestion(firstQIndex);
      }
    };
    container.appendChild(btn);
  });

  updateActiveSectionTab();
}

function updateActiveSectionTab() {
  const currentQ = currentTest.questions[currentQuestionIndex];
  const tabs = document.querySelectorAll(".section-tab");
  tabs.forEach(tab => {
    if (tab.textContent === currentQ.section) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
}

// Render Active Question
function renderQuestion() {
  const q = currentTest.questions[currentQuestionIndex];
  userResponses[q.id].visited = true;

  document.getElementById("qNumberBadge").textContent = `Question ${currentQuestionIndex + 1} of ${currentTest.questions.length}`;
  document.getElementById("marksBadge").textContent = `+${q.marks} Marks | -${q.negativeMarks} Neg`;
  document.getElementById("questionText").textContent = q.question;

  const optionsContainer = document.getElementById("optionsList");
  optionsContainer.innerHTML = "";

  q.options.forEach((optText, optIdx) => {
    const optItem = document.createElement("div");
    const isSelected = userResponses[q.id].selectedOption === optIdx;
    optItem.className = `option-item ${isSelected ? 'selected' : ''}`;
    optItem.onclick = () => selectOption(optIdx);

    optItem.innerHTML = `
      <div class="option-radio"></div>
      <div class="option-text"><strong>${String.fromCharCode(65 + optIdx)}.</strong> ${optText}</div>
    `;
    optionsContainer.appendChild(optItem);
  });

  updateActiveSectionTab();
  renderPalette();
}

// Select Option
function selectOption(optIndex) {
  const q = currentTest.questions[currentQuestionIndex];
  if (userResponses[q.id].selectedOption === optIndex) {
    userResponses[q.id].selectedOption = null; // deselect
  } else {
    userResponses[q.id].selectedOption = optIndex;
  }
  renderQuestion();
}

// Clear Response
function clearResponse() {
  const q = currentTest.questions[currentQuestionIndex];
  userResponses[q.id].selectedOption = null;
  renderQuestion();
}

// Mark for Review & Next
function markForReview() {
  const q = currentTest.questions[currentQuestionIndex];
  userResponses[q.id].markedForReview = true;
  nextQuestion();
}

// Save & Next
function saveAndNext() {
  const q = currentTest.questions[currentQuestionIndex];
  userResponses[q.id].markedForReview = false;
  nextQuestion();
}

function nextQuestion() {
  if (currentQuestionIndex < currentTest.questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

function goToQuestion(idx) {
  currentQuestionIndex = idx;
  renderQuestion();
}

// Render Palette
function renderPalette() {
  const grid = document.getElementById("paletteGrid");
  grid.innerHTML = "";

  currentTest.questions.forEach((q, idx) => {
    const resp = userResponses[q.id];
    const btn = document.createElement("button");
    btn.className = "palette-btn";
    btn.textContent = idx + 1;

    if (resp.selectedOption !== null && resp.markedForReview) {
      btn.classList.add("review");
    } else if (resp.selectedOption !== null) {
      btn.classList.add("answered");
    } else if (resp.markedForReview) {
      btn.classList.add("review");
    } else if (resp.visited) {
      btn.classList.add("unanswered");
    }

    if (idx === currentQuestionIndex) {
      btn.classList.add("current");
    }

    btn.onclick = () => goToQuestion(idx);
    grid.appendChild(btn);
  });
}

// Submit Test & Calculate Results
function confirmSubmitTest() {
  if (confirm("Are you sure you want to submit the test?")) {
    submitTest();
  }
}

function submitTest() {
  clearInterval(timerInterval);
  document.getElementById("examScreen").classList.remove("active");

  let obtainedMarks = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let skippedCount = 0;

  const sectionScores = {};

  currentTest.questions.forEach(q => {
    const resp = userResponses[q.id];
    const userAns = resp.selectedOption;

    if (!sectionScores[q.section]) {
      sectionScores[q.section] = { totalMarks: 0, obtainedMarks: 0, correct: 0, wrong: 0 };
    }
    sectionScores[q.section].totalMarks += q.marks;

    if (userAns === null) {
      skippedCount++;
    } else if (userAns === q.correctAnswer) {
      correctCount++;
      obtainedMarks += q.marks;
      sectionScores[q.section].obtainedMarks += q.marks;
      sectionScores[q.section].correct++;
    } else {
      wrongCount++;
      obtainedMarks -= q.negativeMarks;
      sectionScores[q.section].obtainedMarks -= q.negativeMarks;
      sectionScores[q.section].wrong++;
    }
  });

  const totalPossibleMarks = currentTest.totalMarks;
  const accuracy = (correctCount + wrongCount) > 0 
    ? Math.round((correctCount / (correctCount + wrongCount)) * 100) 
    : 0;

  // Render Results Screen
  document.getElementById("resTestTitle").textContent = currentTest.title;
  document.getElementById("resScore").textContent = `${obtainedMarks.toFixed(2)} / ${totalPossibleMarks}`;
  document.getElementById("resAccuracy").textContent = `${accuracy}%`;
  document.getElementById("resCorrect").textContent = correctCount;
  document.getElementById("resWrong").textContent = wrongCount;
  document.getElementById("resSkipped").textContent = skippedCount;

  // Render Solutions Review
  renderSolutions();

  document.getElementById("resultsScreen").classList.add("active");
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render Solutions Review
function renderSolutions() {
  const container = document.getElementById("solutionsList");
  container.innerHTML = "";

  currentTest.questions.forEach((q, idx) => {
    const resp = userResponses[q.id];
    const userAns = resp.selectedOption;

    let statusClass = "skipped";
    let statusText = "Skipped";

    if (userAns === q.correctAnswer) {
      statusClass = "correct";
      statusText = "Correct (+ " + q.marks + " Marks)";
    } else if (userAns !== null) {
      statusClass = "wrong";
      statusText = "Incorrect (- " + q.negativeMarks + " Marks)";
    }

    const card = document.createElement("div");
    card.className = `solution-card ${statusClass}`;
    
    let optionsHtml = q.options.map((opt, oIdx) => {
      let optColor = "var(--text-main)";
      let badge = "";

      if (oIdx === q.correctAnswer) {
        optColor = "#10b981";
        badge = " <strong style='color: #10b981;'>(Correct Answer)</strong>";
      } else if (oIdx === userAns) {
        optColor = "#ef4444";
        badge = " <strong style='color: #ef4444;'>(Your Choice)</strong>";
      }

      return `<li style="color: ${optColor}; margin-bottom: 0.4rem;">${String.fromCharCode(65 + oIdx)}. ${opt}${badge}</li>`;
    }).join("");

    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
        <span style="font-weight: 700; color: var(--accent-primary);">Question ${idx + 1} (${q.section})</span>
        <span class="marks-badge" style="background: rgba(255,255,255,0.05); color: var(--text-main);">${statusText}</span>
      </div>
      <p style="font-weight: 600; font-size: 1.05rem; margin-bottom: 1rem;">${q.question}</p>
      <ul style="list-style: none; padding-left: 0; margin-bottom: 1rem;">${optionsHtml}</ul>
      <div class="explanation-box">
        <strong>💡 Detailed Explanation:</strong><br/>
        ${q.explanation}
      </div>
    `;

    container.appendChild(card);
  });
}

function closeResults() {
  document.getElementById("resultsScreen").classList.remove("active");
  renderCatalog();
}

// Bulk JSON Import Modal
function openImportModal() {
  document.getElementById("importModal").classList.add("active");
}

function closeImportModal() {
  document.getElementById("importModal").classList.remove("active");
}

function importJSONTest() {
  const jsonText = document.getElementById("jsonInput").value;
  try {
    const parsed = JSON.parse(jsonText);
    if (!parsed.title || !parsed.questions || !Array.isArray(parsed.questions)) {
      alert("Invalid test JSON format. Missing title or questions array.");
      return;
    }

    if (!parsed.id) parsed.id = "custom-test-" + Date.now();
    if (!parsed.category) parsed.category = "Custom Mock";
    if (!parsed.durationMinutes) parsed.durationMinutes = 60;
    if (!parsed.totalQuestions) parsed.totalQuestions = parsed.questions.length;
    if (!parsed.totalMarks) parsed.totalMarks = parsed.questions.length * 2;

    const saved = JSON.parse(localStorage.getItem("custom_mock_tests") || "[]");
    saved.push(parsed);
    localStorage.setItem("custom_mock_tests", JSON.stringify(saved));

    allTests.push(parsed);
    renderCatalog();
    closeImportModal();
    alert("🎉 Mock Test imported successfully!");
  } catch (err) {
    alert("JSON Syntax Error: " + err.message);
  }
}
