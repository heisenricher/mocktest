import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// TODO: REPLACE THIS ENTIRE CONFIG OBJECT WITH YOUR REAL FIREBASE CONFIG!
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

let app, auth, db, provider;
let currentUser = null;
let isFirebaseConfigured = false;

if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    provider = new GoogleAuthProvider();
    isFirebaseConfigured = true;
  } catch (e) {
    console.error("Firebase init failed", e);
  }
}

// MockTest Hub - Core Minimalist Engine
let allTests = [...SAMPLE_MOCK_TESTS];
let currentTest = null;
let currentQuestionIndex = 0;
let userResponses = {}; 
let timerInterval = null;
let timeRemainingSeconds = 0;
let isPaused = false;
let activeCategory = "All";

document.addEventListener("DOMContentLoaded", () => {
  loadCustomTestsFromStorage();
  renderCatalog();
  setupEventListeners();
  setupFirebaseUI();
});

function setupFirebaseUI() {
  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const dashboardBtn = document.getElementById("dashboardBtn");
  const closeDashboardBtn = document.getElementById("closeDashboardBtn");
  
  if (!isFirebaseConfigured) {
    loginBtn.onclick = () => alert("FIREBASE NOT CONFIGURED. PLEASE ADD YOUR CONFIG KEYS IN APP.JS.");
    return;
  }

  onAuthStateChanged(auth, (user) => {
    const loginBtn = document.getElementById("loginBtn");
    const userProfile = document.getElementById("userProfile");
    const userAvatar = document.getElementById("userAvatar");
    const userName = document.getElementById("userName");

    if (user) {
      currentUser = user;
      loginBtn.style.display = "none";
      userProfile.style.display = "flex";
      userAvatar.src = user.photoURL || "";
      userName.textContent = user.displayName.toUpperCase();
    } else {
      currentUser = null;
      loginBtn.style.display = "inline-flex";
      userProfile.style.display = "none";
    }
  });

  loginBtn.onclick = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (e) {
      console.error("Login Failed", e);
      alert("LOGIN FAILED. SEE CONSOLE.");
    }
  };

  logoutBtn.onclick = async () => {
    await signOut(auth);
  };

  dashboardBtn.onclick = () => {
    document.getElementById("dashboardModal").classList.add("active");
    loadPastTests();
  };
  
  closeDashboardBtn.onclick = () => {
    document.getElementById("dashboardModal").classList.remove("active");
  };
}

async function loadPastTests() {
  const listEl = document.getElementById("pastTestsList");
  if (!currentUser) {
    listEl.innerHTML = `<div style="text-align: center; color: var(--accent-red); font-size: 0.8rem; padding: 2rem;">PLEASE LOG IN TO VIEW HISTORY.</div>`;
    return;
  }
  
  listEl.innerHTML = `<div style="text-align: center; color: var(--text-muted); font-size: 0.8rem; padding: 2rem;">LOADING CLOUD RECORDS...</div>`;
  
  try {
    const testsRef = collection(db, "users", currentUser.uid, "tests");
    const q = query(testsRef, orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      listEl.innerHTML = `<div style="text-align: center; color: var(--text-muted); font-size: 0.8rem; padding: 2rem;">NO PAST TESTS FOUND IN CLOUD.</div>`;
      return;
    }

    listEl.innerHTML = "";
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const dateStr = data.timestamp ? data.timestamp.toDate().toLocaleString() : "Unknown Date";
      
      const card = document.createElement("div");
      card.style.cssText = "border: 1px solid var(--border-light); padding: 1rem; margin-bottom: 0.5rem; background: var(--bg-card); display: flex; justify-content: space-between; align-items: center;";
      card.innerHTML = `
        <div>
          <div style="font-weight: 800; font-size: 0.9rem;">${data.testTitle}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem;">${dateStr}</div>
        </div>
        <div style="text-align: right;">
          <div style="font-weight: 800; color: var(--accent-blue); font-size: 1.1rem;">${data.score.toFixed(2)} / ${data.totalMarks}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">${data.accuracy}% ACCURACY</div>
        </div>
      `;
      listEl.appendChild(card);
    });

  } catch (error) {
    console.error("Error fetching tests", error);
    listEl.innerHTML = `<div style="text-align: center; color: var(--accent-red); font-size: 0.8rem; padding: 2rem;">ERROR FETCHING RECORDS. ENSURE FIRESTORE IS ENABLED IN TEST MODE.</div>`;
  }
}


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
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1rem; font-weight: 700;">> NO_TESTS_MATCHING_FILTER</p>
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
          <div class="meta-item">[DUR: ${test.durationMinutes}m]</div>
          <div class="meta-item">[QS: ${test.totalQuestions}]</div>
          <div class="meta-item">[MARKS: ${test.totalMarks}]</div>
        </div>
        <button class="btn btn-primary" style="width: 100%; justify-content: center;" onclick="startTest('${test.id}')">
          [START MOCK TEST]
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function setupEventListeners() {
  document.getElementById("searchInput")?.addEventListener("input", renderCatalog);

  const pills = document.querySelectorAll(".pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeCategory = pill.getAttribute("data-cat");
      renderCatalog();
    });
  });
}

// Start Test
function startTest(testId) {
  currentTest = allTests.find(t => t.id === testId);
  if (!currentTest) return;

  currentQuestionIndex = 0;
  userResponses = {};
  timeRemainingSeconds = currentTest.durationMinutes * 60;
  isPaused = false;
  
  const pauseOverlay = document.getElementById("pauseOverlay");
  const pauseBtn = document.getElementById("pauseBtn");
  if (pauseOverlay) pauseOverlay.style.display = "none";
  if (pauseBtn) {
    pauseBtn.textContent = "[PAUSE TEST]";
    pauseBtn.style.color = "var(--text-main)";
  }

  currentTest.questions.forEach(q => {
    userResponses[q.id] = {
      selectedOption: null,
      markedForReview: false,
      visited: false
    };
  });

  userResponses[currentTest.questions[0].id].visited = true;

  document.getElementById("examTitle").textContent = currentTest.title;
  document.getElementById("examScreen").classList.add("active");

  renderSectionTabs();
  renderQuestion();
  renderPalette();
  startTimer();
}

function startTimer() {
  clearInterval(timerInterval);
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    if (isPaused) return;

    timeRemainingSeconds--;
    updateTimerDisplay();

    if (timeRemainingSeconds <= 0) {
      clearInterval(timerInterval);
      alert("TIME EXPIRED. SUBMITTING TEST AUTOMATICALLY.");
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

function renderQuestion() {
  const q = currentTest.questions[currentQuestionIndex];
  userResponses[q.id].visited = true;

  document.getElementById("qNumberBadge").textContent = `QUESTION ${String(currentQuestionIndex + 1).padStart(2, '0')} / ${String(currentTest.questions.length).padStart(2, '0')}`;
  document.getElementById("marksBadge").textContent = `+${q.marks}.00 | -${q.negativeMarks}`;
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
      <div class="option-text"><strong>[${String.fromCharCode(65 + optIdx)}]</strong> ${optText}</div>
    `;
    optionsContainer.appendChild(optItem);
  });

  updateActiveSectionTab();
  renderPalette();
}

function selectOption(optIndex) {
  const q = currentTest.questions[currentQuestionIndex];
  if (userResponses[q.id].selectedOption === optIndex) {
    userResponses[q.id].selectedOption = null;
  } else {
    userResponses[q.id].selectedOption = optIndex;
  }
  renderQuestion();
}

function clearResponse() {
  const q = currentTest.questions[currentQuestionIndex];
  userResponses[q.id].selectedOption = null;
  renderQuestion();
}

function markForReview() {
  const q = currentTest.questions[currentQuestionIndex];
  userResponses[q.id].markedForReview = true;
  nextQuestion();
}

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

function renderPalette() {
  const grid = document.getElementById("paletteGrid");
  grid.innerHTML = "";

  currentTest.questions.forEach((q, idx) => {
    const resp = userResponses[q.id];
    const btn = document.createElement("button");
    btn.className = "palette-btn";
    btn.textContent = String(idx + 1).padStart(2, '0');

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

function confirmSubmitTest() {
  if (confirm("CONFIRM SUBMISSION OF CURRENT TEST?")) {
    submitTest();
  }
}

async function submitTest() {
  clearInterval(timerInterval);
  document.getElementById("examScreen").classList.remove("active");

  let obtainedMarks = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let skippedCount = 0;

  currentTest.questions.forEach(q => {
    const resp = userResponses[q.id];
    const userAns = resp.selectedOption;

    if (userAns === null) {
      skippedCount++;
    } else if (userAns === q.correctAnswer) {
      correctCount++;
      obtainedMarks += q.marks;
    } else {
      wrongCount++;
      obtainedMarks -= q.negativeMarks;
    }
  });

  const totalPossibleMarks = currentTest.totalMarks;
  const accuracy = (correctCount + wrongCount) > 0 
    ? Math.round((correctCount / (correctCount + wrongCount)) * 100) 
    : 0;

  document.getElementById("resTestTitle").textContent = currentTest.title;
  document.getElementById("resScore").textContent = `${obtainedMarks.toFixed(2)} / ${totalPossibleMarks}.00`;
  document.getElementById("resAccuracy").textContent = `${accuracy}%`;
  document.getElementById("resCorrect").textContent = correctCount;
  document.getElementById("resWrong").textContent = wrongCount;
  document.getElementById("resSkipped").textContent = skippedCount;

  // FIREBASE: Save test to cloud if logged in
  if (isFirebaseConfigured && currentUser) {
    try {
      const testsRef = collection(db, "users", currentUser.uid, "tests");
      await addDoc(testsRef, {
        testId: currentTest.id,
        testTitle: currentTest.title,
        score: obtainedMarks,
        totalMarks: totalPossibleMarks,
        accuracy: accuracy,
        correct: correctCount,
        wrong: wrongCount,
        skipped: skippedCount,
        timestamp: serverTimestamp()
      });
      console.log("Test saved to cloud successfully.");
    } catch (e) {
      console.error("Failed to save test to cloud", e);
    }
  }

  renderSolutions();

  document.getElementById("resultsScreen").classList.add("active");
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function togglePause() {
  isPaused = !isPaused;
  const overlay = document.getElementById("pauseOverlay");
  const btn = document.getElementById("pauseBtn");
  
  if (isPaused) {
    if (overlay) overlay.style.display = "flex";
    if (btn) {
      btn.textContent = "[RESUME TEST]";
      btn.style.color = "var(--accent-green)";
    }
  } else {
    if (overlay) overlay.style.display = "none";
    if (btn) {
      btn.textContent = "[PAUSE TEST]";
      btn.style.color = "var(--text-main)";
    }
  }
}

function renderSolutions() {
  const container = document.getElementById("solutionsList");
  container.innerHTML = "";

  currentTest.questions.forEach((q, idx) => {
    const resp = userResponses[q.id];
    const userAns = resp.selectedOption;

    let statusClass = "skipped";
    let statusText = "[SKIPPED]";

    if (userAns === q.correctAnswer) {
      statusClass = "correct";
      statusText = `[CORRECT +${q.marks}.00]`;
    } else if (userAns !== null) {
      statusClass = "wrong";
      statusText = `[INCORRECT -${q.negativeMarks}]`;
    }

    const card = document.createElement("div");
    card.className = `solution-card ${statusClass}`;
    
    let optionsHtml = q.options.map((opt, oIdx) => {
      let optColor = "var(--text-main)";
      let badge = "";

      if (oIdx === q.correctAnswer) {
        optColor = "var(--accent-green)";
        badge = " <strong>[CORRECT]</strong>";
      } else if (oIdx === userAns) {
        optColor = "var(--accent-red)";
        badge = " <strong>[YOUR SELECTION]</strong>";
      }

      return `<li style="color: ${optColor}; margin-bottom: 0.35rem; font-family: var(--font-mono); font-size: 0.88rem;">[${String.fromCharCode(65 + oIdx)}] ${opt}${badge}</li>`;
    }).join("");

    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
        <span style="font-weight: 800; font-family: var(--font-mono); font-size: 0.85rem;">Q${idx + 1} // ${q.section}</span>
        <span style="font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700;">${statusText}</span>
      </div>
      <p style="font-weight: 600; font-size: 0.98rem; margin-bottom: 0.85rem; font-family: var(--font-sans);">${q.question}</p>
      <ul style="list-style: none; padding-left: 0; margin-bottom: 0.85rem;">${optionsHtml}</ul>
      <div class="explanation-box">
        <strong>> EXPLANATION:</strong><br/>
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
      alert("INVALID JSON. MISSING TITLE OR QUESTIONS ARRAY.");
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
    alert("TEST IMPORTED SUCCESSFULLY.");
  } catch (err) {
    alert("JSON ERROR: " + err.message);
  }
}

// Expose functions to global scope for HTML inline handlers
window.startTest = startTest;
window.prevQuestion = prevQuestion;
window.clearResponse = clearResponse;
window.markForReview = markForReview;
window.saveAndNext = saveAndNext;
window.confirmSubmitTest = confirmSubmitTest;
window.togglePause = togglePause;
window.closeResults = closeResults;
window.openImportModal = openImportModal;
window.closeImportModal = closeImportModal;
window.importJSONTest = importJSONTest;
